import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function MyButton({handleClick, bgColor}) {
  return (
      <Grid item xs={12} sm={4}>
        <Box 
          sx={{ bgcolor: bgColor, color: 'primary.contrastText', p: 5, m: 1, height:'50px', borderRadius: '8px'}}
          onClick={handleClick}
        >  
        </Box>
      </Grid>
  );
}
