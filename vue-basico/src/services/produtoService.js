import api from "./urlAPI";

const obterTodos =()=>{
    return new Promise((resolve, reject)=>{
        return api.get('/produtos')
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

const obterPorId = (id) =>{
    return new Promise((resolve, reject)=>{
        return api.get(`/produtos/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

const cadastrar = (produto) =>{
    return new Promise((resolve, reject)=>{
        return api.post(`/produtos`, produto)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

const atualizar = (produto) =>{
    return new Promise((resolve, reject)=>{
        return api.put(`/produtos/${produto.id}`, produto)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

const deletar = (id) =>{
    return new Promise((resolve, reject)=>{
        return api.delete(`/produtos/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

export default {
    obterTodos, 
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}