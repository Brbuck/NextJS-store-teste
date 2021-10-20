import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px auto;
    padding: 30px;
  
`;

export const Display = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    background-color: #099daf;
    

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 800px;
    }
`

export const Image = styled.img`
    width: 100%;
    max-width: 340px;
    margin: 0px 20px;
    height: 350px;
    //width: 360px;
    
`

export const ProductInfo = styled.div`
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    height: 350px;
    padding: 20px;

    h2{
        margin-bottom: 5px;

        @media screen and (max-width: 560px){
            font-size: 1.5rem;
        }
    }

    span{
        margin: 5px 0px;
        font-size:1.2rem;

        &:nth-child(2){
            font-size: 0.9rem;
            color: #9C9C9C;
        }
        
        &:nth-child(5){
            font-weight: 600;
            font-size: 1.4rem;
           
           
        }
        &:nth-child(7){
            font-size: 1rem;
            cursor: pointer;
            color: #FF6A6A;
        }
    }

`

export const Button = styled.button`
    width: 120px;
    height: 40px;
    background-color: #FFA500;
    color: #fff;

    font-size: 18px;
    cursor: pointer;
`

export const CounterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    margin: 10px 0px;

    div{
        display: flex;
        align-items: center;
        

        div{
            border: 1px solid #cccc;
            width: 40px;
            height: 40px;
            font-size: 18px;
            

            display: flex;
            justify-content: center;
            align-items: center;

            &:nth-child(1){
                cursor: pointer;
            }

            &:nth-child(3){
                cursor: pointer;
            }
            
            
        }
    }

`

export const DescriptionModal = styled.div`
   width: 100%;
   height: 100vh;
   background-color: rgba(0,0,0, .2);
   position: absolute;
   top: 0;
   left: 0;

   display: flex;
   justify-content: center;
   align-items: center;
   

   div{
    width: 100%;
    max-width: 500px;
    height: auto;
    padding: 40px 20px;
    background-color: ${props => props.theme.colors.primary};

    display: flex;
    flex-direction: column;
    align-items: center;

    >p{
        font-size: 1rem;
    }
    >button{
        width: 30px;
        cursor: pointer;
        font-size:30px;
    }
   }
`
