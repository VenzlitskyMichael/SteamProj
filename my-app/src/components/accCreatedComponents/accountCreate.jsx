import './accountCreate.css';

const YourAccCreated = ({
    backgroundImage,
    textAccCreated,
    textEmailSent,
    linkForMainPage,
    linkForMainPageText,
}) => {
    return (
        <main className='createdMain'>
            <img className='backEmbLoginPage' src={backgroundImage} />
            <div className='createdDiv'>
                <div className='mainCreateDiv'>
                    <div>
                        <h1 className='accCreatedH1'>{textAccCreated}</h1>
                        <p className='emailSentText'>{textEmailSent}</p>
                    </div>
                    <a href={linkForMainPage} className='toLoginLink'><button className='createdSignBtn'><p className='createdSignTextInBtn'>{linkForMainPageText}</p></button></a>
                </div>
            </div>
        </main>
    )
}

const YourAccCreatedData = [
    {
        backgroundImage: './imgForLoginPage/backEmbLoginPage.png',
        textAccCreated: 'Account created!',
        textEmailSent: 'An email has been sent to you.',
        linkForMainPage: '/',
        linkForMainPageText: 'LOG IN',
    },
]


export function Created() {
    return (
        <>
            {YourAccCreatedData.map((crtd, idx) => (
                <div key={idx}>
                    <YourAccCreated {...crtd} />
                </div>
            ))}
        </>
    );
}
