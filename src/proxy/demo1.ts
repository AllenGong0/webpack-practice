// let obj1 = {
//     a: 5
// }
// const handler = {
//     get: function(obj, prop) {
//         console.log('proxu')
//         return obj[prop]
//     }
// }
// const proxyObj = new Proxy(obj1,handler)
// proxyObj['b'] = 6

const obj: any = {
    a: 1,
    c: 3,
    d: {
        a:5
    }
};
const proxy = new Proxy(obj, {
    get: function(target, key, receiver) {
        console.log('get的key为 ===>' , key );
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log(`set的key为 ===>`, key)
        return Reflect.set(target, key, value, receiver);
    }
});
// proxy.b         //get的key为 ===>b
// proxy.a  = 5   //set的key和value为 ===>a 5
// proxy.b = 2    //set的key和value为 ===>b 2
proxy.d.a = 6
console.log(obj)