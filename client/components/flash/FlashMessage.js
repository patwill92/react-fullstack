import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var FlashMessage = createReactClass({
  onClick(){
    this.props.deleteFlashMessage(this.props.message.id);
  },
  render(){
    const { id, type, text } = this.props.message;
    return (
      <div className={classNames('alert', {'alert-success': type === 'success', 'alert-danger': type === 'error'})}>
        <button onClick={this.onClick} className="close">
          <span>&times;</span>
        </button>
        {text}
      </div>
    )
  }
});

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;