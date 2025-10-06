import './App.css';

function Services() {
  return (
    <>
      <div className="section-B" id='services'>
        <span className="about-bg">Service</span>
        <span className="about-fg">Service</span>
      </div>

      <div className="service-rectangle-container">
        <div className="service-section-container">
          <div className="service-card">
            <div className="service-emoji">🎓</div>
            <div className="service-title">Education and Events</div>
            <div className="service-description">
              At the core of our offerings is our commitment to education and community engagement. We host regular educational sessions designed to empower our community with in-depth knowledge of the crypto space. From live sessions on platforms like Telegram and Twitter to immersive bootcamps and expert-led events, we ensure our community is well-versed in blockchain technology and its applications. Our events also provide excellent opportunities for networking, knowledge sharing, and collaboration with industry experts.
            </div>
          </div>

          <div className="service-card">
            <div className="service-emoji">💡</div>
            <div className="service-title">Marketing and Campaigns</div>
            <div className="service-description">
              Our marketing and campaign services are meticulously crafted to help brands effectively reach their target audience in the crypto space. We leverage our marketing expertise and extensive network to create strategic campaigns that drive engagement and awareness. Whether you're launching a new product or seeking to enhance brand visibility, our campaigns are designed to achieve maximum impact in a competitive market.
            </div>
          </div>

          <div className="service-card">
            <div className="service-emoji">🗂️</div>
            <div className="service-title">Project Onboarding and Management</div>
            <div className="service-description">
              We provide comprehensive project onboarding and management services to ensure the smooth and efficient execution of your blockchain projects. Our team of experts guides you through every stage, from initial planning to final implementation, ensuring that your projects are delivered on time and to the highest standards.
            </div>
          </div>

          <div className="service-card">
            <div className="service-emoji">🌱</div>
            <div className="service-title">Growth and Expansion Solutions</div>
            <div className="service-description">
              For businesses looking to expand their market presence or enter new markets, we provide tailored growth and expansion solutions. Our consulting services offer strategic insights and practical strategies to help businesses confidently navigate the blockchain ecosystem and achieve sustainable growth.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
