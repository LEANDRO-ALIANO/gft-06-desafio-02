
function calculadoraDePArtidasRankeadas(vitorias, derrotas){

    let calculoRanked =  vitorias - derrotas
    let ranked=""
    
    if(calculoRanked < 10){
        ranked = "Ferro"
        return "O Herói tem de saldo de "+ calculoRanked +" está no nível de" + ranked
    }else if (calculoRanked > 10 && calculoRanked <=20){
       ranked="Bronze"
       return "O Herói tem de saldo de "+ calculoRanked +" está no nível de" + ranked
    }else if (calculoRanked > 20 && calculoRanked <=50){
        ranked="Prata"
        return "O Herói tem de saldo de "+ calculoRanked +" está no nível de" + ranked
    }else if (calculoRanked > 50 && calculoRanked <=80){
       ranked="Ouro"
       return "O Herói tem de saldo de "+ calculoRanked +" está no nível de" + ranked
    }else if (calculoRanked > 80 && calculoRanked <=90){
       ranked="Diamante"
       return "O Herói tem de saldo de "+ calculoRanked +" está no nível de" + ranked
    }else if (calculoRanked > 90 && calculoRanked <=100){
       ranked="Lendario"
       return "O Herói tem de saldo de "+ calculoRanked +" está no nível de" + ranked
    }else{
       ranked="Imortal"
       return "O Herói tem de saldo de "+ calculoRanked +" está no nível de" + ranked
    }
    }
    
    let resultado = calculadoraDePArtidasRankeadas(100,20)
     
    console.log(resultado)