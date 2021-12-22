import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Info = styled.div`
    opacity : 0;
    position : absolute;
    width : 100%;
    height : 100%;
    top : 0;
    left : 0;
    display : flex;
    align-items : center;
    background-color : rgba(0,0,0,0.2);
    z-index : 3;
    display : flex;
    justify-content : center;
    gap : 15px;
    border-radius : 15px;
    transition : opacity 0.3s ease-out;
`

const Container = styled.div`
    flex : 1;
    margin : 5px;
    min-width : 300px;
    height : 350px;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #f5fbfd;
    border-radius : 15px;
    position : relative;
    &:hover ${Info} {
        opacity : 1;
    }
`
// const Circle = styled.div`
//     width : 200px;
//     height : 200px;
//     border-radius : 50%;
//     background-color : #ffff;
//     position : absolute;
// `

const Image = styled.img`
    height : 75%;
    z-index : 2;
`
const Icon = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 50%;
    background-color : #ffff;
    display : flex;
    align-items : center;
    justify-content: center;
    cursor : pointer;
    transition: all 0.2s ease;
    box-shadow : 4px 4px 4px rgba(0,0,0,0.3);
    &:hover {
        background-color : #e9f5f5;
        transform : scale(1.05)
    }
`
const Product = ({image}) => {
    return (
        <Container>
            {/* <Circle/> */}
            <Image src= {image}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon/>
                </Icon>
                <Icon>
                    <SearchOutlinedIcon/>
                </Icon>
                <Icon>
                    <FavoriteBorderIcon/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
