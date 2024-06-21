import {
  BiSolidCoffeeAlt,
  BiSolidPlaneAlt,
  BiSolidDryer,
} from 'react-icons/bi/index';
import { FaChurch, FaSubway, FaShoppingBasket } from 'react-icons/fa/index';
import { TbScubaMask, TbBeerFilled } from 'react-icons/tb/index';
import { GiVillage, GiCarousel } from 'react-icons/gi/index';
import {
  MdTempleBuddhist,
  MdConstruction,
  MdLocationPin,
} from 'react-icons/md/index';
import { HiOfficeBuilding } from 'react-icons/hi/index';
import { AiFillExperiment } from 'react-icons/ai/index';

import type { Category } from '../types';

export const places: Category = {
  icon: <MdLocationPin />,
  id: 'places',
  sounds: [
    {
      icon: <BiSolidCoffeeAlt />,
      id: 'cafe',
      label: 'Cafe',
      src: '/moodist/sounds/places/cafe.mp3',
    },
    {
      icon: <BiSolidPlaneAlt />,
      id: 'airport',
      label: 'Airport',
      src: '/moodist/sounds/places/airport.mp3',
    },
    {
      icon: <FaChurch />,
      id: 'church',
      label: 'Church',
      src: '/moodist/sounds/places/church.mp3',
    },
    {
      icon: <MdTempleBuddhist />,
      id: 'temple',
      label: 'Temple',
      src: '/moodist/sounds/places/temple.mp3',
    },
    {
      icon: <MdConstruction />,
      id: 'construction-site',
      label: 'Construction Site',
      src: '/moodist/sounds/places/construction-site.mp3',
    },
    {
      icon: <TbScubaMask />,
      id: 'underwater',
      label: 'Underwater',
      src: '/moodist/sounds/places/underwater.mp3',
    },
    {
      icon: <TbBeerFilled />,
      id: 'crowded-bar',
      label: 'Crowded Bar',
      src: '/moodist/sounds/places/crowded-bar.mp3',
    },
    {
      icon: <GiVillage />,
      id: 'night-village',
      label: 'Night Village',
      src: '/moodist/sounds/places/night-village.mp3',
    },
    {
      icon: <FaSubway />,
      id: 'subway-station',
      label: 'Subway Station',
      src: '/moodist/sounds/places/subway-station.mp3',
    },
    {
      icon: <HiOfficeBuilding />,
      id: 'office',
      label: 'Office',
      src: '/moodist/sounds/places/office.mp3',
    },
    {
      icon: <FaShoppingBasket />,
      id: 'supermarket',
      label: 'Supermarket',
      src: '/moodist/sounds/places/supermarket.mp3',
    },
    {
      icon: <GiCarousel />,
      id: 'carousel',
      label: 'Carousel',
      src: '/moodist/sounds/places/carousel.mp3',
    },
    {
      icon: <AiFillExperiment />,
      id: 'laboratory',
      label: 'Laboratory',
      src: '/moodist/sounds/places/laboratory.mp3',
    },
    {
      icon: <BiSolidDryer />,
      id: 'laundry-room',
      label: 'Laundry Room',
      src: '/moodist/sounds/places/laundry-room.mp3',
    },
  ],
  title: 'Places',
};
