import React from 'react'

export const DoubleTitle = ({title1, title2}) => {
    console.log(title1)
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 style={{ fontSize: '2.8em', fontWeight: 'bold' }} >
                        {title1} <br />
                        <span className="text-color-orange">{title2}</span> 
                    </h2>
                </div>
            </div>
        </div>
    )
}
