import React, { useEffect, useState } from "react";
import { StatusBar, Platform } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";
import {
    Plus,
    CalendarDays,
    GanttChartSquare,
} from "lucide-react-native";
import MobileBottomTabs from "./MobileBottomTabs";

const bottomTabs = [
    {
        icon: CalendarDays,
        label: "Calender",
    },
    {
        icon: Plus,
        label: "Book Appointment",
    },
    {
        icon: GanttChartSquare,
        label: "Agenda",
        disabled: false,
    },
];
const HomePage = () => {
    useEffect(() => {
        if (Platform.OS === "web") {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100%";
        }
    }, []);

    const [activeTab, setActiveTab] = useState("Calender");
return (
    <Box flex={1}>

        <Box flex={1}>
            {/* setting profile page tab */}
        </Box>

        {/* Mobile tabs */}
        <Box 
            h={72}
            alignItems="center"
            w="100%"
            sx={{
                "@md":{
                    display:"none",
                },
            }}
            borderTopWidth="$1"
            borderColor="$borderLight100">
                <MobileBottomTabs
                    bottomTabs={bottomTabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </Box>
    </Box>
)
}

export default HomePage