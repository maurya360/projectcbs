import { Link } from "react-router-dom"



var CreateCabButton = () => {

    return (
       <div>
        <Link to="/AllTrips" className="btn btn-lg btn-info">All Trips</Link>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/AllTrips" className="btn btn-lg btn-info">Cab Wise Trips</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/AllTrips" className="btn btn-lg btn-info">Customer Wise Trips</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/AllTrips" className="btn btn-lg btn-info">Date Wise Trips</Link>
        </div>


    );

}

export default CreateCabButton;