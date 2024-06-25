console.log("hello world");
function logout(){
    window.location.href='login.html'
}

function ClickTask(){
    window.location.href = 'add new task.html'
}
function CheckIn(){
   const taskinput = prompt("Enter new task");
   if(taskinput === null || taskinput.trim() === ""){
    alert("Please enter a valid task")
    return;
   }
   
   AddTaskToList(taskinput)
}
// If taskinput is null, which means the user clicked "Cancel".
// If taskinput.trim() === "", which means the user entered only whitespace or nothing at all.
// The trim method removes any leading and trailing whitespace from the input

function AddTaskToList(task){

const citites = ['Newyork' ,"Tokyo" ,"Paris","London", "Behrin","Istunbol"];
const states = ["USA","UAE","SA",'NY', 'CA', 'TX', 'FL', 'IL'];
const contouries = ["UK","Japan","France","Germany","Canada"]

const randomcity = citites[Math.floor(Math.random()* citites.length)]
const randomstate = states[Math.floor(Math.random()* states.length)]
const randomcontry =contouries[Math.floor(Math.random()* contouries.length)]

const  randomlocation = `${randomcity} , ${randomstate} , ${randomcontry}`;

const currentlist = document.querySelector(".current")
const listitem = document.createElement('li');

// listitem.textContent = taskinput;

listitem.innerHTML = `
   <div class='check'>
      <input type="checkbox" class="chk-box">
      📍
    
      <span>${task} - ${randomlocation}</span>
    </div>
    `;

    
            // Add event listener to the checkbox
listitem.querySelector(".chk-box").addEventListener("change" , function(){
    if(this.checked ){
        MovetoPrevious(listitem)
    }
})
currentlist.appendChild(listitem);
}


function MovetoPrevious(listitem){
    const previoustask = document.querySelector(".previous")
    previoustask.appendChild(listitem)
}









