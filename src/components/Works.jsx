import React, {useState} from 'react';
import styled from 'styled-components';
import Development from './Development';
import ProductDesign from './ProductDesign';
import WebDesign from './WebDesign';


const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ListItem = styled.li`
    font-size: 90px;
    font-weight: bold;
    color: transparent;
    cursor: pointer;
    -webkit-text-stroke: 1px white;
    position: relative;

    ::after{
        content: '${(props) => props.text}';
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 0px;
        color: pink;
        white-space: nowrap;
    }
    &:hover{
        ::after{
            animation: moveWord 0.5s linear both;
            
            @keyframes moveWord {
                to{
                    width: 100%;
                }
            }
        }
    }
`

const Right = styled.div`
    flex: 1;
`

const Works = () => {
    const [work, setWork] = useState('Web Design');

    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map(item => <ListItem key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>)}
                    </List>
                </Left>
                <Right>
                    {work === "Web Design" ? (
                        <WebDesign />
                    ): work === "Development" ? (
                        <Development /> 
                    ): (
                        <ProductDesign/>
                    )}
                </Right>
            </Container>
        </Section>
    );
}

export default Works;
