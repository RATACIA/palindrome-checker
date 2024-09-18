const checkBtn = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");

checkBtn.onclick = checkValue;

function checkValue() {
  console.log("Input value:", input.value);
  if (input.value === "") {
    alert("Please input a value");
  } else {
    checkIfPalindrome();
  }
}

function checkIfPalindrome() {
  const text = input.value.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedText = text.split("").reverse().join("");

  if (text === reversedText) {
    document.getElementById("result").textContent =
      input.value + " is a palindrome";
  } else {
    document.getElementById("result").textContent =
      input.value + " is not a palindrome";
  }
}
