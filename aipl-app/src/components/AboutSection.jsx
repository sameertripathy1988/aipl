import '../css/aboutsection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">Who We Are</h2>
      <div className="founders-container">
        {/* Founder 1 */}
        <div className="founder-card">
          <img src="/assets/images/sameer.jpeg" alt="Founder 1" className="founder-image" />
          <h3 className="founder-name">Sameer Tripathy</h3>
          <p className="founder-role">Founder & Technical Director</p>
          <p className="founder-bio">
            With over a decade in the game industry, Sameer has worked with companies like Gameloft, Gameshastra & Sony.
             He now leads Aadhya Interactive, building narrative-rich, high-quality games using Unreal Engine 5.
          </p>
        </div>

        {/* Founder 2 */}
        <div className="founder-card">
          <img src="/assets/images/pallavi.jpeg" alt="Founder 2" className="founder-image" />
          <h3 className="founder-name">Pallavi Panda</h3>
          <p className="founder-role">Co-founder & Executive Producer</p>
          <p className="founder-bio">
            Pallavi brings extensive experience from her leadership roles at Citrix and Microsoft, with a strong background in project delivery, team management, and cross-functional coordination. At Aadhya Interactive, she oversees production, ensuring timely execution while bridging creative vision with disciplined execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;