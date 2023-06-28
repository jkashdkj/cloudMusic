import Vue from 'vue';
import { Icon } from '@iconify/vue2';
// import NetEaseCloudView from '@/views/NetEaseCloud.vue';
import App from './App.vue'
Vue.component('Icon', Icon);
// vm就是根实例  root 具备el
// 但是其他实例不具备
// 组件的嵌套 A组件出现在B组件的template中 A是B的子组件
// 如果一个组件没有父组件 则说明它是根组件
// 组件树
// root
//  App
//    IndewxView
//    HomeView

// vm.$parent  获取父组件
// vm.$children 获取子组件
// vm.$root 获取根组件
// 全局组件 注册一次
//页面打开，请求自动发送
// 请求回来的数据还要渲染到页面上 （数据驱动视图的框架）
// 数据驱动试图变化的条件：数据必须是响应式的数据（data） + 数据必须通过模板语法绑定到模板中
// vue中this的指向问题：methods中所有函数(不要箭头函数)的this指向vm(vue的实例)

const vm = new Vue({
    el: '#app', // 指令是出现在模板中
    components:{App},
    // template: template_index,
    template:'<App/>',
    // render: (h) => h(NetEaseCloudView),
    // 实例已经创建 但是实例上的模板还没有渲染
    created(){
       
    },
    // 当前组件的template已经渲染到页面上了
    mounted(){
      
    }
});

// 组件分类：
// 从功能上分：页面组件 业务组件
// 从来源上分：内置组件 第三方组件   自定义组件
// 从作用范围组件：局部组件（引入文件，注册组件，使用标签） 全局组件