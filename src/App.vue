<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useSettingStore } from '@/store/setting'

const setting = useSettingStore()

onLaunch(() => {
  let res = uni.getMenuButtonBoundingClientRect()
  // to rpx
  setting.setTopH(res.top * 2)
  setting.setCapsuleH(res.height * 2)

  let info: any = uni.getSystemInfo()
  let isAppleAndHasLine = false
  if (info.model?.toLowerCase().includes("ip")) {
    const regex = /\d+/g;
    const matches = info.model.match(regex);
    if (matches && matches.length > 0) {
      isAppleAndHasLine = matches[0] > 8
    } else {
      isAppleAndHasLine = info.model.toLowerCase().includes('x')
    }
  }
  setting.setIsAppleAndHasLine(isAppleAndHasLine)

  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
