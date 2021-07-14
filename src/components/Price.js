import React from 'react'
import styled from 'styled-components'

const PriceBox = styled.div`
    padding: 5px;
    width: 25%;
    border: 2px solid black;
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
`
const Price = ({name, price}) => {
    return(
        <PriceBox>
            <h2>{name}</h2>
            <p>{price}$</p>
        </PriceBox>
    )
}

export default Price