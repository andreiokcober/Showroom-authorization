const buttonSignInForm = document.querySelector('#SignIn-form')




buttonSignInForm.addEventListener('click', openSignInForm)

function openSignInForm(event){
    event.preventDefault()
   console.log(event.target) 

}