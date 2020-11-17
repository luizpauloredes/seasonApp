
const NewLatitude = (props) => {



    const getLatitude = () => {

        const newLat = document.querySelector('#newLat').value

        return (
            console.log(newLat)      
        )
    }


    return (
        <form action="">
            <h2>Your current latitude is {props.getlat}</h2>
            <input type="text" placeholder="Input a latitude manually " id="newLat" />
            <button type="submit" onClick={getLatitude}>Send</button>
        </form>
    )


}

export default NewLatitude


