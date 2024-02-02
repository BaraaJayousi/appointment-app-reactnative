import React, {useState} from "react";
import { HStack, Icon, Pressable, Text, VStack } from "@gluestack-ui/themed";

const MobileBottomTabs = ({ bottomTabs , activeTab, setActiveTab }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [actionsheetVisible, setActionsheetVisible] = useState(false);
return (
    <>
        <HStack
            alignContent="center"
            position="absolute"
            bottom={0}
            justifyContent="space-between"
            w="100%"
            py="$6"
            px="$6"
            sx={{
                "@md": { display: "none" },
                }}
        >
            {bottomTabs.map((tab)=>{
                return(
                    <Pressable
                        key={tab.label}
                        disabled = {tab.disabled}
                        opacity={tab.disabled? 0.5: 1}
                        onPress={()=>{
                            if(tab.label !=="Book Appointment"){
                                setActiveTab(tab.label)
                            }

                            // if(tab.label === "Listing"){
                            //     setModalVisible(true)
                            // }

                            // if(tab.label === "Filter"){
                            //     setActionSheetVisible(true)
                            // }
                        }}>
                        <VStack alignItems="center">
                            <Icon
                                as={tab.icon}
                                color={activeTab === tab.label? "$primary500": "$textLight500"}
                                />
                            <Text
                                size="xs"
                                color={
                                    activeTab === tab.label ? "$textLight900" : "$textLight400"
                                }
                            >
                                {tab.label}
                            </Text>
                        </VStack>
                    </Pressable>
                )
            })}
        </HStack>
    </>
)
}

export default MobileBottomTabs
