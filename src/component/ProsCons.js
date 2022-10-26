import React, { useContext, useRef } from 'react'
import DataContext from '../context/DataContext'

const ProsCons = () => {

    const { pros = 0, cons = 0 } = useContext(DataContext)
    const renders = useRef(0)


    return (
        <div>
            <p>No of pros and cons: <span style={{ fontSize: "24px" }}>{pros + cons}</span> </p>
            <p>ProsCons component renders: <span style={{ fontSize: "24px" }}>{renders.current++}</span> </p>
        </div>
    )
}

export default ProsCons