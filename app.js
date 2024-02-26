const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const inputCheckHandler = (event) => {
  if (textInput.value === "") {
    alert("Please input a value");
  }

  const lowerStr = textInput.value.toLowerCase();
  const alphaNumericArr = lowerStr.match(/[a-z0-9]/g);
  // const alphaNumericStr = lowerStr.match(/[a-z0-9]/g).join("");
  // const reversedArr = alphaNumericArr.reverse();

  if (alphaNumericArr.join("") === alphaNumericArr.reverse().join("")) {
    result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome.`;
  } else {
    result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome.`;
  }
};

checkBtn.addEventListener("click", inputCheckHandler);
