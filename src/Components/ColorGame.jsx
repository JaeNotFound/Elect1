import { Container, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import MyStack from '../Components/Stack';
import MyButton from '../Components/MyButtons';

const colors = [
  'primary.main',
  'secondary.main',
  'error.main',
  'warning.main',
  'info.main',
  'success.main',
  'text.primary',
  'text.secondary',
  'text.disabled'
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const shuffleArray = (array) => {
  let shuffledArray = array.slice(); 
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ColorGame = () => {
    const [sequence, setSequence] = useState(shuffleArray(colors).slice(0, 9)); // Random sequence of 9 colors
    const [revealedColors, setRevealedColors] = useState(Array(9).fill('grey.200')); // Start with all buttons covered
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleClick = (index) => {
      const newRevealedColors = [...revealedColors];
      const correctColor = sequence[currentIndex];
  
      // Reveal the color of the clicked button
      newRevealedColors[index] = colors[index];
  
      if (correctColor === newRevealedColors[index]) {
        // Correct guess, move to the next index
        setCurrentIndex(currentIndex + 1);
  
        // If the sequence is fully guessed, do nothing or handle win condition
        if (currentIndex + 1 === sequence.length) {
          // Game complete logic (if needed)
        }
      } else {
        // Incorrect guess, cover all buttons again
        setCurrentIndex(0);
        setTimeout(() => {
          setRevealedColors(Array(9).fill('grey.200'));
        }, 500); // Delay for covering buttons again to give feedback
      }
  
      setRevealedColors(newRevealedColors);
    };

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ flexWrap: 'wrap', justifyContent: 'center', marginBottom: 2 }}
      >
        {sequence.map((color, index) => (
          <MyStack key={index} bg={color} />
        ))}
      </Stack>
      <Grid container spacing={1}>
        {revealedColors.map((color, index) => (
          <MyButton 
            key={index} 
            handleClick={() => handleClick(index)} 
            bgColor={color || 'grey.200'} // Default to light gray if not revealed
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ColorGame;
