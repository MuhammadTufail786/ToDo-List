import inquirer from "inquirer";

let todo_list: string[] = [];

let while_condition: boolean = true;

while (while_condition) {
  //----------------------- option -------------------------------------

  let option = await inquirer.prompt([
    {
      type: "list",
      name: "user_option",
      message: " select an option",
      choices: ["add", "remove", "view todo", "Exit"],
    },
  ]);

  //-----------------------Add-----------------------------------------

  if (option.user_option === "add") {
    let ans = await inquirer.prompt([
      {
        type: "input",
        name: "user_ans",
        message: "write something to the add in  the task list",
      },
    ]);

    if (ans.user_ans !== "") {
      todo_list.push(ans.user_ans);
    } else {
      console.log("please write something to the add in the todo list");
    }
  }

  // ---------------------remove---------------------------
  else if (option.user_option === "remove") {
    let remove_choices = await inquirer.prompt([
      {
        type: "list",
        name: "remove_item",
        message: "select item to remove",
        choices: todo_list,
      },
    ]);

    let index_to_remove = todo_list.indexOf(remove_choices.remove_item);
    console.log(index_to_remove);
    
    if (index_to_remove >= 0) {
      todo_list.splice(index_to_remove, 1);
      console.log("you removed: ", remove_choices.remove_item);
      console.log(todo_list);
    }
  } else if (option.user_option === "view todo") {
    console.log(todo_list);
  } else if (option.user_option === "Exit") {
    while_condition = !while_condition;
  }

  //---------------------conformation-------------------------------

  let user_ans = await inquirer.prompt([
    {
      type: "confrim",
      name: "conformation",
      message: "do you want to continue",
      default: true,
    },
  ]);
  if (user_ans.confarmation === false) {
    while_condition = false;
  }
}
