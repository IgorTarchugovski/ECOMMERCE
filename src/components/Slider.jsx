import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: #aaa;
    position: relative;
`;

const Arrow = styled.div`
    // color: white;
    width: 35px;
    height: 35px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    postion: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    display: flex;
    align-items: center;    
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`

`

const InfoContainer = styled.div`
    flex: 1;
`


const Slider = () => {
  return (
    <Container>
        <Arrow direction ="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            </ImgContainer>
            <InfoContainer></InfoContainer>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider