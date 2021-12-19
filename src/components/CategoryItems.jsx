import styled from "styled-components"

const Container = styled.div`

`
const Image = styled.img`

`
const Info = styled.div`

`
const Title = styled.h1`

`
const Button = styled.button`
    padding : 5px;
    font-weight : 500;
    border-radius : 10px;
    background-color : #fff;
    cursor : pointer;
    border : 2px solid teal;
    transition : all in ease 0.4s;
    &:hover {
        background-color : teal;
        color : #ffff;
        transform : scale(1.02);
    }
`
const CategoryItems = ({title, image}) => {
    return (
        <Container>
            <Image src= {image}/>
            <Info>
                <Title>{title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}
// {
//     "id": 4,
//     "img": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5b%2F67%2F5b67d832586a155b7a3ca87213979823699f49cf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
//     "title": "trousers" 
// }
export default CategoryItems
