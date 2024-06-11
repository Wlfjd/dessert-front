'use client';

import BellOff from '@public/assets/icons/bell/bell-off.svg';

interface Props {
  shape: 'off' | 'on';
}

const BellIcons = ({ shape }: Props) => {
  switch (shape) {
    case 'off':
      return <BellOff />;
    case 'on':
      return <BellOff />;

    default:
      return <BellOff />;
  }
};

export default BellIcons;
