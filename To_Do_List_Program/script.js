let command = prompt("What would you like to do?");
var todoArray = [];
while(command !== "quit") {

    if(command === "new") {
        let todoitem = prompt("Enter A New Todo Item...");
        todoArray.push(todoitem);
        console.log(`${todoitem} Entered in To Do Lists`);

        command = prompt("What would you like to do?");
    }
    else if(command === "list") {
        let counter = 0;
        console.log("**********************");
        console.log("Listing All the Todo Items");
            for (let item of todoArray) {
                console.log(`${counter} : ${item}`);
                counter++;
            }
        console.log("**********************");
        command = prompt("What would you like to do?");
    } 
    else if(command === "delete") {
        let index = prompt("Enter the index of Todo Item to Delete");
        if(index > todoArray.length-1) {
            console.log("Entered Invalid Index");
            break;
        }
        else {
            let deletedValue = todoArray.splice(index,1);
            console.log(`Deleted ${deletedValue} from Todo List`);
            command = prompt("What would you like to do?");
        }
    }
    else {
        command = prompt("Invalid Action!!! Try Again...");
    }
}
    console.log("You Chose to quit the program");