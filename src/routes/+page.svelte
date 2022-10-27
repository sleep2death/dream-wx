<script>
  import wx from "weixin-js-sdk";
  import TabBar from "../lib/components/tabbar.svelte";
  import "../i18n";

  export let data;
  if (!data.user.initialized) {
    // console.log("navigate to new_user");
    // go to new-user page in Weixin
    // wx.miniProgram.navigateTo({ url: "../new_user/new_user" });
  }
</script>

<div>HomePage</div>
