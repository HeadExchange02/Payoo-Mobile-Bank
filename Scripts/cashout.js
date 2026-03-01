 document.getElementById('cashout-btn')
    .addEventListener('click', function(){
        // 1- get the agent number & validate
        const cashoutNumber = getValueFromInput('cashout-number');
        if(cashoutNumber.length != 11){
            alert('Invalid number');
            return;
        }

        // 2- get the amount, validate, convert to number
        const cashoutAmount = getValueFromInput('cashout-amount');

        // // 3- get current balance, validate, convert to number
        // const balanceElement = document.getElementById('balance');
        // const balance = balanceElement.innerText;
        // console.log('Available Balance',balance);

        const currentBalance = getBalance();

        // 4- calculate new Balance
        const newBalance = currentBalance - Number(cashoutAmount);
        console.log(newBalance);
           if(newBalance < 0){
            alert('Invalid Amount');
            return;
        }

        // 5- get the pin & verify
        const pin = getValueFromInput('cashout-pin');
        if(pin === '6575'){
            // 5-1 true::> show an alert > set new Balance
            alert('Cashout Successful');
            setBalance(newBalance);
        }
        else{
            // 5-2 flase::> show an error alert > return
            alert('Invalid Pin');
            return;
        }
    })


// document.getElementById('cashout-btn')
//     .addEventListener('click', function(){
//         // 1- get the agent number & validate
//         const cashoutNumberInput = document.getElementById('cashout-number');
//         const cashoutNumber = cashoutNumberInput.value;
//         console.log('agent number',cashoutNumber);

//         if(cashoutNumber.length != 11){
//             alert('Invalid Agent Number');
//             return;
//         }

//         // 2- get the amount, validate, convert to number
//         const cashoutAmountInput = document.getElementById('cashout-amount');
//         const cashoutAmount = cashoutAmountInput.value;
//         console.log('Cashout:',cashoutAmount)

//         // 3- get current balance, validate, convert to number
//         const balanceElement = document.getElementById('balance');
//         const balance = balanceElement.innerText;
//         console.log(balance);

//         // 4- calculate new Balance
//         const newBalance = Number(balance) - Number(cashoutAmount);

//         if(newBalance < 0){
//             alert('Invalid Amount');
//             return;
//         }
        
//         // 5- get the pin & verify
//         const cashoutPinInput = document.getElementById('cashout-pin');
//         const pin = cashoutPinInput.value;
 
//         if(pin === '6575'){
//             // 5-1 true::> show an alert > set new Balance
//             alert('Cashout Successful');
//             console.log("new balance", newBalance);

//             balanceElement.innerText = newBalance;
//         }
         
//         else{
//             // 5-2 flase::> show an error alert > return
//             alert('Invalid Pin');
//             return;
//         }
//     })