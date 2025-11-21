import React, { useState, useEffect } from 'react';
import { Send, Phone, MessageSquare, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  initialMessage?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialMessage = '' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    type: 'inquiry' // 'inquiry' or 'suggestion'
  });

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: `I would like to order: ${initialMessage}` }));
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a unique tracking ID (TMQC + random string)
    const id = 'TMQC-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    setTrackingId(id);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      // Construct WhatsApp Message including Tracking ID
      const text = `*New ${formData.type === 'suggestion' ? 'Suggestion' : 'Inquiry'}*\n*Tracking ID:* ${id}\nName: ${formData.name}\nContact: ${formData.contact}\nMessage: ${formData.message}`;
      const encodedText = encodeURIComponent(text);
      
      const phoneNumber = "923555426849";
      window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="bg-brand-card p-8 rounded-2xl shadow-xl text-center py-16 animate-fade-in border border-white/10">
        <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 mb-6">Thank you. We will get back to you on WhatsApp shortly.</p>
        
        {/* Display Tracking ID */}
        <div className="mb-8 inline-block">
          <div className="bg-slate-900/50 p-6 rounded-xl border border-brand-gold/20 shadow-inner">
            <p className="text-sm text-slate-500 mb-2 uppercase tracking-wider font-semibold">Order Tracking ID</p>
            <p className="text-3xl font-mono font-bold text-brand-gold tracking-widest">{trackingId}</p>
            <p className="text-xs text-slate-600 mt-3">Please save this ID for your records</p>
          </div>
        </div>

        <div className="block">
          <button 
            onClick={() => { setIsSubmitted(false); setFormData({name: '', contact: '', message: '', type: 'inquiry'}); setTrackingId(''); }}
            className="text-brand-gold font-semibold hover:underline transition-all hover:text-amber-400"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-card p-8 rounded-2xl shadow-xl border border-white/10">
      <div className="mb-8">
        <h3 className="text-2xl font-serif font-bold text-brand-gold">Get in Touch</h3>
        <p className="text-slate-400 text-sm mt-2">
          Fill the form below to place an order or reserve a table. We'll connect via WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
             <label className="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
             <input 
               required
               name="name"
               value={formData.name}
               onChange={handleChange}
               type="text" 
               className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all placeholder-slate-600"
               placeholder="John Doe"
             />
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-400 mb-1">Phone / WhatsApp</label>
             <input 
               required
               name="contact"
               value={formData.contact}
               onChange={handleChange}
               type="text" 
               className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all placeholder-slate-600"
               placeholder="+92..."
             />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Subject</label>
          <select 
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
          >
            <option value="inquiry">Order / Reservation</option>
            <option value="suggestion">Suggestion / Feedback</option>
            <option value="complaint">Complaint</option>
          </select>
        </div>

        <div>
           <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
           <textarea 
             required
             name="message"
             value={formData.message}
             onChange={handleChange}
             rows={4}
             className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all placeholder-slate-600"
             placeholder="I would like to order..."
           ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-brand-primary hover:bg-emerald-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
        >
          <Send size={18} /> Send Message
        </button>

        <div className="mt-6 grid grid-cols-2 gap-4">
           <a 
             href="https://wa.me/923555426849"
             target="_blank"
             rel="noreferrer"
             className="flex items-center justify-center gap-2 py-3 rounded-lg border border-green-600/50 text-green-500 hover:bg-green-900/20 transition-colors text-sm font-semibold"
           >
             <MessageSquare size={16} /> WhatsApp 1
           </a>
           <a 
             href="https://wa.me/923555471000"
             target="_blank"
             rel="noreferrer"
             className="flex items-center justify-center gap-2 py-3 rounded-lg border border-green-600/50 text-green-500 hover:bg-green-900/20 transition-colors text-sm font-semibold"
           >
             <MessageSquare size={16} /> WhatsApp 2
           </a>
        </div>
      </form>
    </div>
  );
};