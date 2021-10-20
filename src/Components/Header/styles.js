import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-image: linear-gradient(160deg, #ADFF2F , #AB82FF);
`;

export const Navbar = styled.nav`
    width: 100%;
    max-width: 1300px;
    height: 50px;
    padding: 5px 15px;
    margin: -25px auto 0px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF6A6A;

    >a{
        color: #555;
        padding: 12px;
        margin-left: 15px;

        font-size: 1.2rem;
        font-weight: 500;

        &:hover{
            color: #111;
        }

        @media screen and (max-width: 560px){
            font-size: 1rem;
        }
    }

`
