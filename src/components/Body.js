import React from "react"
import useRestaurants from "../utils/useRestaurants"
import RestaurantCard from "./RestaurantCard"

const Body = () => {

    const [searchText, setSearchText] = React.useState("")

    const { restaurants, filteredRestaurants, setFilteredRestaurants } = useRestaurants()

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
                                id={restaurant?.info?.id}
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