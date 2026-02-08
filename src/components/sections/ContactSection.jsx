import React, { useState } from 'react';
import { BsSend, BsCheckCircle } from 'react-icons/bs';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); 

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email.includes('@')) tempErrors.email = "Valid email is required";
    if (formData.message.length < 10) tempErrors.message = "Message must be at least 10 chars";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      }, 2000);
    }
  };

  return (
    <section className="py-20 bg-dc-text-main text-white" id="contact">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Have questions about admissions or campus life? Send us a message and our team will get back to you shortly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-dc-red">
                   <BsSend />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="font-bold">admissions@dalycollege.org</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
            
            {/* Success Overlay Animation */}
            <div className={`absolute inset-0 bg-dc-red flex flex-col items-center justify-center transition-transform duration-500 ${status === 'success' ? 'translate-y-0' : 'translate-y-full'}`}>
              <BsCheckCircle className="text-6xl text-white mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold">Message Sent!</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                <input 
                  type="text" 
                  className={`w-full bg-black/20 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded p-3 text-white focus:outline-none focus:border-dc-red transition-colors`}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  className={`w-full bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded p-3 text-white focus:outline-none focus:border-dc-red transition-colors`}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea 
                  rows="4"
                  className={`w-full bg-black/20 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded p-3 text-white focus:outline-none focus:border-dc-red transition-colors`}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-dc-red text-white font-bold py-4 rounded hover:bg-red-700 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                {status !== 'submitting' && <BsSend />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;