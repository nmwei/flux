## 基本概念

### Flux组成
Flux将一个应用分成四个部分。
> 1. View: 视图层
> 2. Action(动作):视图层发出的消息(比如mouseClick)
> 3. Dispatcher(派发器):用来接收Actions、执行回调函数
> 4. Store(数据层):用来存放应用的状态，一旦发生变动，就提醒Views要更新页面。


![](img/dataflow.png)

### Flux 的最大特点
```
数据单向流动
Action -> Dispatcher -> Store -> View
```
> 1. 用户访问 View
> 2. View 发出用户的 Action
> 3. Dispatcher 收到 Action，要求 Store 进行相应的更新
> 4. Store 更新后，发出一个"change"事件
> 5. View 收到"change"事件后，更新页面

## 项目结构
```
    actions文件夹          //动作
    components文件夹       //组件
    dispatcher文件夹       //派发器
    store文件夹            //数据
```

## 流程
### 不使用Flux项目
````
    　用户点击组件 
    →　触发钩子函数(组件内) 
    →　setState更新状态(组件内)
    →　重新渲染、更新视图　
    state状态、钩子函数中所有逻辑、更新状态在同一个控件内。
````
##　使用Flux项目
````
    　用户点击纯组件MyButton(无state状态)   组件层
    → 触发父组件MyButtonController中的钩子函数(传递text参数)   组件层
    → 执行ButtonActions的addNewItem方法(传递text参数)　 action层
    → 执行AppDispatcher的dispatch方法(传递action对象)   dispatcher层
    → 执行ListStore中的addNewItemHandler和emitChange方法  store层
    → 修改数据   view层
    即: 用户操作
    →向Dispatcher发出一个Action
    →Dispatcher将动作派发到store
    →store更新并发出change事件
    →MyButtonController监听change事件 　
```` 
## 注意
>1. 纯组件与"controller view"组件的分离
>2. 视图、动作、事件、状态的分离
>3. View视图与stores数据解耦
>3. EventEmitter事件监听机制







