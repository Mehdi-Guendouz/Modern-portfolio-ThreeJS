import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Maps from './Maps';

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

    const form = useRef();
    const [Success, setSuccess] = useState(null);


    const handelSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_3m3h17h', 'template_elg6c9e', form.current, 'CQ0kvwObB2EV7aG6x')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
    }

    return (
        <Section>
            <Container>
                <Left>
                    <Form onSubmit={handelSubmit} ref={form}>
                        <Title>Contact Us</Title>
                        <Input placeholder="Name" type="text" name='name' />
                        <Input placeholder="email" type="email" name='email' />
                        <TextArea placeholder="Write your message" rows={10} name="message"/>
                        <Button type='submit'>Send</Button>
                        {Success && "Your message was sent successfully !!!!!!!!"}
                    </Form>
                </Left>
                <Right>
                    <Maps />
                </Right>
            </Container>
        </Section>
    );
}

export default Contact;
