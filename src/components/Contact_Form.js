import './styles/ContactForm.css';

const ContactForm = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" name="name" placeholder="Enter your name" required />
        <input type="email" name="email" placeholder="Enter your email" required />
        <textarea name="message" placeholder="Enter message" required />
        <button type="submit">Submit</button>
      </form>
    </section>
    
  );
};

export default ContactForm;
