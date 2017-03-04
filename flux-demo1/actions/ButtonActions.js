/**
 * Created by nmw on 2017/1/8.
 */
/*
* 每个Action都是一个对象，包含一个actionType属性（说明动作的类型）和一些其他属性（用来传递数据）。在这个Demo里面，ButtonActions 对象用于存放所有的Action。
* */

var AppDispatcher = require('../dispatcher/AppDispatcher');
module.exports = {
    addNewItem: function (text) {
        //AppDispatcher，把动作ADD_NEW_ITEM派发到Store。
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    },
};

/*
*     用户点击MyButton组件(无状态组件)中的按钮
 *  → 执行MyButtonController父组件(controller view组件)中的createNewItem方法
 *  → 执行ButtonActions(Action)的addNewItem方法
 *  → 执行
* */