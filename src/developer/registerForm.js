import { Validators } from "./Validators"
import { Form } from "./form"
import { clearFormControl } from "./form"
import { apiServise } from "./service/apiService"
import { newPersonWithForm } from ".."

const SignUP = document.querySelector('#SignUP')
const formSignUp = document.querySelector('.form-SignUp')
const body = document.querySelector('body')
const closeBtn = document.querySelector('.close-form')
const inputSubmitSignUp = document.querySelector('#input-submit-signUp')
const createPerson = document.querySelector('#create-person')

SignUP.addEventListener('click',linkSignUp)
closeBtn.addEventListener('click',linkBtnClose)
inputSubmitSignUp.addEventListener('click',linkSaveForm)

 function linkSignUp(event){
  event.preventDefault()
  formSignUp.style.display='flex'
  body.style.overflow = 'hidden'   
//  document.querySelector('.form-SignUp').insertAdjacentHTML('afterbegin',html)
}
 function linkBtnClose(event){
    event.preventDefault()  
    formSignUp.style.display='none'
    body.style.overflow = ''
    for(let key of createPerson){
       if(key.classList.contains('input-sign')) {
        key.value = ''
        clearFormControl(key)
       }
    }
}

 async function linkSaveForm(event){
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
        newPersonWithForm(formPerson)
        // await apiServise.createPerson(formPerson)
        person.clear() 
           
    }
    

}




