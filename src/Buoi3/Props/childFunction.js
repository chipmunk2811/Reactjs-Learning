import React from 'react'

export default function ChildFunction(props) {
   


    const { username, age } = props.data;
    return (
        <div>Child Function
            <br />
            <p>
                Username: {username} - Age: {age}
            </p>
            
        </div>
    )
}
