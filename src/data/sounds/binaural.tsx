import { TbWaveSine } from 'react-icons/tb/index';
import { BsSoundwave } from 'react-icons/bs/index';

import type { Category } from '../types';

export const binaural: Category = {
  icon: <TbWaveSine />,
  id: 'binaural',
  sounds: [
    {
      icon: <BsSoundwave />,
      id: 'binaural-delta',
      label: 'Delta',
      src: '/moodist/sounds/binaural/binaural-delta.wav',
    },
    {
      icon: <BsSoundwave />,
      id: 'binaural-theta',
      label: 'Theta',
      src: '/moodist/sounds/binaural/binaural-theta.wav',
    },
    {
      icon: <BsSoundwave />,
      id: 'binaural-alpha',
      label: 'Alpha',
      src: '/moodist/sounds/binaural/binaural-alpha.wav',
    },
    {
      icon: <BsSoundwave />,
      id: 'binaural-beta',
      label: 'Beta',
      src: '/moodist/sounds/binaural/binaural-beta.wav',
    },
    {
      icon: <BsSoundwave />,
      id: 'binaural-gamma',
      label: 'Gamma',
      src: '/moodist/sounds/binaural/binaural-gamma.wav',
    },
  ],
  title: 'Binaural Beats',
};
