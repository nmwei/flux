/**
 * Created by nmw on 2017/1/8.
 */

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');
//AppDispatcher.register()方法用来登记各种Action的回调函数。

AppDispatcher.register(function (action) {
    switch(action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;
        default:
            // no op
    }
})

module.exports = AppDispatcher;

/* Dispatcher收到ADD_NEW_ITEM动作，就会执行回调函数，对ListStore进行操作。
 * 注意: Dispatcher 只用来派发 Action，不应该有其他逻辑。
 */

// Dispatcher(派发器)收到Action(动作)后要求 Store(数据)更新




