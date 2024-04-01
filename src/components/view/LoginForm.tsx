import '../../css/LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import ButtonClick from '../ButtonClick';
import { useLayoutEffect, useState } from 'react';
import InputForm from '../InputForm';
import {Form , Field, Formik  } from 'formik';
import { useDispatch  } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/loginReducer';

interface IFormInput {
  email:string;
  password:string;
}


function LoginForm() {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    useLayoutEffect(() => {
    function handleResize() {
      const isMobileOrTablet = window.innerWidth <= 768; // Define the width for mobile and tablet screens
      setIsMobileOrTablet(isMobileOrTablet);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const handleLogin = (value : IFormInput) => {
      dispatch(login(value))
      navigate("home");
    }
    

    return(
        <>
            <h4 style={{color:"#a67be0"}}>Log in to HabitHUB</h4>
            <p>Welcome back! Sign in using your social account or email to continue us</p>
            <div className="socialIcons">
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faApple} />
            </div>
            <div className="decorativeLine">
                <div className="line"></div>
                <span className="orText">OR</span>
                <div className="line"></div>
            </div>

            {/* <div>
                <InputForm content='Email' />
            </div>
            <div style={{marginTop:'10px'}}>
                <InputForm content='Password' />
            </div> */}

    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log(values);
        handleLogin(values);
      }}
    >
      <Form>
        <div>
            <div>
                <Field name="email" placeholder="Email" content="Email" component={InputForm} />
            </div>
            <div style={{marginTop:'10px'}}>
                <Field name="password" placeholder="Password" content="Password" component={InputForm} />
            </div>
          {/* Thêm các trường field khác nếu cần */}
        </div>
        {isMobileOrTablet ? (
            <div style={{ position: 'fixed', bottom: '13%', left: '50%', transform: 'translateX(-50%)', zIndex: '999' }}>
                <ButtonClick props1={"Login"} />
            </div>
                ) 
            :
                (
            <div style={{margin:'50px 0 0 0'}}>
                <ButtonClick props1={"Login"}/>
            </div>
                )
         }   
      </Form>
    </Formik>


           
        </>
    )
}

export default LoginForm;