// 使用过滤器，将时间的格式，过滤成 YYYY-MM-DD hh:mm:ss 的形式
// 定义全局过滤器
Vue.filter('dateFormate', (time) => {
    return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
});

const vm = new Vue({
    el: '#app',
    data: {
        brand: '',
        // 代表list数组中可用的下一个id
        nextId: 4,
        list: [
            { id: 1, brand: '宝马', status: true, time: new Date(), },
            { id: 2, brand: '奔驰', status: false, time: new Date(), },
            { id: 3, brand: '奥迪', status: true, time: new Date(), }
        ]
    },
    methods: {
        remove(id) {
            // console.log(id);
            // 使用过滤函数，过滤掉需要删除的数据
            this.list = this.list.filter(item => item.id !== id);
        },
        // 添加内容时，阻止表单提交行后执行的方法
        add() {
            // 先判断用户输入的是否是空字符串
            if (this.brand === '') return alert('必须填写品牌名称');
            // 将需要添加的数据，组成对象，追加到list中
            const obj = {
                    id: this.nextId,
                    brand: this.brand,
                    status: false,
                    time: time(),
                }
                // 追加
            this.list.push(obj);
            // 清空brand
            this.brand = '';
            // nextId+1;
            this.nextId++;
        }
    }
});