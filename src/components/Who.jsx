import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`


const Title = styled.h1`   
    font-size: 74px;
`
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`


const Line = styled.img`   
    height: 5px;
`
const Subtitle = styled.h2`
    color: #da4ea2;
`
const Desc = styled.p`   
    font-size: 24px;
    color: lightgray;

`
const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`



const Left = styled.div`   
    flex: 1;
    position: relative;
`

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{fov: 20 , position:[5,5,5]}}>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1} />
                        <directionalLight position={[1,2,3]} />
                        <Cube/>
                    </Canvas>
                </Left>
                <Right>
                    <Title>Think Outside the Square Space</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>What We Are</Subtitle>
                    </WhatWeDo>
                    <Desc>A Creative group of designers and developers with a passion for the arts.</Desc>
                    <Button>See Our Works</Button>
                </Right>
            </Container>
        </Section>
    );
}

export default Who;
