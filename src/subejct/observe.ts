// 观察者集合
class ObserverList {
    list: any[];
    constructor() {
        this.list = [];
    }
    add(obj) {
        this.list.push(obj);
    }
    removeAt(index) {
        this.list.splice(index, 1);
    }
    count() {
        return this.list.length;
    }
    get(index) {
        if (index < 0 || index >= this.count()) {
            return;
        }
        return this.list[index];
    }
    indexOf(obj, start = 0) {
        let pos = start;
        while (pos < this.count()) {
            if (this.list[pos] === obj) {
                return pos;
            }
            pos++;
        }
        return -1;
    }
}
// 观察者类
class Observer {
    update: any;
    constructor(fn) {
        this.update = fn;
    }
}
// 观察目标类
class Subject {
    observers: ObserverList;
    constructor() {
        this.observers = new ObserverList();
    }
    addObserver(observer) {
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.removeAt(
            this.observers.indexOf(observer)
        );
    }
    notify(context) {
        const count = this.observers.count();
        for (let i = 0; i < count; ++i) {
            this.observers.get(i).update(context);
        }
    }
}

function print(){
    const observer = new Observer((newval) => {
        console.log(`A的最新值是${newval}`);
    })
    const subject = new Subject();
    subject.addObserver(observer);
    subject.notify('Hello, world');
}
print()