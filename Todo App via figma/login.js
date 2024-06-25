
function checkemail(email){

    var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return reg.test(email);
}

function passwordcheck(pasword){
        var passwordlength = pasword.length;
        if(passwordlength >=5){
            return true
        }
}



document.querySelector(".show").addEventListener('click', function(){
    const passwordfield = document.querySelector('.password');
    if(passwordfield.type === 'password'){
        
        passwordfield.type = 'text';
        this.textContent  ='hide'
    }
    
    else {
        passwordfield.type = 'password';
        this.textContent  ='show'
       
    }

  });

document.querySelector(".btn").addEventListener("click", function(){
      
const email =document.querySelector(".email").value;
const password = document.querySelector(".password").value;
if(checkemail(email) && passwordcheck(password)){
    window.location.href='add new task.html'

}

})

        // ########## alternatie method

// function login(){
// const email =document.querySelector(".email").value;
// const password = document.querySelector(".password").value;
    

 // if(checkemail(email) && passwordcheck(password)){
 //     window.location.href='add new task.html'

// }
// }