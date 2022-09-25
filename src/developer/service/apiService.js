class Apiservice {
    constructor(fireBaseUrl){
        this.url = fireBaseUrl
    }
   async createPerson(person){
        try{
            const request = new Request(this.url + 'person.json',{
                method:'post',
                body:JSON.stringify(person)
            })
            const response = await fetch(request)
            return await response.json()
        }catch(error){
            console.error(error)
        }
        
    }
}

export const apiServise = new Apiservice('https://create-signup-test-default-rtdb.firebaseio.com/')