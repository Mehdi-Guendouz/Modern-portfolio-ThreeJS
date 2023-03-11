import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    gap: 50px;
`

const Left = styled.div`
    flex: 1;    
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Title = styled.h1`
    font-weight: 200;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 25px;
`

const Input = styled.input`
    padding: 20px;
    background-color: #e8e6e6;
    border-radius: 5px;
    `
const Button = styled.button`
    background-color: #da4ea2;
    cursor: pointer;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 20px;
    `
const TextArea = styled.textarea`
    background-color: #e8e6e6;
    padding: 20px;
    border-radius: 5px;
`

const Right = styled.div`
    flex: 1;
`

const Contact = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Form>
                        <Title>Contact Us</Title>
                        <Input placeholder="Name" type="text" />
                        <Input placeholder="email" type="email" />
                        <TextArea placeholder="Write your message" rows={10}/>
                        <Button>Send</Button>
                    </Form>
                </Left>
                <Right>

                </Right>
            </Container>
        </Section>
    );
}

export default Contact;
