import "./LoadingScreen.css";

function LoadingScreen({ title = "Ładowanie", description = "Proszę chwilę poczekać..." }) {
  return (
    <section className="loading-screen" role="status" aria-live="polite" aria-busy="true">
      <div className="loading-card">
        <div className="loading-spinner" aria-hidden="true" />

        <h2>{title}</h2>
        <p>{description}</p>

        <div className="loading-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}

export default LoadingScreen;
