import React from 'react'

const Btton = ({ color, value, width, hight, border }) => {
    return (
        <div>
            <button className={`${color} ${width} ${hight} rounded-2xl cursor-pointer border-2`}>
                {value}
            </button>
        </div>
    )
}

export default Btton
