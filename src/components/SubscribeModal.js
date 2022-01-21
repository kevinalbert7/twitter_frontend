import React from "react"
import styled from "styled-components"
import { RiCloseFill } from "react-icons/ri"
import { BsTwitter } from "react-icons/bs"

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: rgb(45, 56, 61);
`
const Modal = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 566px;
    width: 600px;
    background: black;
    border-radius: 17px;
    text-color: white;
`
const ModalHeader = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-left: 15px;
`
const IconTwitter = styled.div`
    margin: auto;
`
const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    padding : 20px 30px;
    overflow-y: scroll;
    scrollbar-width: thin;
`
const TextCompte = styled.div`
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 600; 
    color: rgba(255, 255, 255, 0.8);
`
const InputContainer = styled.div`
    margin: auto;
    margin-top: 20px;
    height: 60px;
    background: black;
    text: white;
`
const TextEmail = styled.div`
    margin-top: 30px;
    a {
        color: rgb(29, 155, 240);
        text-decoration: none;
        &:hover {text-decoration: underline;}
    }
`
const TextNaissance = styled.div`
    margin-top: 30px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
`
const TextNaissance2 = styled.div`
    font-size: 15px;
    color: rgba(255, 255, 255, 0.4);
`
const InputNaissance = styled.div`
    display: flex;
    flex-direction: row;
`
const Footer = styled.div`
    height: 100px;
`
const ButtonSuivant = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 25px;
    height: 45px;
    width: 520px;
    border-radius: 30px;
    background: rgb(143, 136, 136);
    text-color: back;
    &:hover {
        cursor: pointer;
        background: rgba(143, 136, 136, 0.7);
    }
`
const TextSuivant = styled.div`
    font-size: 17px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
`

const SuscribeModal = () => {
  return (
    <Container>
        <Modal>
            <ModalHeader>
                <RiCloseFill size='26px' color='white'/>
                <IconTwitter><BsTwitter color='rgba(255, 255, 255, 0.9)' size='30px'/></IconTwitter>       
            </ModalHeader>

            <ModalBody>
                
                    <TextCompte>Créer votre compte</TextCompte>
                    <InputContainer>
                        <input 
                        style={{
                            height: '55px',
                            width: '500px',
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            background: 'black',
                            fontSize: '18px',
                            color: 'white',
                            border: '0.5px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '4px',
                        }}
                        placeholder="Nom et prénom"></input>                
                    </InputContainer>
                    <InputContainer>
                        <input 
                        style={{
                            height: '55px',
                            width: '500px',
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            background: 'black',
                            fontSize: '18px',
                            color: 'white',
                            border: '0.5px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '4px',
                        }}
                        placeholder="Téléphone"></input>                
                    </InputContainer>

                    <TextEmail><a href="#">Utiliser un email</a></TextEmail>
                    <TextNaissance>Date de naissance</TextNaissance>
                    <TextNaissance2>Cette information ne sera pas affichée publiquement. Confirmez votre âge, même si ce compte est pour une entreprise, un animal de compagnie ou autre chose.</TextNaissance2>
                    
                    <InputNaissance>
                    <InputContainer>
                        <input 
                        style={{
                            height: '55px',
                            width: '240px',
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            background: 'black',
                            fontSize: '18px',
                            color: 'white',
                            border: '0.5px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '4px',
                        }}
                        placeholder="Mois"></input>                
                    </InputContainer>
                    <InputContainer>
                        <input 
                        style={{
                            height: '55px',
                            width: '90px',
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            background: 'black',
                            fontSize: '18px',
                            color: 'white',
                            border: '0.5px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '4px',
                        }}
                        placeholder="Jour"></input>                
                    </InputContainer>
                    <InputContainer>
                        <input 
                        style={{
                            height: '55px',
                            width: '100px',
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            background: 'black',
                            fontSize: '18px',
                            color: 'white',
                            border: '0.5px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '4px',
                        }}
                        placeholder="Année"></input>                
                    </InputContainer>
                    </InputNaissance>
            </ModalBody>
            <Footer>
                <ButtonSuivant type="button"><TextSuivant>Suivant</TextSuivant></ButtonSuivant>
            </Footer>
        </Modal>
    </Container>
    ) 
}

export default SuscribeModal