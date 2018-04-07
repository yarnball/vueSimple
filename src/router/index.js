import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import drag from '@/components/drag'
import listImage from '@/components/listImage'
import Counter from '@/components/Counter'

Vue.use(Router)

export const links = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld,
  showInNav: false
},
{
  path: '/counter/:id',
  name: 'counter',
  component: Counter,
  showInNav: true,
  props: true
},
{
  path: '/drag',
  name: 'drag',
  component: drag,
  showInNav: true
},
{
  path: '/list',
  name: 'list',
  component: listImage,
  showInNav: true
}]

export default new Router({
  routes: links
})
