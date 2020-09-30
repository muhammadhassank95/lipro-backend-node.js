<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" name="This is input" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
