
const handleFocus = (e) => {
    e.target.classList.add('error');
    e.target.disabled = true;

    const errorText = e.target.previousElementSibling.querySelector('.errorText');
    if (errorText) {
        errorText.classList.remove('hidden');
    }
};

const LoginInputs = ({
    lgnText,
    lgnErrorText,
}) => {
    return (
        <div className='inputWrapper'>
            <div className='inputHeader'>
                <h3 className='loginText'>{lgnText}</h3>
                <span className='errorText hidden'>{lgnErrorText}</span>
            </div>
            <input className='loginInput' onFocus={handleFocus} />
        </div>
    )
}

const LoginInputsData = [
    {
        lgnText: 'SIGN IN WITH ACCOUNT NAME ',
    },
    {
        lgnText: 'CREATE A PASSWORD',
        lgnErrorText: '(an error was made)',
    },
]

export const LoginPage = ({
    backLink,
    backLinkImage,
    mainLoginText,
    loginSignText,
    loginHelptext,
    noLoginAcc,
    createAccLink,
    signInwithQr,
    qrImage,
    signInwithQrBot,
}) => {
    return (
        <main className='loginMain'>
            <a href={backLink} className='backEmbLoginPageLink'><img src={backLinkImage} className='backEmbLoginPage' /></a>
            <div className='mainLoginPage'>
                <h1 className='mainLoginText'>{mainLoginText}</h1>
                <div className='loginValidation'>
                    <div className='chooseYourInput'>
                        <div className='inputsPasswordLogin'>
                            <div className='loginInputs'>
                                {LoginInputsData.map((lgn, idx) => (
                                    <div key={idx}>
                                        <LoginInputs {...lgn}/>
                                    </div>
                                ))}
                            </div>
                            <div className='loginBtnAndLink'>
                                <div className='signOrHelp'>
                                    <a href='#' className='loginLinkSignIn'><button className='loginSignBtn'><p className='loginSignTextInBtn'>{loginSignText}</p></button></a>
                                    <a href='#'><button className='loginHelpBtn'><p className='loginHelpTextInBtn'>{loginHelptext}</p></button></a>
                                </div>
                                <div>
                                    <p className='noLoginAccount'>{noLoginAcc}</p>
                                    <a href='/Create' className='createAccountLink'>{createAccLink}</a>
                                </div>
                            </div>
                        </div>
                        <div className='QrCodeDiv'>
                            <p className='signInWithQr'>{signInwithQr}</p>
                            <img src={qrImage} />
                            <p className='signInWithQrBot'>{signInwithQrBot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export const LoginPageData = [
    {
        backLink: '#',
        backLinkImage: './imgForLoginPage/backEmbLoginPage.png',
        mainLoginText: 'Log in',
        loginSignText: 'SIGN IN',
        loginHelptext: 'Help, i cant log in',
        noLoginAcc: 'no account?',
        createAccLink: 'Create a new one!',
        signInwithQr: 'SIGN IN WITH QRCODE',
        qrImage: './imgForLoginPage/QRLoginPage.png',
        signInwithQrBot: 'Use out app or other means to scan this QRcode and log in into your account',
    }
]