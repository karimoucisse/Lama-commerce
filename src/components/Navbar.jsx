import styled from "styled-components"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height : 60px;
    // position : fixed;
    // z-index : 3;
    // width : 100%;
    // background-color: #ffff;
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between
    align-items : center;
`

const Left = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
`

const Language = styled.span`
    font-size : 14px;
    cursor : pointer;
`

const SearchContainer = styled.div`
    border : 0.5px solid lightgray;
    display : flex;
    align-items : center;
    margin-left : 25px;
    padding : 5px;
`

const Input = styled.input`
    border: none;
    outline : none;
    font-size : 15.5px;
`

const Center = styled.div`
    flex : 1;
    text-align : center;
`

const Logo = styled.h1`
    font-weight : bold;
`

const Right = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : flex-end;
    gap : 25px;
`
const MenuItem = styled.div`
    font-size : 14;
    cursor : pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input type="text" />
                        <SearchOutlinedIcon style={{color:'grey', fontSize: 17}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LAMA.</Logo>
                </Center>
                <Right>
                    {/* regarder videos 1 lecteut : 20 00 */}

                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
