
const aplicarMascaraParaMoedaSemS = (valor) =>{
    if(isNaN(valor)){
        return 0;
    }
    return Number(valor).toLocaleString('pt-br', {minimumFractionDigits: 2});
}

const aplicarMascaraParaReal = (valor) =>{
    if(isNaN(valor)){
        return 0;
    }
    return Number(valor).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

export default {
    aplicarMascaraParaMoedaSemS, 
    aplicarMascaraParaReal
}