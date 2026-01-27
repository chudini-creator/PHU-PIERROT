import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
            <div className="footer_info">
                <p className="footer_title">PHU PIERROT</p>
            </div>
            <div className="footer_content">
                <div className="footer_sklepy">
                    <h3>Nasze sklepy</h3>
                    <p>ul. Wołyńska 23, Chełm</p>
                    <p>godziny otwarcia: 9:30 - 16:30</p>
                    <p className="drugi">ul. Zachodnia 8A, Chełm</p>
                    <p>godziny otwarcia: 9:30 - 17:00</p>
                </div>
                <div className="footer_dwor">
                    <h3>Dwór Ujazdowski</h3>
                    <p>ul.Ujazdów 1, Ujazdów</p>
                    <p>tel: 691 042 418</p>
                    <p>Wynajem pokoi i aparamentów w sezonie wakacyjnym</p>
                </div>
                <div className="footer_siedziba">
                    <h3>Siedziba firmy</h3>
                    <p>ul. Hrubieszowska 102, Chełm</p>
                </div>
            </div>
            <p>© 2025 PHU PIERROT. Wszystkie prawa zastrzeżone.</p>
    </footer>
  )
}

export default Footer
