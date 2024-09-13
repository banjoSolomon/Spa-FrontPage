import React, { useState } from 'react';

const Section6 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const validationErrors = {};
        if (!formData.name) validationErrors.name = 'Name is required';
        if (!formData.email) validationErrors.email = 'Email is required';
        if (!formData.phone) validationErrors.phone = 'Phone number is required';
        if (!formData.message) validationErrors.message = 'Message is required';
        return validationErrors;
    };

    const sendWhatsAppMessage = (name, email, phone, message) => {
        const url = `https://wa.me/${phone}?text=Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
        window.open(url, '_blank');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Send WhatsApp message
            sendWhatsAppMessage(formData.name, formData.email, formData.phone, formData.message);

            // Send email confirmation
            const messageDetails = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
            await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userEmail: formData.email, messageDetails }),
            });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <span>{errors.phone}</span>}
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <span>{errors.message}</span>}
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Section6;