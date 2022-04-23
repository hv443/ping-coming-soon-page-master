const error = document.querySelector('.error')
const notifyBtn = document.getElementById('notifyBtn')
const input = document.getElementById('mail')


notifyBtn.addEventListener('click',(e)=>{

    e.preventDefault();

    let inputText = input.value;
    let mailFormate =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


   

    if(inputText.match(mailFormate)){

        error.classList.remove('error-display')
        input.style.border = "1px solid hsl(223, 100%, 88%)"
        alert('Subscribed')
       
    }
    else if(inputText === ""){
        error.textContent = "Please enter your email address"
        error.classList.add('error-display')
        input.style.border = "1px solid red"
    }
    else{
        error.textContent = "Please provide a valid email address"
        error.classList.add('error-display')
        input.style.border = "1px solid red"
    }
   
})

