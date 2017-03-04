import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
/*
*                                         组件
*                            container                    component
*        目的         如何工作(数据获取，状态更新)        如何显示(样式，布局)
* 是否在Redux数据流中            是                             否
*       读取数据            从Redux获取state               从props获取数据
*       修改数据            从Redux派发actions           从props调用回调函数
*       实现方式            有react-redux生成                   手写
* */

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
