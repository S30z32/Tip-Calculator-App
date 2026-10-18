document.querySelector('#calcBttn').addEventListener('click', tipCalculator)

function tipCalculator(percentage){
let billAmount =  document.querySelector('#billAmount').value;
let tipAmount= document.querySelector('#tipAmount').value;
let peopleCount = document.querySelector('#peopleAmount').value;
let finalCalc = document.querySelector('#resultSec').innerText
let tipTotal = billAmount + (billAmount*tipAmount) 

percentage = tipAmount 
tipAmount = tipAmount / 100
let tipTolMoney= tipAmount *billAmount
tipTotal = tipTotal / peopleCount


document.querySelector('#tipTotal').innerText = `$${tipTolMoney}`
document.querySelector('#billAm').innerText = `$${billAmount}`
let n1 = parseFloat(tipTolMoney)
let n2 = parseFloat(billAmount)
finalCalc = (n1 + n2) / peopleCount
document.querySelector('#totalResult').innerText = `$${finalCalc}`
 console.log(tipAmount)
 console.log(tipTotal)
} 




/* document.querySelector('#yell').addEventListener('click', convert)

function convert() {
   let temp = document.querySelector('#sel').value
   
  temp = temp * 9/5 +32
   document.querySelector('#placeToYell').innerText = temp
  
} */
 