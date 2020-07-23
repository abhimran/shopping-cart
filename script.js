// Product 1 Plus Buttton

document.getElementById('plusBtn').addEventListener('click', function () {

    // Increase Plus value
    let inputStr = document.getElementById('input1').value;
    let inputNum = parseInt(inputStr);
    let PlusInputVal = inputNum + 1;
    document.getElementById('input1').value = PlusInputVal;

    //Increase product value
    let firstStr = document.getElementById('firstVal').innerText;
    let firstNum = parseInt(firstStr);
    let totalVal = firstNum + 1219;
    document.getElementById('firstVal').innerText = totalVal;

    // Update sub total
    let subTotal = document.getElementById('subTotal').innerText;
    let subTotalNum = parseInt(subTotal);
    let updateSubTotal = subTotalNum +  1219;
    document.getElementById('subTotal').innerText = updateSubTotal;

    // Add Extra tax
    let tax = document.getElementById('tax').innerText;
    let taxNum = parseInt(tax);
    let updateTaxNum = taxNum +4;
    document.getElementById('tax').innerText = updateTaxNum;

    // Update total
    let total = document.getElementById('total').innerText;
    let totalNum = parseInt(total);
    let updateTotal = updateSubTotal + updateTaxNum;
    document.getElementById('total').innerText = updateTotal;
})

// Product 2 Plus Button

document.getElementById('plusBtn1').addEventListener('click', function () {

 // Increase Plus value
    let inputStr1 = document.getElementById('input2').value;
    let inputNum1 = parseInt(inputStr1);
    let PlusInputVal1 = inputNum1 + 1;
    document.getElementById('input2').value = PlusInputVal1;

    //Increase product value
    let firstStr1 = document.getElementById('secondVal').innerText;
    let firstNum1 = parseInt(firstStr1);
    let totalVal1 = firstNum1 + 59;
    document.getElementById('secondVal').innerText = totalVal1;

    // Update sub total
    let subTotal = document.getElementById('subTotal').innerText;
    let subTotalNum = parseInt(subTotal);
    let updateSubTotal = subTotalNum + 59;
    document.getElementById('subTotal').innerText = updateSubTotal;

    // Add Extra tax
    let tax = document.getElementById('tax').innerText;
    let taxNum = parseInt(tax);
    let updateTaxNum = taxNum + 1;
    document.getElementById('tax').innerText = updateTaxNum;

    // Update total
    let total = document.getElementById('total').innerText;
    let totalNum = parseInt(total);
    let updateTotal = updateSubTotal + updateTaxNum;
    document.getElementById('total').innerText = updateTotal;

})

// Product 1 minus Button 

document.getElementById('minusBtn').addEventListener('click', function () {
    let inputStr = document.getElementById('input1').value;
    let inputNum = parseInt(inputStr);
    if (inputNum > 1) {
        let MinusInputVal = inputNum - 1;
        document.getElementById('input1').value = MinusInputVal;

        //Decrease product value
        let firstStr = document.getElementById('firstVal').innerText;
        let firstNum = parseInt(firstStr);
        let totalVal = firstNum - 1219;
        document.getElementById('firstVal').innerText = totalVal;

        // Update sub total
        let subTotal = document.getElementById('subTotal').innerText;
        let subTotalNum = parseInt(subTotal);
        let updateSubTotal = subTotalNum - 1219;
        document.getElementById('subTotal').innerText = updateSubTotal;

        // Remove Extra tax
        let tax = document.getElementById('tax').innerText;
        let taxNum = parseInt(tax);
        let updateTaxNum = taxNum - 4;
        document.getElementById('tax').innerText = updateTaxNum;

        // Update total
        let total = document.getElementById('total').innerText;
        let totalNum = parseInt(total);
        let updateTotal = updateSubTotal + updateTaxNum;
        document.getElementById('total').innerText = updateTotal;
    }


})

// Product 2 minus Button
document.getElementById('minusBtn1').addEventListener('click', function () {

    let inputStr1 = document.getElementById('input2').value;
    let inputNum1 = parseInt(inputStr1);
    if (inputNum1 > 1) {
        let PlusInputVal1 = inputNum1 - 1;
        document.getElementById('input2').value = PlusInputVal1;

         //Decrease product value
        let firstStr1 = document.getElementById('secondVal').innerText;
        let firstNum1 = parseInt(firstStr1);
        let totalVal1 = firstNum1 - 59;
        document.getElementById('secondVal').innerText = totalVal1;

        // Update sub total
        let subTotal = document.getElementById('subTotal').innerText;
        let subTotalNum = parseInt(subTotal);
        let updateSubTotal = subTotalNum - 59;
        document.getElementById('subTotal').innerText = updateSubTotal;

        // Remove Extra tax
        let tax = document.getElementById('tax').innerText;
        let taxNum = parseInt(tax);
        let updateTaxNum = taxNum - 1;
        document.getElementById('tax').innerText = updateTaxNum;

        // Update total
        let total = document.getElementById('total').innerText;
        let totalNum = parseInt(total);
        let updateTotal = updateSubTotal + updateTaxNum;
        document.getElementById('total').innerText = updateTotal;
    }
})


// 