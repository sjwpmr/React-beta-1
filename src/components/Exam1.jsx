import React from 'react'

const Exam1 = ({ age, name }) => {
  return (
    <div>
      <h3>안녕 나는
        <span className='name'>
          {name}
        </span>
        이고,  내 나이는
        <span className="age">
          {age}
        </span>
        살이야</h3>
    </div>
  )
}

export default Exam1
