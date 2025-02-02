import React, { useEffect } from "react";
import { useParams } from "react-router";

const RestaurantDetails = () => {
    const { id } = useParams()
    const [restaurant, setRestaruantDetails] = React.useState({})
    const [restaurantMenu, setRestaruantMenu] = React.useState([])

    useEffect(() => {
      fetchRestaruantDetails()
    },[])
  
    const fetchRestaruantDetails = async () => {
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
      const json = await data.json()
      setRestaruantDetails(json?.data?.cards[2]?.card?.card?.info)
      setRestaruantMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
    }

    console.log('RestaurantCard::', restaurantMenu)
    return (
      <div>
        <h1>Restaurant Details</h1>
        <h2>{restaurant?.name}</h2>
        <p>Rating: {restaurant?.avgRating}/5</p>
        <p>Cost for two: ₹{restaurant?.costForTwo}</p>
        <p>Location: {restaurant?.locality}</p>
        <p>Time: {restaurant?.sla?.deliveryTime} minutes</p>
        <h3>Menu</h3>
        <ul>
          {restaurantMenu?.map((menuItem, index) => {
            const { card : { info: item }} = menuItem
            return(
                (
                    <li key={index}>
                      <h4>{item.name}</h4>
                      <p>Price: ₹{item.price}</p>
                      <p>Description: {item.description}</p>
                      <button>Add to cart</button>
                    </li>
                  )
            )
          })}
        </ul>
      </div>
    );
  };

  export default RestaurantDetails