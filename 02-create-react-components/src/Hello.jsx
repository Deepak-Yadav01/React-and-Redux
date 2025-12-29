function Hello(){

    let MyName = "Deepak";
    let number = 452;
    let fullName = () => {
        return "DEEPAK YADAV";

    }


    return <h3>
        MessageNumber: {number} , <i> Hello  this is the best js course.I am the learner {fullName()} </i> 
    </h3>
}

export default Hello;