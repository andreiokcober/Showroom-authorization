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
export function renderInSystems(name,email){
   buttonMenuClose()
   personAcount.classList.remove('hide')
   personAcount.classList.add('show') 

   const spanName = document.querySelector('.userToolsText').innerHTML = name
   const userName = document.querySelector('.user-email').innerHTML = email
   
   const buttonExit = document.querySelector('.buttonExit').addEventListener('click',()=>{
        const spanName = document.querySelector('.userToolsText').innerHTML = ''
        const userName = document.querySelector('.user-email').innerHTML = ''
        personAcountClose()
        personAcount.classList.remove('show')
        personAcount.classList.add('hide')
        buttonMenuOpen()

   })
}





