import {
  GiWindchimes,
  GiFilmProjector,
  GiWashingMachine,
} from 'react-icons/gi/index';
import { BsFillKeyboardFill } from 'react-icons/bs/index';
import { FaKeyboard, FaClock, FaFan } from 'react-icons/fa/index';
import { MdSmartToy, MdWaterDrop, MdRadio } from 'react-icons/md/index';
import { TbBowlFilled } from 'react-icons/tb/index';
import { RiFilePaper2Fill, RiBubbleChartFill } from 'react-icons/ri/index';
import { BiSolidDryer } from 'react-icons/bi/index';
import { IoIosRadio } from 'react-icons/io/index';

import type { Category } from '../types';

export const things: Category = {
  icon: <MdSmartToy />,
  id: 'things',
  sounds: [
    {
      icon: <BsFillKeyboardFill />,
      id: 'keyboard',
      label: 'Keyboard',
      src: '/moodist/sounds/things/keyboard.mp3',
    },
    {
      icon: <FaKeyboard />,
      id: 'typewriter',
      label: 'Typewriter',
      src: '/moodist/sounds/things/typewriter.mp3',
    },
    {
      icon: <RiFilePaper2Fill />,
      id: 'paper',
      label: 'Paper',
      src: '/moodist/sounds/things/paper.mp3',
    },
    {
      icon: <FaClock />,
      id: 'clock',
      label: 'Clock',
      src: '/moodist/sounds/things/clock.mp3',
    },
    {
      icon: <GiWindchimes />,
      id: 'wind-chimes',
      label: 'Wind Chimes',
      src: '/moodist/sounds/things/wind-chimes.mp3',
    },
    {
      icon: <TbBowlFilled />,
      id: 'singing-bowl',
      label: 'Singing Bowl',
      src: '/moodist/sounds/things/singing-bowl.mp3',
    },
    {
      icon: <FaFan />,
      id: 'ceiling-fan',
      label: 'Ceiling Fan',
      src: '/moodist/sounds/things/ceiling-fan.mp3',
    },
    {
      icon: <BiSolidDryer />,
      id: 'dryer',
      label: 'Dryer',
      src: '/moodist/sounds/things/dryer.mp3',
    },
    {
      icon: <GiFilmProjector />,
      id: 'slide-projector',
      label: 'Slide Projector',
      src: '/moodist/sounds/things/slide-projector.mp3',
    },
    {
      icon: <MdWaterDrop />,
      id: 'boiling-water',
      label: 'Boiling Water',
      src: '/moodist/sounds/things/boiling-water.mp3',
    },
    {
      icon: <RiBubbleChartFill />,
      id: 'bubbles',
      label: 'Bubbles',
      src: '/moodist/sounds/things/bubbles.mp3',
    },
    {
      icon: <MdRadio />,
      id: 'tuning-radio',
      label: 'Tuning Radio',
      src: '/moodist/sounds/things/tuning-radio.mp3',
    },
    {
      icon: <IoIosRadio />,
      id: 'morse-code',
      label: 'Morse Code',
      src: '/moodist/sounds/things/morse-code.mp3',
    },
    {
      icon: <GiWashingMachine />,
      id: 'washing-machine',
      label: 'Washing Machine',
      src: '/moodist/sounds/things/washing-machine.mp3',
    },
  ],
  title: 'Things',
};
