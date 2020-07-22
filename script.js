document.getElementById('plusBtn').addEventListener('click', function(){
    let inputStr = document.getElementById('input1').value;
    let inputNum = parseInt(inputStr);
    let PlusInputVal = inputNum + 1;
    document.getElementById('input1').value = PlusInputVal;
})

document.getElementById('minusBtn').addEventListener('click', function () {
    let inputStr = document.getElementById('input1').value;
    let inputNum = parseInt(inputStr);
    if (inputNum > 1){
        let MinusInputVal = inputNum - 1;
        document.getElementById('input1').value = MinusInputVal;
    }  
})