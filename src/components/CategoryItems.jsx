import styled from "styled-components"

const Container = styled.div`
    flex : 1;
    margin : 3px;
    height : 85vh;
    position : relative;
`
const Image = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
`
const Info = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height: 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    gap : 20px;
    cursor : pointer;
    &:hover {
        background : rgba(0,0,0,0.3);
    }
`
const Title = styled.h1`
    color : #ffff;
    text-shadow : 4px 4px 3px  black;
    letter-spacing : 3px;
`
const Button = styled.button`
    padding : 10px;
    border : none;
    border-radius : 10px;
    color : black;
    background-color : rgba(255,255,255,0.6);
    cursor : pointer;
    font-weight: 700;
    &:hover {
        background-color : #fff;
        color : black;
        transform : scale(1.02);
        box-shadow : 2px 2px 6px rgba(0,0,0,0.6);
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
