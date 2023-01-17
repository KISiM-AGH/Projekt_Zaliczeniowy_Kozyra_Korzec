export default class APIService{
    static loginUser(body){
        return fetch(`api/v1/auth/login`, {
            method: 'post',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(body)
        })
        .then((resp) =>{
            console.log(resp)
         if(resp.ok) return resp.json()
         if(!resp.ok) return resp.status
        })
    }
}