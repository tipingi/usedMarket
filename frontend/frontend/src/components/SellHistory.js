import React, {useEffect, useState} from "react";
import axios from "axios";

const SellHistory=({userId})=>{
    const [sellHistory,setSellHistory]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/mypage/sell-history/${userId}`)
        .then((response)=>setSellHistory(response.data))
        .catch((error)=>console.error(error));
    },[userId]);

    return (
        <div>
            <h2>판매 내역</h2>
            <ul>
                {sellHistory.map((item,index)=>(
                    <li key={index}>
                        {item.product_name}-{item.created_at}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SellHistory;