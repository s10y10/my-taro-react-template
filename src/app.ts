import { Component } from "react";
import "./app.scss";

interface Props {
  children: any;
}
class App extends Component<Props> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
