import { Form } from 'react-bootstrap';
import { CompanyLogo } from '../assets';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdated } from '../features/usersSlice';
import { useNavigate } from 'react-router-dom';

const OtpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((state) => state?.user); 

    const [otp, setOTP] = useState(['', '', '', '']);
    const otpInputs = useRef([]);

    const handleChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);
    
        if (value && index < otp.length - 1) {
          otpInputs.current[index + 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOTP = otp.join('');

        if(enteredOTP === user?.otp){
            window.alert("Berhasil Registrasi. Login sekarang!")
            navigate('/signin')
        }else{
            window.alert("Kode yang Anda masukkan tidak sesuai!")
            setOTP(['','','',''])
        }
    };
    
    const handleResendOTP = () => {
        const otp = (Math.floor(Math.random() * 9000) + 1000).toString()
        dispatch(
            userUpdated({
              ...user,
              otp: otp
            })
        );

        window.alert(`Your OTP code is ${otp}`);
    }

    return (
        <div className='login-page otp-page' id='OtpPage'>
            <div className='login-section'>
                <div className='company-logo'>
                    <img src={CompanyLogo} alt="company-logo" className='logo-img' />
                </div>
                <div className="login-form">
                    <div className='title'>
                        <h4 className='text-center'>Enter OTP Verification</h4>
                        <p className='text-center muted'>We’ve sent an OTP code to {user?.phone_number}</p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 d-flex flex-direction-row" controlId="name">
                        {otp.map((digit, index) => (
                            <Form.Control 
                                key={index}
                                type="text" 
                                ref={(ref) => (otpInputs.current[index] = ref)}
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}/>
                        ))}                                                             
                        </Form.Group>
                        <p className='muted text-center'>Didn’t  receive code ? <a href="#" onClick={handleResendOTP}> Resend Code</a> </p>
                        <button type='submit' className={`btn mt-4 mb-3 w-100 ${otp.join('')?.length < 4 ? "btn-muted" : "btn-primary"}`}>Submit</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default OtpPage;
