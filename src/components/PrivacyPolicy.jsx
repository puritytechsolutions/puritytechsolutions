import React from 'react';
import NewNavBar from './NewNavBar';
import './css/PrivacyPolicy.css';

const PrivacyPolicy = () => (
  <>
    <NewNavBar />
    <div className="privacy-policy">
      <h1>Privacy Policy, Terms, and Conditions</h1>
      <p className="intro-text">
        Purity Technology Solutions ("we," "our," or "us") is committed to protecting your privacy. This document outlines our Privacy Policy, Terms and Conditions, Refund Policy, Pricing Policy, and Shipping Policy for all products and services offered through our platform.
      </p>

      <div className="section">
        <h4>1. Information We Collect</h4>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other information provided during account registration.</li>
          <li><strong>Usage Data:</strong> Information about how you use our apps, including activity logs, preferences, and interactions.</li>
          <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system.</li>
          <li><strong>Location Data:</strong> If enabled, location information may be collected to improve app functionalities (e.g., for food delivery).</li>
        </ul>
      </div>

      <div className="section">
        <h4>2. How We Use Your Information</h4>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To personalize user experiences and improve app performance.</li>
          <li>To communicate with you regarding updates, promotions, or technical support.</li>
          <li>To analyze trends and improve app functionalities.</li>
        </ul>
      </div>

      <div className="section">
        <h4>3. Refund and Cancellation Policy</h4>
        <ul>
          <li>Refunds are processed for eligible products and services based on the Cancellation Policy on our website.</li>
          <li>The refund amount will be credited to your bank account within 3 - 4 working days of approval.</li>
          <li>Cancellations are allowed before the product or service is shipped or initiated. Contact us immediately at <strong>support@puritytechsolutions.com</strong> for assistance.</li>
        </ul>
      </div>

      <div className="section">
        <h4>4. Pricing Policy</h4>
        <ul>
          <li>All prices displayed on the website are in Indian Rupees (INR).</li>
          <li>Taxes and additional charges, if applicable, will be clearly mentioned at checkout.</li>
        </ul>
      </div>

      <div className="section">
        <h4>5. Shipping Policy</h4>
        <ul>
          <li>We strive to ship products within 1 working days after order confirmation.</li>
          {/* <li>The delivery timeline varies between 2-3 working days, depending on the location.</li> */}
          <li>Customers will receive tracking information once the order is dispatched.</li>
        </ul>
      </div>

      <div className="section">
        <h4>6. Data Security</h4>
        <ul>
          <li>We use encryption and other security measures to protect your data.</li>
          <li>While we strive to protect your information, no method of transmission over the internet is 100% secure.</li>
        </ul>
      </div>

      <div className="section">
        <h4>7. Your Rights</h4>
        <ul>
          <li>Access, update, or delete your personal information by contacting us at <strong>support@puritytechsolutions.com</strong>.</li>
          <li>Opt-out of promotional communications through the provided links or by contacting us.</li>
        </ul>
      </div>

      <div className="section">
        <h4>8. Third-Party Links</h4>
        <ul>
          <li>Our apps may contain links to third-party websites or services. We are not responsible for their privacy practices.</li>
        </ul>
      </div>

      <div className="section">
        <h4>9. Children’s Privacy</h4>
        <ul>
          <li>Our apps are not intended for users under the age of 13. We do not knowingly collect information from children.</li>
        </ul>
      </div>

      <div className="section">
        <h4>10. Contact Us</h4>
        <ul>
          <li>If you have questions about this document, please contact us at:</li>
          <li>Email: <strong>support@puritytechsolutions.com</strong></li>
          <li>Phone: <strong>+91-8149772397</strong></li>
          <li>Address: Purity Technology Solutions, 103 Guruvarya Chikane Guruji Residency, Kshetrapal Nagar,Shivtar Road, Khed, Ratnagiri-415709, Maharashtra</li>
        </ul>
      </div>

      <div className="section">
        <h4>11. Products and Services</h4>
        <ul>
          <li>We offer a range of applications, including a CRM app, Fitness app, and Food Delivery app.</li>
          <li>Each service is designed to provide specific functionalities and is governed by the terms and policies outlined here.</li>
        </ul>
      </div>

      <div className="section">
        <h4>12. Changes to This Policy</h4>
        <ul>
          <li>We may update this policy periodically. Significant changes will be communicated to users.</li>
        </ul>
      </div>

      <p className="consent-text">By using our platform, you agree to the terms and policies outlined in this document.</p>
    </div>
  </>
);

export default PrivacyPolicy;
