import { Validators } from "./Validators"
import { Form } from "./form"
const SignUP = document.querySelector('#SignUP')
const formSignUp = document.querySelector('.form-SignUp')
const body = document.querySelector('body')
const closeBtn = document.querySelector('.close-form')
const inputSubmitSignUp = document.querySelector('#input-submit-signUp')
const createPerson = document.querySelector('#create-person')

SignUP.addEventListener('click',linkSignUp)
closeBtn.addEventListener('click',linkBtnClose)
inputSubmitSignUp.addEventListener('click',linkSaveForm)


export function linkSignUp(event){
  event.preventDefault()
  formSignUp.style.display='flex'
  body.style.overflow = 'hidden'
 
}
export function linkBtnClose(event){
    event.preventDefault()  
   if(event.target.tagName.toLowerCase() === "path") {
    formSignUp.style.display='none'
    body.style.overflow = ''
   }
}

export function linkSaveForm(event){
    event.preventDefault()
    // const name = createPerson.name.value
    // const familyName = createPerson.family.value 
    // const password = createPerson.password.value
    const person = new Form (createPerson, {
        name:[Validators.required],
        family:[Validators.required],
        password:[Validators.minLength(8)]
    })
    if(person.isValid()) {
        console.log('form is valid')
    }

}




