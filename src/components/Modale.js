import React from "react"

const Modale = ({revele, cache}) => revele ? (

    <React.Fragment>
        <div className="overlay"/>

        <div className="wrapper">

            <div className="modal">
                <button type="button" className="close" onClick={cache}>
                    <span>&times;</span>
                </button>

                <p>
                    Voici la modale !
                </p>
            </div>
        </div>
    </React.Fragment>
) : null

export default Modale