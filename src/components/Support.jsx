import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const Support = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSent, setIsSent] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            to_email: '' // Send to this email
        };

        emailjs
            .send(
                '', // Your EmailJS Service ID
                '', // Your EmailJS Template ID
                templateParams,
                '' // Your EmailJS Public Key
            )
            .then(
                (response) => {
                    toast.success('success', response.status, response.text);
                    setIsSent(true);
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (err) => {
                    toast.error('FAILED...', err);
                }
            );
    };

    return (
        <div className="support-page p-8 max-w-4xl mx-auto">
            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-6 text-center">Support</h1>

            {/* Contact Form */}
            <section className="contact-form bg-gray-100 p-6 rounded-3xl shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Your message"
                            rows="5"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="submitSupport font-bold bg-blue-500 text-white px-6 py-3 rounded-3xl"
                    >
                        {isSent ? 'Submit' : 'Submit'}
                    </button>
                </form>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="faq-item mb-6">
                    <h3 className="text-lg font-medium mb-2">How can I reset my password?</h3>
                    <p>
                        To reset your password, click on the "Forgot Password" link on the Setting page in dashboard.
                    </p>
                </div>
                <div className="faq-item mb-6">
                    <h3 className="text-lg font-medium mb-2">Where can I track my book?</h3>
                    <p>
                        You can track your book from the "Teacher" section of your account dashboard.
                    </p>
                </div>
                <div className="faq-item mb-6">
                    <h3 className="text-lg font-medium mb-2">How do I contact support?</h3>
                    <p>
                        You can fill out the form above, or email us directly at <a className='text-orange-500 hover:underline' href="mailto:support@unih0me.com">support@unih0me.com</a>.
                    </p>
                </div>
            </section>

            {/* Social Media Icons */}
            <section className="social-media-links text-center mb-8">
                <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
                <div className="flex justify-center gap-6">
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/unih0me?mibextid=LQQJ4d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-500"
                    >
                        <FaFacebookF size={24} />
                    </a>
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/unih0me1?igsh=ZmI4YXplYjYwaWNt&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all duration-500"
                    >
                        <FaInstagram size={24} />
                    </a>
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/201222515066"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-500"
                    >
                        <FaWhatsapp size={24} />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Support;
