import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import CardSlider from './component/slider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ChakraProvider>
      {/* <MyCard> </MyCard>
      <App /> */}
      <CardSlider> </CardSlider>
    </ChakraProvider>
  </React.StrictMode>
);


