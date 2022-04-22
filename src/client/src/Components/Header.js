import React from 'react'
import img from '../static/stock7.jpg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="top-div w-full" style={{ height: '100vh' }}>
                <img src="https://miro.medium.com/max/1400/1*DrbLUMbhtehEgEl8Kj5v9Q.png" className="w-full h-full" />
            </div>
            <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center mt-60">

                {/* <div className="text-9xl font-extrabold text-white">WELCOME</div>
                <div className="text-3xl font-bold text-white mt-3">Convert Your Voice to the Sign Language</div> */}
                <Link to="/translate">
                    <button className="bg-purple-700 text-white text-2xl px-6 py-3 mt-3 font-bold rounded-3xl">Let's Translate</button>
                </Link>

            </div>
        </>
    )
}

export default Header
