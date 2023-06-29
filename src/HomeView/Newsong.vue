<template>
    <div>
      <div class="flex items-center justify-between ml-[3.82vw] mt-[8vw]">
        <div class="flex items-center">
          <h1>新歌新碟\数字专辑</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e" />
        </div>
        <div class="mr-[4vw]" @click="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)">
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
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import BScroll from '@better-scroll/core';
export default{
    props:['newsong'],
    mounted(){
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
    methods:{
        init(name) {
            this.bs = new BScroll(name, {
                scrollX: true,
                probeType: 3,
                click: true
            });
        }
    }
}
</script>

