// calculation deposit amount 
document.getElementById('deposit-btn').addEventListener('click',function(){
    // get the deposit amount
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = depositInput.value;
    
    // update diposte total
    const depositTotal = document.getElementById('deposit-total');
    const prevDepAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(prevDepAmount) + parseFloat(newdepositAmount);
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(prevBalanceTotal) + parseFloat(newdepositAmount);
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input 
    depositInput.value = '';
})

// calculation withdraw amount 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // get the deposit amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;
    
    // update diposte total
    const withdrawTotal = document.getElementById('withdraw-total');
    const prevWithAmount = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(prevWithAmount) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(prevBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input 
    withdrawInput.value = '';
})

