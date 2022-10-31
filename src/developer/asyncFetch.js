import { renderInSystems } from "./inSystems"
export async function loadName(uid){
    const url = 'https://create-signup-test-default-rtdb.firebaseio.com/users.json'
    const users = await (await fetch(url)).json()
    const userId = Object.keys(users)
        .map( (id)=>{
            const item = users[id]
            item.id = id
            return item
        }).find( item => item.id === uid)
    const name = userId.username
    const email = userId.email
    renderInSystems(name,email)
}