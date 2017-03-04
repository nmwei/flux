/**
 * Created by nmw on 2017/1/8.
 */

/*
MyButtonController组件只用来保存状态，然后将状态传递给子组件MyButton
*/
var React = require('react');
var ListStore = require('../stores/ListStore');
var ButtonActions = require('../actions/ButtonActions');
var MyButton = require('./MyButton');

/*
* 问题: (1) MyButtonController组件与MyButton组件的关系(纯组件与状态组件)
*      (2) createNewItem 函数的作用(生成action)
* */

module.exports = React.createClass({

    /*
    * 该函数在当MyButton组件渲染的DOM元素被点击时触发
    * 将'new item'作为实参，执行ButtonActions对象的addNewItems方法，
    * */
    createNewItem: function (event) {
        ButtonActions.addNewItem('new item');
    },
    /*
    * MyButton组件与MyButtonController组件的DOM结构相同
    * MyButtonController组件用来处理MyButton组件的状态和事件
    * (1)父组件(MyButtonController)通过委托的方式将事件处理函数传递给子组件(MyButton)
    * */
    render: function () {
        return <MyButton  whenClick={this.createNewItem} items={this.state.items}/>
    },

    /*
    * 当MyButtonController 发现 Store 发出 change 事件，就会调用 this._onChange 更新组件状态，从而触发重新渲染。
    * */



    getInitialState: function () {
        return {
            items: ListStore.getAll()
        };
    },

    componentWillMount: function () {
        ListStore.addChangeListener(this._onChange);
    },

    componentWillUnMount: function () {
        ListStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            items: ListStore.getAll()
        })
    }

});
