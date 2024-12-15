type Level = "low" | "medium" | "hard";

interface Task {
  name: string;
  level: Level;
}

class Employee {
  @withTask({ name: "Task1", level: "medium" })
  tasks: Task[] = [{ name: "Task0", level: "hard" }];

  @withComplicatedTask()
  extraTasks: Task[] = [];
}

const employee = new Employee();
console.log(employee);

function withTask(task: Task) {
  return function <T, V extends Task[]>(
    target: undefined,
    contect: ClassFieldDecoratorContext
  ) {
    return function (fieldValue: V) {
      fieldValue.push(task);
      return fieldValue;
    };
  };
}

function withComplicatedTask() {
  return withTask({ name: "Task1", level: "medium" });
}
