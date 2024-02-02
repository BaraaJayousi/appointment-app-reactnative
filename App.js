import { GluestackUIProvider, Text, Box, Button, ButtonText, Center, Divider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

export default function App() {
return (
    <GluestackUIProvider config={config}>
        <Box bg="$rose100" w="100%" h="100%" justifyContent="center" alignItems="center">
            <Text>Open up App.js to start working on your app!</Text>
            <Divider w={"$1/3"} my="$1.5" bg="$red500" />
            <Text>testing everythign is going good with dev</Text>
            <Button size="md" variant="solid" >
                <ButtonText>Click me</ButtonText>
            </Button>
        </Box>
    </GluestackUIProvider>
);
}