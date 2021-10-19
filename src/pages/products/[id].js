import { useRouter } from 'next/router'

export default function Products({ id }) {
    const { isFallback } = useRouter()

    if (isFallback) {
        return <p>Carregando...</p>
    }

    return (
        <div>
            <img src={id.image_link} alt={id.name} width='200px' />
            <p>{id.name}</p>
            <p>Categoria: {id.category ? id.category : 'null'}</p>
            <span>Preço: {id.price}</span>
            <p>Descrição: {id.description}</p>
        </div>
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    const data = await response.json()

    // Get the paths we want to pre-render based on posts
    const paths = data.map((item) => ({
        params: { id: item.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps(context) {
    const { id } = context.params
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const response = await fetch(
        `https://makeup-api.herokuapp.com/api/v1/products/${id}`,
        {
            method: "GET",
            headers: {
                // update with your user-agent
                "User-Agent":
                    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
                Accept: "application/json; charset=UTF-8",
            },
        }
    );
    const data = await response.json()

    // Pass post data to the page via props
    return {
        props: {
            id: data,
        },
        revalidate: 100,
    }
}