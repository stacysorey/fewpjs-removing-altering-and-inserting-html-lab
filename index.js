// Write your code here!

// no longer has DOM node 'main#main
// has a 'newHeader' variable that points to node 'h1#victory
// has a 'newHeader' variable that points to node 'h1#victory
// has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside

const testVar = "hi";

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
