export const navigationData = [
    {
        id: '1',
        path: '',
        icon: 'House',
        title: '首页',
        children:[]
    }, {
        id: '2',
        path: '',
        icon: 'User',
        title: '用户列表',
        children:[
            {
                id: '2-1',
                path: '/use-ist',
                title: '用户列表',
            }
        ]
    }, {
        id: '2',
        path: '',
        icon: '',
        title: '权限',
        children:[]
    }, {
        id: '3',
        path: '',
        icon: '',
        title: '组织架构',
        children:[
            {
                id: '3-1',
                path: '/member-list',
                title: '成员列表',
            }, {
                id: '3-2',
                path: '/role-ist',
                title: '角色列表',
            },
        ]
    }, {
        id: '4',
        path: '',
        icon: 'VideoCameraFilled',
        title: '影音管理',
        children:[
            {
                id: '4-1',
                path: '/mv-ist',
                title: 'MV',
            }, {
                id: '4-2',
                path: '/song-ist',
                title: '歌曲列表',
            }
        ]
    }
]

//用户数据列表
export const tableData: any[] = [
    {
        addtime: 1663065841,
        name: 'Tom',
        membershipLevel: '普通用户',
        address: 'No. 189, Grove St, Los Angeles',
        userAvatar: 'https://img2.baidu.com/it/u=3684117954,695988885&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
        renew: 48,
    }, {
        addtime: 1663065828,
        name: 'jack',
        membershipLevel: 'VIP',
        address: 'No. 189, Grove St, Los Angeles',
        userAvatar: 'https://img1.baidu.com/it/u=1960292808,1761809160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        renew: 66,
    }, {
        addtime: 1663065828,
        name: '持之翼',
        membershipLevel: 'SVIP',
        address: 'No. 189, Grove St, Los Angeles',
        userAvatar: 'https://img1.baidu.com/it/u=350266893,2967756166&fm=253&fmt=auto&app=138&f=JPEG?w=509&h=500',
        renew: 108,
    }, {
        addtime: 1663065784,
        name: '墨鱼',
        membershipLevel: '永久会员',
        address: 'No. 189, Grove St, Los Angeles',
        userAvatar: 'https://img2.baidu.com/it/u=3624909041,2918634060&fm=253&fmt=auto&app=138&f=JPEG?w=520&h=500',
        renew: 360,
    }, {
        addtime: 1663065357,
        name: '小成成',
        membershipLevel: '普通会员',
        address: 'No. 189, Grove St, Los Angeles',
        userAvatar: 'https://img0.baidu.com/it/u=1156520697,4040290757&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        renew: 89,
    }, {
        addtime: 1663065784,
        name: '张山',
        membershipLevel: 'SVIP',
        address: 'No. 189, Grove St, Los Angeles',
        userAvatar: 'https://img2.baidu.com/it/u=3624909041,2918634060&fm=253&fmt=auto&app=138&f=JPEG?w=520&h=500https://img2.baidu.com/it/u=2722517648,657689546&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        renew: 9999,
    },
]

//用户信息
export const column: any[] = [
    {
        title: '用户头像',
        value: 'userAvatar',
        type: 'image'
    }, {
        title: '用户名',
        value: 'name',
        type: 'input'
    }, {
        title: '会员等级',
        value: 'membershipLevel',
        type: 'input'
    }, {
        title: '加入时间',
        value: 'addtime',
        type: 'data'
    }, {
        title: '续费',
        value: 'renew',
        type: 'click',
        btnType: 'primary'
    },
]

// 用户查询信息

export const usetableSearch = [
    {
        type: 'input',
        name: 'name',
        placeholder: '请输入用户名',
        label:'',
    }, {
        type: 'select',
        placeholder: '级别查询',
        label:'',
        name: 'membershipLevel',
        option: [
            {
                label: '普通用户',
                value: 0
            }, {
                label: 'vip',
                value: 1
            }, {
                label: 'svip',
                value: 2
            }, {
                label: '永久会员',
                value: 3
            }, 
        ]
    }, {
        type: 'data',
        name: 'addtime',
        placeholder: '加入时间查询',
        label:'',
    }
]

// 用户查询信息

