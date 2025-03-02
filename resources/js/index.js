const contactFormLabels = {
    topicLabel: {
        id: "topic-label",
        label: "Topic",
    },
    nameLabel: {
        id: "name-label",
        label: "Name",
    },
    emailLabel: {
        id: "email-label",
        label: "Email",
    },
    messageLabel: {
        id: "message-label",
        label: "Message",
    },
};

const contactTopics = {
    1: { value: "general", label: "General Information" },
    2: { value: "donations", label: "Donations" },
    3: { value: "website", label: "Website" },
};

// window.addEventListener('load', function() {
//     let buttons = document.getElementsByClassName('BuyButton-Button');
//     this.alert(buttons[0]);
// })

function setContactFormLabels(labels) {
    Object.keys(labels).forEach((key) => {
        let element = document.getElementById(labels[key]["id"]);
        let label = labels[key]["label"];
        if (label.includes("Please")) {
            element.classList.add("red-text");
        } else element.classList.remove("red-text");
        element.innerText = label;
    });
}

function setContactTopics(topics) {
    console.log(topics);
    const element = document.getElementById("topic-input");
    Object.keys(topics).forEach((key) => {
        console.log(key);
        const option = document.createElement("option");
        option.setAttribute("value", topics[key]["value"]);
        option.innerText = topics[key]["label"];
        element.appendChild(option);
    });
}

async function validateFormData() {
    const elements = document.getElementsByClassName("contact-form-element");
    console.log(elements);
    for (var i = 0; i < elements.length; i++) {
        contactFormData[elements[i].dataset.key] = elements[i].value;
    }
    console.log(contactFormData);
}

setContactFormLabels(contactFormLabels);
setContactTopics(contactTopics);

//document.getElementById("question-input").value = "test";

document.getElementById("contact-submit").addEventListener("click", (event) => {
    new Promise(function (resolve, reject) {
        return resolve("yay");
    })
        .then((response) => {
            //console.log(response);
            const element = document.getElementById("question-input");
            //console.log("here", element.value);
            if (element.value) {
                throw new Error("No Bueno");
            }
        })
        .then(() => {
            let valid = true;
            let topicValue = document.getElementById("topic-input").value;
            let questionValue = document.getElementById("question-input").value;
            let nameValue = document.getElementById("name-input").value;
            let emailValue = document.getElementById("email-input").value;
            let emailValid =
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    emailValue
                );
            let messageValue = document.getElementById("message-input").value;
            contactFormLabels.topicLabel.label = topicValue
                ? "Topic"
                : "Please choose a topic.";
            contactFormLabels.nameLabel.label = nameValue
                ? "Name"
                : "Please enter your name.";
            contactFormLabels.emailLabel.label = emailValid
                ? "Email"
                : "Please enter a valid email.";
            contactFormLabels.messageLabel.label = messageValue
                ? "Message"
                : "Please enter your message.";
            setContactFormLabels(contactFormLabels);
            if (!topicValue || !nameValue || !emailValid || !messageValue) {
                throw new Error("Invalid Form");
            } else {
                return {
                    source: "Big Bridge Arts",
                    topic: topicValue,
                    honeyPot: questionValue,
                    name: nameValue,
                    email: emailValue,
                    message: messageValue,
                };
            }
        })
        .then((data) => {
            return fetch(
                "https://oj6vub3ps7.execute-api.us-east-1.amazonaws.com/prod/contact",
                {
                    method: "POST",
                    mode: "cors",
                    credentials: "omit",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    redirect: "follow",
                    body: JSON.stringify(data),
                }
            );
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("RESPONSE: ", data);
            let responseBody = JSON.parse(data);
            let container = document.getElementById("contact-status-container")
            let text = document.getElementById("contact-status-text")
            if (responseBody.statusCode === 200) {
                console.log("SUCCESS");
                container.classList.remove('hidden-container');
                text.innerHTML = 'Your message was sent. Thank you for reaching out.'
                setTimeout(() => {
                    container.classList.add('hidden-container');
                  }, "10000");
            } else {
                container.classList.remove('hidden-container');
                text.innerHTML = `There was a problem sending your message. Please send an email to <a href="mailto:hello@bigbridgearts.org">hello@bigbridgearts.org</a>.`
                throw new Error("Contact Form Submission Error");
            }
        })

        // response.json())

        .catch((error) => {
            console.error("Error:", error);
        });
});

//     const formData = new FormData(event.target); // Get form data

//     fetch("/your-api-endpoint", {
//         method: "POST", // Or the appropriate method
//         body: formData,
//     })
//         .then((response) => {
//             // Handle the response from your API
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("Network response was not ok");
//             }
//         })
//         .then((data) => {
//             // Do something with the response data
//             console.log("Success:", data);
//         })
//         .catch((error) => {
//             // Handle errors
//             console.error("Error:", error);
//         });
// });

const footerYear = document.getElementById("footer-text");
footerYear.innerText = `   \xa9 ${new Date().getFullYear()} - Big Bridge Arts   `;
