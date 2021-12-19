import styled from "styled-components"
import categorie from './categorie.json'
import CategoryItems from "./CategoryItems"
const Container = styled.div`
    display : flex;
    padding : 20px;
    justify-content : space-between;
`
const Categories = () => {
    console.log(categorie);
    return (
        <Container>
            {categorie.map(item => (
                <CategoryItems 
                    key= {item.id}
                    title = {item.title}
                    image = {item.img}
                />
            ))}
        </Container>
    )
}

export default Categories