export const usetableBtn = [
    {
        type: 'danger',
        text: '删除',
        click: 'delete'
    }, {
        type: 'warning',
        text: '编辑',
        click: 'edit'
    }, {
        type: 'primary',
        text: '新增',
        click: 'add'
    }
]

// mv
export const mvData: any[] = [
    {
        addtime: 1663065841,
        name: '夜之光',
        singerName: '花姐',
        category:'',
        mvUrl: 'https://img2.baidu.com/it/u=3684117954,695988885&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
        status:'Online'
    }, {
        addtime: 1663065828,
        name: '沙漠骆驼',
        singerName: '展展与罗罗',
        category:'',
        mvUrl: 'https://img1.baidu.com/it/u=1960292808,1761809160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        renew: 66,
        status:'Offline'
    }, {
        addtime: 1663065828,
        name: '38度6',
        singerName: '黑龙',
        category:'',
        mvUrl: 'https://img1.baidu.com/it/u=350266893,2967756166&fm=253&fmt=auto&app=138&f=JPEG?w=509&h=500',
        status:'Offline'
    }, {
        addtime: 1663065784,
        name: '演员',
        singerName: '薛之谦',
        category:'',
        mvUrl: 'https://img2.baidu.com/it/u=3624909041,2918634060&fm=253&fmt=auto&app=138&f=JPEG?w=520&h=500',
        status:'Online'
    }, {
        addtime: 1663065357,
        name: '死了都要爱',
        singerName: '阿信',
        category:'',
        mvUrl: 'https://img0.baidu.com/it/u=1156520697,4040290757&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        status:'Offline'
    },
]

//mv信息
export const mvColumn: any[] = [
    {
        title: 'MV名称',
        value: 'name',
        type: 'input'
    }, {
        title: '歌手名称',
        value: 'singerName',
        type: 'input'
    }, {
        title: 'MV链接地址',
        value: 'mvUrl',
        type: 'link'
    }, {
        title: '上传时间',
        value: 'addtime',
        type: 'data'
    }, {
        title: '分类',
        value: 'category',
        type: 'input',
    },
]

// song
export const songData: any[] = [
    {
        addtime: 1663065841,
        name: '夜曲',
        singerName: '周杰伦',
        category:'',
        singerCover: '',
        songUrl: 'https://img2.baidu.com/it/u=3684117954,695988885&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
        status:'Offline'
    }, {
        addtime: 1663065828,
        name: '该死的温柔',
        singerName: '马天宇',
        category:'',
        singerCover: '',
        songUrl: 'https://img1.baidu.com/it/u=1960292808,1761809160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        status:'Offline'
    }, {
        addtime: 1663065828,
        name: '38度6',
        singerName: '黑龙',
        category:'',
        singerCover: 'https://img1.baidu.com/it/u=350266893,2967756166&fm=253&fmt=auto&app=138&f=JPEG?w=509&h=500',
        songUrl: 'https://img1.baidu.com/it/u=350266893,2967756166&fm=253&fmt=auto&app=138&f=JPEG?w=509&h=500',
        status:'Offline'
    }, {
        addtime: 1663065784,
        name: '认真的雪',
        singerName: '薛之谦',
        category:'',
        singerCover: '',
        songUrl: 'https://img2.baidu.com/it/u=3624909041,2918634060&fm=253&fmt=auto&app=138&f=JPEG?w=520&h=500',
        status:'Offline'
    }, {
        addtime: 1663065357,
        name: '死了都要爱',
        singerName: '阿信',
        category:'',
        singerCover: 'https://img0.baidu.com/it/u=1156520697,4040290757&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        songUrl: 'https://img0.baidu.com/it/u=1156520697,4040290757&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        status:'Offline'
    },
]

//mv信息
export const songColumn: any[] = [
    {
        title: 'MV名称',
        value: 'name',
        type: 'input'
    }, {
        title: '歌手名称',
        value: 'singerName',
        type: 'input'
    }, {
        title: '歌手封面',
        value: 'singerCover',
        type: 'image'
    }, {
        title: '歌曲链接地址',
        value: 'songUrl',
        type: 'link',
        linkType: 'success'
    }, {
        title: '上传时间',
        value: 'addtime',
        type: 'data'
    }, {
        title: '分类',
        value: 'category',
        type: 'input',
    }, {
        title: '状态',
        value: 'status',
        type: 'operation',
    },
]
