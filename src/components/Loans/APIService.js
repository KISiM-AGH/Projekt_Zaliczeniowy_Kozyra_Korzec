
export default class APIService{
    static updateLoan(id, body) {
        return fetch(`api/v1/loans/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static insertLoan(body){
        return fetch(`api/v1/loans`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static DeleteLoan(id) {
        return fetch(`api/v1/loans/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    static DeleteUser(id) {
        return fetch(`api/v1/auth/delete/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

}
