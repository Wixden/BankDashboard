// Step-1: Add money
document.getElementById("depositBtn").addEventListener("click", function () {
  // Step-2: get input field value
  const depositField = document.getElementById("depositMoney");
  const newDeposit = depositField.value;
  const newDepToNum = parseFloat(newDeposit);

  const prevDeposit = document.getElementById("newDeposit");
  const prevDepAmount = prevDeposit.innerText;
  const prevDepToNum = parseFloat(prevDepAmount);

  depositField.value = "";

  if (isNaN(newDepToNum)) {
    alert("Please provide a valid number");
    return;
  }
  const currentTotal = newDepToNum + prevDepToNum;
  prevDeposit.innerText = currentTotal;

  const prevBalance = document.getElementById("balance");
  const balanceAmount = prevBalance.innerText;
  const balanceToNum = parseFloat(balanceAmount);

  const newBalance = balanceToNum + newDepToNum;
  prevBalance.innerText = newBalance;
});

// Step-3: Withdraw Money
document.getElementById("withdrawBtn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdrawMoney");
  const withdrawAmount = withdrawField.value;
  const withdrawAmountNum = parseFloat(withdrawAmount);

  const prevWithdrawal = document.getElementById("withdrawalAmount");
  const prevWithdrawalAmount = prevWithdrawal.innerText;
  const prevWithToNum = parseFloat(prevWithdrawalAmount);

  const totalWithdrawal = withdrawAmountNum + prevWithToNum;

  withdrawField.value = "";

  if (isNaN(withdrawAmountNum)) {
    alert("Please provide a valid number");
    return;
  }

  // Balance after withdrawal
  const prevBalance = document.getElementById("balance");
  const balanceAmount = prevBalance.innerText;
  const balanceToNum = parseFloat(balanceAmount);

  const newBalance = balanceToNum - withdrawAmountNum;
  if (withdrawAmountNum > balanceToNum) {
    alert("Not enough balance. Please deposit first");
  } else {
    prevWithdrawal.innerText = totalWithdrawal;
    prevBalance.innerText = newBalance;
  }
});
