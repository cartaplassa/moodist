import { BiSolidTrain, BiSolidPlaneAlt } from 'react-icons/bi/index';
import { FaCarSide } from 'react-icons/fa/index';
import { GiSubmarine, GiSailboat } from 'react-icons/gi/index';
import { TbSailboat } from 'react-icons/tb/index';

import type { Category } from '../types';

export const transport: Category = {
  icon: <FaCarSide />,
  id: 'transport',
  sounds: [
    {
      icon: <BiSolidTrain />,
      id: 'train',
      label: 'Train',
      src: '/moodist/sounds/transport/train.mp3',
    },
    {
      icon: <BiSolidTrain />,
      id: 'inside-a-train',
      label: 'Inside a Train',
      src: '/moodist/sounds/transport/inside-a-train.mp3',
    },
    {
      icon: <BiSolidPlaneAlt />,
      id: 'airplane',
      label: 'Airplane',
      src: '/moodist/sounds/transport/airplane.mp3',
    },
    {
      icon: <GiSubmarine />,
      id: 'submarine',
      label: 'Submarine',
      src: '/moodist/sounds/transport/submarine.mp3',
    },
    {
      icon: <GiSailboat />,
      id: 'sailboat',
      label: 'Sailboat',
      src: '/moodist/sounds/transport/sailboat.mp3',
    },
    {
      icon: <TbSailboat />,
      id: 'rowing-boat',
      label: 'Rowing Boat',
      src: '/moodist/sounds/transport/rowing-boat.mp3',
    },
  ],
  title: 'Transport',
};
