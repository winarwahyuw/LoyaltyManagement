import { HeroImg, CompanyLogoBlue, AppleIcon, PointIcon, SubFotoBanner,
    CompanyLogoWhite, PlaystoreIcon,PlaystoreBlueIcon } from '../assets';
import CarouselSection from '../components/CarouselSection';
import { Link } from 'react-router-dom';
import { Tab, Nav} from 'react-bootstrap';
import { dataPromo, dataCategories, dataRewards } from '../data';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Home = () => {
    const [ rewards, setRewards ] = useState(dataRewards);

    const user = useSelector((state) => state.user);

    console.log(user)

    return(<>
        <div className="home">
            <div className="background-section">
                <div className="hero-section">
                    <div className="hero-overlay-content">
                        <img src={CompanyLogoBlue} alt="company-logo" className='heading' />
                        <p className='sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div className="button-group">
                            <Link to="#" className='btn btn-outline-white mx-2'>
                                <img src={PlaystoreIcon} alt="playstore icon" className='menu-icon' />
                                <span className='mx-2'>Play Store</span>
                            </Link>
                            <Link to="#" className='btn btn-outline-white mx-2'>
                                <img src={AppleIcon} alt="playstore icon" className='menu-icon' />
                                <span className='mx-2'>App Store</span>
                            </Link>
                        </div>
                    </div>
                    <img src={HeroImg} alt="hero image" className='hero-img' />
                </div>
                <div className="promo-section" id="latest-promo">
                    <div className="promo-section-header">
                        <p className='title'>Latest Promo &#128293; </p>
                        <p className='desc'> Don&apos;t miss out! Limited time offer inside! </p>
                    </div>
                    <CarouselSection centerPadding={300} />
                </div>
            </div>

            <div className="container">
                <div className='popular-merchant' id="popular-merchant">
                    <div className="popular-merchant-header">
                        <p className='title'>Popular Merchant </p>
                        <a className='link-more' href="#">View More</a>
                    </div>
                    <div className="popular-merchant-content">
                        <div className="d-flex" style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            { dataPromo?.map(( promo, key )=>(
                                <div key={key} className="content-col">
                                    <div className="content" >
                                        <img src={promo?.logo} alt={promo?.company_name+' img'} className='logo-img' />
                                        <p className='logo-name'>{promo?.company_name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="popular-rewards" id="popular-rewards">
                    <div className="popular-rewards-header">
                        <p className='title mb-1'>Popular Rewards </p>
                        <p className="text-muted mt-1">Explore our latest popular rewards!</p>
                    </div>
                    <div className="popular-rewards-tag">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                            <Nav variant="pills" className="flex-row">
                                <Nav.Item>
                                    <Nav.Link eventKey="all" onClick={()=> setRewards(dataRewards)} style={{ marginRight: "12px"}}>All</Nav.Link>
                                </Nav.Item>
                                {
                                    dataCategories?.map(( data, key ) => (
                                        <Nav.Item key={key}>
                                            <Nav.Link onClick={()=> setRewards(dataRewards?.filter( v => v.category === data?.name))} eventKey={data?.name} style={{ marginRight: "12px"}}>
                                                <img src={data?.icon} alt={data?.name+" icon"} className='tab-icon' />
                                                <span>{data?.name}</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))
                                }
                            </Nav>
                        </Tab.Container>
                    </div>
                    <div className="popular-rewards-content">
                        <div className="row">
                        { rewards?.length > 0 ? rewards?.map(( data, key) => (
                            <div className="col-6 col-sm-4 col-md-3 my-2"  key={key}>
                                <Link to={`/voucher/${data?.rewards_title}`}>
                                <div className="card">
                                    <img src={data?.banner} alt={data?.name+" promo img"}/>
                                    <div className="company-section mb-0 mt-3">
                                        <img src={data?.company_logo} alt="logo" className='logo-img' />
                                        <p>{data?.company_name}</p>
                                    </div>
                                    <p className='title mb-1 mt-0' style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{data?.rewards_title}</p>
                                    <p className="text-muted mb-1">Point earned</p>
                                    <div className="point-section mt-0">
                                        <div className="point-rounded">
                                            <img src={PointIcon} alt="point icon" />
                                        </div>
                                        <p>{data?.point}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )) : <div className='col-12'>
                            <p>Tidak ada Rewards</p>
                        </div>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="sub-footer ">
                <div className="background">
                    <img src={SubFotoBanner} alt="sub foto banner" />
                </div>
                <div className="overlay">
                    <div className="overlay-content">
                        <img src={CompanyLogoWhite} alt="company-logo" className='logo-img' />
                        <p className="title">Get Instant Access: <br /> Download Now!</p>
                        <p className="desc">Download our Loyauté  now to unlock exclusive promotions and explore exciting features</p>
                        <div className="button-group">
                            <Link to="#" className='btn btn-white'>
                                <img src={PlaystoreBlueIcon} alt="playstore icon" className='menu-icon' />
                                <span className='mx-2'>Play Store</span>
                            </Link>
                            <Link to="#" className='btn btn-outline-white'>
                                <img src={AppleIcon} alt="playstore icon" className='menu-icon' />
                                <span className='mx-2'>App Store</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Home