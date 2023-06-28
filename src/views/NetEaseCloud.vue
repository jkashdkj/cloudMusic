<template>
  <div class="bg-gradient-to-r from-violet-100 to-fuchsia-100">
    <!-- 头部 -->
    <div class="flex items-center justify-between mt-[5vw] px-[4vw]">
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
      <div class="swiper-wrapper">
        <!-- 这里添加轮播的每个项 -->
        <div class="swiper-slide" v-for='item in banners' :key='item.id'>
          <img :src=item.pic alt='' class="w-[92.08vw] h-[36.04vw] rounded-[12px]">
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="ml-[3.82vw] overflow-hidden scroll-wrapper" ref="scroll">
      <div class="w-[200vw] mt-[3.68vw] h-[11.74vw] scroll-content flex">
        <div class="mr-[4vw] flex justify-around items-center flex-wrap ;" v-for="item in menulist" :key="item.id">
          <img :src=item.iconUrl alt="" class="w-[8.53vw] h-[8.32vw] red-image">
          <p class="text-[12px] text-[#65707f]">{{item.name}}</p>
        </div>
      </div>
    </div>
    <!-- 推荐歌单 -->
    <div class="mt-[4.58vw] ml-[3.82vw]">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <h1>推荐歌单</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e" />
        </div>
        <div class="mr-[4vw]">
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
      </div>
      <div class="overflow-hidden scroll-wrapper" ref="scroll_1">
        <div class=" mt-[4.24vw] flex w-[220vw] scroll-content">
          <div class="mr-[5vw] w-[31.81vw] h-[41.25vw] flex flex-wrap items-center justify-around" v-for="item in song" :key="item.id">
            <img :src=item.uiElement.image.imageUrl alt="" class="w-[31.81vw] h-[30.88vw] rounded-[10px]">
            <p class="text-[12px] text-[#707a86]">{{item.uiElement.mainTitle.title}}</p>
          </div>
        </div>
      </div>

    </div>
    <!-- 新歌新碟 -->
    <div class="flex items-center justify-between ml-[3.82vw] mt-[8vw]">
        <div class="flex items-center">
          <h1>新歌新碟\数字专辑</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e" />
        </div>
        <div class="mr-[4vw]">
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
    </div>
    <div class="overflow-hidden scroll-wrapper  ml-[3.82vw]   mt-[3.74vw]" ref="scroll_2">
      <div class=" scroll-content w-[700vw] flex">
        <ul class="" v-for="item in newsong" :key="item.id">
          <li class="w-[87.64vw]  mt-[2.36vw] h-[14vw] flex" v-for="item in item.resources" :key="item.id">
            <img :src=item.uiElement.image.imageUrl alt="" class="w-[14vw] h-[14vw] rounded-[8px]">
            <div>
              <h4 class="text-[12px] mt-[3px] ml-[2.71vw]">{{item.uiElement.mainTitle.title}}</h4>
              <p class="text-[12px] mt-[4px] ml-[2.71vw]">{{item.uiElement.subTitle.title}}</p>
            </div>
          </li>
      </ul>
      </div>
     
    </div>

    <!-- 排行榜 -->
    <div class="mt-[5vw] ml-[3.82vw]">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <h1>排行榜</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e" />
        </div>
        <div class="mr-[4vw]">
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>

      </div>
      <div class="overflow-hidden scroll-wrapper" ref="scroll_3">
        <div class="scroll-content w-[550vw] flex">
          <div class="mt-[4.5vw] ml-[8px]"  v-for="item in thecharts" :key="item.id">
          <div class="w-[90vw] h-[53.47vw] bg-[#fff] rounded-[6px]" >
            <div class="justify-between flex">
              <div class="ml-[4.3vw] text-[14px] mt-[4.1vw]">{{item.uiElement.mainTitle.title}}</div>
              <div class="mr-[4.5vw] text-[12px] mt-[5vw]">{{item.uiElement.mainTitle.titleDesc}}</div>
            </div>
            <div>
              <div v-for="(items,indexs) in 3" :key="item.id" class="ml-[4.3vw] flex items-center">
                <img :src=item.resources[indexs].uiElement.image.imageUrl  alt="" class="w-[11.5vw] h-[11.5vw] mt-[2.3vw] rounded-[6px] mr-[3vw]">
                <div class="mr-[3.6vw]">{{ indexs + 1 }}</div>
                <div class="text-[12px] w-[52vw]">
                  {{item.resources[indexs].resourceExtInfo?.songData.album.name}}
                  <div class="mt-[1.5vw]">{{item.resources[indexs].resourceExtInfo?.artists[0].name}}</div>
                </div>
                <div class="text-[12px]">
                  <span class="text-[green]" v-if="item.resources[indexs].uiElement.labelText.text === '新晋'">{{ item.resources[indexs].uiElement.labelText.text }}</span>
                  <span class="text-[red]" v-else>{{ item.resources[indexs].uiElement.labelText.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
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

  </div>
</template>
<script>
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import BScroll from '@better-scroll/core';
export default {
  data() {
    return {
      ranking: [],
      menu: [],
      banners: [],
      activeMenuItem: '',
      menulist:[],
      song:[],
      newsong:[],
      thecharts:[],
      music:[],
    }
  },
  beforeDestroy() {
      this.bs.destroy()
  },
  mounted() {
    this.init(this.$refs.scroll),
    this.init(this.$refs.scroll_1),
    this.init(this.$refs.scroll_2),
    this.init(this.$refs.scroll_3),
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000, // 自动播放的延迟时间，单位为毫秒
        disableOnInteraction: false // 用户交互时是否停止自动播放，默认为true
      },
    })
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
      this.fetchPlaylists(name);
    },
    fetchPlaylists(cat) {
      axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist', {
        params: {
          cat: cat
        }
      }).then(res => {
        this.playlists = res.data.playlists
      })
    },
    init(name) {
            this.bs = new BScroll(name,{
                scrollX: true,
                probeType: 3,
                click:true
                })
            }
  },
  created() {
    // 轮播
    axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
      .then(res => {
        console.log(res);
        this.banners = res.data.data.blocks[0].extInfo.banners
      })
      .then((cat) => this.fetchPlaylists(cat))

    // 菜单
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
      )
      .then((res) => {
        this.menulist = res.data.data;
        // console.log(this.menulist);
      });
    // 推荐歌单
    axios
    .get(
      'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
    )
    .then((res) => {
      this.song = res.data.data.blocks[1].creatives;
      // console.log(this.song);
    })

    axios
    .get(
      'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
    )
    .then((res) => {
      this.newsong = res.data.data.blocks[5].creatives;
      // console.log(this.newsong);
    })

    axios
    .get(
      'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
    )
    .then((res) => {
      this.thecharts = res.data.data.blocks[3].creatives
      console.log(this.thecharts);
    })

    axios
    .get(
      'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
    )
    .then((res) => {
      this.thecharts = res.data.data.blocks[3].creatives
      console.log(this.thecharts);
    })

    axios
    .get(
      'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=1606752000000&endTime=1609430399999'
    )
    .then((res) => {
      this.music = res.data.data.calendarEvents.slice(0,2);
      console.log(this.music);
    })
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