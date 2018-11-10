import React from 'react';

import 'antd/dist/antd.css'
import './index.scss';

class Page extends React.Component {
  static Body(props) {
    return <div className="body-div">{props.children}</div>;
  }
  render() {
    return <div className={`page-div ${this.props.className}`}>{this.props.children}</div>;
  }
}

export default Page;
