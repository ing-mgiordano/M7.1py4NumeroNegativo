function showNegativeNum() {

    const userNum1 = parseInt(document.getElementById('input-num1').value)
    const userNum2 = parseInt(document.getElementById('input-num2').value)

    
    const oneNegativeNum = userNum1 < 0 || userNum2 < 0
    const positiveNum = userNum1 >= 0 && userNum2 >= 0
    
  
    if(oneNegativeNum) {
        document.getElementById('result').innerHTML = `Uno o ambos de los numeros son negastivos. (${userNum1}, ${userNum2})`
    } 
    if(positiveNum) {
        document.getElementById('result').innerHTML = `Ningun numero negativo. (${userNum1}, ${userNum2})`
    }
  
} 