var dispatcher = require('../dispatcher');

module.exports = {
  incrementCounter: function() {
    dispatcher.dispatch({
      actionType: 'INCREMENT_COUNTER'
    });
  }
};
