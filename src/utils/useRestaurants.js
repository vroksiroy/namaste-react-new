import React, { useEffect, useState } from "react"
import { SWIGGY_API } from "./constants"

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        const fetchRestaurants = async () => {
            const data = await fetch(SWIGGY_API)
            const json = await data.json()
            setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

        fetchRestaurants()
    }, [])

    return {
        restaurants,
        filteredRestaurants,
        setFilteredRestaurants
    }
}

export default useRestaurants