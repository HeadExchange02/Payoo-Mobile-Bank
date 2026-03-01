document.getElementById('add-money-btn')
    .addEventListener('click', function(){
        console.log("add money button clicked");

        // 1 - get bank account
        const bankAccount = getValueFromInput('add-money-bank');
        // console.log(bankAccount);

        if(bankAccount == "Select a Bank"){
            alert("Please Select a Bank.");
            return;
        }

        // 2 - get bank account number
        const accno = getValueFromInput('add-money-number');
        // console.log(accno);

        if(accno.length != 11){
            alert("Invalid Account No.");
            return;
        }

        // 3 - get amount
        const amount = getValueFromInput("add-money-amount");
        const currentBalance = getBalance();
        const newBalance = currentBalance + Number(amount);
        // console.log(newBalance);

        const pin = getValueFromInput("add-money-pin")
        if(pin == "6575"){
            alert('Add Money Success from ${bankAccount} at ${new Date()}');
            setBalance(newBalance);
        }


        else{
            alert("Invalid Pin");
            return;
        }

    })