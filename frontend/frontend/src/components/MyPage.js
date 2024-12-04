import React, {useEffect, useState} from "react";
import axios from "axios";
import SellHistory from "./SellHistory";
import BuyHistory from "./BuyHistory";

const MyPage()=>{
    const [userInfo,setUserInfo]=useState({});
    const userId = 1; //예제 UserId

    useEffect(()=>{
        //유저 정보 로드
        axios.get(`http://localhost:3000/api/mypage/user-info/${userId}`)
            .then((response)=>setUserInfo(response.data))
            .catch((error)=>console.error(error));
    },[]);

    return (
        <div>
            <h1>마이 페이지</h1>
            <div className = "Profile">
                <h2>프로필</h2>
                <p>이름: {userInfo.name}</p>
                <p>자기소개: {userInfo.intro}</p>
            </div>
        
            <div className = "History">
                <SellHistory userId={userId}/>
                <BuyHistory userId={userId}/>
            </div>
        </div>
    );
};

export default MyPage;
