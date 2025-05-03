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

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all required fields.');
            setLoading(false);
            return;
        }

        // Simulate an API call (replace with your actual API endpoint)
        try {
            // Replace this with your actual fetch or axios call
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2s delay

            // In a real app, you'd send data to your backend here
            console.log('Form Data:', formData);

            setSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        } catch (err) {
            setError('Failed to send message. Please try again.');
            console.error('Error sending message:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-6 h-6 text-red-500" />
                            <span className="text-gray-600">Address: Dewan VS Institude Of Engginering And Technology</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-6 h-6 text-sky-500" />
                            <span className="text-gray-600">Phone: +91 8445945749</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-6 h-6 text-emerald-500" />
                            <span className="text-gray-600">Email: Shakirofficial258@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-600">Message sent successfully! We'll get back to you soon.</p>}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                <User className="inline-block w-4 h-4 mr-1" />
                                Name
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                <Mail className="inline-block w-4 h-4 mr-1" />
                                Email
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                                <MessageCircle className="inline-block w-4 h-4 mr-1" />
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject of your message"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                <MessageCircle className="inline-block w-4 h-4 mr-1" />
                                Message
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message..."
                                rows={4}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white mb-10 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 mr-3"
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
