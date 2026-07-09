const contactForm = document.getElementById("contact-form");

const template_id = "template id";
const user_id = "public key";
const service_id = "service id";

const email_api = "https://api.emailjs.com/api/v1.0/email/send";
const content_type = "application/json";

contactForm.addEventListener("submit", async e => {
    e.preventDefault();
    const name = document.contact_form.name.value;
    const email = document.contact_form.email.value;
    const message = document.contact_form.message.value;
    const data = {
        service_id,
        template_id,
        user_id,
        template_params: {
            name,
            email,
            message,
            time: new Date().toLocaleString("en-IN")
        }
    }
    const response = await fetch(email_api, {
        method: "POST",
        headers: {
            "Content-Type": content_type
        },
        body: JSON.stringify(data)
    });
    const res = await response.text();
    console.log(res);
})