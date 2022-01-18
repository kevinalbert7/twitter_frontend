import { useState } from "react"

const LoginModale = () => {
    const [revele, setRevele] = useState(false)

    function toggle() {
        setRevele(!revele)
    }

    return {
        revele,
        toggle
    }
}

export default LoginModale