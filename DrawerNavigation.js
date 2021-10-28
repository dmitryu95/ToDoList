import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import Navigate from "./Navigate";
import Auth from "./src/Auth";
import Notes from "./src/Notes";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Auth" component={Auth} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;