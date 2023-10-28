import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

/**
 * lets have this high level design of the food ordering app
 * - Food Ordering Application
 * - We will have three component in the app
 *
 * - Header
 *    - logo
 *    - nav icon
 *
 * - Body
 *    - search button and search icon
 *    - restraunt card
 *        - img
 *        - Name of Res , Star Rating , cuisine , delveriy time
 *
 * - Footer
 *    - copyright stuff
 *    - links
 *    - contact us
 *    - about us
 * */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    alt="logo"
                    src="https://cdn.dribbble.com/users/3617331/screenshots/14275204/02.jpg"
                />
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const resList = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "334475",
            name: "KFC",
            uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
            city: "1",
            area: "BTM Layout",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
            cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            slaString: "36 MINS",
            lastMileTravel: 3.5,
            slugs: {
                restaurant: "kfc-btm-layout-btm",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
            locality: "2nd Stage",
            parentId: 547,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "3.5 kms",
            hasSurge: false,
            sla: {
                restaurantId: "334475",
                deliveryTime: 36,
                minDeliveryTime: 36,
                maxDeliveryTime: 36,
                lastMileTravel: 3.5,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "3.8",
            totalRatings: 500,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "229",
            name: "Meghana Foods",
            uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
            city: "1",
            area: "Koramangala",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
            cuisines: [
                "Biryani",
                "Andhra",
                "South Indian",
                "North Indian",
                "Chinese",
                "Seafood",
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            slaString: "29 MINS",
            lastMileTravel: 1.399999976158142,
            slugs: {
                restaurant: "meghana-foods-5th-block-koramangala",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
            locality: "5th Block",
            parentId: 635,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "229",
                deliveryTime: 29,
                minDeliveryTime: 29,
                maxDeliveryTime: 29,
                lastMileTravel: 1.399999976158142,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.4",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "121603",
            name: "Kannur Food Point",
            uuid: "51983905-e698-4e31-b0d7-e376eca56320",
            city: "1",
            area: "Tavarekere",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
            cuisines: ["Kerala", "Chinese"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            slaString: "31 MINS",
            lastMileTravel: 3,
            slugs: {
                restaurant: "kannur-food-point-btm",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
            locality: "SG Palya",
            parentId: 20974,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                    {
                        meta: "50% off on all orders",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                    {
                        meta: "50% off on all orders",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                    {
                        meta: "50% off on all orders",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "121603",
                deliveryTime: 31,
                minDeliveryTime: 31,
                maxDeliveryTime: 31,
                lastMileTravel: 3,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.8",
            totalRatings: 5000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "307050",
            name: "Call Me Chow",
            uuid: "b9bf2a17-faf9-4e4a-a6a7-61197d4bafa0",
            city: "1",
            area: "Koramangala",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "soegobqsiqvhmkfvnnkj",
            cuisines: ["Chinese", "Pan-Asian"],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            slaString: "29 MINS",
            lastMileTravel: 1.5,
            slugs: {
                restaurant: "call-me-chow-koramangala-koramangala",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "Call Me Chow, No. 364/A, Ground Floor, 3rd Cross, VSR Layout, Koramangala 8th Block, Bengaluru, Karnataka - 560095",
            locality: "8th Block",
            parentId: 18560,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "40% off",
                shortDescriptionList: [
                    {
                        meta: "40% off | Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "40% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6108301~p=4~eid=00000186-a341-249f-05e6-09c600910432",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.5 kms",
            hasSurge: false,
            sla: {
                restaurantId: "307050",
                deliveryTime: 29,
                minDeliveryTime: 29,
                maxDeliveryTime: 29,
                lastMileTravel: 1.5,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.3",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "337335",
            name: "Kannur food kitchen",
            uuid: "c70b61bc-0f68-4e24-996b-749fbf295c35",
            city: "1",
            area: "BTM Layout",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "a27weqanhnszqiuzsoik",
            cuisines: ["Kerala", "Biryani", "Beverages"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            slaString: "30 MINS",
            lastMileTravel: 2.5,
            slugs: {
                restaurant: "kannur-food-kitchen-btm-btm",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
            locality: "1st  Stage",
            parentId: 114756,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                    {
                        meta: "50% off on all orders",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                    {
                        meta: "50% off on all orders",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                    {
                        meta: "50% off on all orders",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "2.5 kms",
            hasSurge: false,
            sla: {
                restaurantId: "337335",
                deliveryTime: 30,
                minDeliveryTime: 30,
                maxDeliveryTime: 30,
                lastMileTravel: 2.5,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.8",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "492159",
            name: "Roti Wala",
            uuid: "ada41f9b-cca3-4197-805c-8c43798919e9",
            city: "1",
            area: "Koramangala",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "f99d05e4f7884caa8646c70b0b752c7a",
            cuisines: ["Home Food", "North Indian", "Thalis"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            slaString: "36 MINS",
            lastMileTravel: 1,
            slugs: {
                restaurant: "new-roti-wala-koramangala-koramangala",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "No 18 ,MIG, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095, India",
            locality: "5th Block",
            parentId: 171678,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "20% off",
                shortDescriptionList: [
                    {
                        meta: "20% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "20% off up to ₹50 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "20% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "20% off up to ₹50 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "492159",
                deliveryTime: 36,
                minDeliveryTime: 36,
                maxDeliveryTime: 36,
                lastMileTravel: 1,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 100,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "65797",
            name: "Leon's - Burgers & Wings (Leon Grill)",
            uuid: "b5747bab-748b-4f2d-8856-25cd9a49efb3",
            city: "1",
            area: "Koramangala",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "r4ufflqojich0r29efvc",
            cuisines: [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental",
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            slaString: "29 MINS",
            lastMileTravel: 1.2999999523162842,
            slugs: {
                restaurant: "leon-grill-koramangala-koramangala",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95",
            locality: "KHB Colony",
            parentId: 371281,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "40% off",
                shortDescriptionList: [
                    {
                        meta: "40% off | Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "40% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "40% off up to ₹80 on select items | Use code SPECIALS",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6067111~p=7~eid=00000186-a341-249f-05e6-09c70091073f",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "65797",
                deliveryTime: 29,
                minDeliveryTime: 29,
                maxDeliveryTime: 29,
                lastMileTravel: 1.2999999523162842,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.3",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "425",
            name: "Hotel Empire",
            uuid: "c0c37758-2e83-4429-aad6-eb94debb48f5",
            city: "1",
            area: "Koramangala",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "un4omn7rcunkmlw6vikr",
            cuisines: ["North Indian", "Kebabs", "Biryani"],
            tags: [],
            costForTwo: 45000,
            costForTwoString: "₹450 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            slaString: "30 MINS",
            lastMileTravel: 1.2999999523162842,
            slugs: {
                restaurant: "hotel-empire-5th-block-koramangala",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore",
            locality: "Koramangala",
            parentId: 475,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "10% off",
                shortDescriptionList: [
                    {
                        meta: "10% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "10% off up to ₹40 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "10% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "10% off up to ₹40 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "425",
                deliveryTime: 30,
                minDeliveryTime: 30,
                maxDeliveryTime: 30,
                lastMileTravel: 1.2999999523162842,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "428",
            name: "Biryani Pot",
            uuid: "6db20a8b-dd85-4148-b750-107169f7f826",
            city: "1",
            area: "Btm Layout",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "mdipoyzfzsa7n7igskht",
            cuisines: ["North Indian", "Biryani"],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 1.899999976158142,
            slugs: {
                restaurant: "biryani-pot-madiwala-junction-btm",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
            locality: "Maruti Nagar",
            parentId: 21798,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "20% off",
                shortDescriptionList: [
                    {
                        meta: "20% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "20% off up to ₹50 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "20% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "20% off up to ₹50 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.8 kms",
            hasSurge: false,
            sla: {
                restaurantId: "428",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 1.899999976158142,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.8",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "306639",
            name: "The Coorg Food Co.",
            uuid: "318c2c99-1173-42a8-b56c-f655e3cc5ffd",
            city: "1",
            area: "Koramangala",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "ej90ytd5x7ffyl6ii7cn",
            cuisines: ["South Indian"],
            tags: [],
            costForTwo: 75000,
            costForTwoString: "₹750 FOR TWO",
            deliveryTime: 28,
            minDeliveryTime: 28,
            maxDeliveryTime: 28,
            slaString: "28 MINS",
            lastMileTravel: 0.800000011920929,
            slugs: {
                restaurant: "the-coorg-food-co.-koramangala-koramangala",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "No 466, Ground floor shop, 17th G main, 6th block, 80 feet road, opp BMTC Bus Depot, Koramangala, Bangalore",
            locality: "6th Block",
            parentId: 207214,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "Closes soon",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6092919~p=10~eid=00000186-a341-249f-05e6-09c800910a41",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "0.8 kms",
            hasSurge: false,
            sla: {
                restaurantId: "306639",
                deliveryTime: 28,
                minDeliveryTime: 28,
                maxDeliveryTime: 28,
                lastMileTravel: 0.800000011920929,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.3",
            totalRatings: 100,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "63957",
            name: "Madeena Hotel",
            uuid: "da15d34a-cf0f-40a6-8600-096309bb578b",
            city: "1",
            area: "Koramangala",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "yc0asfa2j9elggstyjg4",
            cuisines: ["Biryani", "Mughlai", "Indian", "Beverages"],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            slaString: "29 MINS",
            lastMileTravel: 1.399999976158142,
            slugs: {
                restaurant: "madeena-hotel-koramangala-koramangala",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "# 20/A, 5th Block Kormangala ,Next To Masjid-E-Mamoor Banglore-95",
            locality: "5th Block",
            parentId: 12517,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "63957",
                deliveryTime: 29,
                minDeliveryTime: 29,
                maxDeliveryTime: 29,
                lastMileTravel: 1.399999976158142,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "71298",
            name: "Bengali Fun Foods",
            uuid: "a697d14f-c13a-49cb-8414-d12fa56bcc3b",
            city: "1",
            area: "BTM Layout",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "ub9ng9le0lf7opxxbxey",
            cuisines: ["North Indian"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 27,
            minDeliveryTime: 27,
            maxDeliveryTime: 27,
            slaString: "27 MINS",
            lastMileTravel: 2.700000047683716,
            slugs: {
                restaurant: "bengali-fun-foods-btm-btm",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "No 66 35th main outer ring road BTM 2nd stage beside central silk board Bangalore 5600076",
            locality: "2nd Stage",
            parentId: 2600,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "30% off",
                shortDescriptionList: [
                    {
                        meta: "30% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "30% off up to ₹75 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "30% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "30% off up to ₹75 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6090726~p=13~eid=00000186-a341-249f-05e6-09c900910d3a",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "2.7 kms",
            hasSurge: false,
            sla: {
                restaurantId: "71298",
                deliveryTime: 27,
                minDeliveryTime: 27,
                maxDeliveryTime: 27,
                lastMileTravel: 2.700000047683716,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.3",
            totalRatings: 500,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "59593",
            name: "Al Daaz",
            uuid: "c189b92c-d842-4595-9a1f-ff85bd67bc2a",
            city: "1",
            area: "Hsr Layout",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "rxsvhvcdip9dbfdijzk9",
            cuisines: [
                "American",
                "Arabian",
                "Chinese",
                "Desserts",
                "Mughlai",
                "North Indian",
            ],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 40,
            minDeliveryTime: 40,
            maxDeliveryTime: 40,
            slaString: "40 MINS",
            lastMileTravel: 4.400000095367432,
            slugs: {
                restaurant: "al-daaz-hsr-hsr",
                city: "bangalore",
            },
            cityState: "1",
            address: "#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102",
            locality: "HSR",
            parentId: 21640,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "4.4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "59593",
                deliveryTime: 40,
                minDeliveryTime: 40,
                maxDeliveryTime: 40,
                lastMileTravel: 4.400000095367432,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.3",
            totalRatings: 100,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "5934",
            name: "Burger King",
            uuid: "ac56f2ac-71d3-4978-9513-b3aa68e25463",
            city: "1",
            area: "Koramangala",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "jpohkfkofao0hxez7vdh",
            cuisines: ["Burgers", "American"],
            tags: [],
            costForTwo: 35000,
            costForTwoString: "₹350 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            slaString: "31 MINS",
            lastMileTravel: 1.399999976158142,
            slugs: {
                restaurant: "burger-king-koramangala",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "Unit No. 1, Davar Atrium, Corporation No. 118, Koramangala Industrial Area 7th Block, Bangalore 560095",
            locality: "7th Block",
            parentId: 166,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "Get every item under 129",
                shortDescriptionList: [
                    {
                        meta: "Get every item under 129",
                        discountType: "FinalPrice",
                        operationType: "RESTAURANT",
                    },
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "Get every item under 129",
                        discountType: "FinalPrice",
                        operationType: "RESTAURANT",
                    },
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "",
                        discountType: "FinalPrice",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "Get every item under 129",
                        discountType: "FinalPrice",
                        operationType: "RESTAURANT",
                    },
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "5934",
                deliveryTime: 31,
                minDeliveryTime: 31,
                maxDeliveryTime: 31,
                lastMileTravel: 1.399999976158142,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "365010",
            name: "Hotel Salam",
            uuid: "0a29b957-8817-4d4c-bc32-ca009921472d",
            city: "1",
            area: "Bommanahalli",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "hgdmw8uwgewhiewwovjh",
            cuisines: ["Biryani", "Tandoor", "Arabian", "Indian", "Beverages"],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            slaString: "31 MINS",
            lastMileTravel: 4.699999809265137,
            slugs: {
                restaurant: "hotel-salam-hsr-hsr",
                city: "bangalore",
            },
            cityState: "1",
            address:
                "43/1,OPP.Salarpuria Serenity ,M G Palya Main Road, Bangalore-560068",
            locality: "M G Palya",
            parentId: 101873,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FLAT100 off",
                shortDescriptionList: [
                    {
                        meta: "FLAT100 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FLAT100 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "₹100 OFF",
                shortDescriptionList: [
                    {
                        meta: "Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FLAT100 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "4.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "365010",
                deliveryTime: 31,
                minDeliveryTime: 31,
                maxDeliveryTime: 31,
                lastMileTravel: 4.699999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 500,
            new: false,
        },
        subtype: "basic",
    },
];

const ResCard = (props) => {
    // console.log(props);
    const { resData } = props;

    // optional chaining
    const {
        cloudinaryImageId,
        name,
        cuisines,
        address

    } = resData?.data;



    return (
        <div className="res-card">
            <div className="img-container">
                <img
                    className="res-logo"
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        cloudinaryImageId
                    }
                />
            </div>

            <div className="res-detail-container">
                <div className="name">{name}</div>

                <div className="res-sub-text">
                    <div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            role="img"
                            aria-hidden="true"
                            strokecolor="rgba(2, 6, 12, 0.92)"
                            fillcolor="rgba(2, 6, 12, 0.92)"
                        >
                            <circle
                                cx="10"
                                cy="10"
                                r="9"
                                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                            ></circle>
                            <path
                                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                                fill="white"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="StoreRating20_svg__paint0_linear_32982_71567"
                                    x1="10"
                                    y1="1"
                                    x2="10"
                                    y2="19"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#21973B"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#128540"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        {resData.data.avgRating} &#183;{" "}
                        {resData.data.deliveryTime} mins
                    </div>
                </div>

                <div className="res-description-container">
                    <div className="cuisine">
                        {cuisines.join(", ")}
                    </div>
                    <div className="address">{address}</div>
                </div>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div>
            <div className="search-container">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search"
                />
            </div>

            <div className="restaurant-container">
                {/* use functional programming */}
                {/* when we have to write the javascript inside jsx use curly braces */}

                {resList.map((restaurant) => (
                    <ResCard key={restaurant.data.id} resData={restaurant} /> 
                ))}

                {/* instead of using this we can use the map function in order to make our code reusable */}
                {/* <ResCard resData={resList[0]}/>
                <ResCard resData={resList[1]}/>
                <ResCard resData={resList[2]}/>
                <ResCard resData={resList[3]}/>
                <ResCard resData={resList[4]}/>
                <ResCard resData={resList[5]}/>
                <ResCard resData={resList[6]}/>
                <ResCard resData={resList[7]}/>
                <ResCard resData={resList[8]}/>
                <ResCard resData={resList[9]}/>
                <ResCard resData={resList[10]}/>
                <ResCard resData={resList[11]}/>
                <ResCard resData={resList[12]}/>
                <ResCard resData={resList[13]}/>
                <ResCard resData={resList[14]}/> */}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
