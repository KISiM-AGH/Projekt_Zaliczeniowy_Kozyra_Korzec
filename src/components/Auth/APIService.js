export default class APIService{
    static registerUser(body){
        return fetch(`api/v1/auth/register`, {
            method: 'post',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(body)
        })
            .then(resp => {
                if(resp.status === 409)return resp.status
                return resp.json()
            })

    }
}