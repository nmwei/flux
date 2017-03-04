/**
 * Created by nmw on 2017/1/8.
 */

var React = require('react');
var ZiComponent = function (props) {
    debugger;

  return(
      <h1>{props.text}</h1>
  )
};
module.exports = React.createClass({
    render: function () {
        return(
            <div>
                父组件
                <ZiComponent  text="子组件"/>
            </div>
        )
    }
})
