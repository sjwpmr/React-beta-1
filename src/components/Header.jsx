
import React from 'react'
const Header = () => {

    const isLoggedIn=true
  return (
    
    <div>
        <h1>log</h1>
        <p>
        {isLoggedIn?
        <strong>hello</strong>:
        <strong>goodbye</strong>}

        </p>
        
        {'hi'}       // hi
{0}          // 0
{[1, 2, 3]}  // 123 (배열은 이어서 표시)
{undefined}  // 아무것도 안 보임 (오류 아님)
{null}       // 아무것도 안 보임
{true}       // 아무것도 안 보임
{/* {obj}        // ❌ 오류: Objects are not valid as a React child (화면이 하얗게 됨) */}
        
        </div>
  )
}

export default Header

