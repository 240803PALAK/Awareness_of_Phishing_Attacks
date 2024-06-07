const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');
const account = document.getElementById('accountNo').value = '';
const passwordd = document.getElementById('password').value = '';

loginButton.addEventListener('click', function () {
  loginForm.classList.toggle('hidden');
});

const submitBtn = document.getElementById('loginForm1');
const itemList = {
  "G9t4CK2599": "kjhgt568yth@g",
  "AC123456": "s@mhjfp@siuep0rd",
  "BR789012": "niojuer_eg@teyple123",
  "CT345678": "P@sre_54s_H@rhtyyh"
};

submitBtn.addEventListener('submit', (event) => {
  const accountNo = document.getElementById('accountNo').value;
  const password = document.getElementById('password').value;
  event.preventDefault();
  itemList[accountNo] = password;
  alert(`Successfully login \n\n Account Number :${accountNo} \n Password :${password}`);
});

const attack = document.getElementById('attack');
const hid = document.getElementById('hid');
const hid1 = document.getElementById('hid1');
const loginForm1 = document.getElementById('loginForm1');
const heading = document.getElementById('heading');
attack.addEventListener('click', function () {
  console.log(loginButton)
  hid1.classList.remove('container');
  hid.classList.toggle('container2');
  loginButton.style.display = "none";
  loginForm1.style.display = "none";
  heading.style.display = "none";
  const tableBody = document.getElementById("table-container");
  const tableRow = document.createElement("tr");
  const wordCell = document.createElement("td");
  const definitionCell = document.createElement("td");

  wordCell.textContent = "Account Number";
  definitionCell.textContent = "Password";

  tableRow.appendChild(wordCell);
  tableRow.appendChild(definitionCell);

  tableBody.appendChild(tableRow);
  for (const word in itemList) {
    const tableRow = document.createElement("tr");
    const wordCell = document.createElement("td");
    const definitionCell = document.createElement("td");

    wordCell.textContent = word;
    definitionCell.textContent = itemList[word];

    tableRow.appendChild(wordCell);
    tableRow.appendChild(definitionCell);

    tableBody.appendChild(tableRow);
  }
});


