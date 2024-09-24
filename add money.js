// Initial balance
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
  historyList.innerHTML = ""; // Clear previous history
  donationHistory.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${entry.amount} BDT donated for ${entry.cause} on ${entry.date}`;
    historyList.appendChild(listItem);
  });
}

// Deduct the donation amount from balance and update the display
function donate(amount, cause) {
  if (amount > 0 && amount <= balance) {
    const now = new Date().toLocaleString(); // Get current date and time
    balance -= amount;
    updateBalance();
    donationHistory.push({ amount, cause, date: now });
    updateDonationHistory();
    alert(`Thank you for donating ${amount} BDT for ${cause}!`);
  } else {
    alert("Insufficient balance or invalid amount.");
  }
}

// Attach event listeners to the first donate button (Noakhali Flood)
document.getElementById("btn-donate").addEventListener("click", function () {
  const donationAmount = parseInt(document.getElementById("input-add-money").value);
  donate(donationAmount, "Flood at Noakhali");
});

// Attach event listeners to the other donation cards
document.querySelectorAll(".card-body button").forEach((button, index) => {
  button.addEventListener("click", function () {
    const inputField = this.previousElementSibling; // Find the input field
    const donationAmount = parseInt(inputField.value);
    const cause = ["Flood Relief in Feni", "Injured in the Quota Movement"][index]; // Causes for each card
    donate(donationAmount, cause);
  });
});

// Initially update the balance on page load
updateBalance();

// Tabs functionality for switching between Donation and History
document.getElementById("tab-history").addEventListener("click", function () {
  document.querySelector(".container.mx-auto.p-4").classList.add("hidden"); // Hide donation section
  document.getElementById("donation-history").classList.remove("hidden"); // Show history section
  document.getElementById("tab-donation").classList.remove("tab-active");
  this.classList.add("tab-active");
});

document.getElementById("tab-donation").addEventListener("click", function () {
  document.querySelector(".container.mx-auto.p-4").classList.remove("hidden"); // Show donation section
  document.getElementById("donation-history").classList.add("hidden"); // Hide history section
  document.getElementById("tab-history").classList.remove("tab-active");
  this.classList.add("tab-active");
});
