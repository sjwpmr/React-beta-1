import React from 'react'
import './main.css'
const Main = () => {


    const user = {
        name: 'Alice',
        isLogin: true
    }

    if (user.isLogin) {
        return <button className='logout'>로그아웃</button>
    }
    else {

        return <button className='login'>로그인</button>
    }
}


export default Main