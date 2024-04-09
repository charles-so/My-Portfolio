import React from 'react';
import Navbar from '../components/common/Navbar';
import ContactForm from '../components/Contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-screen-lg container mx-auto flex gap-12 flex-col pb-20">
      <Navbar />
      <ContactForm />
    </div>
  );
};

export default ContactPage;