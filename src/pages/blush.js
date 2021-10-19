import Link from 'next/link';
import {Container, Wrapper} from '../styles/showCase'


export default function Blush({ data }) {
    return (
        <Wrapper>
            {data.map((item, index) => (
                <Link key={index} href={`/products/${item.id}`}>
                    <Container>
                        <img src={item.image_link} alt={item.name} width="120px" />
                        <h3>{item.brand}</h3>
                        <span>{item.name}</span>
                        <span>R$ {item.price}</span>
                    </Container>
                </Link>
            ))}

        </Wrapper>
    );
};

export async function getStaticProps() {
    const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush')
    const data = await response.json()

    return {
        props: {
            data,
        },
        revalidate: 10,
    }
}
