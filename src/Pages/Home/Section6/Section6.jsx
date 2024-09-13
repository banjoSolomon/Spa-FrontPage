import React, { useState } from "react";
import style from "./index.module.css"; // Your custom CSS
import logo30 from "../../../asset/Mask Group.png"; // Your logo

const Section6 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\d{11}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 11 digits.";
        }
        if (!formData.message) newErrors.message = "Message is required.";
        return newErrors;
    };

    const sendWhatsAppMessage = async (name, email, phone, message) => {
        const accessToken = "EAASTZCOx8XN4BO8XXk8ZBGqs7jXRzsCrPzuDBrDi2kqkilv2gGp2TRGBFAZAA9H1urcUYiQPb9nApqrn7DRIncNM4QUJx0n3OLwXagmDkBoRlwQWyEZAnnZCOo2GBI76kZATZBGmAcguK9ih7vP3VinOZCpgl7J2TVkRC1XmZCOF9TAoDjHK1ZBE9a1flctiSKQa7yOvkRCQ3hLPjg7BxdZAfyXavm4ZBAES";
        const url = "https://graph.facebook.com/v20.0/400935246442688/messages";

        const recipientBody = {
            messaging_product: "whatsapp",
            to: "+2348103722570", // Recipient's phone number in international format
            type: "template",
            template: {
                name: "recipient_notification", // Replace with your template name
                language: { code: "en_US" },
                components: [
                    {
                        type: "body",
                        parameters: [
                            { type: "text", text: `Name: ${name}` },
                            { type: "text", text: `Email: ${email}` },
                            { type: "text", text: `Phone: ${phone}` },
                            { type: "text", text: `Message: ${message}` },
                        ],
                    },
                ],
            },
        };

        const userConfirmationBody = {
            messaging_product: "whatsapp",
            to: phone, // Sender's phone number in international format
            type: "template",
            template: {
                name: "user_confirmation", // Replace with your template name
                language: { code: "en_US" },
                components: [
                    {
                        type: "body",
                        parameters: [
                            { type: "text", text: `Hello ${name},` },
                            { type: "text", text: `Thank you for reaching out to us! We have received your message with the following details:` },
                            { type: "text", text: `Email: ${email}` },
                            { type: "text", text: `Phone Number: ${phone}` },
                            { type: "text", text: `Message: ${message}` },
                            { type: "text", text: `We will get back to you shortly.` },
                        ],
                    },
                ],
            },
        };

        try {
            // Send message to recipient
            const recipientResponse = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(recipientBody),
            });

            const recipientResult = await recipientResponse.json();
            if (!recipientResponse.ok) {
                throw new Error(`Recipient message error: ${JSON.stringify(recipientResult)}`);
            }

            // Send confirmation message to user
            const userConfirmationResponse = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userConfirmationBody),
            });

            const userConfirmationResult = await userConfirmationResponse.json();
            if (!userConfirmationResponse.ok) {
                throw new Error(`User confirmation message error: ${JSON.stringify(userConfirmationResult)}`);
            }

            console.log("Messages sent successfully.");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Send WhatsApp message
            sendWhatsAppMessage(formData.name, formData.email, formData.phone, formData.message);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className={style.appoint}>
            <div className={style.imageContainer}>
                <img src={logo30} alt="pedicure" className={style.logo30} />
                <div className={style.overlay}>
                    <h2 className={style.title}>Make An Appointment</h2>
                    <p className={style.description}>
                        Schedule your session today and take the first step towards relaxation
                    </p>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <div className={style.inputGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className={style.input}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className={style.error}>{errors.name}</span>}
                        </div>
                        <div className={style.inputGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={style.input}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className={style.error}>{errors.email}</span>}
                        </div>
                        <div className={style.inputGroup}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                className={style.input}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <span className={style.error}>{errors.phone}</span>}
                        </div>
                        <div className={style.inputGroup}>
                            <textarea
                                name="message"
                                placeholder="Message"
                                className={style.textarea}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className={style.error}>{errors.message}</span>}
                        </div>
                        <button type="submit" className={style.button}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Section6;
