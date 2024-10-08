// total balance
let balance = 20000;

// Donation history array
let donationHistory = [];

// Update the balance displayed in the navbar
function updateBalance() {
  document.getElementById("main-balance").innerHTML = `<img src="assets/coin.png" alt="" /> ${balance} BDT`;
}

// Update donation history on the page
function updateDonationHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";
  donationHistory.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${entry.amount} BDT donated for ${entry.cause} on ${entry.date}`;
    historyList.appendChild(listItem);
  });
}

// Deduct the donation amount from balance and update the display
function donate(amount, cause) {
  if (amount > 0 && amount <= balance) {
    const now = new Date().toLocaleString(); 
    balance -= amount;
    updateBalance();
    donationHistory.push({ amount, cause, date: now });
    updateDonationHistory();
    alert(`Thank you for donating ${amount} BDT for ${cause}!`);
    // add to donation history
    const p =document.createElement('p');
    p.innerText=` Added: ${addmoney}BDT. Balance:${cause} `;
    document.getElementById('history-list').appendChild(p);

  } else {
    alert("Insufficient balance or invalid amount.");
  }
}

// Attach event listeners to the donate buttons for each cause
document.getElementById("btn-donate").addEventListener("click", function () {
  const donationAmount = parseInt(document.getElementById("input-add-money").value);
  donate(donationAmount, "Flood at Noakhali");
});

document.getElementById("btn-donate-feni").addEventListener("click", function () {
  const donationAmount = parseInt(document.getElementById("input-feni").value);
  donate(donationAmount, "Flood Relief in Feni");
});

document.getElementById("btn-donate-quota").addEventListener("click", function () {
  const donationAmount = parseInt(document.getElementById("input-quota").value);
  donate(donationAmount, "Injured in the Quota Movement");
});


function updateBalance() {
  document.getElementById("main-balance").innerHTML = `${balance} BDT`;
}

function donate(amount, cause) {
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    updateBalance();
    alert(`Thank you for donating ${amount} BDT for ${cause}!`);
  } else {
    alert("Insufficient balance or invalid amount.");
  }
}

document.getElementById("add-money").addEventListener("click", function () {
  const donationAmount = parseInt(document.querySelector(".card-body input").value); 
  
  if (!isNaN(donationAmount)) {
    donate(donationAmount, "Aid for Injured in the Quota Movement");
  } else {
    alert("Please enter a valid donation amount.");
  }
});



// card -2 

// Update the balance displayed in the navbar
function updateBalance() {
  document.getElementById("main-balance").innerHTML = `${balance} BDT`;
}

// Deduct the donation amount from balance and update the display
function donate(amount, cause) {
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    updateBalance();
    alert(`Thank you for donating ${amount} BDT for ${cause}!`);
  } else {
    alert("Insufficient balance or invalid amount.");
  }
}

// 
document.querySelector(".card:nth-child(2) .btn-success").addEventListener("click", function () {
  const donationAmount = parseInt(document.querySelector(".card:nth-child(2) input").value);
  
  if (!isNaN(donationAmount)) {
    donate(donationAmount, "Flood Relief in Feni");
  } else {
    alert("Please enter a valid donation amount.");
  }
});

// Initially update the balance
updateBalance();
