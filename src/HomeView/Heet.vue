<template>

<div>
   <div class="flex items-center justify-between">
         <div class="flex items-center">
             <h1>推荐歌单</h1>
             <Icon icon="mingcute:right-line" color="#4f5a6e" />
           </div>
           <div class="mr-[4vw]" @click="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)">
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

</template>
   
   <script>
   import Swiper from 'swiper';
   import 'swiper/swiper-bundle.css';
   import BScroll from '@better-scroll/core';
   export default{
     data(){
       return {
           drawerVisible: false,
           visible: true,
       }
     },
       props:['song'],
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
         fn(e) {
           this.drawerVisible = e;
         },
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