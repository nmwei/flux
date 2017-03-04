var React = require('react');
var ReactDOM = require('react-dom');
var MyButtonController = require('./components/MyButtonController');

ReactDOM.render(
  <MyButtonController />,
    //"controller view"组件只用来保存状态，然后将其传递给子组件。
  document.querySelector('#example')
);

/*
* 该文件内容与不使用flux一样，将一个React组件渲染到页面中。
* */
