import React, { useState } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Kubernetes Multi-Tier App",
      description: "Deployed a microservices e-commerce platform on Kubernetes with automated CI/CD using GitHub Actions.",
      tags: ["Kubernetes", "Docker", "CI/CD", "GitHub Actions"],
    },
    {
      title: "Observability Stack",
      description: "Built a complete monitoring solution with Prometheus, Grafana, and ELK stack for centralized logging and alerting.",
      tags: ["Prometheus", "Grafana", "ELK", "Monitoring"],
    },
    {
      title: "IaC Automation",
      description: "Automated infrastructure provisioning using Terraform and Ansible, enabling reproducible dev/staging/prod environments.",
      tags: ["Terraform", "Ansible", "Infrastructure", "AWS"],
    }
  ];

  const skills = [
    { category: "Container & Orchestration", items: ["Docker", "Kubernetes", "Docker Compose"] },
    { category: "CI/CD & DevOps", items: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"] },
    { category: "Infrastructure as Code", items: ["Terraform", "Ansible", "CloudFormation"] },
    { category: "Cloud Platforms", items: ["AWS", "GCP", "Azure"] },
    { category: "Monitoring & Logging", items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"] },
    { category: "Linux & Networking", items: ["Linux", "Networking", "bash", "systemd"] }
  ];

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        padding: '1.5rem 2rem',
        borderBottom: '1px solid #333',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: '#1a1a1a'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 500, margin: 0 }}>Sakshi Jaswal</h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['about', 'projects', 'skills', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0.5rem 0',
                  fontSize: '14px',
                  fontWeight: activeSection === item ? 500 : 400,
                  color: activeSection === item ? '#fff' : '#aaa',
                  cursor: 'pointer',
                  borderBottom: activeSection === item ? '2px solid #fff' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 500, margin: '0 0 1rem 0' }}>
            DevOps Engineer & Cloud Architect
          </h2>
          <p style={{ fontSize: '16px', color: '#aaa', lineHeight: 1.7, margin: 0, maxWidth: '600px' }}>
            Building scalable infrastructure, automating deployments, and designing cloud-native solutions. Passionate about Kubernetes, Infrastructure as Code, and observability.
          </p>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
          <a 
            href="mailto:sakshijaswal.082004@gmail.com" 
            style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s', fontSize: '18px' }}
            title="Email me"
          >
            ✉️
          </a>
          <a 
            href="https://www.linkedin.com/in/jaswalsakshi" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s', fontSize: '18px' }}
            title="Visit LinkedIn"
          >
            in
          </a>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {activeSection === 'about' && (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '1.5rem' }}>About me</h3>
            <div style={{ color: '#aaa', lineHeight: 1.7 }}>
              <p>I'm a DevOps engineer focused on building reliable, scalable infrastructure. With a strong foundation in Linux, networking, and cloud platforms, I specialize in containerization, orchestration, and Infrastructure as Code.</p>
              <p>My passion is helping teams automate their deployments, implement observability, and adopt cloud-native practices. I believe in building things that work in production.</p>
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '2rem' }}>Featured projects</h3>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.5rem',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    backgroundColor: '#222',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '16px', fontWeight: 500 }}>{project.title}</h4>
                  <p style={{ margin: '0 0 1rem 0', color: '#aaa', lineHeight: 1.6 }}>{project.description}</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#333',
                          color: '#aaa',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 400
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '2rem' }}>Skills & technologies</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{skillGroup.category}</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#333',
                          color: '#fff',
                          borderRadius: '4px',
                          fontSize: '14px',
                          fontWeight: 400,
                          border: '1px solid #444'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '1.5rem' }}>Get in touch</h3>
            <div style={{ color: '#aaa', lineHeight: 1.7 }}>
              <p>I'm always interested in hearing about new opportunities and collaborations.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <a 
                  href="mailto:sakshijaswal.082004@gmail.com" 
                  style={{ color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
                >
                  ✉️ sakshijaswal.082004@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/jaswalsakshi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
                >
                  in linkedin.com/in/jaswalsakshi
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        borderTop: '1px solid #333',
        textAlign: 'center',
        color: '#666',
        fontSize: '12px',
        marginTop: '2rem'
      }}>
        Built with React. Deployed to the cloud.
      </footer>
    </div>
  );
}
