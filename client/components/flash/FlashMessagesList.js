import React from 'react';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteFlashMessage } from '../../actions/flashMessages';

import FlashMessage from './FlashMessage';

var FlashMessagesList = createReactClass({
  render(){
    const messages = this.props.messages.map(message => <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>
    );
    return (
      <div>{messages}</div>
    )
  }
});

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);