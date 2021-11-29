var intialPrice = document.querySelector("#initial-price");

var stocksQuantity = document.querySelector("#stocks-quantity");

var currentPrice = document.querySelector("#current-price");

var submitButton = document.querySelector("#submit-button");

var outputBox = document.querySelector("#output-box");






function calculateProfitOrLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current)*quantity ;
        var lossPercentage = ((initial - current)/ initial) * 100;
        showLoss(loss, lossPercentage);
    } else if (current > initial) {
        var profit = (current - initial)*quantity;
        var profitPercentage = ((current - initial) / initial) * 100;
        showProfit(profit, profitPercentage);
    } else {
        showOutput("No pain no gain and no gain no pain 😏 !!");
    }
}

function showOutput(message) {
    
    outputBox.style.border = "2px solid black";
    outputBox.style.backgroundColor="white";
    outputBox.style.color="black"
    outputBox.innerText = message;
}

submitButton.addEventListener("click", clickHandler);

function clickHandler() {
    var ip = Number.parseInt(intialPrice.value);
    var qty = Number.parseInt(stocksQuantity.value);
    var curr = Number.parseInt(currentPrice.value);

    if ((intialPrice.value !== "") && (stocksQuantity.value !== "") && (currentPrice.value !== "")) {
        if ((Math.sign(ip) === 1) && (Math.sign(qty) === 1) && (Math.sign(curr) === 1)) {
            calculateProfitOrLoss(ip, qty, curr);
        } else if ((ip < 0) || (qty < 0) || (curr < 0)) {

            showOutput("Input fields can't be negative enter positive values.");
        } else if ((ip === 0) || (qty === 0) || (curr === 0)) {

            showOutput("Input fields can't be zeroes enter valid values");
        }

    } else if ((intialPrice.value === "") && (stocksQuantity.value === "") && (currentPrice.value === "")) {
        showOutput("Enter all the three inputs fields.");
    } else if ((intialPrice.value === "") || (stocksQuantity.value === "") || (currentPrice.value === "")) {

        showOutput("Insuffient input fields enter all the values.");
    }
}

function showLoss(l, lp) {
    
    outputBox.style.color = "white";
    outputBox.style.border = "2px solid red";
    outputBox.style.backgroundColor ="#FF0800";
    outputBox.innerText = `The loss is ${l.toFixed(2)} and the loss percentage is ${lp.toFixed(2)}%  😥`
}

function showProfit(p, pp) {
    
    outputBox.style.color = "white";
    outputBox.style.border = "2px solid green";
    outputBox.style.backgroundColor="#228B22"
    outputBox.innerText = `The profit is ${p.toFixed(2)} and the profit  percentage is ${pp.toFixed(2)}%😀`
}