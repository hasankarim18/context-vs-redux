import React, { useRef } from 'react'
import { useSelector } from 'react-redux'


const Pros = () => {

    // const { pros = 0 } = useSelector(selectProsCons)

    const pros = useSelector((state) => state.proscons.pros);
    const renders = useRef(0);

    return (
        <div>
            <p>No of pros:<span style={{ fontSize: "24px" }}> {pros} </span></p>
            <p>Pros component renders: <span style={{ fontSize: "24px" }}>  {renders.current++} </span></p>
        </div>
    )
}

export default Pros