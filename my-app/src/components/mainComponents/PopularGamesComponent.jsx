export function PopularGames({ games }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="PopularGames">
                    <h2>Popular Games</h2>
                    <div className="cards">
                        {games.map((game, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                    <img src={game.imgSrc} alt={game.name} />
                                    <p>{game.description}</p>
                                </div>
                                <ul>
                                    <li className="name">{game.name}</li>
                                    <li className="price">{game.price}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
