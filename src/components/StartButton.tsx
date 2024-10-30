import { Button } from './Button.tsx';
import { useState } from 'react';
import { getUserList } from '../services/users.ts';

export const StartButton = () => {
  const [disabled, setDisabled] = useState(false);

  const handleStartClick = async () => {
    console.log('start clicked');
    setDisabled(true);

    try {
      const userList = await getUserList();
      console.log('userList', userList);
      setDisabled(false);
    } catch (e) {
      console.log('error', e);
      setDisabled(false);
    }
  };

  return (
    <Button onClick={handleStartClick} disabled={disabled}>
      Kezdhetjük
    </Button>
  );
};
