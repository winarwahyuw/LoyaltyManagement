import { Form, Button, InputGroup, DropdownButton, Dropdown} from 'react-bootstrap';
import { CompanyLogo } from '../assets';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { userUpdated } from '../features/usersSlice';
import { useNavigate } from 'react-router-dom';
import md5 from 'crypto-js/md5';


const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ formData, setFormData] = useState({ name: "", email: "", password: "", phone_number: ""});
    const [ labelFocused, setLabelFocused ] = useState("");
    const [ showPassword, setShowPassword ] = useState(false);
    const [ prefixPhone, setPrefixPhone ] = useState('+62');

    const handleChange = async (e) => {
        let { name, value } = e.target;

        setLabelFocused(name);
        setFormData((s) => ({ ...s, [name]: value  }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleDropdownChange = (eventKey) => {
        setPrefixPhone(eventKey)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otp = (Math.floor(Math.random() * 9000) + 1000).toString()
        const { phone_number = "", password = "" } = formData;
    
        dispatch(
            userUpdated({
              ...formData,
              password : (md5(password)).toString(),
              phone_number : prefixPhone+phone_number,
              otp: otp
            })
        );

        setFormData({});

        window.alert(`Your OTP code is ${otp}`);
        
        setTimeout(() => {
            navigate('/otp');            
        }, 1000);
    }

    return(<>
        <div className='login-page row' id='RegisterPage'>
            <div className='col-11 col-sm-5 col-md-4 col-lg-3'>
                <div className='company-logo'>
                    <img src={CompanyLogo}  alt="company-logo" className='logo-img' />
                </div>
                <div className="login-section">
                    <div className='title'>
                        <h4 className='text-center'>Create an account</h4>
                        <p className='text-center muted'>New around here? Awesome choice! <br /> Let&apos;s make it official. </p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label className={ formData?.name === "" || !labelFocused === "name" ? 'hide': 'show'}>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='name' 
                                placeholder="name" 
                                onFocus={handleChange} 
                                onChange={handleChange} 
                                maxLength={60}
                                value={formData?.name || ""} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className={ formData?.email === "" || !labelFocused === "email" ? 'hide': 'show'}>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name='email' 
                                placeholder="email" 
                                onFocus={handleChange} 
                                onChange={handleChange} 
                                maxLength={60}
                                value={formData?.email || ""} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label className={formData?.phone_number === "" || !labelFocused === "phone_number" ? 'hide': 'show'}>Phone Number</Form.Label>
                            <InputGroup>
                                <DropdownButton
                                    variant="light"
                                    title={<span>+62 <i className="bi bi-chevron-down"></i></span>}
                                    id="phonePrefix"
                                    onSelect={handleDropdownChange}
                                    name="prefix_phone"
                                    >
                                    <Dropdown.Item href="#" eventKey="+62">+62</Dropdown.Item>
                                    <Dropdown.Item href="#" eventKey="+12">+12</Dropdown.Item>
                                </DropdownButton>
                                <Form.Control 
                                    type="tel" 
                                    name='phone_number' 
                                    placeholder="phone number"
                                    onFocus={handleChange} 
                                    onChange={handleChange} 
                                    maxLength={12}
                                    value={formData?.phone_number || ""} required  />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label className={formData?.password ===""  || !labelFocused === "password" ?'hide': 'show'}>Password</Form.Label>
                            <InputGroup>
                                <Form.Control  type={showPassword ? 'text' : 'password'} 
                                    name='password' 
                                    placeholder="password" 
                                    onFocus={handleChange} 
                                    onChange={handleChange} 
                                    maxLength={20}
                                    minLength={6}
                                    value={formData?.password || ""} aria-label="Password" required />
                                <InputGroup.Text id="showPassword" onClick={togglePasswordVisibility}>
                                    {showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>

                        <p className='muted'>Forgot password? <a href="#">Reset Password</a> </p>

                        <Button type='submit' variant="primary" className={`w-100 mt-4 mb-3 ${!Object.values(formData).every(value => value === "") ? "btn-primary" : "btn-muted"}`}>Create Account</Button>
                        <p className='muted text-center'>Already have an account ? <a href="/signin">Sign In</a> </p>
                    </Form> 
                </div>  
            </div>
        </div>
    </>)
}

export default RegisterPage