import React from 'react';
import { IBackDrop } from './IBackDrop';
import { Container } from './style';

const BackDrop: React.FC<IBackDrop.IProps> = ({
  sideDrawerVisibility,
  toggleSideDrawer,
}: IBackDrop.IProps) => {
  return sideDrawerVisibility ? (
    <Container
      onKeyPress={toggleSideDrawer}
      onClick={toggleSideDrawer}
      role="presentation"
    />
  ) : (
    <div />
  );
};

export default BackDrop;
