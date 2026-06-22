import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log('Form Data:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  // Show success message
  if (submitted) {
    return (
      <div>
        <h2>Contact Form</h2>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '4px',
            color: '#155724',
          }}
        >
          <h3>✅ Message Sent!</h3>
          <p>Thank you, {formData.name}. We'll get back to you soon.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', subject: '', message: '' });
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '500px' }}>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor='name'>Name *</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your full name'
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: errors.name ? '2px solid #ff6b6b' : '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
          {errors.name && (
            <p
              style={{
                color: '#ff6b6b',
                margin: '5px 0 0',
                fontSize: '0.9rem',
              }}
            >
              {errors.name}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor='email'>Email *</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='your@email.com'
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: errors.email ? '2px solid #ff6b6b' : '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
          {errors.email && (
            <p
              style={{
                color: '#ff6b6b',
                margin: '5px 0 0',
                fontSize: '0.9rem',
              }}
            >
              {errors.email}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor='subject'>Subject *</label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Message subject'
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: errors.subject ? '2px solid #ff6b6b' : '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
          {errors.subject && (
            <p
              style={{
                color: '#ff6b6b',
                margin: '5px 0 0',
                fontSize: '0.9rem',
              }}
            >
              {errors.subject}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor='message'>Message *</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Write your message here...'
            rows='5'
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: errors.message ? '2px solid #ff6b6b' : '1px solid #ccc',
              boxSizing: 'border-box',
              resize: 'vertical',
            }}
          />
          {errors.message && (
            <p
              style={{
                color: '#ff6b6b',
                margin: '5px 0 0',
                fontSize: '0.9rem',
              }}
            >
              {errors.message}
            </p>
          )}
        </div>

        <button
          type='submit'
          style={{
            padding: '10px 20px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
