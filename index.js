const pwEl = document.querySelector("#pw");
const len = document.querySelector("#len");
const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const symbol = document.querySelector("#symbol");
const number = document.querySelector("#number");
const generateEl = document.querySelector("#generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = upperLetters.toLowerCase();
const numbers = "0123456789";
const symbols = '@€!"$§%&/()=?#-+*_:';

const randomNumber = function () {
  return numbers[Math.floor(Math.random() * numbers.length)];
};
const randomUpper = function () {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
};
const randomLower = function () {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
};
const randomSymbol = function () {
  return symbols[Math.floor(Math.random() * symbols.length)];
};

function generatePassword() {
  const passLength = len.value;
  console.log(passLength);
  let password = "";
  let randomULNS = [];
  if (upper.checked) {
    randomULNS.push(randomUpper);
  }
  if (lower.checked) {
    randomULNS.push(randomLower);
  }
  if (symbol.checked) {
    randomULNS.push(randomSymbol);
  }
  if (number.checked) {
    randomULNS.push(randomNumber);
  }
  for (let i = 0; i < passLength; i++) {
    let a = Math.floor(Math.random() * randomULNS.length);
    if (a < 0) a += 1;
    else {
      const s = randomULNS[a]();
      password += s;
    }
  }

  pwEl.innerText = password;
}

generateEl.addEventListener("click", () => {
  generatePassword();
});

const copyText = function () {
  console.log(pwEl.innerText);
  navigator.clipboard.writeText(pwEl.value);
  alert("Copied the text: " + pwEl.innerText);
};
const copy = document.querySelector(".copy");
copy.addEventListener("click", () => {
  copyText();
});
