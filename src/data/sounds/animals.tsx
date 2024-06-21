import {
  GiCricket,
  GiSeagull,
  GiWolfHead,
  GiOwl,
  GiWhaleTail,
} from 'react-icons/gi/index';
import {
  FaDog,
  FaFrog,
  FaHorseHead,
  FaCat,
  FaCrow,
} from 'react-icons/fa/index';
import { PiBirdFill, PiDogBold } from 'react-icons/pi/index';

import type { Category } from '../types';

export const animals: Category = {
  icon: <FaDog />,
  id: 'animals',
  sounds: [
    {
      icon: <PiBirdFill />,
      id: 'birds',
      label: 'Birds',
      src: '/moodist/sounds/animals/birds.mp3',
    },
    {
      icon: <GiSeagull />,
      id: 'seagulls',
      label: 'Seagulls',
      src: '/moodist/sounds/animals/seagulls.mp3',
    },
    {
      icon: <GiCricket />,
      id: 'crickets',
      label: 'Crickets',
      src: '/moodist/sounds/animals/crickets.mp3',
    },
    {
      icon: <GiWolfHead />,
      id: 'wolf',
      label: 'Wolf',
      src: '/moodist/sounds/animals/wolf.mp3',
    },
    {
      icon: <GiOwl />,
      id: 'owl',
      label: 'Owl',
      src: '/moodist/sounds/animals/owl.mp3',
    },
    {
      icon: <FaFrog />,
      id: 'frog',
      label: 'Frog',
      src: '/moodist/sounds/animals/frog.mp3',
    },
    {
      icon: <PiDogBold />,
      id: 'dog-barking',
      label: 'Dog Barking',
      src: '/moodist/sounds/animals/dog-barking.mp3',
    },
    {
      icon: <FaHorseHead />,
      id: 'horse-galopp',
      label: 'Horse Galopp',
      src: '/moodist/sounds/animals/horse-galopp.mp3',
    },
    {
      icon: <FaCat />,
      id: 'cat-purring',
      label: 'Cat Purring',
      src: '/moodist/sounds/animals/cat-purring.mp3',
    },
    {
      icon: <FaCrow />,
      id: 'crows',
      label: 'Crows',
      src: '/moodist/sounds/animals/crows.mp3',
    },
    {
      icon: <GiWhaleTail />,
      id: 'whale',
      label: 'Whale',
      src: '/moodist/sounds/animals/whale.mp3',
    },
  ],
  title: 'Animals',
};
