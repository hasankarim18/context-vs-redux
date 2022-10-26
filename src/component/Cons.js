import React, { useContext, useRef } from 'react'
import DataContext from '../context/DataContext'

const Cons = () => {

    const { cons = 0 } = useContext(DataContext)

    const renders = useRef(0)




    return (
        <div>
            <p>No of cons: <span style={{ fontSize: "24px" }}  >{cons}</span></p>
            <p>Cons Component renders: <span style={{ fontSize: "24px" }}> {renders.current++} </span> </p>
        </div>
    )
}

export default Cons