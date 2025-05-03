import React, { useState } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    User,
    MessageCircle,
} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all required fields.');
            setLoading(false);
            return;
        }

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log('Form Data:', formData);
            setSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            setError('Failed to send message. Please try again.');
            console.error('Error sending message:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-4">
            <div className="max-w-5xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
                        <h3 className="text-xl font-semibold text-gray-700">Contact Information</h3>
                        <div className="flex items-start gap-3">
                            <MapPin className="text-red-500 w-6 h-6 mt-1" />
                            <span className="text-gray-600">Dewan VS Institute Of Engineering And Technology</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Phone className="text-sky-500 w-6 h-6 mt-1" />
                            <span className="text-gray-600">+91 8445945749</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Mail className="text-emerald-500 w-6 h-6 mt-1" />
                            <span className="text-gray-600">Shakirofficial258@gmail.com</span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Send a Message</h3>
                        {error && <p className="text-red-500">{error}</p>}
                        {success && (
                            <p className="text-green-600">Message sent successfully! We'll get back to you soon.</p>
                        )}

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="text-gray-700 font-medium text-sm flex items-center gap-1">
                                <User className="w-4 h-4" />
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="text-gray-700 font-medium text-sm flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="text-gray-700 font-medium text-sm flex items-center gap-1">
                                <MessageCircle className="w-4 h-4" />
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What's the topic?"
                                className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="text-gray-700 font-medium text-sm flex items-center gap-1">
                                <MessageCircle className="w-4 h-4" />
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
