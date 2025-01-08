const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const e_mail = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (e_mail === "" || password === "") {
    alert ('All form fields must be filled in');
  }
  const obj = {
    [form.elements[0].name]: e_mail,
    [form.elements[1].name]: password,
  }
  console.log(`${form.elements[0].name}: ${obj.email}, ${form.elements[1].name}: ${obj.password}`);
  form.reset();
}