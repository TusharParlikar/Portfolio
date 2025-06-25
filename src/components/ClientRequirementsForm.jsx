import React, { useState } from 'react';
import jsPDF from 'jspdf';
import emailjs from '@emailjs/browser';
import './ClientRequirementsForm.css';

const ClientRequirementsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    websiteType: [],
    pages: [],
    features: [],
    designPreference: '',
    referenceUrls: '',
    logo: '',
    colorScheme: '',
    fontPreferences: '',
    domainStatus: '',
    existingDomain: '',
    preferredDomains: '',
    hosting: '',
    budget: '',
    timeline: '',
    communicationMethod: [],
    meetingPreference: '',
    additionalServices: [],
    contentStatus: '',
    contentNotes: '',
    businessType: '',
    targetAudience: '',
    businessGoals: '',
    projectPriority: '',
    additionalRequirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' }); // 'success', 'error', 'info'

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...(prev[name] || []), value]
          : (prev[name] || []).filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePDFGeneration = async () => {
    if (!formData.fullName || !formData.email) {
      setSubmitStatus({ 
        message: 'Please fill in at least your Name and Email to generate PDF', 
        type: 'error' 
      });
      return;
    }
    
    setIsGeneratingPDF(true);
    setSubmitStatus({ message: '', type: '' });
    
    try {
      const pdfData = generatePDF();
      setSubmitStatus({ 
        message: '📄 PDF generated and downloaded successfully! You can now send it manually to tparlikar497@gmail.com', 
        type: 'success' 
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      setSubmitStatus({ 
        message: '❌ Error generating PDF. Please try again or contact us directly.', 
        type: 'error' 
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let yPosition = 20;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    
    // Title Page (Professional Header)
    doc.setFontSize(24);
    doc.setTextColor(0, 102, 204);
    doc.text('WEBSITE DEVELOPER', 105, yPosition, { align: 'center' });
    yPosition += 10;
    
    doc.setFontSize(16);
    doc.setTextColor(51, 153, 255);
    doc.text('Client Requirements & Project Proposal', 105, yPosition, { align: 'center' });
    yPosition += 15;
    
    // Add horizontal line
    doc.setLineWidth(1);
    doc.setDrawColor(0, 102, 204);
    doc.line(margin, yPosition, 210 - margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Professional Web Development Services', 105, yPosition, { align: 'center' });
    yPosition += 20;
    
    // Developer Information Table
    const developerInfo = [
      ['Developer', 'Tushar Vijaykumer Parlikar'],
      ['Email', 'tparlikar497@gmail.com'],
      ['LinkedIn', 'linkedin.com/in/tushar-parlikar-98272b292'],
      ['Portfolio', 'portfolio-7m5o.vercel.app'],
      ['Date', new Date().toLocaleDateString()],
      ['Client', formData.fullName || 'N/A'],
      ['Project Type', 'Custom MERN Stack Web Application']
    ];
    
    // Draw developer info table
    developerInfo.forEach(([label, value]) => {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        yPosition = 20;
      }
      doc.setFont(undefined, 'bold');
      doc.text(label + ':', margin, yPosition);
      doc.setFont(undefined, 'normal');
      doc.text(value, margin + 50, yPosition);
      yPosition += 8;
    });
    
    yPosition += 10;
    
    const addSection = (title, content, isSubsection = false) => {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(isSubsection ? 12 : 14);
      if (isSubsection) {
        doc.setTextColor(51, 153, 255);
      } else {
        doc.setTextColor(0, 102, 204);
      }
      doc.setFont(undefined, 'bold');
      doc.text(title, margin, yPosition);
      yPosition += 8;
      
      // Add underline for main sections
      if (!isSubsection) {
        doc.setLineWidth(0.5);
        doc.setDrawColor(0, 102, 204);
        doc.line(margin, yPosition, 210 - margin, yPosition);
        yPosition += 5;
      }
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont(undefined, 'normal');
      
      if (typeof content === 'string') {
        const lines = doc.splitTextToSize(content, 170);
        doc.text(lines, margin, yPosition);
        yPosition += lines.length * 5 + 8;
      } else if (Array.isArray(content)) {
        content.forEach(item => {
          if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = 20;
          }
          doc.text(`• ${item}`, margin + 5, yPosition);
          yPosition += 5;
        });
        yPosition += 8;
      }
    };
    
    // Add new page for content
    doc.addPage();
    yPosition = 20;
    
    // Section 1: Client Information
    addSection('CLIENT INFORMATION REQUIRED', '');
    addSection('Primary Contact Details', 
      `Full Name: ${formData.fullName || 'N/A'}\n` +
      `Email Address: ${formData.email || 'N/A'}\n` +
      `Phone Number: ${formData.phone || 'N/A'}\n` +
      `Company/Business Name: ${formData.company || 'N/A'}\n` +
      `Complete Address: ${formData.address || 'N/A'}`, true
    );
    
    // Section 2: Project Specifications
    addSection('Project Specifications', '', true);
    
    if (formData.websiteType.length > 0) {
      addSection('Website Type & Purpose', formData.websiteType, true);
    }
    
    if (formData.pages.length > 0) {
      addSection('Required Pages/Modules', formData.pages, true);
    }
    
    if (formData.features.length > 0) {
      addSection('Special Features Required', formData.features, true);
    }
    
    // Section 3: Design & Branding Requirements
    addSection('DESIGN & BRANDING REQUIREMENTS', '');
    addSection('Design Preferences', 
      `Design Preference: ${formData.designPreference || 'N/A'}\n` +
      `Reference URLs: ${formData.referenceUrls || 'N/A'}\n` +
      `Logo: ${formData.logo || 'N/A'}\n` +
      `Color Scheme: ${formData.colorScheme || 'N/A'}\n` +
      `Font Preferences: ${formData.fontPreferences || 'N/A'}`, true
    );
    
    // Section 4: Domain & Hosting Requirements
    addSection('DOMAIN & HOSTING REQUIREMENTS', '');
    addSection('Domain & Hosting Information', 
      `Domain Status: ${formData.domainStatus || 'N/A'}\n` +
      `Existing Domain: ${formData.existingDomain || 'N/A'}\n` +
      `Preferred Domains: ${formData.preferredDomains || 'N/A'}\n` +
      `Hosting Preference: ${formData.hosting || 'N/A'}`, true
    );
    
    // Section 5: Project Timeline & Pricing
    addSection('PROJECT TIMELINE & PRICING', '');
    addSection('Budget & Timeline', 
      `Budget Range: ${formData.budget || 'N/A'}\n` +
      `Expected Timeline: ${formData.timeline || 'N/A'}`, true
    );
    
    // Section 6: Agile Development Process
    addSection('Agile Development Process', 
      `This project follows an Agile methodology where client input is the top priority at every step.\n\n` +
      `Development Sprints:\n` +
      `• Sprint 1 (2-3 days): Requirements & Wireframes\n` +
      `• Sprint 2 (3-4 days): UI/UX Design Mockups\n` +
      `• Sprint 3 (4-5 days): Frontend Development\n` +
      `• Sprint 4 (3-4 days): Backend Development\n` +
      `• Sprint 5 (2-3 days): Integration & Testing\n` +
      `• Sprint 6 (1-2 days): Deployment & Handover\n\n` +
      `Total Duration: 15-21 days with 6 Google Meet review calls`, true
    );
    
    // Section 7: Business Information
    if (formData.businessType || formData.targetAudience || formData.businessGoals) {
      addSection('BUSINESS INFORMATION', '');
      addSection('Business Details', 
        `Business Type: ${formData.businessType || 'N/A'}\n` +
        `Target Audience: ${formData.targetAudience || 'N/A'}\n` +
        `Business Goals: ${formData.businessGoals || 'N/A'}`, true
      );
    }
    
    // Section 8: Additional Requirements
    if (formData.additionalRequirements) {
      addSection('ADDITIONAL REQUIREMENTS', formData.additionalRequirements);
    }
    
    // Section 9: Payment Terms
    addSection('PAYMENT TERMS', 
      `• Advance Payment: 50% of total amount before starting\n` +
      `• Milestone Payment: 30% after frontend completion\n` +
      `• Final Payment: 20% after deployment and handover\n\n` +
      `Payment Methods: Bank Transfer/UPI, Google Pay/PhonePe, Razorpay/PayPal`, true
    );
    
    // Section 10: Project Deliverables
    addSection('PROJECT DELIVERABLES', 
      `What you will receive:\n` +
      `• Fully deployed live website\n` +
      `• Mobile-responsive design\n` +
      `• Admin/user login credentials\n` +
      `• Hosting panel access\n` +
      `• Domain DNS management guide\n` +
      `• Basic website maintenance guide\n` +
      `• 2 weeks free support for bugs/issues\n` +
      `• SSL certificate setup\n` +
      `• Basic SEO optimization`, true
    );
    
    // Footer
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = 20;
    }
    
    yPosition = pageHeight - 40;
    doc.setFontSize(12);
    doc.setTextColor(0, 102, 204);
    doc.setFont(undefined, 'bold');
    doc.text('Thank you for choosing our MERN Stack development services!', 105, yPosition, { align: 'center' });
    yPosition += 8;
    doc.setFontSize(10);
    doc.setTextColor(51, 153, 255);
    doc.setFont(undefined, 'italic');
    doc.text('Professional web solutions for your business growth', 105, yPosition, { align: 'center' });
    
    const fileName = `MERN_Stack_Proposal_${formData.fullName || 'Client'}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    
    return doc.output('datauristring');
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      setSubmitStatus({ 
        message: 'Please fill in all required fields (Name, Email, Phone)', 
        type: 'error' 
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ message: '', type: '' });
    
    try {
      // 1. Save to MongoDB via API
      console.log('Saving form data to MongoDB...');
      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        id: `submission_${Date.now()}`,
        status: 'submitted',
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct'
      };
      
      // Call the API endpoint to save to MongoDB
      const mongoResponse = await fetch('/api/save-requirement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });
      
      const mongoResult = await mongoResponse.json();
      
      if (mongoResponse.ok) {
        console.log('✅ Data saved to MongoDB successfully with ID:', mongoResult.insertedId);
      } else {
        console.warn('⚠️ Failed to save to MongoDB:', mongoResult.error);
        // Continue with email anyway, but note the failure
      }
      
      // 2. Generate PDF
      console.log('Generating PDF...');
      const pdfData = generatePDF();
      
      // 3. Prepare email data with PDF information
      const emailData = {
        to_name: 'Tushar Parlikar',
        from_name: formData.fullName,
        from_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone,
        company: formData.company || 'N/A',
        website_type: formData.websiteType.join(', '),
        budget: formData.budget || 'N/A',
        timeline: formData.timeline || 'N/A',
        business_type: formData.businessType || 'N/A',
        additional_requirements: formData.additionalRequirements || 'N/A',
        submission_id: mongoResult.insertedId || submissionData.id,
        pdf_generated: 'Yes',
        submission_time: new Date().toLocaleString(),
        message: `
NEW PROJECT INQUIRY - DETAILED REQUIREMENTS

SUBMISSION ID: ${mongoResult.insertedId || submissionData.id}
SUBMISSION TIME: ${new Date().toLocaleString()}
DATABASE: MongoDB Atlas

CLIENT DETAILS:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}
Business Type: ${formData.businessType || 'N/A'}

PROJECT SUMMARY:
Website Type: ${formData.websiteType.join(', ') || 'N/A'}
Required Pages: ${formData.pages.join(', ') || 'N/A'}
Special Features: ${formData.features.join(', ') || 'N/A'}
Budget: ${formData.budget || 'N/A'}
Timeline: ${formData.timeline || 'N/A'}
Priority: ${formData.projectPriority || 'N/A'}

DESIGN PREFERENCES:
Design Preference: ${formData.designPreference || 'N/A'}
Color Scheme: ${formData.colorScheme || 'N/A'}
Reference URLs: ${formData.referenceUrls || 'N/A'}

DOMAIN & HOSTING:
Domain Status: ${formData.domainStatus || 'N/A'}
Hosting Preference: ${formData.hosting || 'N/A'}

COMMUNICATION PREFERENCES:
Methods: ${formData.communicationMethod.join(', ') || 'N/A'}
Meeting Preference: ${formData.meetingPreference || 'N/A'}

ADDITIONAL SERVICES:
${formData.additionalServices.join(', ') || 'None'}

BUSINESS INFORMATION:
Target Audience: ${formData.targetAudience || 'N/A'}
Business Goals: ${formData.businessGoals || 'N/A'}

ADDITIONAL NOTES:
${formData.additionalRequirements || 'None'}

✅ A detailed PDF proposal has been generated and downloaded.
✅ Data has been saved locally for reference.

Please review the PDF and respond with any questions or clarifications needed.
        `
      };

      // 4. Send email via EmailJS
      console.log('Sending email via EmailJS...');
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_not_configured',
        import.meta.env.VITE_EMAILJS_REQUIREMENTS_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_not_configured',
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_not_configured'
      );
      
      if (response.status === 200) {
        const successMessage = mongoResponse.ok 
          ? '✅ SUCCESS! Your requirements have been submitted, saved to MongoDB, and PDF generated. We will get back to you within 24 hours with a detailed proposal.'
          : '✅ SUCCESS! Your requirements have been submitted and PDF generated. Email sent successfully. We will get back to you within 24 hours.';
          
        setSubmitStatus({ 
          message: successMessage, 
          type: 'success' 
        });
        
        console.log('✅ Email sent successfully!');
        
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          address: '',
          websiteType: [],
          pages: [],
          features: [],
          designPreference: '',
          referenceUrls: '',
          logo: '',
          colorScheme: '',
          fontPreferences: '',
          domainStatus: '',
          existingDomain: '',
          preferredDomains: '',
          hosting: '',
          budget: '',
          timeline: '',
          communicationMethod: [],
          meetingPreference: '',
          additionalServices: [],
          contentStatus: '',
          contentNotes: '',
          businessType: '',
          targetAudience: '',
          businessGoals: '',
          projectPriority: '',
          additionalRequirements: ''
        });
      } else {
        throw new Error('Email service returned non-200 status: ' + response.status);
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Check if it's an EmailJS configuration error
      if (error.message && error.message.includes('not_configured')) {
        setSubmitStatus({ 
          message: '⚙️ EmailJS is not configured yet. The PDF has been generated and downloaded. Data saved to MongoDB. Please send PDF manually to tparlikar497@gmail.com', 
          type: 'info' 
        });
      } else if (error.status === 400) {
        setSubmitStatus({ 
          message: '❌ Invalid email configuration. The PDF has been generated and data saved to MongoDB. Please contact tparlikar497@gmail.com directly.', 
          type: 'error' 
        });
      } else if (error.status === 401) {
        setSubmitStatus({ 
          message: '🔑 Email service authentication failed. The PDF has been generated and data saved to MongoDB. Please send it to tparlikar497@gmail.com', 
          type: 'error' 
        });
      } else {
        setSubmitStatus({ 
          message: '📧 Email service temporarily unavailable. The PDF has been generated and data saved to MongoDB. Please send PDF manually to tparlikar497@gmail.com', 
          type: 'info' 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="custom-contact-form">
      <div className="form-header">
        <h2>Project Requirements Form</h2>
        <p>Please fill out this comprehensive form to help us understand your project needs better.</p>
        
        {/* What Happens When You Submit */}
        <div className="info-box">
          <h4>📋 What happens when you submit this form:</h4>
          <ul>
            <li>✅ <strong>PDF Generated:</strong> A professional project proposal PDF will be automatically downloaded to your device</li>
            <li>✅ <strong>Data Saved:</strong> Your requirements are securely stored in MongoDB database for future reference</li>
            <li>✅ <strong>Email Sent:</strong> Your details are emailed directly to the developer (PDF details included in email text)</li>
            <li>✅ <strong>Quick Response:</strong> You'll receive a personalized response within 24 hours</li>
          </ul>
          <p className="info-note"><strong>Note:</strong> Due to email service limitations, the PDF is downloaded to your device and the details are sent via email text. You can also manually send the PDF to <strong>tparlikar497@gmail.com</strong> if needed.</p>
        </div>
      </div>
      
      {/* Status Message */}
      {submitStatus.message && (
        <div className={`status-message ${submitStatus.type}`}>
          <p>{submitStatus.message}</p>
          <button 
            type="button" 
            className="close-btn"
            onClick={() => setSubmitStatus({ message: '', type: '' })}
          >
            ×
          </button>
        </div>
      )}
      
      <form onSubmit={submitForm}>
        {/* Primary Contact Details */}
        <section className="form-section">
          <h3>📞 Primary Contact Details</h3>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              value={formData.fullName}
              onChange={handleInputChange}
              required 
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleInputChange}
              required 
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company/Business Name</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company or business name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Complete Address</label>
            <textarea 
              id="address" 
              name="address" 
              rows="3"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Your complete address (optional)"
            ></textarea>
          </div>
        </section>

        {/* Business Information */}
        <section className="form-section">
          <h3>🏢 Business Information</h3>
          <div className="form-group">
            <label htmlFor="businessType">Business Type</label>
            <select 
              id="businessType" 
              name="businessType"
              value={formData.businessType || ''}
              onChange={handleInputChange}
            >
              <option value="">Select Business Type</option>
              <option value="startup">Startup</option>
              <option value="small-business">Small Business</option>
              <option value="medium-business">Medium Business</option>
              <option value="enterprise">Enterprise</option>
              <option value="freelancer">Freelancer/Individual</option>
              <option value="non-profit">Non-Profit Organization</option>
              <option value="ecommerce">E-commerce Store</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="targetAudience">Target Audience</label>
            <textarea 
              id="targetAudience" 
              name="targetAudience" 
              rows="3" 
              placeholder="Describe your target audience/customers..."
              value={formData.targetAudience || ''}
              onChange={handleInputChange}
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="businessGoals">Primary Business Goals for this Website</label>
            <textarea 
              id="businessGoals" 
              name="businessGoals" 
              rows="3" 
              placeholder="What do you want to achieve with this website? (e.g., increase sales, generate leads, showcase portfolio, etc.)"
              value={formData.businessGoals || ''}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </section>

        {/* Project Specifications */}
        <section className="form-section">
          <h3>💻 Project Specifications</h3>
          <div className="form-group">
            <label>Website Type & Purpose</label>
            <div className="checkbox-group">
              {[
                { value: 'portfolio', label: 'Portfolio Website' },
                { value: 'ecommerce', label: 'E-commerce Store' },
                { value: 'business', label: 'Business Website' },
                { value: 'booking', label: 'Booking/Appointment System' },
                { value: 'dashboard', label: 'Dashboard/Admin Panel' },
                { value: 'blog', label: 'Blog/Content Management' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="checkbox" 
                    name="websiteType" 
                    value={option.value}
                    checked={formData.websiteType.includes(option.value)}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
          
          <div className="form-group">
            <label>Required Pages/Modules</label>
            <div className="checkbox-group">
              {[
                { value: 'homepage', label: 'Homepage' },
                { value: 'about', label: 'About Us' },
                { value: 'contact', label: 'Contact Page' },
                { value: 'userAuth', label: 'User Registration/Login' },
                { value: 'dashboard', label: 'User Dashboard' },
                { value: 'admin', label: 'Admin Panel' },
                { value: 'products', label: 'Product Catalog' },
                { value: 'cart', label: 'Shopping Cart' },
                { value: 'payment', label: 'Payment Integration' },
                { value: 'search', label: 'Search Functionality' },
                { value: 'blog', label: 'Blog Section' },
                { value: 'gallery', label: 'Gallery/Portfolio' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="checkbox" 
                    name="pages" 
                    value={option.value}
                    checked={formData.pages.includes(option.value)}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Special Features Required</label>
            <div className="checkbox-group">
              {[
                { value: 'userAuth', label: 'User Authentication' },
                { value: 'passwordReset', label: 'Password Reset' },
                { value: 'emailNotifications', label: 'Email Notifications' },
                { value: 'sms', label: 'SMS Integration' },
                { value: 'paymentGateway', label: 'Payment Gateway' },
                { value: 'fileUpload', label: 'File Upload System' },
                { value: 'realTimeChat', label: 'Real-time Chat' },
                { value: 'socialMedia', label: 'Social Media Integration' },
                { value: 'multiLanguage', label: 'Multi-language Support' },
                { value: 'responsive', label: 'Mobile Responsive Design' },
                { value: 'seo', label: 'SEO Optimization' },
                { value: 'analytics', label: 'Analytics Integration' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="checkbox" 
                    name="features" 
                    value={option.value}
                    checked={formData.features.includes(option.value)}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Design & Branding */}
        <section className="form-section">
          <h3>🎨 Design & Branding Requirements</h3>
          <div className="form-group">
            <label>Design Preferences</label>
            <div className="radio-group">
              {[
                { value: 'existing', label: 'I have existing design/mockups' },
                { value: 'create', label: 'I need you to create the design' },
                { value: 'reference', label: 'I have reference websites to follow' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="radio" 
                    name="designPreference" 
                    value={option.value}
                    checked={formData.designPreference === option.value}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="referenceUrls">Reference Website URLs</label>
            <textarea 
              id="referenceUrls" 
              name="referenceUrls" 
              rows="3" 
              placeholder="Enter reference URLs (one per line)"
              value={formData.referenceUrls}
              onChange={handleInputChange}
            ></textarea>
          </div>
          
          <div className="form-group">
            <label>Brand Assets</label>
            <div className="form-row">
              <label>Logo: 
                <input 
                  type="radio" 
                  name="logo" 
                  value="available"
                  checked={formData.logo === 'available'}
                  onChange={handleInputChange}
                /> Available
                <input 
                  type="radio" 
                  name="logo" 
                  value="needCreation"
                  checked={formData.logo === 'needCreation'}
                  onChange={handleInputChange}
                /> Need Creation
              </label>
            </div>
            <input 
              type="text" 
              name="colorScheme" 
              placeholder="Color Scheme Preferences (e.g., Blue, Red, Modern, Minimalist)"
              value={formData.colorScheme}
              onChange={handleInputChange}
            />
            <input 
              type="text" 
              name="fontPreferences" 
              placeholder="Font Preferences (e.g., Modern, Classic, Sans-serif)"
              value={formData.fontPreferences}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Content Preparation */}
        <section className="form-section">
          <h3>📝 Content & Materials</h3>
          <div className="form-group">
            <label>Content Preparation Status</label>
            <div className="radio-group">
              {[
                { value: 'ready', label: 'All content is ready (text, images, etc.)' },
                { value: 'partial', label: 'Some content ready, need help with rest' },
                { value: 'need-help', label: 'Need complete content creation help' },
                { value: 'stock-content', label: 'Use stock images and placeholder content' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="radio" 
                    name="contentStatus" 
                    value={option.value}
                    checked={formData.contentStatus === option.value}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="contentNotes">Content Requirements/Notes</label>
            <textarea 
              id="contentNotes" 
              name="contentNotes" 
              rows="3" 
              placeholder="Describe your content requirements, brand guidelines, or specific materials you have..."
              value={formData.contentNotes || ''}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </section>

        {/* Domain & Hosting */}
        <section className="form-section">
          <h3>🌐 Domain & Hosting Requirements</h3>
          <div className="form-group">
            <label>Domain Information</label>
            <div className="radio-group">
              {[
                { value: 'owned', label: 'I already own a domain' },
                { value: 'new', label: 'I need a new domain' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="radio" 
                    name="domainStatus" 
                    value={option.value}
                    checked={formData.domainStatus === option.value}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <input 
              type="text" 
              name="existingDomain" 
              placeholder="Existing domain (if applicable) - e.g., yourdomain.com"
              value={formData.existingDomain}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="preferredDomains">Preferred Domain Names</label>
            <textarea 
              id="preferredDomains" 
              name="preferredDomains" 
              rows="3" 
              placeholder="Enter preferred domain names (in order of preference)"
              value={formData.preferredDomains}
              onChange={handleInputChange}
            ></textarea>
          </div>
          
          <div className="form-group">
            <label>Hosting Preferences</label>
            <div className="radio-group">
              {[
                { value: 'free', label: 'Free Hosting (Vercel + Render + MongoDB Atlas)' },
                { value: 'shared', label: 'Shared Hosting (₹2,000-5,000/year)' },
                { value: 'vps', label: 'VPS/Cloud Hosting (₹5,000+/year)' },
                { value: 'developer', label: 'Let developer decide' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="radio" 
                    name="hosting" 
                    value={option.value}
                    checked={formData.hosting === option.value}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Budget & Timeline */}
        <section className="form-section">
          <h3>💰 Budget & Timeline</h3>
          <div className="form-group">
            <label htmlFor="budget">Expected Budget Range</label>
            <select 
              id="budget" 
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
            >
              <option value="">Select Budget Range</option>
              <option value="8000-10000">₹8,000 - ₹10,000 (Basic)</option>
              <option value="10000-13000">₹10,000 - ₹13,000 (Standard)</option>
              <option value="13000-18000">₹13,000 - ₹18,000 (Premium)</option>
              <option value="18000+">₹18,000+ (Enterprise)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="timeline">Expected Timeline</label>
            <select 
              id="timeline" 
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
            >
              <option value="">Select Timeline</option>
              <option value="15-21">15-21 days (Standard)</option>
              <option value="10-15">10-15 days (Rush)</option>
              <option value="21-30">21-30 days (Flexible)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Project Priority Level</label>
            <div className="radio-group">
              {[
                { value: 'standard', label: 'Standard (15-21 days)' },
                { value: 'urgent', label: 'Urgent (10-15 days) - May include rush charges' },
                { value: 'flexible', label: 'Flexible (21-30 days)' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="radio" 
                    name="projectPriority" 
                    value={option.value}
                    checked={formData.projectPriority === option.value}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Communication Preferences */}
        <section className="form-section">
          <h3>📞 Communication & Project Management</h3>
          <div className="form-group">
            <label>Preferred Communication Method</label>
            <div className="checkbox-group">
              {[
                { value: 'whatsapp', label: 'WhatsApp (Quick updates)' },
                { value: 'email', label: 'Email (Detailed feedback)' },
                { value: 'googlemeet', label: 'Google Meet (Sprint reviews)' },
                { value: 'phone', label: 'Phone Call (Urgent issues)' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="checkbox" 
                    name="communicationMethod" 
                    value={option.value}
                    checked={formData.communicationMethod?.includes(option.value) || false}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
          
          <div className="form-group">
            <label>Google Meet Review Preference</label>
            <div className="radio-group">
              {[
                { value: 'after-each-sprint', label: 'After each sprint (Recommended)' },
                { value: 'weekly', label: 'Weekly reviews' },
                { value: 'bi-weekly', label: 'Bi-weekly reviews' },
                { value: 'minimal', label: 'Minimal meetings (2-3 total)' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="radio" 
                    name="meetingPreference" 
                    value={option.value}
                    checked={formData.meetingPreference === option.value}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="form-section">
          <h3>⭐ Additional Services (Optional)</h3>
          <div className="form-group">
            <label>Optional Add-ons</label>
            <div className="checkbox-group">
              {[
                { value: 'source-code', label: 'Source Code Handover (+₹2,000)' },
                { value: 'extended-support', label: 'Extended Support 3 months (+₹1,500)' },
                { value: 'content-upload', label: 'Content Upload Service (+₹1,000)' },
                { value: 'advanced-seo', label: 'Advanced SEO Optimization (+₹2,000)' },
                { value: 'analytics-setup', label: 'Analytics Setup (+₹500)' },
                { value: 'social-media', label: 'Social Media Integration (+₹1,000)' },
                { value: 'email-marketing', label: 'Email Marketing Setup (+₹1,500)' },
                { value: 'performance-optimization', label: 'Performance Optimization (+₹1,000)' }
              ].map(option => (
                <label key={option.value}>
                  <input 
                    type="checkbox" 
                    name="additionalServices" 
                    value={option.value}
                    checked={formData.additionalServices?.includes(option.value) || false}
                    onChange={handleInputChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Requirements */}
        <section className="form-section">
          <h3>📋 Additional Requirements</h3>
          <div className="form-group">
            <label htmlFor="additionalRequirements">Additional Requirements/Notes</label>
            <textarea 
              id="additionalRequirements" 
              name="additionalRequirements" 
              rows="5" 
              placeholder="Please describe any additional requirements or specific features you need..."
              value={formData.additionalRequirements}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </section>

        {/* Form Actions */}
        <div className="form-actions">
          <button 
            type="button" 
            onClick={handlePDFGeneration} 
            className="btn btn-secondary"
            disabled={isGeneratingPDF}
          >
            {isGeneratingPDF ? '📄 Generating...' : '📄 Generate PDF Only'}
          </button>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? '📤 Submitting...' : '📤 Submit & Send Email'}
          </button>
        </div>
        
        <div className="form-note">
          <p><strong>📧 Email Process:</strong> Your information will be sent via email, and a PDF will be downloaded to your device. Due to email service limitations, PDFs cannot be attached directly to emails. You'll receive a response within 24 hours.</p>
          <p><strong>💾 Data Security:</strong> All submitted information is securely stored in MongoDB Atlas database and will only be used for project communication and proposals.</p>
        </div>
      </form>
    </div>
  );
};

export default ClientRequirementsForm;
