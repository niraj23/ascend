import React from 'react'

function CakeCard(props) {
        return (
            <div>
                <h1>Flavor:{props.flavor}</h1>
                <p>Price:{props.price} </p>
            </div>
        )
}

export default CakeCard