import { Validators } from "./Validators"
import { Form } from "./form"
import { clearFormControl } from "./form"
import { newPersonWithForm } from ".."
import { authPersonWithForm } from ".."

const SignUP = document.querySelector('#SignUP')
export const formAuth = document.querySelector('.form-auth')
export const body = document.querySelector('body')
const closeBtn = document.querySelector('.close-form')
const inputSubmitSignUp = document.querySelector('#input-submit-signUp')
const inputSubmitSignIn = document.querySelector('#input-submit-signIn')
const createPerson = document.querySelector('#create-person')
const buttonFormSignIn = document.querySelector('#SignIn-form')
const itemBaseForm = document.querySelectorAll('.input-base')

SignUP.addEventListener('click',linkButtonSignUp)
closeBtn.addEventListener('click',linkBtnClose)
inputSubmitSignUp.addEventListener('click',clickButtonForm)
inputSubmitSignIn.addEventListener('click',clickButtonForm)
buttonFormSignIn.addEventListener('click',linkSignIn)



 function linkButtonSignUp(event){
  event.preventDefault()
  formAuth.style.display='flex'
  body.style.overflow = 'hidden'
  for(let i of itemBaseForm){
    i.style.display = 'inline-block'
    i.closest('.form-control').style.display = 'block'
    }
  choiseButton(event)
}

export function linkSignIn(event){
    event.preventDefault()
    closeBody() 
    for(let i of itemBaseForm){
    i.style.display = 'none'
    i.closest('.form-control').style.display = 'none'
    }   
    choiseButton(event) 
}
 function linkBtnClose(event){
    event.preventDefault()  
    openBody()
    for(let key of createPerson){
       if(key.classList.contains('input-sign')) {
        key.value = ''
        clearFormControl(key)
       }
    }
}

export function openBody(){
    formAuth.style.display='none'
    body.style.overflow = ''
}
function closeBody(){
    formAuth.style.display='flex'
    body.style.overflow = 'hidden' 
}

 async function clickButtonForm(event){
    event.preventDefault()
   const person =  corection(event)
  
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

function corection(event){
if(event.target.dataset.auth){
            const person = new Form (createPerson, {
             email:[Validators.required],
             password:[Validators.minLength(8)]
            
        })
         return person
       
    } else {
            const person = new Form (createPerson, {
             email:[Validators.required],
             password:[Validators.minLength(8)],
             name:[Validators.required]
            
        })
         return person
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




