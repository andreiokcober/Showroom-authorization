import { Validators } from "./Validators"
import { Form } from "./form"
import { clearFormControl } from "./form"
import { newPersonWithForm } from ".."
import { authPersonWithForm } from ".."

const SignUP = document.querySelector('#SignUP')
const formAuth = document.querySelector('.form-auth')
const body = document.querySelector('body')
const closeBtn = document.querySelector('.close-form')
const inputSubmitSignUp = document.querySelector('#input-submit-signUp')
const inputSubmitSignIn = document.querySelector('#input-submit-signIn')
const createPerson = document.querySelector('#create-person')
const buttonFormSignIn = document.querySelector('#SignIn-form')

SignUP.addEventListener('click',linkButtonSignUp)
closeBtn.addEventListener('click',linkBtnClose)
inputSubmitSignUp.addEventListener('click',clickButtonForm)
inputSubmitSignIn.addEventListener('click',clickButtonForm)
buttonFormSignIn.addEventListener('click',linkSignIn)


 function linkButtonSignUp(event){
  event.preventDefault()
  formAuth.style.display='flex'
  body.style.overflow = 'hidden'   
  choiseButton(event)
}

function linkSignIn(event){
    event.preventDefault()
    formAuth.style.display='flex'
    body.style.overflow = 'hidden'  
    choiseButton(event) 
}
 function linkBtnClose(event){
    event.preventDefault()  
    formAuth.style.display='none'
    body.style.overflow = ''
    for(let key of createPerson){
       if(key.classList.contains('input-sign')) {
        key.value = ''
        clearFormControl(key)
       }
    }
}

 async function clickButtonForm(event){
    event.preventDefault()
    const person = new Form (createPerson, {
        email:[Validators.required],
        password:[Validators.minLength(8)]
    })
    if(person.isValid()) {
         const formPerson = {
            date:new Date().toLocaleDateString(),
            ...person.value()
        }
        if(event.target.id.toLowerCase() === 'input-submit-signup'){
            newPersonWithForm(formPerson)
        } else if(event.target.id.toLowerCase() === 'input-submit-signin') {
            authPersonWithForm(formPerson)
        }
        
          person.clear() 
    }
}

function choiseButton(event){
    if(event.target.id.toLowerCase() === 'signin-form') {
    inputSubmitSignUp.style.display = 'none'
    inputSubmitSignIn.style.display = 'inline-block'  
   } else{
    inputSubmitSignUp.style.display = 'inline-block'
    inputSubmitSignIn.style.display = 'none' 
   }
}




