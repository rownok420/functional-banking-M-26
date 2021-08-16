
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const newInputAmount = inputField.value;

    inputField.value = '';    // clear the deposit input

    return newInputAmount;

}

function updatedBoth(bothFieldInput,newInputAmount){
    const totalElement = document.getElementById(bothFieldInput);
    const prevTotalAmount = totalElement.innerText;
    const newTotalAmount = parseFloat(prevTotalAmount) + parseFloat(newInputAmount);
    totalElement.innerText = newTotalAmount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceTotal = parseFloat(balanceTotal.innerText);
    return prevBalanceTotal;
}


function updateAccountBalance(newInputAmount,isAddition){
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceTotal = balanceTotal.innerText;
    if(isAddition == true){
        const newBalanceTotal = parseFloat(prevBalanceTotal) + parseFloat(newInputAmount);
        balanceTotal.innerText = newBalanceTotal;
    }
    else{
        const newBalanceTotal = parseFloat(prevBalanceTotal) - parseFloat(newInputAmount);
        balanceTotal.innerText = newBalanceTotal;
    }

}


// calculation deposit amount 
document.getElementById('deposit-btn').addEventListener('click',function(){  

    const newInputAmount = getInputValue('deposit-input')
    if(newInputAmount > 0 ){
        updatedBoth('deposit-total',newInputAmount)
        updateAccountBalance(newInputAmount ,true)
    }
    
    

})

// calculation withdraw amount 
document.getElementById('withdraw-btn').addEventListener('click',function(){   

    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updatedBoth('withdraw-total',withdrawAmount)
        updateAccountBalance(withdrawAmount,false)
    }

    if(withdrawAmount > currentBalance){
        alert('এত টাকা কি তোর বাপ রেখে গেছে???')
    }
})

