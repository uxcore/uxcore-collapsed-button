/**
 * CollapsedButton Component Demo for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const CollapsedButton = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick() {
  }

  render() {
    return (
      <div style={{ marginTop: '100px', marginLeft: '100px' }}>
        <CollapsedButton type="button">
          <CollapsedButton.Item onClick={this.handleClick.bind(this)}>
            按钮一
          </CollapsedButton.Item>
          <CollapsedButton.Item onClick={this.handleClick.bind(this)}>
            按钮二
          </CollapsedButton.Item>
          <CollapsedButton.Item onClick={this.handleClick.bind(this)}>
            按钮三
          </CollapsedButton.Item>
        </CollapsedButton>
      </div>
    );
  }
}

module.exports = Demo;
