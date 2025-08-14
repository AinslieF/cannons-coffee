let container = document.querySelector(".container");
let form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

function onSubmit() {
  event.preventDefault();

  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  let name = dataObject.name;
  let email = dataObject.email;
  let password = dataObject.password;

  let message = `Welcome, ${name}! You are logged in!`;

  let messagePara = document.createElement("p");
  messagePara.textContent = message;
  container.appendChild(messagePara);

  console.log(dataObject);
  form.reset();
}
