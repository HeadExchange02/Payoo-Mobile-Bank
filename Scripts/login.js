document.getElementById('login-btn')
    .addEventListener('click', function(){
        // 1- get the mobile number input
        const numberInput = document.getElementById('input-number');
        const contractNumber = numberInput.value;
        console.log(contractNumber);

        // 2- get the pin imput
        const pinInput = document.getElementById('input-pin');
        const pinNumber = pinInput.value;
        console.log(pinNumber);

        // 3- match pin & mobile number
        if(contractNumber == '01629376937' && pinNumber == '6575'){
            // 3-1 true::>> alart> homepage
            alert('login success');

            // window.location.replace('/home.html'); // or
            window.location.assign('/home.html');

        }
              
        else{
            // 3-2 false::>> alart> return
            alert('login failed');
            return;
        }
})