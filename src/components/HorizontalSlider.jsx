import "./HorizontalSlider.css"
function HorizontalSlider({data}) {
    return (
        <div className="slider-container">
            {data.map((data, index) => (
                <div key={index} className="slider-panel" style={{ backgroundImage: `url(${data.imageUrl})` }}>
                    <div className="slider-content">
                        <h3>{data.title}</h3>
                        <p className="slider-description">{data.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default HorizontalSlider;