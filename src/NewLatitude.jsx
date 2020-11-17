import React, {useState} from 'react'; 


const NewLatitude = ({ getlat, newlat} ) => {
    const [value, setValue] = useState(getlat)

    

    return (
        <form action="">
            <h2>Your current latitude is {value}</h2>
            <input type="text" onChange={(e) => {setValue(e.target.value)}} placeholder="Input a latitude manually " id="newLat" />
            <button type="submit" onClick={(e)=> {
                e.preventDefault()
                newlat(value)
                }} >Send</button>

        </form>
    )


}

export default NewLatitude


