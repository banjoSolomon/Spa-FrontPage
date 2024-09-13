import React, { useState } from "react";
import style from "./index.module.css";
import logo30 from "../../../asset/Mask Group.png";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {

            const { name, email, phone, message } = formData;
            const phoneNumber = "2348066306125";

            const preFilledMessage = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${preFilledMessage}`;
            window.open(whatsappUrl, "_blank");
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
