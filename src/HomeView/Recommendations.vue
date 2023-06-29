<template>
<div>
    <div class="mr-[4vw] flex justify-around items-center flex-wrap ;" v-for="item in menulist" :key="item.id">
        <img :src=item.iconUrl alt="" class="w-[8.53vw] h-[8.32vw] red-image">
        <p class="text-[12px] text-[#65707f]">{{item.name}}</p>
    </div>
</div>
</template>

<script>
export default{
    props:['menulist'],
}
</script>