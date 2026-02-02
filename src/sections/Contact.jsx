import { useState } from "react";
import emailjs from '@emailjs/browser';
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

// Accessing environment variables
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('success'); // 'success' or 'danger'
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        // // Reset form
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await emailjs.send(serviceId, templateId, {
                from_name: formData.name,
                to_name: "Abhinav",
                from_email: formData.email,
                to_email: contactEmail,
                message: formData.message
            }, publicKey 
            
        );
            setIsLoading(false);
            showAlertMessage('success', 'Message sent successfully!');
            // setTimeout(() => setShowAlert(false), 3000);
            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setIsLoading(false);
            showAlertMessage('danger', 'Something went wrong. Please try again.');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };

  return (

    <section className="relative flex items-center c-space section-spacing">
        <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    
        {showAlert && <Alert type={alertType} text={alertMessage} />}
    
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">
                    Let's Talk..!!
                </h2>
                <p>
                    I'm always open to discussing new projects and ideas. Let's connect and see how we can work together!
                </p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
        </div>


    </section>
  )
}

export default Contact