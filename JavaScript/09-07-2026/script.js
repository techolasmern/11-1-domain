const user_id = "Your userID";
const service_id = "Your ServiceID";
const template_id = "Your TemplateID";

const email_api = "https://api.emailjs.com/api/v1.0/email/send";
const content_type = "application/json";

const sendMail = async () => {
    try {
        const options = {
            service_id,
            template_id,
            user_id,
            template_params: { // check variables in your template;
                email: "to_mail", 
                passcode: 103874,
                time: 10,
                companyName: "Techolas"
            }
        }
        const response = await fetch(email_api, {
            method: "POST",
            headers: {
                "Content-Type": content_type
            },
            body: JSON.stringify(options)
        });
        const res = await response.text();
        console.log(res);
    } catch (error) {
        return console.log(error);
    }
}

