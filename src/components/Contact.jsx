import React, { useRef, useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: '', isError: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', isError: false });    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, 
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setFormStatus({ 
            message: 'Message sent successfully! I will get back to you soon.', 
            isError: false 
          });
          form.current.reset();
        },
        (error) => {
          setFormStatus({ 
            message: `Failed to send message: ${error.text}`, 
            isError: true 
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <section id="contact" className='relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-black/20'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <h2 
          data-aos="fade-up"
          className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider mb-12'
        >
          GET IN TOUCH
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <div 
            data-aos="fade-right"
            data-aos-delay="100"
            className='space-y-8'
          >
            <p className='text-base sm:text-lg text-gray-400 max-w-xl'>
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you're looking for a developer or just want to connect!
            </p>
            
            <div className='space-y-6'>
              {/* Email */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center shadow-[0_0_15px_rgba(233,155,99,0.3)]'>
                  <i className='bx bx-envelope text-xl text-white'></i>
                </div>
                <div>
                  <h3 className='text-sm text-gray-400 mb-1'>Email</h3>
                  <a href='mailto:tparlikar497@gmail.com' className='text-base text-white hover:text-[#e99b63] transition-colors'>tparlikar497@gmail.com</a>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center shadow-[0_0_15px_rgba(233,155,99,0.3)]'>
                  <i className='bx bxl-linkedin text-xl text-white'></i>
                </div>                <div>
                  <h3 className='text-sm text-gray-400 mb-1'>LinkedIn</h3>
                  <a href='https://www.linkedin.com/in/tushar-parlikar-98272b292/' target='_blank' rel='noopener noreferrer' className='text-base text-white hover:text-[#e99b63] transition-colors'>linkedin.com/in/tushar-parlikar-98272b292</a>
                </div>
              </div>
              
              {/* GitHub */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center shadow-[0_0_15px_rgba(233,155,99,0.3)]'>
                  <i className='bx bxl-github text-xl text-white'></i>
                </div>
                <div>
                  <h3 className='text-sm text-gray-400 mb-1'>GitHub</h3>
                  <a href='https://github.com/TusharParlikar' target='_blank' rel='noopener noreferrer' className='text-base text-white hover:text-[#e99b63] transition-colors'>github.com/TusharParlikar</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            data-aos="fade-left"
            data-aos-delay="200"
            className='bg-black/40 border border-gray-800 rounded-xl p-6 md:p-8 backdrop-blur-sm'
          >            <h3 className='text-xl font-medium mb-6'>Send a Message</h3>
            
            {formStatus.message && (
              <div className={`p-4 rounded-lg mb-6 ${formStatus.isError ? 'bg-red-900/40 text-red-200' : 'bg-green-900/40 text-green-200'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='user_name' className='block text-sm text-gray-400 mb-2'>Name</label>
                  <input 
                    type='text'
                    id='user_name'
                    name='user_name'
                    className='w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e99b63] transition-colors'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='user_email' className='block text-sm text-gray-400 mb-2'>Email</label>
                  <input 
                    type='email'
                    id='user_email'
                    name='user_email'
                    className='w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e99b63] transition-colors'
                    placeholder='Your Email'
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor='subject' className='block text-sm text-gray-400 mb-2'>Subject</label>
                <input 
                  type='text'
                  id='subject'
                  name='subject'
                  className='w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e99b63] transition-colors'
                  placeholder='Subject'
                  required
                />
              </div>
              
              <div>
                <label htmlFor='message' className='block text-sm text-gray-400 mb-2'>Message</label>
                <textarea 
                  id='message'
                  name='message'
                  rows='5'
                  className='w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e99b63] transition-colors'
                  placeholder='Your Message'
                  required
                ></textarea>
              </div>
              
              <button 
                type='submit' 
                className='bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,155,99,0.4)] focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className='flex items-center gap-2'>
                    <i className='bx bx-loader-alt animate-spin'></i> Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
