const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function criaPares(valoresNum){
    for(let indice = 0; indice < valoresNum.length; indice++) {

        if(valoresNum[indice]%2==0){
            
            console.log(valoresNum[indice]);
        }else{
            console.log("--");
        }
    }
}

var par= criaPares(valoresNum)