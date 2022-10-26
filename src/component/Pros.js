import React from 'react'
import { useContext, useRef } from 'react'
import DataContext from '../context/DataContext'

const Pros = () => {

    const { pros = 0 } = useContext(DataContext)

    const renders = useRef(0)



    return (
        <div>
            <p>No of pros: <span style={{ fontSize: "24px" }} >{pros}</span> </p>
            <p>Pros component renders: <span>{renders.current++}</span></p>
        </div>
    )
}

export default Pros