import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import Navigate from "./Navigate";
import Auth from "./src/Auth";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Auth" component={Auth}/>
            <Drawer.Screen name=" " component={Navigate}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;