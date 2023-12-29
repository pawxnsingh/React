import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        getMenu();
    }, []);

    const getMenu = async () => {
        const response = await fetch(MENU_URL + resId);
        const json = await response.json();
        setResInfo(json.data);
    };
};
export default useRestaurantMenu;
