import React, { useRef } from 'react'
import { useSelector } from 'react-redux'


const Cons = () => {
    const cons = useSelector((state) => state.proscons.cons);
    const renders = useRef(0);
    console.log(typeof (cons))
    return (
        <div>
            <p>No of cons: <span style={{ fontSize: "24px" }}>{cons}</span> </p>
            <p>Cons Component renders: <span style={{ fontSize: "24px" }}> {renders.current++} </span></p>
        </div>
    )
}

export default Cons