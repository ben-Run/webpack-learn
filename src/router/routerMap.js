import Index from '@/view/layOut'

export const constantRouterMap = [
  {
    path: '/',
    component: Index,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/view/home/Index.vue'),
        name: 'Home',
        meta: { title: '首页' },
        children: [
          {
            path: 'city/:msg',
            name: 'city',
            component: _ => import('@/view/city/Index.vue'),
            meta: { title: '城市' }
          },
        ]
      },
      
    ]
  },
  
  // other router
  {
    path: '/404',
    name: 'error404',
    component: () => import('@/view/error/Error404')
  },
  { path: '*', redirect: '/404', hidden: true }
]

export const defaultRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRouterMap = []

export const templateRoute = {
  component: Index
}
