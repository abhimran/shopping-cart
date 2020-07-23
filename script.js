let updateSubTotal;
let updateTaxNum;

//Plus Buttton
function increasePlus(id) {
  let inputStr = document.getElementById(id).value;
  let inputNum = parseInt(inputStr);
  let PlusInputVal = inputNum + 1;
  document.getElementById(id).value = PlusInputVal;
}
// product value
function CustomizeProductval(id, ProductVal) {
  let firstStr = document.getElementById(id).innerText;
  let firstNum = parseInt(firstStr);
  let totalVal = firstNum + ProductVal;
  document.getElementById(id).innerText = totalVal;
}
// sub total
function CustomizeSubTotal(id, ProductVal) {
  let subTotal = document.getElementById(id).innerText;
  let subTotalNum = parseInt(subTotal);
  updateSubTotal = subTotalNum + ProductVal;
  document.getElementById(id).innerText = updateSubTotal;
}
// Extra tax
function CustomizeExtraTex(id, textAmount) {
  let tax = document.getElementById(id).innerText;
  let taxNum = parseInt(tax);
  updateTaxNum = taxNum + textAmount;
  document.getElementById(id).innerText = updateTaxNum;
}
// Total
function fixTotal(id) {
  let updateTotal = updateSubTotal + updateTaxNum;
  document.getElementById(id).innerText = updateTotal;
}

// Product 1 Plus Buttton

document.getElementById("plusBtn").addEventListener("click", function () {
  // Increase Plus value
  increasePlus("input1");

  //Increase product value
  CustomizeProductval("firstVal", 1219);

  // Update sub total
  CustomizeSubTotal("subTotal", 1219);

  // Add Extra tax
  CustomizeExtraTex("tax", 4);

  //Update total
  fixTotal("total");
});

// Product 2 Plus Button

document.getElementById("plusBtn1").addEventListener("click", function () {
  // Increase Plus value
  increasePlus("input2");

  //Increase product value
  CustomizeProductval("secondVal", 59);

  // Update sub total
  CustomizeSubTotal("subTotal", 59);

  // Add Extra tax
  CustomizeExtraTex("tax", 1);

  // Update total
  fixTotal("total");
});

// Product 1 minus Button

document.getElementById("minusBtn").addEventListener("click", function () {
  let inputStr = document.getElementById("input1").value;
  let inputNum = parseInt(inputStr);
  if (inputNum > 1) {
    let MinusInputVal = inputNum - 1;
    document.getElementById("input1").value = MinusInputVal;

    //Decrease product value
    CustomizeProductval("firstVal", -1219);

    // Update sub total
    CustomizeSubTotal("subTotal", -1219);

    // Remove Extra tax
    CustomizeExtraTex("tax", -4);

    // Update total
    fixTotal("total");
  }
});

// Product 2 minus Button
document.getElementById("minusBtn1").addEventListener("click", function () {
  let inputStr1 = document.getElementById("input2").value;
  let inputNum1 = parseInt(inputStr1);
  if (inputNum1 > 1) {
    let PlusInputVal1 = inputNum1 - 1;
    document.getElementById("input2").value = PlusInputVal1;

    //Decrease product value
    CustomizeProductval("secondVal", -59);

    // Update sub total
    CustomizeSubTotal("subTotal", -59);

    // Remove Extra tax
    CustomizeExtraTex("tax", -1);

    // Update total
    fixTotal("total");
  }
});

// Remove Item
document.getElementById("removeItem").addEventListener("click", function () {
  let removeItem = document.getElementById("cartItem");
  removeItem.style.display = "none";
  CustomizeSubTotal("subTotal", -1219);
  CustomizeExtraTex("tax", -4);
  fixTotal("total");
});
document.getElementById("removeItem2").addEventListener("click", function () {
  let removeItem = document.getElementById("cartItem2");
  removeItem.style.display = "none";
  CustomizeSubTotal("subTotal", -59);
  CustomizeExtraTex("tax", -1);
  fixTotal("total");
});

// checkout

document.getElementById("checkout").addEventListener("click", function () {
  let cart = document.getElementById("cart");
  cart.style.display = "none";
  let checkoutSection = document.getElementById("checkoutSection");
  checkoutSection.style.display = "block";
});
