const express = require('express');
const router = express.Router();
const { User, validate } = require('../models/User');
const { Auth } = require('../models/Auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
const e = require('express');

// const baseUrl = "http://localhost:8080";
const baseUrl = "https://lipro-frontend-hassan.herokuapp.com";


router.get('/users', async(req, res, next) => {
    try {
        let user_list = await User.find();

        user_list.sort(function(a, b) {
            var nameA = a.loginname.toUpperCase();
            var nameB = b.loginname.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        return res.status(200).send(user_list);
    } catch (e) {
        return e;
    }
});

/* Log in */
router.post('/login', async(req, res, next) => {
    const { loginname, password } = req.body;

    const auth = await Auth.findOne({ loginname });
    if (!auth) return res.status(404).send("Invalid username or password.");

    const validPassword = await bcrypt.compare(password, auth.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const user = await User.findById(auth.userid);
    if (!user) return res.status(404).send("The user data is missing");
    const data = { user, loginname, status: true }

    const token = jwt.sign({ data }, 'jwtPrivateKey');
    return res.status(200).header('x-auth-token', token).send({...data, token });
});

/* Sign up  */
router.post('/signup', async(req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(403).send(error.details[0]);

    try {
        const {
            mail,
            firstname,
            lastname,
            salutation,
            title,
            active,
            startdate,
            enddate,
            loginname,
            categoryid,
            consultantfunctionid,
            street,
            zipcode,
            city,
            password,
        } = req.body;
        let hashedPassword;

        let user = await User.findOne({ mail });
        if (user) return res.status(409).send("This Email address already exists");

        let auth = await Auth.findOne({ loginname });
        if (auth) return res.status(409).send("This username already exists");

        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);

        if (!hashedPassword) return res.status(400).send("Could not hash the password");

        user = new User({
            mail,
            firstname,
            lastname,
            salutation,
            title,
            active,
            startdate,
            enddate,
            loginname,
            categoryid,
            consultantfunctionid,
            street,
            zipcode,
            city,
        });
        await user.save();

        auth = new Auth({ loginname, password: hashedPassword, userid: user._id });
        await auth.save();

        let data = { user, loginname }

        const token = jwt.sign({ data }, 'jwtPrivateKey');

        res.status(200).header('x-auth-token', token).send(data);
    } catch (e) {
        return res.status(400).send("Something went wrong");
    }
});

/*UPDATE User */
router.put('/update-user/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const {
            mail,
            firstname,
            lastname,
            salutation,
            title,
            active,
            startdate,
            enddate,
            loginname,
            categoryid,
            consultantfunctionid,
            street,
            zipcode,
            city,
            password
        } = req.body;
        const { error } = validate(req.body);

        if (error) return res.status(400).send(error.details[0]);

        let _user = await User.findById(id);
        if (!_user) return res.status(404).send("No User found");

        if (_user.mail != mail) {
            let c = await User.find({ mail: mail });
            if (c.length) return res.status(409).send({ message: "User with this name already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);

        if (!hashedPassword) return res.status(400).send("Could not hash the password");

        _user = await User.findByIdAndUpdate(id, {
            firstname: firstname,
            lastname: lastname,
            salutation: salutation,
            title: title,
            active: active,
            startdate: startdate,
            enddate: enddate,
            loginname: loginname,
            categoryid: categoryid,
            consultantfunctionid: consultantfunctionid,
            street: street,
            zipcode: zipcode,
            city: city
        }, { new: true });

        _auth = await Auth.findOneAndUpdate({ userid: id }, {
            password: hashedPassword
        })

        return res.send(_user);
    } catch (e) {
        return res.status(400).send("Something went wrong ");
    }
});

router.delete('/delete-user/:id', async(req, res, next) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndRemove(id);
        if (!user) return res.status(400).send({ message: "User do not exists" });

        _auth = await Auth.findOneAndDelete({ userid: id })
        return res.status(204).send('User Deleted');
    } catch (e) {
        return res.status(400).send({ message: 'Something went wrong' });
    }
});

router.post('/forget-password', async (req, res, next) => {
    const { mail } = req.body;

    let user = await User.findOne({mail})
    if (!user) return res.status(404).send({message: "User do not exists"});
    
    let currentTime = new Date();
    
    let data = {
        userId: user._id,
        resetPassword: true,
        expiresIn: new Date(currentTime.getTime() + 900000)
    }
    
    const token = jwt.sign({ data }, 'jwtPrivateKey');
    sgMail.setApiKey('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')

    let link = `${baseUrl}/forget-password?token=${token}`

    const msg = {
        to: mail, // Change to your recipient
        from: 'muhammad.hassan@phaedrasolutions.com', // Change to your verified sender
        subject: 'Forgot Password',
        text: `Please find the link to reset you password, Code will expire in 15 minutes`,
        html: `<a>${link}</a>`,
    }

    sgMail
        .send(msg)
            .then((res) => {
                console.log('Email sent', res)
            }
        )
        .catch((error) => {
            console.error(error.response.body)
        }
    )

    return res.status(200).send({ message: 'Please Check Link has been sent to your Email Address' })

})

router.post('/reset-password', async(req, res, next) => {
    const { password, token } = req.body;

    try{
        const decodedToken = jwt.verify(token, 'jwtPrivateKey');

        if(decodedToken.data && !decodedToken.data.resetPassword) return res.status(403).send({message: 'Invalid Token'});
        if(decodedToken.data && decodedToken.data.expiresIn) {
            let currentTime = (new Date()).getTime()
            let expireTime = (new Date(decodedToken.data.expiresIn)).getTime()

            if(currentTime > expireTime){
                return res.status(400).send({message: 'Token Expired'});
            }

            if(decodedToken.data && decodedToken.data.userId) {
                const salt = await bcrypt.genSalt(10);
                hashedPassword = await bcrypt.hash(password, salt);

                _auth = await Auth.findOneAndUpdate({ userid: decodedToken.data.userId }, {
                    password: hashedPassword
                });

                
                return res.status(200).send({message: "Your password has been successfully updated"})
            }
        } else { 
            return res.status(403).send({message: 'Invalid Token'});
        }
    } catch (e){
        return res.status(500).send({message: "Invalid Token"})
    }

    
})

module.exports = router;