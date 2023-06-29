<template>
  <div class="bg-gradient-to-r from-violet-100 to-fuchsia-100 w-[100%] h-[100%]">
    <!-- 头部 -->
    <div class="flex items-center justify-between px-[4vw]">
        <Icon icon="mingcute:menu-fill" color="#666" class="w-[6vw] h-[6vw]"/>
        <div class="relative">
            <Icon icon="circum:search" color="#666" class="absolute top-[1.5vw] left-[2vw] w-[5vw] h-[5vw]"/>
            <input type="text" class="w-[75.69vw] h-[8.54vw] rounded-[4.5vw] bg-[#abcdef] pl-[8vw]" placeholder="Love ls Gone (Acoustic)">
            <Icon icon="lucide:scan-line" color="#666" class="absolute top-[1.5vw] right-[2.5vw] w-[5vw] h-[5vw]"/>
        </div>
        <Icon icon="grommet-icons:microphone" color="#333" class="w-[6vw] h-[7vw]"/>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container overflow-hidden mt-[3.68vw] ml-[4vw]">
      <Carousel class="swiper-wrapper" :carousels="banners"/>
    </div>
    <!-- 导航栏 -->
    <div class="ml-[3.82vw] overflow-hidden scroll-wrapper" ref="scroll">
      <Recommendations class="w-[200vw] mt-[3.68vw] h-[11.74vw] scroll-content flex" :menulist="menulist"/>
    </div>
    <!-- 推荐歌单 -->
    <div class="mt-[4.58vw] ml-[3.82vw]">
      <Heet :song="song"/>
    </div>
    <!-- 新歌新碟 -->
    <div @click="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)">
        <Newsong :newsong="newsong"/>
    </div>
    <!-- 排行榜 -->
    <div class="mt-[5vw] ml-[3.82vw]">
        <Ranking class="" :thecharts="thecharts"/>
    </div>
    <!-- 音乐日历 -->
    <div class="ml-[3.82vw] mt-[5vw]">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <h1>音乐日历</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e" />
        </div>
        <div class="mr-[4vw]">
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>

      </div>
      <div class="bg-[#fff] rounded-[10px] ml-[10px] w-[90vw] h-[35vw]">
        <div v-for="item in music" :key="item.id" class=" ml-[8px]">
          <div class=" flex items-center justify-between mt-[10px]">
            <div class="text-[12px] ml-[1.5vw]">{{ item.title }}</div>
            <img :src=item.imgUrl alt="" class="w-[11vw] h-[11vw] rounded-[5px] mr-[20px] mt-[10px]">
          </div>
        </div>
      </div>
    </div>
    <!-- 抽屉 -->
    <Drawer :visible.sync="drawerVisible" direction="btt" width="100vw">
      <p class=" m-[3vw] leading-normal border-b-[1px] w-[85%] border-[#ccc]">推荐歌单</p>
                <div class="w-[96%] h-[30vw] pl-[4vw]">
                    <div class="flex items-center h-[10vw]">
                        <Icon icon="iconamoon:like-light" />
                        <span class="ml-[4vw]">最优推荐</span>
                    </div>
                    <div class="flex items-center h-[10vw]">
                        <Icon icon="streamline:interface-edit-zoom-out-glass-magnifying-out-reduce-zoom" />
                        <span class="ml-[4vw]">减少推荐</span>
                    </div>
                    <div class="flex items-center h-[10vw]">
                        <Icon icon="mingcute:more-4-line" />
                        <span class="ml-[4vw]">更多内容</span>
                    </div>
                </div>
    </Drawer>
</div>
</template>
<script>
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import BScroll from '@better-scroll/core';
import Ranking from './Ranking.vue';
import Carousel from './Carousel.vue';
import Recommendations from './Recommendations.vue';
import Heet from './Heet.vue';
import Newsong from './Newsong.vue';
import Drawer from '../components/Drawer.vue';

export default {
    components: { Carousel, Recommendations, Newsong, Ranking, Heet, Drawer, Carousel },
    data() {
        return {
            drawerVisible: false,
            visible: true,
            ranking: [],
            menu: [],
            banners: [],
            activeMenuItem: "",
            menulist: [],
            song: [],
            newsong: [],
            thecharts: [],
            music: [],
        };
    },
    beforeDestroy() {
        this.bs.destroy();
    },
    mounted() {
        this.init(this.$refs.scroll),
            this.init(this.$refs.scroll_1),
            this.init(this.$refs.scroll_2),
            this.init(this.$refs.scroll_3),
            this.init(this.$refs.scroll_4),
            new Swiper(".swiper-container", {
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false // 用户交互时是否停止自动播放，默认为true
                },
            });
    },
    methods: {
        fn(e) {
          this.drawerVisible = e;
        },
        toggleMenu(name) {
            this.activeMenuItem = name;
            this.fetchPlaylists(name);
        },
        fetchPlaylists(cat) {
            axios.get("https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist", {
                params: {
                    cat: cat
                }
            }).then(res => {
                this.playlists = res.data.playlists;
            });
        },
        init(name) {
            this.bs = new BScroll(name, {
                scrollX: true,
                probeType: 3,
                click: true
            });
        }
    },
    created() {
        // 轮播
        axios.get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page")
            .then(res => {
            console.log(res);
            this.banners = res.data.data.blocks[0].extInfo.banners;
        })
            .then((cat) => this.fetchPlaylists(cat));
        // 菜单
        axios
            .get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball")
            .then((res) => {
            this.menulist = res.data.data;
            // console.log(this.menulist);
        });
        // 推荐歌单
        axios
            .get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page")
            .then((res) => {
            this.song = res.data.data.blocks[1].creatives;
            console.log(this.song);
        });
        // 新歌新碟
        axios
            .get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page")
            .then((res) => {
            this.newsong = res.data.data.blocks[5].creatives;
            console.log(this.newsong);
        });
        // 排行榜
        axios
            .get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page")
            .then((res) => {
            this.thecharts = res.data.data.blocks[3].creatives;
            console.log(this.thecharts);
        });
        axios
            .get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=1606752000000&endTime=1609430399999")
            .then((res) => {
            this.music = res.data.data.calendarEvents.slice(0, 2);
            console.log(this.music);
        });
    },
}
</script>
<style>
    .active {
        border-radius: 3vw;
        border: 0vw solid #fff;
        background-color: #fff;
        align-items: center;
        justify-content: space-between;
        position: relative;
        position: absolute;
    }
    .red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
  }
</style>