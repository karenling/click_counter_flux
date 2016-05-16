var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher');

var _clickCount = 0,
    _handlers = [];

var ClickStore = new Store(dispatcher);

ClickStore.count = function() {
  return _clickCount;
};

ClickStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'INCREMENT_COUNTER':
      _clickCount++;
      ClickStore.__emitChange();
  }
};
// var ClickStore = {
//   count: function () {
//     return _clickCount;
//   },
//   increment: function(){
//     _clickCount++;
//     ClickStore.changed();
//   },
//   addChangeHandler: function(handler){
//     _handlers.push(handler);
//   },
//   removeChangeHandler: function(handler){
//     var idx = _handlers.indexOf(handler);
//     if (idx !== -1){
//       _handlers.splice(idx, 1);
//     }
//   },
//   changed: function(){
//     _handlers.forEach(function(handler){
//       handler();
//     });
//   }
// };

module.exports = ClickStore;
