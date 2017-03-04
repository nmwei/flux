/**
 * Created by nmw on 2017/1/8.
 */
var EventEmitter = require('events');
var assign = require('object-assign');
//保存整个应用的状态, 所有数据都存放在这里。
/*
* Node中EventEmitter对象的使用方法？
* ListStore继承了EventEmitter.prototype，因此就能使用ListStore.on()和ListStore.emit()，来监听和触发事件了。
* */


module.exports =assign({}, EventEmitter.prototype, {
    //items是MyButtonController控件的状态
    items : [],

    //保存条目
    getAll: function () {
        return this.items;
    },

    //读取所有条目
    addNewItemHandler: function (text) {
        this.items.push(text);
    },

    //向 View 发送一个"change"事件
    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }

})