import React ,{useState,useRef} from 'react'

function ClickLogger() {
    const clikCont=useRef(0)
    const [text,setText]=useState('hello')

    const handleClick=()=>
{
    clikCont.current+=1

    setText(`버튼이 ${clikCont.current}번 클릭됨`)
}

  return (
    <div>
        <p>{text}</p>
        <button onClick={handleClick}>클릭</button>
    </div>
  )
}

export default ClickLogger