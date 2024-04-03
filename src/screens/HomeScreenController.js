import React from "react";
import { useAuth } from "../utils/auth";
import HomeScreen from "../screens/HomeScreen";
import HomeScreen2 from "../screens/HomeScreen2";

export const HomescreenControl = (props) => {
    const data = props.route.params.data.route.params;
    const { getUser } = useAuth();
    console.log("Homescreen controller: ", getUser())
    data.category = getUser().category;
    return (
        <>
            {getUser().type === "new" ? <HomeScreen2 props={data} /> : <HomeScreen props={data} />}
        </>
    )
}