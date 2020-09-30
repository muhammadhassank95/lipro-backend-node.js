<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <img src="/lipro-logo.png" width="100" alt="lirpo-log" />
        <md-tabs v-if="isHeader" class="md-primary">
          <md-tab id="tab-home" md-label="Home"></md-tab>
          <md-tab id="tab-pages" md-label="Pages"></md-tab>
          <md-tab id="tab-posts" md-label="Posts"></md-tab>
          <md-tab id="tab-favorites" md-label="administration"></md-tab>
        </md-tabs>
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    isHeader: localStorage.getItem("userToken"),
  }),
};
</script>