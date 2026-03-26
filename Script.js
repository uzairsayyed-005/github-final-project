function calculateInterest() {
  let principal = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let time = document.getElementById("time").value;

  let interest = (principal * rate * time) / 100;

  document.getElementById("result").innerText = "Simple Interest: " + interest;
}
