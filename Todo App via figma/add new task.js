// console.log('hello world')

// ###########333 function clicktask  and clicklocation ###########3
function ClickLocation(){
    window.location.href = 'location.html'
}

function ClickTask(){
    window.location.href = 'add new task.html'
}

var model = document.querySelector(".mymodel");
var addnewtaskbtn = document.querySelector(".Add-new-task-btn")

// Function to show the modal
// "flex and block"  ka mtlb  screen pe pop up show ho jay
function showModal(){
    model.style.display = 'block'
}
// Function to close the modal
function closeModal(){
    // document.querySelector(".mymodel").classList.add(".hidden")
    model.style.display = 'none'
}

function logout(){
    window.location.href='login.html'
}
// .............js for task add from modal...................//

document.querySelector(".Add-new-task-btn").addEventListener("click" , function(){
    document.querySelector(".new-task-modal").classList.remove("mymodel")
})

document.querySelector(".cancel ").addEventListener("click" , function(){
    document.querySelector(".new-task-modal").classList.add("mymodel")
})

document.querySelector(".container").addEventListener("submit" ,function(event){
    event.preventDefault();
    
    const summary = document.querySelector(".add-summary").value;
    const discription = document.querySelector(".add-discription").value;
    const duedate = document.querySelector(".add-date").value;

    AddTaskToList(summary , discription , duedate)
   // clear form
     document.querySelector(".container").reset()
  // hide form
  
//   document.querySelector(".new-task-modal").classList.add("mymodel")
});


function AddTaskToList(summary , discription , duedate){
    const Incompletelist = document.querySelector(".IncompleteTasks")
    // Get the current time
    const now = new Date();
    const time = now.toLocaleTimeString(); // Get the current time in a readable format

    // Combine date and time
    const dateTime = `${duedate} ${time}`;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
    <div class='check'>
      <input type="checkbox" class="chk-box">
      <span class='text'>${summary}</span>
    </div>
   <img src="clock.png" alt="">${dateTime}
   `;
   taskItem.querySelector(".chk-box").addEventListener("change" , function(){
      if(this.checked){
          MovetoComplete(taskItem)
      }
   })
   Incompletelist.appendChild(taskItem)
};

function MovetoComplete(taskItem){
    const completedTasks = document.querySelector(".completedTasks");
    const completeditem = document.createElement("li");
    completeditem.innerHTML = taskItem.querySelector(".check").outerHTML;
    completedTasks.appendChild(completeditem);
    taskItem.remove();
}




// remind me later funtionality and skip functionality...............................


function ShoeReminderPopup(){
    var popupmenu = document.querySelector(".pop-up");
    popupmenu.style.display = 'block'
}

function RemindMeLater(){
    var popupmenu = document.querySelector(".pop-up");
    popupmenu.style.display = 'none'

    var remindtimeout = 5*5*100;
    setTimeout(ShoeReminderPopup , remindtimeout);
}
function ClosePopUp(){
    
    var popup = document.querySelector(".pop-up");
    // var Skip = document.querySelector(".Skip");
    popup.style.display = 'none'

}








