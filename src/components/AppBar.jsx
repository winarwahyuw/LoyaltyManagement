import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { CompanyLogo, CompanyWhiteLogo, HomeIcon, HomeIconActive,
    HistoryIcon, HistoryIconBlack, InboxIcon, InboxWhiteIcon,
    ProfileIcon, ProfileWhiteIcon, NotificationIcon, HistoryIconActive, 
    NotificationWhiteIcon, ProfileUser} from '../assets';
import { getGreeting } from '../features/functions';
import { useSelector } from 'react-redux';


const AppBar = () => {
    const user = useSelector((state) => state?.user); 

    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [ greeting, setGreeting ] = useState("");

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          setIsScrolled(scrollTop > 100);
        };
  
        if (location.pathname === "/home") {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }else{
            setIsScrolled(true);
        }
        
    }, [location]);

    useEffect(() =>{
        setGreeting(getGreeting())
    },[])
  
    const appBarClass = `app-bar ${isScrolled ? 'app-white' : 'app-transparent'} ${location.pathname !== "/voucher" && 'fixed-top'}`;

  return (
    <Navbar variant="light" expand="md"  id='AppBar' className={appBarClass}>
        <div className='container'>
            <Navbar.Brand href="/home">
                <img src={isScrolled ? CompanyLogo : CompanyWhiteLogo} alt="company-logo" className='w-100' />
            </Navbar.Brand>
            <div className="menu">
                <Link to="/home">
                    <div className="menu-group">
                        <img src={isScrolled? HomeIcon : HomeIconActive} alt="home-icon" className='menu-icon' />
                        <p className='d-inline'>Home</p>
                    </div>
                </Link>
                <Link to="/home/history">
                    <div className="menu-group">
                        <img src={location.pathname === "/home/history"? HistoryIconActive : isScrolled ? HistoryIconBlack : HistoryIcon} alt="home-icon" className='menu-icon' />
                        <p className='d-inline'>History</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className="menu-group">
                        <img src={isScrolled? InboxIcon: InboxWhiteIcon} alt="home-icon" className='menu-icon' />
                        <p className='d-inline'>Inbox</p>
                    </div>
                </Link>                
                <Link to="#">
                    <div className="menu-group">
                        <img src={isScrolled? ProfileIcon : ProfileWhiteIcon} alt="home-icon" className='menu-icon' />
                        <p className='d-inline'>Profile</p>
                    </div>
                </Link>
            </div>

            <div className="profile-user">
                <img src={isScrolled? NotificationIcon : NotificationWhiteIcon} alt="notif-icon" className='menu-icon' />
                <div className="user-detail">
                    <p>{greeting}</p>
                    <p>{user?.name}</p>
                </div>
                <img src={ProfileUser} alt="profile-user" className='user-img' />
            </div>
        </div>
    </Navbar>
    
  );
};

export default AppBar
