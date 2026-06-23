import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Building responsive websites',
    },
    {
      id: 2,
      name: 'UI/UX Design',
      description: 'Creating beautiful interfaces',
    },
    {
      id: 3,
      name: 'Mobile Development',
      description: 'Native and cross-platform apps',
    },
    {
      id: 4,
      name: 'Cloud Consulting',
      description: 'Expert cloud solutions',
    },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <p>Choose from our range of professional services.</p>

      <div>
        {services.map((service) => (
          <div key={service.id}>
            <div>{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <Link to={`/services/${service.id}`}>
              <button>Learn More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
