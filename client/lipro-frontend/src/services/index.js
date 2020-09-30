import Vue from "vue";

// a general function to make request in vue.
function doRequest(method, ...params) {
  return Vue.http[method](...params).then(res => {
    if (res.body !== "") {
      return res.json();
    }
    return {};
  });
}

export default doRequest;
