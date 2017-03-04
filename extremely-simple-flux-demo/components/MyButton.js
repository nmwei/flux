/**
 * Created by nmw on 2017/1/8.
 */
var React =  require('react');

/*
* 该组件是一个纯组件，只有props属性，实现了组件与数据的分离
*   该组件的状态和事件处理函数通过父组件MyButtonController处理
*   不含有任何状态的纯组件方便测试和复用
*
* 问题: 该组件不是以React.createClass()的方式创建，向外提供的是一个函数
*   MyButtonController父组件会默认执行该函数，并传递相应的props。
* */
module.exports = function (props) {
  //该组件只有一个逻辑:当用户点击，调用委托给父组件处理的this.createNewItem方法,向Dispatcher发出一个Action。
    var items = props.items;
    var itemHtml = items.map(function (item, i) {
        return <li key={i}>{item}</li>;
    })
    return(
      <div>
          <ul>{itemHtml}</ul>
          <button onClick={props.whenClick}>New Item</button>
      </div>
    )

};

