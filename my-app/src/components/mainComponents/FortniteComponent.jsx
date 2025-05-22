export function Fortnite({ cards }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="cardsB">
                    {cards.map((card, index) => (
                        <div className="cardB" key={index}>
                            <img src={card.imageSrc} alt={card.title} />
                            <p className="nameOfGame">{card.title}</p>
                            <p className="description">{card.description}</p>
                            <button className="FortniteButton">
                                See In Shop <img src="/images/imagesHome/Vector_1.png" alt="Arrow" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}