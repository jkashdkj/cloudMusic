<template>
<div class="">
    <div class="swiper-slide" v-for='item in carousels' :key='item.id'>
        <img :src=item.pic alt='' class="w-[92.08vw] h-[36.04vw] rounded-[12px]">
    </div>
</div>
</template>

<script>
export default{
    props:['carousels'],
}
</script>