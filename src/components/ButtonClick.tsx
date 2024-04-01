import { useNavigate } from 'react-router-dom';
import '../css/ButtonClick.css';
import { useEffect, useState } from 'react';

interface ButtonClickProps {
    props1: string;
}

function ButtonClick(props: ButtonClickProps){
    const navigate = useNavigate();
    const handleOnClick = () => {
        switch (props.props1) {
            case 'Login':
                navigate("/login");
                break;
            case 'I AGREE':
            navigate("/transition");
            break;
        }
    }
    return(
        <>
         <button onClick={handleOnClick}>
            <span>{props.props1}</span>
        </button> 
        </>
    )
}

export default ButtonClick;