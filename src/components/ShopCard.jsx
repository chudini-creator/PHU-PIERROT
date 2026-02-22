import "./ShopCard.css";

function ShopCard(props) {
    return (
        <div className="card">
            <h1 className="sklepy_info_title">{props.title}</h1>
            
            <p className="sklepy_info_text">
                {props.adress}
            </p>
            
            <p className="sklepy_info_hours">
                Godziny otwarcia: {props.hours}
            </p>

            <div className="sklepy_info_map">
                <iframe 
                    src={props.map} 
                    title="mapa" 
                    loading="lazy"
                    allowFullScreen=""
                ></iframe>
            </div>
        </div>
    );
}

export default ShopCard;