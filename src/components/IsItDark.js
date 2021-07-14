import React from 'react'

const IsItDark = ({ dark })=> {
    return(
        <>
            <h2>it is {dark? "dark": "not dark"} </h2>
        </>
    )
};

export default IsItDark;