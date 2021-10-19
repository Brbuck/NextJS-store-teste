import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    justify-items: center;
    align-items: center;
    gap: 40px 20px;
`
export const Container = styled.a`
    width: 240px;
    height: 290px;
    cursor: pointer;
    padding: 20px 8px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    //box-shadow: 1px 1px 2px;
    transition: all 0.3s;

    background-color: ${props => props.theme.colors.primary};

    >img{
      text-align: center;
    }

   h3{
     margin:10px auto;
   }
   span{
     text-align: center;
     margin: 5px auto;
   }
  &:hover{
    transform: translateY(-3%);
  }
`;
