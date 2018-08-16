// 变量缓存器，方便我们在不同的类中访问和修改变量
export class DataStore {

    static getInstance() {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    constructor() {
        this.map = new Map();
    }

    // 保存
    put(key, value) {
        if (typeof value == 'function') {
            value = new value();
        }
        this.map.set(key, value);
        return this;
    }

    //销毁
    destroy() {
        for (let value of this.map.values()) {
            value = null;
        }
    }

    // 取出
    get(key) {
        return this.map.get(key);
    }
}