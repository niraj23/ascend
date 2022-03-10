import {useState} from 'react'

function CakeCard({cakeObj : {flavor, price, size = '9" cake'}}) {
    const [liked, setLiked] = useState(false)
    const handleClick = () => {
        setLiked(!liked)
    }
        return (
            <div>
                <h1>Flavor: {flavor}</h1>
                <p>Price: {price} </p>
                <p>Size: {size} </p>
                <button style = {{color: 'red'}} onClick={handleClick}>{liked ? '♥' : '♡'}</button>
            </div>
        )
}
export default CakeCard