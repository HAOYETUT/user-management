<template>
    <div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="音乐" name="first">
              <SongList />
            </el-tab-pane>
            <el-tab-pane label="视频" name="second">
              <VideoList/>
            </el-tab-pane>
            <el-tab-pane label="图库" name="third">
              <ChartList/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import SongList from "../components/song-list/index.vue";
import VideoList from "../components/video-list/index.vue";
import ChartList from "../components/chart-list/index.vue";

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style scoped>

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

#tab-second {
    color: #fff !important;
}
.el-tabs__nav .el-tabs__item {
  color: #fff !important;
}
.demo-tabs {
  color: #fff !important;
}
</style>