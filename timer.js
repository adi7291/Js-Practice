let taskList = [
  { id: 1, name: "Task 1", status: "Pending", seconds: 0 },
  { id: 2, name: "Task 2", status: "Pending", seconds: 0 },
];
let timers = { current: {} };

function startTimer(id) {
  if (timers.current[id]) return;

  let count = 0;
  console.log(`Start: taskList = ${JSON.stringify(taskList)}`);
  let interval = setInterval(() => {
    taskList = taskList.map((task) =>
      task.id === id ? { ...task, seconds: count + 1 } : task
    );
    console.log(`Count ${count + 1}: taskList = ${JSON.stringify(taskList)}`);
    count = count + 1;
    if (count > 10) {
      clearInterval(interval);
      delete timers.current[id];
      taskList = taskList.map((task) =>
        task.id === id ? { ...task, isPending: false, seconds: 10 } : task
      );
      console.log(`Completed: taskList = ${JSON.stringify(taskList)}`);
    }
  }, 1000);

  timers.current[id] = interval;
}
startTimer(1);
