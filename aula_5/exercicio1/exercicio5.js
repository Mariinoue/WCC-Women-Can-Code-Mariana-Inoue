function validaMaioridade(anoNascimento){
    if(anoNascimento>18){
        console.log("Liberação autorizada")
    }
      else if(anoNascimento==18){
          console.log("Validar documento de identidade");
        }
       else {
            console.log("ATENÇÃO: Liberação NÃO autorizada");
        }
}

let resultado= validaMaioridade(11)