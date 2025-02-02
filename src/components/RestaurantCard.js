import { Link } from "react-router";
import { SWIGGY_IMAGE } from "../utils/constants";

const RestaurantCard = ({ id, imageId, restaurantName, rating, cuisines, deliveryTime}) => {

    const isFullPath = imageId.includes('/');
    const imageUrl = isFullPath 
        ? `${SWIGGY_IMAGE}${imageId}` // Replace 'YOUR_CLOUD_NAME' with your Cloudinary account name
        : `${SWIGGY_IMAGE}${imageId}.jpg`;


    return (
        <Link to={`/restaurant/${id}`} className="restaurant-card">
            <img className="restaurant-img" src={imageUrl} alt="logo" />
            <h3 className="restaurant-name">{restaurantName}</h3>
            <h3 className="restaurant-rating">{rating}</h3>
            <h3 className="restaurant-cuisines">{cuisines.join(", ")}</h3>
            <h3 className="restaurant-delivery-time">{deliveryTime}</h3>
        </Link>
    )
}

export default RestaurantCard