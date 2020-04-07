import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { func, string } from 'prop-types';
import { ToggleContainer } from './styles';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <FiSun />
      <FiMoon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
