import React from 'react'

export default function template({url,name}) {
    return (
        <div>
            <img src={url} alt="" />
            <p> {name} </p>
        </div>
    )
}
