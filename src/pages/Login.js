import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import LoginModale from '../components/LoginModale'
import Modale from '../components/Modale'
import '../App.css'

const Login = () => {
    const navigate = useNavigate()

    const {revele, toggle} = LoginModale()

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: values => {
        userLogged(values)
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required"),
      password: Yup.string()
        .required("Password is required")
    })
  })

  const userLogged = async (values) => {
    const userLogin = await fetch('http://localhost:5000/auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(values)
    })
    const userStatus = await userLogin.json()
        if (userStatus.status >= 400) {
          alert(userStatus.statusText)
        } else {
          navigate('/home')
        }
  }

  return (
    <div>

        <form onSubmit={formik.handleSubmit}>
            <input
                name="username"
                type="username"
                placeholder="Numéro de téléphone, adresse email ou nom d'utilisateur"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <button type="submit" onClick={toggle}>Suivant</button>
            <Modale
                revele={revele}
                cache={toggle}
            />
        </form>
    </div>
  )
}

export default Login