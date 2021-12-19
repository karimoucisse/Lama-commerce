import styled from "styled-components"
import { useState } from "react";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import SliderItems from './data.json'
const Container = styled.div`
    width: 100%;
    height: calc(100vh );
    display: flex;
    position : relative;
    overflow : hidden;
`
const Wrapper = styled.div`
    height : 100%;
    display : flex;
    transition : all 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw)
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
    z-index : 2;
    &:hover {
        opacity : 1;
    }
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display : flex ; 
    align-items : center;
    background-color : #${props => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display : flex;
    justify-content: center;
    align-items : center;
`;
const Image = styled.img`
    height: 85%;
    // width : 70%;
    //border-radius : 40px;
    object-fit : cover;
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
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 4)
        }else {
            setSlideIndex(slideIndex < 4 ? slideIndex +1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction= "left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex= {slideIndex}>
                {SliderItems.map(item => ( 
                    <Slide 
                        key= {item.id}
                        bg={item.bg}
                    >
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction= "right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon/>
            </Arrow> 
        </Container>
    )
}

export default Slider
