export default class APIService{

    static updateBook(id, body){
        return fetch(`api/v1/book/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static insertBook(body){
        return fetch(`api/v1/book`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static deleteBook(id) {
        return fetch(`api/v1/book/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    static loanBook(id){
        return fetch(`api/v1/loans/${id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }



}