let message="";
const form = document.getElementById('myForm');
const change = document.getElementById('change');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userInput = document.getElementById('userInput').value;
  message=userInput;
  console.log(message);
  change.innerHTML=message+'<br><a href="./fake.html" id="clickLink"class="link">Click Here to Claim!</a>';
  alert(`Successfully Sent`);
});

const user = document.getElementById('user');
const hidden1 = document.getElementById('hidden1');
const hidden2 = document.getElementById('hidden2');
user.addEventListener('click', function() {
  console.log("fc")
  hidden2.classList.toggle('chatbot'); 
  hidden1.style.display = 'none';
});

