import {loadName} from "./asyncFetch"
document.addEventListener('DOMContentLoaded', localVizit)
export  function localVizit(){
    
    const vizit = localStorage.getItem('vizit')
    const localId = localStorage.getItem('localId')
    
   if(vizit === 'true'){

        loadName(localId)  
        console.log('good')
   }else{
        buttonMenuOpen()
        personAcount.classList.remove('show')
        personAcount.classList.add('hide') 
        console.log('bad')
   }
}

const personAkText = document.querySelector('.person-ak-text')
const buttonMenu = document.querySelector('.button-menu')
const personAcount = document.querySelector('.person-acount')

const buttonPersonAk = document.querySelector('.userToolsToogle').addEventListener('click',()=>{
    if(personAkText.classList.contains('hide')) {
        personAcountOpen()
        
    } else{
        personAcountClose()
    }
    
})


function personAcountOpen(){
    personAkText.classList.remove('hide')
    personAkText.classList.add('show')
}
function personAcountClose(){
    personAkText.classList.remove('show')
    personAkText.classList.add('hide')
}
function buttonMenuClose(){
   buttonMenu.classList.remove('show')
   buttonMenu.classList.add('hide')
}
function buttonMenuOpen(){
   buttonMenu.classList.remove('hide')
   buttonMenu.classList.add('show')
}
export function renderInSystems(name,email,uid = []){
    localStorage.setItem('localId',`${uid}`)
    
   buttonMenuClose()
   personAcount.classList.remove('hide')
   personAcount.classList.add('show') 
    const nameUs = name
    const emailUs = email

   const spanName = document.querySelector('.userToolsText').innerHTML = nameUs
   const userName = document.querySelector('.user-email').innerHTML = emailUs
   
   const buttonExit = document.querySelector('.buttonExit').addEventListener('click',()=>{
        // const spanName = document.querySelector('.userToolsText').innerHTML = ''
        // const userName = document.querySelector('.user-email').innerHTML = ''
        localStorage.setItem('vizit',false)
        localStorage.setItem('localId', '')
        personAcountClose()
        personAcount.classList.remove('show')
        personAcount.classList.add('hide')
        buttonMenuOpen()

   })
}





