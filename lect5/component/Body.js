import resList from "../utils/mockData";
import ResCard from "../component/RestaurantCard";
import { useState , useEffect } from "react";

// state variable - react superpower(React HOOK which is ""usestate()"")
// useState() - why it get used cuz it maintain the state of the component

 
// normal variable
// let listOfRestaurant = [
//     {
//         data: {
//             id: "13050",
//             name: "Meghana Foods",
//             cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
//             cuisines: [
//                 "Biryani",
//                 "Andhra",
//                 "South Indian",
//                 "North Indian",
//                 "Chinese",
//                 "Seafood",
//             ],
//             costForTwo: 50000,
//             deliveryTime: 29,
//             address:
//                 "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",

//             avgRating: "4.4",
//         },
//     },
//     {
//         data: {
//             id: "1023050",
//             name: "KFC",
//             cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
//             cuisines: [
//                 "Biryani",
//                 "Andhra",
//                 "South Indian",
//                 "North Indian",
//                 "Chinese",
//                 "Seafood",
//             ],
//             costForTwo: 50000,
//             deliveryTime: 29,
//             address:
//                 "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",

//             avgRating: "4.1",
//         },
//     },
//     {
//         data: {
//             id: "102307050",
//             name: "MCD",
//             cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
//             cuisines: [
//                 "Biryani",
//                 "Andhra",
//                 "South Indian",
//                 "North Indian",
//                 "Chinese",
//                 "Seafood",
//             ],
//             costForTwo: 50000,
//             deliveryTime: 29,
//             address:
//                 "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",

//             avgRating: "3.4",
//         },
//     },
// ];
// when we click this button top rated restaurant it will get filter out of listOfRestaurant nut this filter function will only process out the data layer 
// and ui layer will remain as it is, to maintain the ui layer/data layer combined we uses another variable state variable

const Body = () => {
    // const [listOfRestaurant , setlistOfRestaurant] = useState([
    //     {
    //         data: {
    //             id: "13050",
    //             name: "Meghana Foods",
    //             cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
    //             cuisines: [
    //                 "Biryani",
    //                 "Andhra",
    //                 "South Indian",
    //                 "North Indian",
    //                 "Chinese",
    //                 "Seafood",
    //             ],
    //             costForTwo: 50000,
    //             deliveryTime: 29,
    //             address:
    //                 "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
    
    //             avgRating: "4.4",
    //         },
    //     },
    //     {
    //         data: {
    //             id: "1023050",
    //             name: "KFC",
    //             cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
    //             cuisines: [
    //                 "Biryani",
    //                 "Andhra",
    //                 "South Indian",
    //                 "North Indian",
    //                 "Chinese",
    //                 "Seafood",
    //             ],
    //             costForTwo: 50000,
    //             deliveryTime: 29,
    //             address:
    //                 "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
    
    //             avgRating: "4.1",
    //         },
    //     },
    //     {
    //         data: {
    //             id: "102307050",
    //             name: "MCD",
    //             cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
    //             cuisines: [
    //                 "Biryani",
    //                 "Andhra",
    //                 "South Indian",
    //                 "North Indian",
    //                 "Chinese",
    //                 "Seafood",
    //             ],
    //             costForTwo: 50000,
    //             deliveryTime: 29,
    //             address:
    //                 "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
    
    //             avgRating: "3.4",
    //         },
    //     },
    // ]);
    const [listOfRestaurant , setlistOfRestaurant] = useState(resList);
    return (
        <div>
            <div
                className="top-res-filter"
                onClick={() => {
                    const topRated = listOfRestaurant.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setlistOfRestaurant(topRated);
                }}
            >
                <button className="top-res-filter-button">
                    Top Rated Restaurant
                </button>
            </div>

            <div className="restaurant-container">
                {listOfRestaurant.map((restaurant) => (
                    <ResCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};
export default Body;
