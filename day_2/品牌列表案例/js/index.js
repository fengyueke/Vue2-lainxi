function time() {
    const dt = new Date();
    const y = parZero(dt.getFullYear());
    const m = parZero(dt.getMonth() + 1);
    const d = parZero(dt.getDay());
    const hh = parZero(dt.getHours());
    const mm = parZero(dt.getMinutes());
    const ss = parZero(dt.getSeconds());
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

function parZero(n) {
    return n > 9 ? n : '0' + n;
}
const vm = new Vue({
    el: '#app',
    data: {
        brand: '',
        // 代表list数组中可用的下一个id
        nextId: 4,
        list: [
            { id: 1, brand: '宝马', status: true, time: time(), },
            { id: 2, brand: '奔驰', status: false, time: time(), },
            { id: 3, brand: '奥迪', status: true, time: time(), }
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