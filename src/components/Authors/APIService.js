
export default class APIService{
    static updateAuthor(id, body) {
        return fetch(`api/v1/author/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static insertAuthor(body){
        return fetch(`api/v1/author`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }

    static DeleteAuthor(id) {
        return fetch(`api/v1/author/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

}
