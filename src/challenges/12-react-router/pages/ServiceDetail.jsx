import { useParams, Link } from 'react-router-dom';

function ServiceDetail() {
  const { id } = useParams();

  const services = {
    1: {
      name: 'Web Development',
      description:
        'Full-stack web development using React, Node.js, and modern frameworks.',
      price: '$2000 - $10,000',
      duration: '2-8 weeks',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'CMS Integration',
        'Payment Processing',
      ],
    },
    2: {
      name: 'UI/UX Design',
      description:
        'User-centered design process from wireframes to high-fidelity prototypes.',
      price: '$500 - $5,000',
      duration: '1-4 weeks',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing',
      ],
    },
    3: {
      name: 'Mobile Development',
      description:
        'Cross-platform mobile apps built with React Native and Flutter.',
      price: '$5,000 - $50,000',
      duration: '4-12 weeks',
      features: [
        'iOS & Android',
        'Push Notifications',
        'Offline Support',
        'App Store Submission',
      ],
    },
    4: {
      name: 'Cloud Consulting',
      description:
        'Expert guidance on cloud architecture, migration, and optimization.',
      price: '$200 - $500/hour',
      duration: 'Ongoing',
      features: [
        'AWS/Azure/GCP',
        'Cost Optimization',
        'Security Audits',
        'Migration Strategy',
      ],
    },
  };

  const service = services[id];

  if (!service) {
    return (
      <div>
        <h1>Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
        <Link to='/services'>Back to Services</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to='/services'>← Back to Services</Link>

      <h1>{service.name}</h1>

      <div>
        <p>{service.description}</p>

        <div>
          <div>
            <strong>Price Range:</strong>
            <p>{service.price}</p>
          </div>
          <div>
            <strong>Duration:</strong>
            <p>{service.duration}</p>
          </div>
        </div>

        <h3>Features</h3>
        <ul>
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <button>Get Started</button>
      </div>
    </div>
  );
}

export default ServiceDetail;
