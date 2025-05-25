import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@ghased-portal/ui-kit';
import { decrement, increment } from '../redux-features/slice';
import { RootState } from '@ghased-portal/redux-store';

function App() {
  // const value = useSelector((state: RootState) => state.home.value);
  // const dispatch = useDispatch();

  return (
    <h1>salam</h1>
    // <Box gap={'2rem'} alignItems='center'>
    //   <Button type='primary' onClick={() => dispatch(increment())}>
    //     Increment
    //   </Button>
    //   {value}
    //   <Button type='primary' onClick={() => dispatch(decrement())}>
    //     Decrement
    //   </Button>
    // </Box>
  );
}

export default App;
