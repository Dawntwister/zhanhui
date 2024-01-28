import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <header style={{ backgroundColor: '#4285f4', color: '#fff', textAlign: 'center', padding: '1em 0' }}>
        <h1>Your Company Name</h1>
        <p>Bringing Something Awesome to You</p>
      </header>

      <section style={{ maxWidth: '800px', margin: '2em auto', padding: '1em', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <h2 style={{ color: '#4285f4' }}>Welcome to Our Platform</h2>
        <p style={{ lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="#signup" className="cta-button" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#4285f4', color: '#fff', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s' }}>
          Sign Up Now
        </a>
      </section>

      <section id="signup" style={{ maxWidth: '800px', margin: '2em auto', padding: '1em', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <h2 style={{ color: '#4285f4' }}>Sign Up for Updates</h2>
        <p style={{ lineHeight: '1.6' }}>Get the latest news and updates delivered straight to your inbox.</p>
        <form action="#" method="post">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit" className="cta-button" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#4285f4', color: '#fff', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s' }}>
            Subscribe
          </button>
        </form>
      </section>

      <footer style={{ textAlign: 'center', padding: '1em 0', backgroundColor: '#333', color: '#fff' }}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
