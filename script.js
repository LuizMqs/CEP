document.getElementById("text").addEventListener("keyup", function () {
    let cep = document.getElementById("text").value
    let number = ""

    for (let i = 0; i < cep.length; i++) {
        if (cep[i] == Number(cep[i])){
            if (number.length <= 8) {
                if (number.length == 5) {
                    number += "-"
                }
                number += cep[i]  
            }
        }
    }

    document.getElementById("text").value = number
   
});
