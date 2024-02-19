import { Form, InputGroup } from 'react-bootstrap';
import { CompanyLogo } from '../assets';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import md5 from 'crypto-js/md5';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state?.user); 

    const { email=""} = user;
    const [ formData, setFormData] = useState({ email : email, password: ""});
    const [ labelFocused, setLabelFocused ] = useState("");
    const [ showPassword, setShowPassword ] = useState(false);

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setLabelFocused(name);
        setFormData((s) => ({ ...s, [name]: value }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email = "", password = "" } = formData;
        const hashedPassword = md5(password).toString();
        
        if(user?.password === hashedPassword && user?.email === email){
            console.log("Berhasil Login")

            setTimeout(() => {
                navigate('/home')
            }, 1000);
        }else{
            window.alert("Email atau password salah!");
            setFormData({email : "", password: ""})
        }
    }

    return (
        <div className='login-page' id='LoginPage'>
            <div className='login-section'>
                <div className='company-logo'>
                    <img src={CompanyLogo} alt="company-logo" className='logo-img' />
                </div>
                <div className="login-form">
                    <div className='title'>
                        <h4 className='text-center'>Let&apos;s sign You in.</h4>
                        <p className='text-center muted'>Hey there, fabulous! Ready to kick back and explore? <br />
                            Just a quick sign-in away from unlocking a world of fun.</p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className={formData?.email === "" || !labelFocused === "email" ? 'hide': 'show'}>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name='email' 
                                placeholder="email" 
                                onFocus={handleChange} 
                                onChange={handleChange} 
                                value={formData?.email || ""} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label className={formData?.password ===""  || !labelFocused === "password" ?'hide': 'show'}>Password</Form.Label>
                            <InputGroup>
                                <Form.Control  
                                    type={showPassword ? 'text' : 'password'} 
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


                        <button type='submit' className={`btn mt-4 mb-3 w-100 ${(formData?.email && formData?.password) ? "btn-primary" : "btn-muted"}`}>Sign In</button>
                        <p className='muted text-center'>Haven&apos;t registered yet ? <a href="/signup">Register</a> </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
