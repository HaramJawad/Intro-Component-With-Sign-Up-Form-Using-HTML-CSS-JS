let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let firstNameMessage = document.querySelector('.first-name-msg')
let lastNameMessage = document.querySelector('.last-name-msg')
let emailMessage = document.querySelector('.email-msg')
let passwordMessage = document.querySelector('.password-msg')
let submitButton = document.querySelector('.submitButton')
let form = document.querySelector('.form')
let inputOneImage = document.querySelector('.input-one-img')
let inputTwoImage = document.querySelector('.input-two-img')
let inputThreeImage = document.querySelector('.input-three-img')
let inputFourImage = document.querySelector('.input-four-img')
let passwordEyeIcon = document.getElementById('togglePassword')
const eyeImage = document.getElementById('eye-img');
const successMessage = document.querySelector('.successMessage')
// A basic regex for email validation
function isValidEmailRegex(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// clearing UI on every submit
function clearingUI() {
    firstNameMessage.textContent = ""
    firstNameMessage.style.color = ""
    firstName.style.border = ""
    inputOneImage.style.display = ""
    lastNameMessage.textContent = ""
    lastNameMessage.style.color = ""
    lastName.style.border = ""
    inputTwoImage.style.display = "none"
    emailMessage.textContent = ""
    emailMessage.style.color = ""
    email.style.border = ""
    inputThreeImage.style.display = "none"
    passwordMessage.textContent = ""
    passwordMessage.style.color = ""
    password.style.border = ""
    inputFourImage.style.display = "none"
}
// clearing input fields
function clearingInputs() {
    firstName.value = ""
    lastName.value = ""
    email.value = ""
    password.value = ""
}
// removing successMessage + border after 2 secs
function removingSuccessMessageAndBorder() {
    setTimeout(() => {
        firstName.style.border = ""
        lastName.style.border = ""
        email.style.border = ""
        password.style.border = ""
        successMessage.textContent = ""
    }, 2000);
}
// removing errorMessages
function removingErrorMessages() {
    setTimeout(() => {
        firstNameMessage.textContent = ""
        lastNameMessage.textContent = ""
        emailMessage.textContent = ""
        passwordMessage.textContent = ""
    }, 2000);
}
// main logic 
function InputValidation() {
    clearingUI();
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    if (firstNameValue === "") {
        firstNameMessage.textContent = "First Name cannot be empty"
        firstNameMessage.style.color = " #ff7a7a"
        firstName.style.border = "2px solid #ff7a7a"
        inputOneImage.style.display = "block"
        removingErrorMessages();
    }
   if (lastNameValue === "") {
        lastNameMessage.textContent = "Last Name cannot be empty"
        lastNameMessage.style.color = " #ff7a7a"
        lastName.style.border = "2px solid #ff7a7a"
        inputTwoImage.style.display = "block"
        removingErrorMessages();
    }
     if (emailValue === "") {
        emailMessage.textContent = "Email cannot be empty"
        emailMessage.style.color = " #ff7a7a"
        email.style.border = "2px solid #ff7a7a"
        inputThreeImage.style.display = "block"
        removingErrorMessages();
    }
     if (passwordValue === "") {
        passwordMessage.textContent = "Password cannot be empty"
        passwordMessage.style.color = " #ff7a7a"
        password.style.border = "2px solid #ff7a7a"
        inputFourImage.style.display = "block"
        removingErrorMessages();
    }
     if (!isValidEmailRegex(emailValue)) {
        emailMessage.textContent = "Looks like this is not an email"
        emailMessage.style.color = " #ff7a7a"
        email.style.border = "2px solid #ff7a7a"
        inputThreeImage.style.display = "block"
        removingErrorMessages();
    }
    if(firstNameValue!=="" && lastNameValue!=="" && emailValue!=="" && passwordValue!=="" && isValidEmailRegex(emailValue)) {
        clearingInputs();
        firstName.style.border = "2px solid #38cc8c"
        lastName.style.border = "2px solid #38cc8c"
        email.style.border = "2px solid #38cc8c"
        password.style.border = "2px solid #38cc8c"
        successMessage.textContent = "✅ Successfully signed up!"
        removingSuccessMessageAndBorder()
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted without reloading!');
    InputValidation();
});
// hiding and showing password icon
passwordEyeIcon.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password'
    password.setAttribute('type', type);
    eyeImage.src = type === 'password'
        ? 'images/eyeoff-icon.svg'       //  show icon when password hidden
        : 'images/eyeon-icon.svg';  //  hide icon when password visible
})