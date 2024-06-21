import { BiSolidTraffic } from 'react-icons/bi/index';
import { FaCity, FaRoad } from 'react-icons/fa/index';
import { PiRoadHorizonFill, PiSirenBold } from 'react-icons/pi/index';
import { BsSoundwave, BsPeopleFill } from 'react-icons/bs/index';
import { RiSparkling2Fill } from 'react-icons/ri/index';

import type { Category } from '../types';

export const urban: Category = {
  icon: <FaCity />,
  id: 'urban',
  sounds: [
    {
      icon: <PiRoadHorizonFill />,
      id: 'highway',
      label: 'Highway',
      src: '/moodist/sounds/urban/highway.mp3',
    },
    {
      icon: <FaRoad />,
      id: 'road',
      label: 'Road',
      src: '/moodist/sounds/urban/road.mp3',
    },
    {
      icon: <PiSirenBold />,
      id: 'ambulance-siren',
      label: 'Ambulance Siren',
      src: '/moodist/sounds/urban/ambulance-siren.mp3',
    },
    {
      icon: <BsSoundwave />,
      id: 'busy-street',
      label: 'Busy Street',
      src: '/moodist/sounds/urban/busy-street.mp3',
    },
    {
      icon: <BsPeopleFill />,
      id: 'crowd',
      label: 'Crowd',
      src: '/moodist/sounds/urban/crowd.mp3',
    },
    {
      icon: <BiSolidTraffic />,
      id: 'traffic',
      label: 'Traffic',
      src: '/moodist/sounds/urban/traffic.mp3',
    },
    {
      icon: <RiSparkling2Fill />,
      id: 'fireworks',
      label: 'Fireworks',
      src: '/moodist/sounds/urban/fireworks.mp3',
    },
  ],
  title: 'Urban',
};
