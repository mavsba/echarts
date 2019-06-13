import mm from '../pages/MM/mm'
import gzt from '../pages/gzt/gzt'
import xiaoxi from '../pages/xiaoxi/xiaoxi'
import dingdan from '../pages/dingdan/dingdan'

export default [
  {
    path: '/',
    name: 'mm',
    component: mm
  },
  {
    path: '/gzt',
    name: 'gzt',
    component: gzt,
    meta: {
      isAside: true
    }
  },
  {
    path: '/xiaoxi',
    name: 'xiaoxi',
    component: xiaoxi,
    meta: {
      isAside: true
    }
  },
  {
    path: '/dingdan',
    name: 'dingdan',
    component: dingdan,
    meta: {
      isAside: true
    }
  }
]
