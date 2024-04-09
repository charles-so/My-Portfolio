import React, { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  // State variables to store form data
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true); // Start the loading animation

    try {
      await axios.post('http://localhost:3000/send-email', {
        firstname: firstName,
        lastname: lastName,
        email: email,
        subject: subject,
        text: message
      });

      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSending(false); // Stop the loading animation
      alert('📩 Email sent successfully, I will get in touch with you shortly!');
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSending(false); // Stop the loading animation
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    <div className="px-10">

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded-md px-3 py-2 h-36"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        {isSending ? (
          <div className="flex">
            <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-black"></div>
          </div>
        ) : (
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
