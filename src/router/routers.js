import Main from '@/components/main'
// import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/notification-btn',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      icon: 'logo-buffer',
      title: '订单'
    },
    component: Main,
    children: [
      {
        path: 'search',
        name: 'order_search',
        meta: {
          icon: '_qq',
          title: '查询'
        },
        component: () => import('@/view/join-page.vue')
      },
      {
        path: 'refund',
        name: 'order_refund',
        meta: {
          icon: '_qq',
          title: '退房'
        },
        component: () => import('@/view/join-page.vue')
      },
      {
        path: 'refund',
        name: 'order_detail',
        meta: {
          icon: '_qq',
          title: '订单详情',
          hideInMenu: true
        },
        component: () => import('@/view/join-page.vue')
      },
      {
        path: 'refund',
        name: 'order_refund_detail',
        meta: {
          icon: '_qq',
          title: '退房详情',
          hideInMenu: true
        },
        component: () => import('@/view/join-page.vue')
      }
    ]
  },
  {
    path: '/project',
    name: 'project',
    meta: {
      icon: 'logo-buffer',
      title: '项目'
    },
    component: Main,
    children: [
      {
        path: 'search',
        name: 'project_search',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '查询'
        },
        component: () => import('@/view/components/tree-select/index.vue')
      },
      {
        path: 'build',
        name: 'project_build',
        meta: {
          icon: 'md-trending-up',
          title: '新建向导'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'goods',
        name: 'project_goods',
        meta: {
          icon: 'ios-infinite',
          title: '物品'
        },
        component: () => import('@/view/components/drag-list/drag-list.vue')
      },
      {
        path: 'bed_type',
        name: 'project_bed_type',
        meta: {
          icon: 'md-list',
          title: '床型'
        },
        component: () => import('@/view/components/drag-drawer')
      },
      {
        path: 'house_type',
        name: 'project_house_type',
        meta: {
          icon: 'ios-people',
          title: '房型'
        },
        component: () => import('@/view/components/org-tree')
      },
      {
        path: 'room',
        name: 'project_room',
        meta: {
          icon: 'md-git-branch',
          title: '房间'
        },
        component: () => import('@/view/components/tree-table/index.vue')
      },
      {
        path: 'bed',
        name: 'project_bed',
        meta: {
          icon: 'md-crop',
          title: '床位'
        },
        component: () => import('@/view/components/cropper/cropper.vue')
      },
      {
        path: 'authority',
        name: 'project_authority',
        meta: {
          icon: 'md-grid',
          title: '权限'
        },
        component: () => import('@/view/components/tables/tables.vue')
      }
      // , {
      //   path: 'split_pane_page',
      //   name: 'split_pane_page',
      //   meta: {
      //     icon: 'md-pause',
      //     title: '分割窗口'
      //   },
      //   component: () => import('@/view/components/split-pane/split-pane.vue')
      // },
      // {
      //   path: 'markdown_page',
      //   name: 'markdown_page',
      //   meta: {
      //     icon: 'logo-markdown',
      //     title: 'Markdown编辑器'
      //   },
      //   component: () => import('@/view/components/markdown/markdown.vue')
      // },
      // {
      //   path: 'editor_page',
      //   name: 'editor_page',
      //   meta: {
      //     icon: 'ios-create',
      //     title: '富文本编辑器'
      //   },
      //   component: () => import('@/view/components/editor/editor.vue')
      // },
      // {
      //   path: 'icons_page',
      //   name: 'icons_page',
      //   meta: {
      //     icon: '_bear',
      //     title: '自定义图标'
      //   },
      //   component: () => import('@/view/components/icons/icons.vue')
      // }
    ]
  },
  {
    path: '/lock',
    name: 'lock',
    meta: {
      icon: 'md-cloud-upload',
      title: '智能锁'
    },
    component: Main,
    children: [
      {
        path: 'password_reset',
        name: 'password_reset',
        meta: {
          icon: 'md-clipboard',
          title: '密码重置'
        },
        component: () => import('@/view/update/update-paste.vue')
      },
      {
        path: 'battery_monitor',
        name: 'battery_monitor',
        meta: {
          icon: 'ios-document',
          title: '电量监控'
        },
        component: () => import('@/view/update/update-table.vue')
      },
      {
        path: 'update_paste_page',
        name: 'update_paste_page',
        meta: {
          icon: 'md-clipboard',
          title: '临时密码'
        },
        component: () => import('@/view/update/update-paste.vue')
      }
    ]
  },
  {
    path: '/report',
    name: 'report',
    meta: {
      icon: 'ios-stats',
      title: '报表'
    },
    component: Main,
    children: [
      {
        path: 'occupancy_rate-excel',
        name: 'occupancy_rate-excel',
        meta: {
          icon: 'md-add',
          title: '入住率'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'guest_analysis',
        name: 'guest_analysis',
        meta: {
          icon: 'md-download',
          title: '客群分析'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },
  {
    path: '/discount',
    name: 'discount',
    meta: {
      icon: 'ios-stats',
      title: '优惠'
    },
    component: Main,
    children: [
      {
        path: 'activity',
        name: 'discount_activity',
        meta: {
          icon: 'ios-hammer',
          title: '活动'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      },
      {
        path: 'coupon',
        name: 'discount_coupon',
        meta: {
          icon: 'ios-hammer',
          title: '优惠券'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      }
    ]
  },
  {
    path: '/marketing',
    name: 'marketing',
    meta: {
      icon: 'ios-stats',
      title: '营销'
    },
    component: Main,
    children: [
      {
        path: 'activity',
        name: 'marketing_activity',
        meta: {
          icon: 'md-planet',
          title: '活动'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
      {
        path: 'strategy',
        name: 'marketing_strategy',
        meta: {
          icon: 'md-planet',
          title: '策略'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      }
    ]
  },
  {
    path: '/repair',
    name: 'repair',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'search',
        name: 'repair_search',
        meta: {
          icon: 'ios-bug',
          title: '报修'
        },
        component: () => import('@/view/error-store/error-store.vue')
      }
    ]
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    meta: {
      icon: 'ios-bug',
      title: '评价'
    },
    component: Main,
    children: [
      {
        path: 'all',
        name: 'repair_all',
        meta: {
          icon: 'ios-bug',
          title: '查询'
        },
        component: () => import('@/view/error-store/error-store.vue')
      },
      {
        path: 'low',
        name: 'repair_low',
        meta: {
          icon: 'ios-bug',
          title: '低评'
        },
        component: () => import('@/view/error-store/error-store.vue')
      }
    ]
  },
  {
    path: '/guest',
    name: 'guest',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'search',
        name: 'guest_search',
        meta: {
          icon: 'ios-bug',
          title: '客户查询'
        },
        component: () => import('@/view/error-store/error-store.vue')
      }
    ]
  },
  // {
  //   path: '/error_store',
  //   name: 'error_store',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'error_store_page',
  //       name: 'error_store_page',
  //       meta: {
  //         icon: 'ios-bug',
  //         title: '错误收集'
  //       },
  //       component: () => import('@/view/error-store/error-store.vue')
  //     }
  //   ]
  // },
  {
    path: '/error_logger',
    name: 'error_logger',
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'error_logger_page',
        name: 'error_logger_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: () => import('@/view/single-page/error-logger.vue')
      }
    ]
  },
  // {
  //   path: '/directive',
  //   name: 'directive',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'directive_page',
  //       name: 'directive_page',
  //       meta: {
  //         icon: 'ios-navigate',
  //         title: '指令'
  //       },
  //       component: () => import('@/view/directive/directive.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/multilevel',
  //   name: 'multilevel',
  //   meta: {
  //     icon: 'md-menu',
  //     title: '多级菜单'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'level_2_1',
  //       name: 'level_2_1',
  //       meta: {
  //         icon: 'md-funnel',
  //         title: '二级-1'
  //       },
  //       component: () => import('@/view/multilevel/level-2-1.vue')
  //     },
  //     {
  //       path: 'level_2_2',
  //       name: 'level_2_2',
  //       meta: {
  //         access: ['super_admin'],
  //         icon: 'md-funnel',
  //         showAlways: true,
  //         title: '二级-2'
  //       },
  //       component: parentView,
  //       children: [
  //         {
  //           path: 'level_2_2_1',
  //           name: 'level_2_2_1',
  //           meta: {
  //             icon: 'md-funnel',
  //             title: '三级'
  //           },
  //           component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
  //         },
  //         {
  //           path: 'level_2_2_2',
  //           name: 'level_2_2_2',
  //           meta: {
  //             icon: 'md-funnel',
  //             title: '三级'
  //           },
  //           component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: 'level_2_3',
  //       name: 'level_2_3',
  //       meta: {
  //         icon: 'md-funnel',
  //         title: '二级-3'
  //       },
  //       component: () => import('@/view/multilevel/level-2-3.vue')
  //     }
  //   ]
  // },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
