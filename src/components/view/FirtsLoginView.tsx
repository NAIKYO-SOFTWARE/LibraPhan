import '../../css/FirtsLoginView.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import ButtonClick from '../ButtonClick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

function FirtsLoginView() {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
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


    document.body.style.background = 'linear-gradient(90deg, rgba(190,224,254,1) 15%, rgba(241,206,251,1) 32%, rgba(196,158,248,1) 74%, rgba(245,239,249,1) 86%)';
    useEffect(() => {
        document.body.style.background = 'linear-gradient(90deg, rgba(190,224,254,1) 15%, rgba(241,206,251,1) 32%, rgba(196,158,248,1) 74%, rgba(245,239,249,1) 86%)';
        return () => {
            document.body.style.background = '';

        }
    },[])

    return(
        <>
         <h1>Do your tasks quickly and easy</h1>
         <p>Your tasks, your rules, our support.</p> 
         
         {/* {isMobileOrTablet ? (
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
         } */}
         <div style={{margin:'50px 0 0 0'}}>
                <ButtonClick props1={"Login"}/>
            </div>
         <div>
            <a className="underline" href=''>Create an account</a>   
         </div>
         <div className="decorativeLine">
            <div className="line"></div>
            <span className="orText">OR</span>
            <div className="line"></div>
         </div>
         <div className="socialIcons">
         <FontAwesomeIcon icon={faGoogle} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faApple} />
         </div>
        </>
    )
}
export  default FirtsLoginView;