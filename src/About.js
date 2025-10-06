import './App.css';

function About() {
  return (
    <div className="About-row-layout">
      <img className="About-sticky" src="About-01.png" alt="About-avatar" />
      <div>
        <h2 className="About-heading"> OBINNA IWUNO</h2>
        <div className="About-info-container">
          <p className="About-subtitle">President, SiBAN | CEO, C.B.C Blockchain Services</p>
          <hr />
        </div>
        <br /><br />
        <p className="About-paragraph-1">
          Crypto Bootcamp Community is the premier go-to-community for enthusiasts,
          professionals and investors in the blockchain and web3 industry,
          dedicated to driving blockchain and web3 mainstream in Africa and beyond.
          <br /><br /><br />
          We are an education and skill development outfit, growth marketing and user
          engagement platform, a crypto training and consulting agency, and
          experiential events firm whose focus is on helping Web3 brands through
          visibility, acquisition, and conversion to deliver their products and
          services to the market, position rightly in the ecosystem, gain adoption
          with the target audience and access the best talents in blockchain and web3.
          <br /><br /><br />
          With over 10,000 community members in 14 countries, Crypto Bootcamp has made
          a huge significant impact across the continent, empowering individuals and
          fostering a deeper understanding of this cutting-edge technology.
          <br /><br /><br />
          Our membership spans across the major cities and universities in the East,
          West, Central and Southern Africa region and beyond. We've trained over
          50,000 on Blockchain Technology, Crypto-currency and Web3 through our
          education programs and events, and empowered them to actively engage in the
          industry as service providers, innovators and traders.
          <br /><br /><br />
          Crypto Bootcamp is the one stop solution and growth partner for blockchain
          and web3 industry businesses
        </p>
      </div>
    </div>
  );
}

export default About;
