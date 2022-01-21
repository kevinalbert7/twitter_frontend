import React from 'react'
import styled from "styled-components"
import { BsTwitter } from "react-icons/bs"
// import ModalComponent from '../components/Modal'

const Body = styled.div`
height: 100%;
    display: flex;
`
const BackgroundOne = styled.div`
    width: 42%;
    display: flex;
    justify-content: center;
    padding-bottom: 90px;
    align-items: center;
    background-image: url('../background_twitter.png')
`
const Title = styled.div`
    padding-top: 60px;
    padding-right: 150px;
    font-size: 60px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
`
const SubTitle = styled.div`
    padding-top: 50px;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 35px;
    color: white;
    color: rgba(255, 255, 255, 0.8);
`
const BackgroundTwo = styled.div`
    width: 58%;
    padding-top: 20px;
    padding-left: 35px;
    background: black;
`
const ButtonGoogle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
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
const TextGoogle = styled.div`
    margin-left: 8px;
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0,6)
`
const ButtonApple = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    color: rgb(0, 0, 0);
`
const OuContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 10px;
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
    color: rgb(255, 255, 255);
    font-size: 11px;
    font-weight: 300;
`
const ButtonSubscribe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    height: 38px;
    width: 300px;
    border-radius: 30px;
    background: rgb(29, 155, 240);
    color: white;
    &:hover {
        cursor: pointer;
        background: rgba(29, 155, 240, 0.8);
    }
`
const TextSubscribe = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 8px;
    font-size: 15px;
    font-weight: 600;
`
const TextCondition = styled.div`
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.4);
` 
const Span = styled.div`
    color: rgb(29, 155, 240);
    cursor: pointer;
    &:hover{text-decoration: underline;}
` 
const TextCompte = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    background: black;
    color: rgba(255, 255, 255, 0.9);
` 
const ButtonConnect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 300px;
    margin-bottom: 40px;
    border-radius: 30px;
    background: black;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: rgb(29, 155, 240);
    &:hover {
        cursor: pointer;
        background: rgba(29, 155, 240, 0.1);
    }
`
const Footer = styled.div`
    height: 70px;
    background: black;
    text-align: center;
    li {
        display: inline;
        list-style-type: none;
        color: rgba(255, 255, 255, 0.4);
    }
    a {
        text-decoration: none;
        padding-right: 15px;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.4);
        &:hover {text-decoration: underline;}
    }
`


const Home = () => {

    return (
        <>
            <Body>
                <BackgroundOne>
                    <BsTwitter color='rgb(255, 255, 255)' size='350px'/>      
                </BackgroundOne>

                <BackgroundTwo>
                    <BsTwitter color='rgba(255, 255, 255, 0.9)' size='43px'/>
                    <Title>
                        Ça se passe maintenant
                    </Title>
                    <SubTitle>
                        Rejoignez Twitter dès aujourd'hui.
                    </SubTitle> 
                    <ButtonGoogle type="button" style={{fontfamily: 'Segoe UI'}}>
                        <img src='../google.svg' style={{ width: '7%'}} alt="google"/>
                        <TextGoogle>    
                            S'inscrire avec Google
                        </TextGoogle>
                    </ButtonGoogle>
                    <ButtonApple type="button"><img src='../apple-brands.svg' style={{ width: '5%'}} alt="apple"/><TextApple>S'inscrire avec Apple</TextApple></ButtonApple>

                    <OuContainer>
                        <TraitContainer>
                            <Trait/>
                        </TraitContainer>
                            <Ou>OU</Ou>
                        <TraitContainer>
                            <Trait/>
                        </TraitContainer>
                    </OuContainer>

                    <ButtonSubscribe type="button"><TextSubscribe>S'inscrire avec un numérode téléph...</TextSubscribe></ButtonSubscribe>
                    <TextCondition>En vous inscrivant, vous acceptez les<Span> Conditions d'Utilisation</Span>et la<Span>Politique de Confidentialité</Span>, incluant l'<Span>Utilisation de Cookies</Span>.</TextCondition>

                    <TextCompte>Vous avez déjà un compte ?</TextCompte>
                    <ButtonConnect type="button"><TextSubscribe>Se connecter</TextSubscribe></ButtonConnect>

                </BackgroundTwo>
            </Body>

            <Footer>
                <ul>
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">Centre d'assistance</a></li>
                    <li><a href="#">Conditions d’utilisation</a></li>
                    <li><a href="#">Politique de Confidentialité</a></li>
                    <li><a href="#">Politique relative aux cookies</a></li>
                    <li><a href="#">Accessibilité</a></li>
                    <li><a href="#">Informations sur les publicités</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Statut</a></li>
                    <li><a href="#">Carrières</a></li>
                    <li><a href="#">Ressources de la marque</a></li>
                    <li><a href="#">Publicité</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Twitter pour les professionnels</a></li>
                    <li><a href="#">Développeurs</a></li>
                    <li><a href="#">Répertoire</a></li>
                    <li><a href="#">Paramètres</a></li>
                    <li><a href="#">© 2022 Twitter, Inc.</a></li>
                    <li><a href="#">Publicité</a></li>
                </ul>
            </Footer>
            {/* <ModalComponent/> */}
        </>
    )
}

export default Home

//   const [show, setShow] = useState(false)

//   const toggle = () => {
//     setShow(!show)
//   }
//   // const { revele, toggle } = LoginModal()
//     const navigate = useNavigate()

//     // const [show, setShow] = useState(false);

//     // const handleClose = () => {
//     //   setShow(false)
//     // }
//     // const handleShow = () => {
//     //   setShow(true)
//     // }

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: ""
//     },
//     onSubmit: values => {
//         userLogged(values)
//     },
//     validateOnChange: false,
//     validationSchema: Yup.object({
//       username: Yup.string()
//         .required("Username is required"),
//       password: Yup.string()
//         .required("Password is required")
//     })
//   })

//   const userLogged = async (values) => {
//     const userLogin = await fetch('http://localhost:5000/auth/login', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include',
//       body: JSON.stringify(values)
//     })
//     const userStatus = await userLogin.json()
//         if (userStatus.status >= 400) {
//           alert(userStatus.statusText)
//         } else {
//           navigate('/home')
//         }
//   }

//   return show && (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//           <input
//               name="username"
//               type="username"
//               placeholder="Numéro de téléphone, adresse email ou nom d'utilisateur"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//           />

//         </form>
//           <button type="submit" onClick={toggle}>Suivant</button>
//   ) : (
//           <div className="modal">
//             <div className='modalHeader'>
//                 <button type='close' variant='white' onClick={toggle}/>
//                 <i class="fab fa-twitter"></i>
//             </div>
//             <div className='modalBody'>
//                 <p>Connectez-vous à Twitter</p>
//                 <button>Se connecter avec Google</button>
//                 <button>Seconnecter avec Apple</button>
//                 <button>Mot de passe oublié ?</button>
//             </div>
//         </div>
//     </div>
//   )
// }
