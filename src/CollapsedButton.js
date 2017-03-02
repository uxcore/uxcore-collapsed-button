/**
 * CollapsedButton Component for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
class CollapsedButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>uxcore-collapsed-button component</div>
    );
  }
}

CollapsedButton.defaultProps = {
};


// http://facebook.github.io/react/docs/reusable-components.html
CollapsedButton.propTypes = {
};

CollapsedButton.displayName = 'CollapsedButton';

module.exports = CollapsedButton;
