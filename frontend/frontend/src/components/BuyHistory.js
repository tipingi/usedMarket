import React, { useEffect, useState } from "react";
import axios from "axios";

const BuyHistory = ({userId})=>{
    const [buyHistory,setBuyHistory]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/mypage/buy-history/${userId}`)
            .then((response)=>setBuyHistory(response.data))
            .catch((error)=>console.error(error));   
    },[userId]);

    return (
        <div>
            <ul>
            {buyHistory.map((item,index)=>(
                <li key={index}>
                    {item.product_name}-{item.created_at}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default BuyHistory;