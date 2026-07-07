// form validation

// Regex
// EmailJS

const form = document.getElementById("frm");
const error = document.querySelectorAll(".error");

form.addEventListener("input", () => {
    error.forEach(errorContainer => errorContainer.innerText = "");
})

form.addEventListener("submit", event => {
    event.preventDefault();
    const formElement = document.register;
    const firstName = formElement.first_name.value;
    const firstNameRegex = /^[a-zA-Z]{4,24}$/;
    const lastName = formElement.last_name.value;
    const lastNameRegex = /^[a-zA-Z]{2,25}$/;
    const phone = formElement.phone.value;
    const phoneRegex = /^\d{10}$/;
    const email = formElement.email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = formElement.password.value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    const confirmPassword = formElement.confirm_password.value;

    // if(!firstName || !lastName || !phone || !email || !password || !confirmPassword) {
    //     error.forEach(errorContainer => {
    //         errorContainer.innerText = "This field is required";
    //     })
    // }
    if (!firstName) {
        error[0].innerText = "First name is required";
        return;
    }
    if (!firstNameRegex.test(firstName)) {
        error[0].innerText = "First name must be letters and between 4 and 24 characters";
        return;
    }
    if (!lastName) {
        error[1].innerText = "Last name is required";
        return;
    }
    if (!lastNameRegex.test(lastName)) {
        error[1].innerText = "Last name must be letters and between 2 and 25 characters";
        return;
    }
    if (!phone) {
        error[2].innerText = "Phone number is required";
        return;
    }
    if (!phoneRegex.test(phone)) {
        error[2].innerText = "Phone number must be 10 digits";
        return;
    }
    if (!email) {
        error[3].innerText = "Email is required";
        return;
    }
    if (!emailRegex.test(email)) {
        error[3].innerText = "Email must be valid";
        return;
    }
    if (!password) {
        error[4].innerText = "Password is required";
        return;
    }
    if (!passwordRegex.test(password)) {
        error[4].innerText = "Password must be at least 8 characters and include at least one number, one uppercase letter, one lowercase letter, and one special character";
        return;
    }
    if (!confirmPassword) {
        error[5].innerText = "Confirm password is required";
        return;
    }
    if (password != confirmPassword) {
        error[5].innerText = "Confirm password must match password";
        return;
    }
    const submitted = document.getElementById("form-submitted");
    submitted.style.color = "green";
    submitted.style.textAlign = "center";
    submitted.innerText = "Form submitted successfully";
    form.reset();
});