"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var taskList = [{
  id: 1,
  name: "Task 1",
  status: "Pending",
  seconds: 0
}, {
  id: 2,
  name: "Task 2",
  status: "Pending",
  seconds: 0
}];
var timers = {
  current: {}
};

function startTimer(id) {
  if (timers.current[id]) return;
  var count = 0;
  console.log("Start: taskList = ".concat(JSON.stringify(taskList)));
  var interval = setInterval(function () {
    taskList = taskList.map(function (task) {
      return task.id === id ? _objectSpread({}, task, {
        seconds: count + 1
      }) : task;
    });
    console.log("Count ".concat(count + 1, ": taskList = ").concat(JSON.stringify(taskList)));
    count = count + 1;

    if (count > 10) {
      clearInterval(interval);
      delete timers.current[id];
      taskList = taskList.map(function (task) {
        return task.id === id ? _objectSpread({}, task, {
          isPending: false,
          seconds: 10
        }) : task;
      });
      console.log("Completed: taskList = ".concat(JSON.stringify(taskList)));
    }
  }, 1000);
  timers.current[id] = interval;
}

startTimer(1);