import Link from 'next/link';
import { Container, Navbar } from './styles'


export default function Header() {

    return (
        <>
            <Container />
            <Navbar>
                <Link href='/'><a>Home</a></Link>
                <Link href='blush'><a>Blush</a></Link>
                <Link href='bronzer'><a>Bronzer</a></Link>
                <Link href='eyebrow'><a>Eyebrow</a></Link>
            </Navbar>

        </>
    )
}
