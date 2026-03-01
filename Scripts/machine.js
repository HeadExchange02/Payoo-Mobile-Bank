console.log('Machine Added');

// machine id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value)

    return value;
}

// machine -> balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log('currentBalance', Number(balance));
    return Number(balance);
}

// machine value -> set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// machine id > hide all > show id
function showOnly(id){
    // console.log('show only clicked');
    
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    // console.log('Add Money - ${addmoney}, Cashout- ${cashout}');

    // hide all
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");

    // show those elements with id
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}