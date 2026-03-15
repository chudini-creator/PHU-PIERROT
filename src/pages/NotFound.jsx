import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="notfound-page">
      <section className="notfound-card">
        <p className="notfound-code">404</p>
        <h1>Ups, tej strony nie znaleźliśmy</h1>
        <p>
          Sprawdź adres lub wróć na stronę główną.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="notfound-btn">
            Wróć na stronę główną
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
