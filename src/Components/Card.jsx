import React, { useState } from 'react'

const Card = () => {
    return (
        <div className='group w-48 h-48 bg-slate-300'>
            <div className=' group-hover:opacity-0 w-20 h-20 bg-black text-white absolute transition-transform delay-200 ease-in-out'>A</div>
            <div className=' opacity-0 group-hover:opacity-100 w-20 h-20 bg-black text-white absolute transition-transform delay-200 ease-in-out'>b</div>
        </div>
    );
}

export default Card
