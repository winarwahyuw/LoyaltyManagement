import { useEffect, useState} from 'react';
import { StarbucksVoucherImg, HistoryIconBlack } from '../assets';
import { dataVoucherDetails } from '../data';
import CarouselSection from '../components/CarouselSection';
import SecondaryAppBar from '../components/SecondaryAppBar';

const menuSecondaryAppBar = [
    {
        name: 'General',
        value: '#voucher'
    },{
        name: 'Benefit',
        value: '#benefit'
    },{
        name: 'How to Get',
        value: '#steps'
    },{
        name: 'Terms and Conditions',
        value: '#terms'
    },{
        name: 'Another Promo',
        value: '#promo-slider'
    }
]
const VoucherDetail = () => {
    const data = dataVoucherDetails[0];
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 100);
        };
  
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, []);

    return(<>
        {isScrolled && <SecondaryAppBar menu={menuSecondaryAppBar} />}
        <div className="voucher" id='voucher'>
            <div className="voucher-content">
                <div className="voucher-banner">
                    <img src={StarbucksVoucherImg} alt="banner" />
                </div>
                <div style={{ height: "1080px", backgroundColor: '#F9F9F9'}}></div>
                
                <div className="overlay">
                    <div className="card">
                        <div className="card-header">
                            <div className="company-section">
                                <img src={data?.company_logo} alt={data?.company_name + " logo"} className='logo-img' />
                                <p>{data?.company_name}</p>
                            </div>
                            <p className="title">{data?.voucher_name}</p>
                        </div>
                        <div className="card-desc">
                            <div className="date-section">
                                <div className="icon-section">
                                    <img src={HistoryIconBlack} alt="calendar icon" />
                                </div>
                                <div className="text-section mx-2">
                                    <p className="text-grey">Expiry Date</p>
                                    <p>{data?.expire_date}</p>
                                </div>
                            </div>
                            <p className="desc-content">
                                {data?.voucher_desc}
                            </p>
                        </div>
                        <div className="card-body">
                            <div className='content content-bullets' id='benefit'>
                                <p className='title'>Benefit</p>
                                <ul>
                                {
                                    data?.benefit?.map(( benefit, key ) => (
                                        <li key={key}>
                                            <p className="subtitle">{benefit?.title}</p>
                                            <p className="desc">{benefit?.desc}</p>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>

                            <div className='content content-numbers' id='steps'>
                                <p className='title'>How to get</p>
                                <ul>
                                {
                                    data?.benefit?.map(( benefit, key ) => (
                                        <li key={key}>
                                            <p className="subtitle">{benefit?.title}</p>
                                            <p className="desc">{benefit?.desc}</p>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>

                            <div className='content content-numbers' id='terms'>
                                <p className='title'>Terms and conditions</p>
                                <ul>
                                {
                                    data?.benefit?.map(( benefit, key ) => (
                                        <li key={key}><p className="desc">{benefit?.desc}</p></li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="promo-section" id='promo-slider'>
                    <div className="promo-section-header">
                        <p className='title'>Promo you might like</p>
                        <p className='desc'> Don&apos;t miss out! Limited time offer inside!  </p>
                    </div>
                    <CarouselSection centerPadding={220} />
                </div>
            </div>
        </div>
    </>)
}

export default VoucherDetail