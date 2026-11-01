let inputBox = document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");
let completedcounter = document.getElementById("completed-counter");
let uncompletedcounter = document.getElementById("uncompleted-counter");
 
function addTask(){
    let task = inputBox.value.trim();
    if(!task){
        alert("no value");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML =

    listcontainer.appendChild(li);
    li.querySelector(".edit-btn");
    const checkbox = li.querySelector("input");
    const editbtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deletebtn = li.querySelector(".delete-btn");
    checkbox.addEventListener("click", () => {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
});
    editbtn.addEventListener("click", () => {
       let result = window.prompt("Edit Task:", taskSpan.textContent);
        if (result == null){
            return ;
        }
        taskSpan.textContent = result;
        li.classList.remove("completed");
        checkbox.checked = false;
        updateCounters();
    });
    deletebtn.addEventListener("click", () => {
        let answer = window.confirm("are u sure ?");
        if (answer == false){
            return ;
        }
        else{
            li.remove();
        }
        updateCounters()
    });
    taskSpan.addEventListener("click", () => {});
    return task;
}
function updateCounters() {
    const done = document.querySelectorAll("/* selector for completed li */").length;
    const todo = document.querySelectorAll("/* selector for not-completed li */").length;
    completedCounter.textContent = /* done */;
    uncompletedCounter.textContent = /* todo */;
}