import { CompanyWhiteLogo, GooglePlayLogo, AppStoreLogo,
    TwitterIcon, LinkedinIcon, FacebookIcon } from '../assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(<>
        <div className="footer">
            <div className="footer-container">
                <div className="row m-0">
                    <div className="col-12 col-md-4">
                        <img src={CompanyWhiteLogo} alt="company logo" />
                    </div>
                    <div className="col-6 col-md-2">
                        <p className='menu-title'>Quick Links</p>
                        <div className="menu">
                            <Link to="/home">Home</Link>
                            <Link href="/history">History</Link>
                            <Link href="#">Inbox</Link>
                            <Link href="#">Profile</Link>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <p className='menu-title'>Categorias</p>
                        <div className="menu">
                            <Link href="/home#latest-promo">Latest Promo</Link>
                            <Link href="/home#popular-merchant">Popular Merchant</Link>
                            <Link href="/home#popular-rewards">Popular Rewards</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className='menu-title-bigger'>Download Apps</p>
                        <div className="download-group">
                            <img src={GooglePlayLogo} alt="google play logo" />
                            <img src={AppStoreLogo} alt="google play logo" />
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-media-group">
                        <a href="#">
                            <img src={TwitterIcon} alt="twitter icon" className='icon' />
                        </a>
                        <a href="#">
                            <img src={LinkedinIcon} alt="linkedin icon" className='icon' />
                        </a>
                        <a href="#">
                            <img src={FacebookIcon} alt="facebook icon" className='icon' />
                        </a>
                    </div>
                    <div className="terms-group">
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Términos y Condiciones</a>
                        <a href="#">Código de Conducta</a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;