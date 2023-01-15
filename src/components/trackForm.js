import React from 'react';
import { Text, Input, Button } from '@rneui/themed';
import Spacer from './Spacer';

const trackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder='Enter track title' />
      </Spacer>
      <Spacer>
        <Button title='Start Recording' />
      </Spacer>
    </>
  );
};

export default trackForm;
