import React from "react"
import styled from "styled-components"
import { RiCloseFill } from "react-icons/ri"
import { BsTwitter } from "react-icons/bs"

const Container = styled.div`
    background-color: rgb(45, 56, 61);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 566px;
    width: 600px;
    background: black;
    border-radius: 17px;
    text-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    margin-left: 250px;
`
const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
    scrollbar-width: thin;
`
const Connect = styled.div`
    margin-left: 130px;
    margin-top: 10px;
    margin-bottom: 35px;
    height: 38px;
    width: 300px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;
    font-weight: 600;
    font-family: Segoe UI;
`
const ButtonGoogle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 25px;
    height: 38px;
    width: 300px;
    border-radius: 30px;
    background: white;
    &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.8);
    }
`
const TextGoogle = styled.div`
    margin-left: 8px;
    font-size: 15px;
    font-weight: 700;
`
const ButtonApple = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 38px;
    width: 300px;
    border-radius: 30px;
    background: white;
    tex-color: back;
    &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.8);
    }
`
const TextApple = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 8px;
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
`
const OuContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 10px;
    margin-left: 145px;
`
const TraitContainer= styled.div`
    display: flex;
    align-items: center;
`
const Trait = styled.div`
    height: 0.5px;
    width: 130px;
    background: rgba(255, 255, 255, 0.2);
`
const Ou = styled.div`
    margin: 0 8px 0 8px;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    font-weight: 700;
`
const InputContainer = styled.div`
    margin: auto;
    margin-bottom: 25px;
    height: '60px',
    width: '300px',
    background: 'black',
`
const ButtonSuivant = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // padding-top: 8px;
    margin: auto;
    margin-bottom: 25px;
    height: 38px;
    width: 300px;
    border-radius: 30px;
    background: white;
    tex-color: back;
    &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.8);
    }
`
const ButtonMdp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 25px;
    height: 38px;
    width: 300px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 30px;
    background: black;
    color: white;
    &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.05);
    }
`
const TextMdp = styled.div`
    font-size: 15px;
    font-weight: 700;
`
const TextSuivant = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 8px;
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
`
const TextCompte = styled.div`
    color: rgba(255, 255, 255, 0.4);
`
const LoginLost = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 30px;
    font-size: 15px;
` 
const Span = styled.div`
    margin-left: 3px; 
    color: blue;
` 

const LoginModal = () => {
  return (
    <Container>
        <Modal>
            <ModalHeader>
                <RiCloseFill size='26px' color='white'/>
                <IconTwitter><BsTwitter color='rgba(255, 255, 255, 0.9)' size='30px'/></IconTwitter>       
            </ModalHeader>

            <ModalBody>
                <Connect>Connectez-vous à Twitter</Connect>

                <ButtonGoogle type="button" style={{fontfamily: 'Segoe UI'}}>
                    <img src='../google.svg' style={{ width: '7%'}} alt="google"/>
                    <TextGoogle>    
                        Se connecter avec Google
                    </TextGoogle>
                </ButtonGoogle>
                <ButtonApple type="button"><img src='../apple-brands.svg' style={{ width: '5%'}} alt="apple"/><TextApple>Se connecter avec Apple</TextApple></ButtonApple>

                <OuContainer>
                    <TraitContainer>
                        <Trait/>
                    </TraitContainer>
                        <Ou>OU</Ou>
                    <TraitContainer>
                        <Trait/>
                    </TraitContainer>
                </OuContainer>

                <InputContainer>
                    <input 
                    style={{
                        height: '60px',
                        width: '300px',
                        paddingRight: '10px',
                        paddingLeft: '10px',
                        background: 'black',
                        color: 'white',
                        border: '0.5px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                    }}
                    placeholder="Numéro de téléphone, adresse email, ou nom d'utilisateur"></input>                
                </InputContainer>

                <ButtonSuivant type="button"><TextSuivant>Suivant</TextSuivant></ButtonSuivant>

                <ButtonMdp type="button"><TextMdp>Mot de passe oublié ?</TextMdp></ButtonMdp>

                <LoginLost>
                    <TextCompte>Vous n'avez pas de compte ? </TextCompte>
                    <Span><a href='inscription' rel='stylesheet'>Inscrivez-vous</a></Span>
                </LoginLost> 

            </ModalBody>
        </Modal>
    </Container>
    ) 
}

export default LoginModal