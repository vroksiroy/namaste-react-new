import React, { useEffect } from "react"
import { SWIGGY_API } from "../utils/constants"
import RestaurantCard from "./RestaurantCard"

const Body = () => {

    const [restaurants, setRestaurants] = React.useState([])
    const [filteredRestaurants, setFilteredRestaurants] = React.useState([])
    const [searchText, setSearchText] = React.useState("")

    useEffect(() => {
        const fetchRestaurants = async () => {
            const data = await fetch(SWIGGY_API)
            const json = await data.json()
            setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

        fetchRestaurants()
    }, [])

    return (
        <div className="body">
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e) => {
                        const filtered = restaurants.filter((restaurant) => {
                            return restaurant?.info?.name.toLowerCase().includes(e.target.value.toLowerCase())
                        })
                        setFilteredRestaurants(filtered)
                        setSearchText(e.target.value)
                    }}
                />
            </div>
            <div className="restaurant-container">
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <RestaurantCard
                                key={restaurant?.info?.id} 
                                imageId={restaurant?.info?.cloudinaryImageId}
                                restaurantName={restaurant?.info?.name}
                                rating={restaurant?.info?.avgRating}
                                cuisines={restaurant?.info?.cuisines}
                                deliveryTime={restaurant?.info?.sla?.slaString}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body