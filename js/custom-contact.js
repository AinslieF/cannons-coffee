let container = document.querySelector(".container");
let form = document.querySelector(".form-container");
console.log(form);

form.addEventListener("submit", onSubmit);

function onSubmit() {
  event.preventDefault();

  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  let name = dataObject.name;
  let email = dataObject.email;
  let phoneNumber = dataObject.phonenumber;
  let flavor = dataObject.flavor;
  let interest = dataObject.interest;
  let comment = dataObject.comments;

  let message = `Thank you ${name}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${flavor} and your comments are ${comment}; We will soon contact you at ${email} or ${phoneNumber}`;

  let messagePara = document.createElement("p");
  messagePara.textContent = message;
  container.appendChild(messagePara);

  console.log(dataObject);
  form.reset();
}
