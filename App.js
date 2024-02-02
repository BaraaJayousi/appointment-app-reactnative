import { GluestackUIProvider, Text, Box, Button, ButtonText, Center, Divider } from '@gluestack-ui/themed';
import { config } from "./gluestack.config";
import HomePage from './components/HomePage';

export default function App() {
return (
    <GluestackUIProvider config={config}>        
        <HomePage/>
    </GluestackUIProvider>
);
}