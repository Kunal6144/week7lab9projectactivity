import logo from '../images/logo.svg'
function Hero() {
  return (
    <section className="hero" id="home">
          <div className="hero-banner">
          <img src={logo} className='nav-logo' alt='backroads' />
            <h1>backroads app</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              explicabo debitis est autem dicta.
            </p>
            <a href="#tours" className="btn hero-btn">explore tours</a>
          </div>
        </section>
  );
}

export default Hero;