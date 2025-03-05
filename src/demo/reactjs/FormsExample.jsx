import { useState } from 'react';

const FormsExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
    topic: 'general',
    subscribe: false,
    preferredContact: 'email'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted!\nUsername: ${formData.username}\nEmail: ${formData.email}
      \nTopic: ${formData.topic}\nMessage: ${formData.message}
      \nSubscribed: ${formData.subscribe}\nPreferred Contact: ${formData.preferredContact}`
    );
  };

  return (
    <div className="forms-example">
      <h2>React Forms Example</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="topic" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Topic:
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="general">General</option>
            <option value="technical">Technical</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Preferred Contact Method:
          </label>
          <div>
            <label style={{ marginRight: '1rem' }}>
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={handleChange}
                style={{ marginRight: '0.5rem' }}
              />
              Email
            </label>
            <label style={{ marginRight: '1rem' }}>
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === 'phone'}
                onChange={handleChange}
                style={{ marginRight: '0.5rem' }}
              />
              Phone
            </label>
            <label>
              <input
                type="radio"
                name="preferredContact"
                value="mail"
                checked={formData.preferredContact === 'mail'}
                onChange={handleChange}
                style={{ marginRight: '0.5rem' }}
              />
              Mail
            </label>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              style={{ marginRight: '0.5rem' }}
            />
            Subscribe to newsletter
          </label>
        </div>

        <button 
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default FormsExample;