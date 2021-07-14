import React from "react";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Price from './Price'

const PricesBox = styled.div`
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: space-evenly;
`

const Prices = ({ coinData }) => {
    const  [ prices, setPrices ] = useState([]);

    useEffect(() => {
        console.log(
            "prices:", prices
        )
        console.log(
            "coinData:", coinData.length
        )
        console.log(
            "coinData:", coinData
        )
        let list = coinData.map(item => item.id)
        console.log("list :", list)
        if(list.length > 0){
            list = list.toString()
            console.log("list :", list)
            const URL = "https://api.coingecko.com/api/v3/simple/price?ids="+{list}+"&vs_currencies=usd";
            axios
                .get(URL)
                .then(res => {
                    console.log('res.data', res.data);
                    setPrices(res.data)})
                .catch(err => console.log(err));
        }
        });

    return(
        <PricesBox>
            {coinData.map(item => <Price price={prices.item} name={item.id}/>)}
        </PricesBox>
    )
}

export default Prices;

