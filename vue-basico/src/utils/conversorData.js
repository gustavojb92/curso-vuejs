import moment from "moment";

const aplicarMascaraEmDataISO = (data) => {
    if(data){
        return moment(data).locale('pt-br').format("DD/MM/YYYY")
    }
    return undefined
}

const aplicarMascaraEmDataHoraISO = (data) =>{
    if(data){
    return moment(data).locale('pt-br').format("DD/MM/YYYY HH:mm:ss")
    }
    return undefined
}
export default {aplicarMascaraEmDataHoraISO,  aplicarMascaraEmDataISO};