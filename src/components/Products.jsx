import styled from "styled-components"
import popularProducts from "./popularProducts.json"
import Product from "./Product";
const Container = styled.div`
    padding : 20px;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
`
const Products = () => {
    console.log(popularProducts);
    return (
        <Container>
            {popularProducts.map(item => (
                <Product 
                    key= {item.id}
                    image = {item.img}
                />
            ))}
        </Container>
    )
}

export default Products
