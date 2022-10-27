import React, { useRef } from 'react'
import { useSelector } from 'react-redux'


const ProsCons = () => {

    const { pros, cons } = useSelector(state => state.proscons)

    const renders = useRef(0)

    return (
        <div>
            <p>No of pros and cons:<span style={{ fontSize: "24px" }}> {pros + cons} </span></p>
            <p>ProsCons component renders: <span style={{ fontSize: "24px" }}> {renders.current++} </span></p>
        </div>
    )
}

export default ProsCons