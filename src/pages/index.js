import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 40px 20px;
`
const Container = styled.a`
    width: 240px;
    height: 290px;
    cursor: pointer;
    padding: 20px 8px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
   box-shadow: 1px 1px 5px;
   transition: all 0.3s;

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

export default function Home({ data }) {
  return (
    <Wrapper>
      {
        data.map((item, index) => (
          <Link href={`products/${item.id}`} key={index}>
            <Container >
              <img src={item.image_link} width="120px" />
              <h3>{item.brand}</h3>
              <span>{item.name}</span>
              <span>R$ {item.price}</span>
            </Container>
          </Link>
        ))
      }
    </Wrapper>
  )
}


export async function getStaticProps() {
  const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner')
  const data = await response.json()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }

}

