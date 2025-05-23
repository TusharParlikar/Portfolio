# Setting Up EmailJS in Your Project

This guide will help you complete the setup for the EmailJS integration in your contact form.

## 1. Create an EmailJS Account

If you haven't already, sign up for a free account at [EmailJS](https://www.emailjs.com/). The free tier allows 200 emails per month.

## 2. Create an Email Service

1. After signing in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the steps to connect your email account

## 3. Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template using the visual editor
4. Make sure to use these variable names in your template:
   - `{{user_name}}` - The sender's name
   - `{{user_email}}` - The sender's email
   - `{{subject}}` - The email subject
   - `{{message}}` - The message content

## 4. Update Your Environment Variables

This project uses environment variables to store your EmailJS credentials securely. 

1. Open the `.env` file in the root of your project
2. Replace the placeholder values with your actual EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

You can find these values in your EmailJS dashboard:
- Service ID: In the "Email Services" tab
- Template ID: In the "Email Templates" tab
- Public Key: In the "Account" tab under "API Keys"

## 5. Install the EmailJS Package

Make sure to install the EmailJS package:

```
npm install @emailjs/browser
```

## 6. Test Your Form

After updating the environment variables with your credentials, test the contact form by sending a test message. You should receive the email at the address connected to your EmailJS service.

## 7. Additional Customization (Optional)

You can customize the email template further by adding more fields or styling the emails according to your brand.

## Security Note

- The `.env` file should never be committed to version control
- The `.env.example` file is provided as a template for others who might work on the project
- While the public key is designed to be used on the client side, be careful not to expose your private EmailJS credentials in public repositories
