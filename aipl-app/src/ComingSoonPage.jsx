import './ComingSoonPage.css';

function ComingSoonPage() {
  return (
    <div className="coming-soon">
      <h1>A New Era of Action is Coming</h1>
      <h2>Brace yourself for a high-octane, skill-driven combat experience.</h2>
      <p className="launch">Launching in 2026 | Available on Consoles, PC</p>

      <ul className="features">
        <li>⚔️ Fluid real-time combat system</li>
        <li>👹 Cinematic finishers and enemy takedowns</li>
        <li>🌆 Story-driven missions with high replayability</li>
        <li>🎮 Controller-ready gameplay</li>
      </ul>

      <div className="cta">
        <p>🔔 Stay in the loop:</p>
        <input type="email" placeholder="Enter your email" />
        <button>Notify Me</button>
      </div>
    </div>
  );
}
