<script>
  import wx from "weixin-js-sdk";

  export let data;
  if (!data.user.initialized) {
    // console.log("navigate to new_user");
    wx.miniProgram.navigateTo({ url: "../new_user/new_user" });
  }
</script>

<h1 class="">Welcome to DreamAI: {data.user.initialized}</h1>
