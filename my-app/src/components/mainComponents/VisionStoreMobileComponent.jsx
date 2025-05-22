export function VisionStoreMobile({ imageSrc, title, description, buttonText }) {
    return (
        <div className="VisionStoreMobile">
            <img id="StoreOpenPhoto" src={imageSrc} alt="Store visual" />
            <div className="VisionStoreMobileInfo">
                <div>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
                <button>
                    {buttonText}
                    <img src="/images/imagesHome/Vector_2.png" alt="arrow icon" />
                </button>
            </div>
        </div>
    );
}