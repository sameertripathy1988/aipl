import '../css/gamesection.css';

const GameSection = () => {
  return (
    <section className="game-section" id='game'>
      <div className="game-row">
        <div className="game-text">
          <h2>Core strengths.</h2>
          <p>
            Our indie team focuses on unique mechanics, original worlds,
            and high-clarity visual style.
          </p>
        </div>
        <div className="game-image">
          <img src="/assets/images/2.png" alt="Dock Scene 2" />
        </div>
      </div>

      <div className="game-row reverse">
        <div className="game-image">
          <img src="/assets/images/11.png" alt="Dock Scene 1" />
        </div>
        <div className="game-text">
          <h2>First project.</h2>
          <p>
            Our debut title reimagines classic genres with modern polish.
            Stay tuned for more reveals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameSection;