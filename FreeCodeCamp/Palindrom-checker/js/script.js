const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const inputValue = textInput.value.trim().toLowerCase();
  const textValue = inputValue.replace(/[^a-z0-9]/g, "");

  if (inputValue === "") {
    alert("Please input a value");
  } else if (textValue === textValue.split("").reverse().join("")) {
    result.textContent = `${inputValue} is a Palindrome`;
    result.style.border = "2px solid black";
    result.style.background = "linear-gradient(to left, #ffbf00 , #ff5100 20%, rgb(255, 65, 65))";
    result.style.width = "max-content";
  } else {
    result.textContent = `${inputValue} is not a palindrome`;
    result.style.border = "2px solid black";
    result.style.background = "linear-gradient(to left, #ffbf00 , #ff5100 20%, rgb(255, 65, 65))";
    result.style.width = "max-content";
  }
});
