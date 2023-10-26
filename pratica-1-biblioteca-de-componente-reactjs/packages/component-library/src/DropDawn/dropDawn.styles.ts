import styled from "styled-components";

const Container = styled.div`

    .container{
        width: 100%;
        height: 100vh;
    }
    
    .dropdown{
        width: 400px;
        margin: 100px auto;
        position: relative;
        user-select: none;
        font-family: Arial;
        font-size: 20px;
    }

    .dropdown::before{
        content: '';
        position: absolute;
        right: 30px;
        top: 13px;
        z-index:1;
        width: 15px;
        height: 15px;
        border: 3px solid #333;
        border-top: 3px solid #fff;
        border-right: 3px solid #fff;
        transform: rotate(-45deg);
        transition: 0.5s;
        pointer-events: none;
    }
   
    .dropdown-bnt{
        padding: 15px 20px;
        background: #fff;
        box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.6);
        font-weight: bold;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

    }
   
    .dropdown-content{
        position: absolute;
        top: 110%;
        left: 0;
        padding: 10px;
        background: #fff;
        box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.6);
        font-weight: 500;
        color: #333;
        width: 95%;
    }
    
    .dropdown-item{
        padding: 10px;
        cursor: pointer;
        transition: all 0.2s;
        text-align: left;
    }

    .dropdown-item:hover{
        background: #f4f4f4;
    }
    
`;


export const styles = {container:Container}