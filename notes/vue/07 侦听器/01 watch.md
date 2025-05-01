> 四种数据

> ref()

> reactive()

> 函数的返回的一个值(geter函数)

> 包括上述内容的数组

```javascript
watch(监视数据，回调函数，配置对象)
```

- 情形一：监视ref(基本数据)

```javascript
import { ref , watch } from "vue";
let momo = ref('')
// 此处ref数据不用.value
watch(momo,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
```
停止监视

```javascript
const stop_watch = watch(momo,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
    if(your_judge){
        stop_watch()
    }
})
```

- 情形二：监视ref(对象类型) ,需要深度监视

> 若修改的是ref()定义对象中的属性，newValue和oldValue都是新值，因为它们都是同一个对象。

> 若修改的是ref()定义对象中的整个对象，newValue是新值，oldValue是旧值，因为它们不再是同一个对象了。

```javascript
import { ref , watch } from "vue";
let person = ref({
    name:'nono',
    age:18
})
// 此处ref数据不用.value
watch(person,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
},{deep:ture})
```
停止监视

```javascript
//  若是想立即执行一次，加immediate
watch(person,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
},{deep:true，immediate:true})
```

- 情形三：监视reactive(对象类型)  ，默认开启深度监视



```javascript
import { reactive , watch } from "vue";
let person = reactive({
    name:'nono',
    age:18
})

watch(person,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
```


- 情形四：监视reactive或ref(对象类型)中的某个属性变化，

```javascript
import { reactive } from "vue";
let person = reactive({
    name:'momo',
    age:18,
    like:{
        color: 'red',
        food: 'peer'
    }
})
watch( () => person.name,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
```

```javascript
import { ref } from "vue";
let person = ref({
    name:'momo',
    age:18,
    like:{
        color: 'red',
        food: 'peer'
    }
})
watch( () => person.value.name,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
```

- 情形五：监视多个数据

```javascript
import { reactive } from "vue";
let person = reactive({
    name:'momo',
    age:18,
    like:{
        color: 'red',
        food: 'peer'
    }
})
watch( [() => person.name, () => person.like.food],(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
```