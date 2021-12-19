import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position : relative;
`
const Wrapper = styled.div`
    height : 100%;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    position : absolute; 
    top : 0;
    bottom : 0;
    left : ${props => props.direction === "left" && "10px"};
    right : ${props => props.direction === "right" && "10px"};
    margin : auto;
    cursor : pointer;
    opacity : 0.5;
    &:hover {
        opacity : 1;
    }
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display : flex ; 
    align-items : center;
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display : flex;
    justify-content: center;
`;
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size : 70px;
`
const Desc = styled.p`
    margin : 50px 0;
    font-size : 20px;
    font-weight : 500;
    letter-spacing : 3px;
`
const Button = styled.button`
    padding : 10px;
    font-size : 20px;
    font-weight : 500;
    border-radius : 10px;
    background-color : transparent;
    cursor : pointer;
    border : 2px solid teal;
    transition : all in ease 0.4s;
    &:hover {
        background-color : teal;
        color : #ffff;
        transform : scale(1.02);
    }
`
// https://i.pinimg.com/564x/de/30/34/de3034811a2e98013b90bdaa2f32cdb8.jpg
const Slider = () => {
    return (
        <Container>
            <Arrow direction= "left">
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://spaceandlight.la/wp-content/uploads/2021/02/ecommerce-on-model-header-3.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Summer Sales</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction= "right">
                <ArrowRightOutlinedIcon/>
            </Arrow> 
        </Container>
    )
}

export default Slider
