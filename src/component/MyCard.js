import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Box,
  HStack,
  Icon,
  Tooltip,
  SimpleGrid,
  ButtonGroup,
  Circle,
} from '@chakra-ui/react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

function MyCard() {
  const [selectedType, setSelectedType] = useState('All');
  const [ratings, setRatings] = useState({});
  const [selectedColors, setSelectedColors] = useState({});

  const cardData = [
    {
      id: 1,
      title: 'Plane T-Shirt',
      text: 'Men T-Shirt',
      imgSrc: {
        default: 'https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg',
        colors: {
          red: 'https://example.com/red-tshirt.jpg',
          blue: 'https://example.com/blue-tshirt.jpg',
          green: 'https://example.com/green-tshirt.jpg',
        },
      },
      price: '₹750',
      type: 'Plane',
      availableColors: ['red', 'blue', 'green'],
    },
    {
      id: 2,
      title: 'Printed T-Shirt',
      text: '',
      imgSrc: {
        default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
        colors: {
          red: 'https://example.com/red-printed.jpg',
          blue: 'https://example.com/blue-printed.jpg',
          black: 'https://example.com/black-printed.jpg',
        },
      },
      price: '₹750',
      type: 'Printed',
      availableColors: ['red', 'blue', 'black'],
    },
    {
        id: 3,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
      {
        id: 4,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
      {
        id: 5,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
      {
        id: 6,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
      {
        id: 7,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
      {
        id: 8,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
      {
        id: 9,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
      {
        id: 10,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
      {
        id: 2,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
      {
        id: 2,
        title: 'Printed T-Shirt',
        text: '',
        imgSrc: {
          default: 'https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg',
          colors: {
            red: 'https://example.com/red-printed.jpg',
            blue: 'https://example.com/blue-printed.jpg',
            black: 'https://example.com/black-printed.jpg',
          },
        },
        price: '₹750',
        type: 'Printed',
        availableColors: ['red', 'blue', 'black'],
      },
    
    // Add more card objects here...
  ];

  const types = ['All', 'Plane', 'Printed'];

  const filteredData = selectedType === 'All' ? cardData : cardData.filter((card) => card.type === selectedType);

  const handleStarClick = (cardId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [cardId]: rating,
    }));
  };

  const calculateRatingPercentage = (rating) => {
    return ((rating / 5) * 100).toFixed(2);
  };

  const renderRatingTooltip = (cardId) => {
    const rating = ratings[cardId] || 0;
    const percentage = calculateRatingPercentage(rating);
    return `Rating: ${percentage}%`;
  };

  const handleColorChange = (cardId, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [cardId]: color,
    }));
  };

  return (
    <Box className='side flex' >
      <Box mb='4'>
        <ButtonGroup variant='elevated' spacing='2'>
          {types.map((type) => (
            <Button
              key={type}
              onClick={() => setSelectedType(type)}
              colorScheme={selectedType === type ? 'blue' : 'gray'}
            >
              {type}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
        {filteredData.map((card) => {
          const selectedColor = selectedColors[card.id] || 'default';
          const imageUrl = card.imgSrc.colors?.[selectedColor] || card.imgSrc.default;

          return (
            <Card
              className='card-item'
              maxW='md'
              key={card.id}
              p={4}
              _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
              transition='transform 0.3s ease-in-out'
            >
              <CardBody>
                <Image src={imageUrl} alt={card.title} borderRadius='md' boxSize='200px' />
                <Stack mt='4' spacing='3'>
                  <Heading size='md'>{card.title}</Heading>
                  <Text fontSize='md'>{card.text}</Text>
                  <Text color='blue.600' fontSize='xl'>
                    {card.price}
                  </Text>

                  <HStack spacing={2}>
                    {card.availableColors.map((color) => (
                      <Tooltip label={color} key={color}>
                        <Circle
                          size='30px'
                          bg={color}
                          border={selectedColors[card.id] === color ? '2px solid blue' : 'none'}
                          cursor='pointer'
                          onClick={() => handleColorChange(card.id, color)}
                        />
                      </Tooltip>
                    ))}
                  </HStack>

                  <Tooltip label={renderRatingTooltip(card.id)} hasArrow placement='top' bg='yellow.400' color='black'>
                    <HStack spacing='2'>
                      {Array(5)
                        .fill('')
                        .map((_, i) => (
                          <Icon
                            as={FaStar}
                            key={i}
                            cursor='pointer'
                            boxSize='5'
                            color={i < (ratings[card.id] || 0) ? 'yellow.400' : 'gray.300'}
                            onClick={() => handleStarClick(card.id, i + 1)}
                          />
                        ))}
                    </HStack>
                  </Tooltip>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button colorScheme='teal' variant='solid' leftIcon={<FaShoppingCart />} width='full' size='md'>
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default MyCard;
