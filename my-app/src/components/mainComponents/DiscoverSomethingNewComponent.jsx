export function DiscoverSomethingNew({ items }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="DiscoverSomethingNew">
                    <h2>Discover Something New</h2>
                    <div className="cards">
                        {items.map((item, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                    <img src={item.imageSrc} alt={item.name} />
                                    <p>Base Game</p>
                                </div>
                                <ul>
                                    <li className="name">{item.name}</li>
                                    <li className="price">{item.price}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
