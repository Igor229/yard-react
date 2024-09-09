import React, { useState } from 'react'
import './BuildingStatus.scss'
import WestStatusSlider from './WestStatusSlider'
import BeskidStatusSlider from './BeskidStatusSlider'
import ComfortStatusSlider from './ComfortStatusSlider'
import FsLightbox from 'fslightbox-react'
import { motion } from 'framer-motion'

// import images
// Queue 9
import que9Img1 from '../assets/images/build-status/west-status/queue9/que9-1.webp'
import que9Img2 from '../assets/images/build-status/west-status/queue9/que9-2.webp'
import que9Img3 from '../assets/images/build-status/west-status/queue9/que9-3.webp'
import que9Img4 from '../assets/images/build-status/west-status/queue9/que9-4.webp'
import que9Img5 from '../assets/images/build-status/west-status/queue9/que9-5.webp'
import que9Img6 from '../assets/images/build-status/west-status/queue9/que9-6.webp'
import que9Img7 from '../assets/images/build-status/west-status/queue9/que9-7.webp'
import que9Img8 from '../assets/images/build-status/west-status/queue9/que9-8.webp'
import que9Img9 from '../assets/images/build-status/west-status/queue9/que9-9.webp'
import que9Img10 from '../assets/images/build-status/west-status/queue9/que9-10.webp'
import que9Img11 from '../assets/images/build-status/west-status/queue9/que9-11.webp'
import que9Img12 from '../assets/images/build-status/west-status/queue9/que9-12.webp'
import que9Img13 from '../assets/images/build-status/west-status/queue9/que9-13.webp'
import west7 from '../assets/images/build-status/west-status/queue9/west7.webp'
import west8 from '../assets/images/build-status/west-status/queue9/west8.webp'
import west9 from '../assets/images/build-status/west-status/queue9/west9.webp'
import west12 from '../assets/images/build-status/west-status/queue9/west12.webp'
import west13 from '../assets/images/build-status/west-status/queue9/west13.webp'
import que9Nov1 from '../assets/images/build-status/west-status/queue9/november1.webp'
import que9Nov2 from '../assets/images/build-status/west-status/queue9/november2.webp'
import que9Nov3 from '../assets/images/build-status/west-status/queue9/november3.webp'
import que9Feb1 from '../assets/images/build-status/west-status/queue9/february1.webp'
import que9Feb2 from '../assets/images/build-status/west-status/queue9/february2.webp'
import que9March1 from '../assets/images/build-status/west-status/queue9/march1.webp'
import que9March2 from '../assets/images/build-status/west-status/queue9/march2.webp'
import que9March3 from '../assets/images/build-status/west-status/queue9/march3.webp'
import que9March4 from '../assets/images/build-status/west-status/queue9/march4.webp'
import que9March5 from '../assets/images/build-status/west-status/queue9/march5.webp'
import que9April1 from '../assets/images/build-status/west-status/queue9/april1.webp'
import que9April2 from '../assets/images/build-status/west-status/queue9/april2.webp'
import que9April3 from '../assets/images/build-status/west-status/queue9/april3.webp'
import que9April4 from '../assets/images/build-status/west-status/queue9/april4.webp'
import que9April5 from '../assets/images/build-status/west-status/queue9/april5.webp'
import que9April6 from '../assets/images/build-status/west-status/queue9/april6.webp'
import que9April7 from '../assets/images/build-status/west-status/queue9/april7.webp'
import que9May1 from '../assets/images/build-status/west-status/queue9/may1.webp'
import que9May2 from '../assets/images/build-status/west-status/queue9/may2.webp'
import que9May3 from '../assets/images/build-status/west-status/queue9/may3.webp'
import que9May4 from '../assets/images/build-status/west-status/queue9/may4.webp'
import que9May5 from '../assets/images/build-status/west-status/queue9/may5.webp'
import que9June1 from '../assets/images/build-status/west-status/queue9/jun1.webp'
import que9June2 from '../assets/images/build-status/west-status/queue9/jun2.webp'
import que9June3 from '../assets/images/build-status/west-status/queue9/jun3.webp'
import que9July1 from '../assets/images/build-status/west-status/queue9/jul1.webp'
import que9July2 from '../assets/images/build-status/west-status/queue9/jul2.webp'
import que9July3 from '../assets/images/build-status/west-status/queue9/jul3.webp'
import que9July4 from '../assets/images/build-status/west-status/queue9/jul4.webp'
import que9July5 from '../assets/images/build-status/west-status/queue9/jul5.webp'

// Queue 10
import que10Img1 from '../assets/images/build-status/west-status/queue10/que10-1.webp'
import que10Img2 from '../assets/images/build-status/west-status/queue10/que10-2.webp'
import que10Img3 from '../assets/images/build-status/west-status/queue10/que10-3.webp'
import que10Nov1 from '../assets/images/build-status/west-status/queue10/november1.webp'
import que10Nov2 from '../assets/images/build-status/west-status/queue10/november2.webp'
import que10Nov3 from '../assets/images/build-status/west-status/queue10/november3.webp'
import que10Nov4 from '../assets/images/build-status/west-status/queue10/november4.webp'
import que10Feb1 from '../assets/images/build-status/west-status/queue10/february1.webp'
import que10Feb2 from '../assets/images/build-status/west-status/queue10/february2.webp'
import que10March1 from '../assets/images/build-status/west-status/queue10/march1.webp'
import que10March2 from '../assets/images/build-status/west-status/queue10/march2.webp'
import que10March3 from '../assets/images/build-status/west-status/queue10/march3.webp'
import que10March4 from '../assets/images/build-status/west-status/queue10/march4.webp'
import que10April1 from '../assets/images/build-status/west-status/queue10/april1.webp'
import que10April2 from '../assets/images/build-status/west-status/queue10/april2.webp'
import que10April3 from '../assets/images/build-status/west-status/queue10/april3.webp'
import que10April4 from '../assets/images/build-status/west-status/queue10/april4.webp'
import que10April5 from '../assets/images/build-status/west-status/queue10/april5.webp'
import que10May1 from '../assets/images/build-status/west-status/queue10/may1.webp'
import que10May2 from '../assets/images/build-status/west-status/queue10/may2.webp'
import que10May3 from '../assets/images/build-status/west-status/queue10/may3.webp'
import que10May4 from '../assets/images/build-status/west-status/queue10/may4.webp'
import que10May5 from '../assets/images/build-status/west-status/queue10/may5.webp'
import que10June1 from '../assets/images/build-status/west-status/queue10/jun1.webp'
import que10June2 from '../assets/images/build-status/west-status/queue10/jun2.webp'
import que10June3 from '../assets/images/build-status/west-status/queue10/jun3.webp'
import que10June4 from '../assets/images/build-status/west-status/queue10/jun4.webp'
import que10July1 from '../assets/images/build-status/west-status/queue10/jul1.webp'
import que10July2 from '../assets/images/build-status/west-status/queue10/jul2.webp'
import que10July3 from '../assets/images/build-status/west-status/queue10/jul3.webp'
import que10July4 from '../assets/images/build-status/west-status/queue10/jul4.webp'

// queue11
import que11April1 from '../assets/images/build-status/west-status/queue11/april1.webp'
import que11April2 from '../assets/images/build-status/west-status/queue11/april2.webp'
import que11May1 from '../assets/images/build-status/west-status/queue11/may1.webp'
import que11May2 from '../assets/images/build-status/west-status/queue11/may2.webp'
import que11May3 from '../assets/images/build-status/west-status/queue11/may3.webp'
import que11May4 from '../assets/images/build-status/west-status/queue11/may4.webp'
import que11June1 from '../assets/images/build-status/west-status/queue11/jun1.webp'
import que11June2 from '../assets/images/build-status/west-status/queue11/jun2.webp'
import que11June3 from '../assets/images/build-status/west-status/queue11/jun3.webp'
import que11July1 from '../assets/images/build-status/west-status/queue11/jul1.webp'
import que11July2 from '../assets/images/build-status/west-status/queue11/jul2.webp'
import que11July3 from '../assets/images/build-status/west-status/queue11/jul3.webp'
import que11July4 from '../assets/images/build-status/west-status/queue11/jul4.webp'
import que11July5 from '../assets/images/build-status/west-status/queue11/jul5.webp'
import que11July6 from '../assets/images/build-status/west-status/queue11/jul6.webp'
import que11July7 from '../assets/images/build-status/west-status/queue11/jul7.webp'
import que11July8 from '../assets/images/build-status/west-status/queue11/jul8.webp'
import que11July9 from '../assets/images/build-status/west-status/queue11/jul9.webp'

// Beskid
import beskid1 from '../assets/images/build-status/beskid-status/status-beskid1.webp'
import beskid2 from '../assets/images/build-status/beskid-status/status-beskid2.webp'
import beskid3 from '../assets/images/build-status/beskid-status/status-beskid3.webp'
import beskid4 from '../assets/images/build-status/beskid-status/status-beskid4.webp'
import beskidNovember1 from '../assets/images/build-status/beskid-status/beskid-november1-min.webp'
import beskidNovember2 from '../assets/images/build-status/beskid-status/beskid-november2-min.webp'
import beskidNovember3 from '../assets/images/build-status/beskid-status/beskid-november3-min.webp'
import beskidNovember4 from '../assets/images/build-status/beskid-status/beskid-november4-min.webp'
import beskidNovember5 from '../assets/images/build-status/beskid-status/beskid-november5-min.webp'
import beskidNovember6 from '../assets/images/build-status/beskid-status/beskid-november6-min.webp'
import beskidApril1 from '../assets/images/build-status/beskid-status/beskid-april1.webp'
import beskidApril2 from '../assets/images/build-status/beskid-status/beskid-april2.webp'
import beskidApril3 from '../assets/images/build-status/beskid-status/beskid-april3.webp'
import beskidApril4 from '../assets/images/build-status/beskid-status/beskid-april4.webp'
import beskidApril5 from '../assets/images/build-status/beskid-status/beskid-april5.webp'
import beskidApril6 from '../assets/images/build-status/beskid-status/beskid-april6.webp'
import beskidApril7 from '../assets/images/build-status/beskid-status/beskid-april7.webp'
import beskidApril8 from '../assets/images/build-status/beskid-status/beskid-april8.webp'
import beskidApril9 from '../assets/images/build-status/beskid-status/beskid-april9.webp'
import beskidMay1 from '../assets/images/build-status/beskid-status/may1.webp'
import beskidMay2 from '../assets/images/build-status/beskid-status/may2.webp'
import beskidMay3 from '../assets/images/build-status/beskid-status/may3.webp'
import beskidMay4 from '../assets/images/build-status/beskid-status/may4.webp'
import beskidMay5 from '../assets/images/build-status/beskid-status/may5.webp'
import beskidMay6 from '../assets/images/build-status/beskid-status/may6.webp'
import beskidMay7 from '../assets/images/build-status/beskid-status/may7.webp'
import beskidSeptember1 from '../assets/images/build-status/beskid-status/september1.webp'
import beskidSeptember2 from '../assets/images/build-status/beskid-status/september2.webp'
import beskidSeptember3 from '../assets/images/build-status/beskid-status/september3.webp'
import beskidSeptember4 from '../assets/images/build-status/beskid-status/september4.webp'
import beskidSeptember5 from '../assets/images/build-status/beskid-status/september5.webp'

import comfortMay1 from '../assets/images/build-status/comfort-status/may1.webp'
import comfortMay2 from '../assets/images/build-status/comfort-status/may2.webp'
import comfortMay3 from '../assets/images/build-status/comfort-status/may3.webp'
import comfortMay4 from '../assets/images/build-status/comfort-status/may4.webp'
import comfortJune1 from '../assets/images/build-status/comfort-status/jun1.webp'
import comfortJune2 from '../assets/images/build-status/comfort-status/jun2.webp'
import comfortJune3 from '../assets/images/build-status/comfort-status/jun3.webp'
import comfortJuly1 from '../assets/images/build-status/comfort-status/jul1.webp'
import comfortJuly2 from '../assets/images/build-status/comfort-status/jul2.webp'
import comfortJuly3 from '../assets/images/build-status/comfort-status/jul3.webp'
import comfortJuly4 from '../assets/images/build-status/comfort-status/jul4.webp'


  // cards data
const album9 = [
  {
    img: que9July1,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que9July2,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que9July3,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que9July4,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que9July5,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que9June1,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que9June2,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que9June3,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que9May1,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que9May2,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que9May3,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que9May4,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que9May5,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que9April1,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que9April2,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que9April3,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que9April4,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que9April5,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que9April6,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que9April7,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que9March1,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9March2,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9March3,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9March4,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9March5,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Feb1,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que9Feb2,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que9Nov1,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Nov2,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Nov3,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img11,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img12,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img13,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img4,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img5,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img6,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img7,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img8,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img9,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img10,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: west13,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west12,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west9,
    month: 'Жовтень',
    title: 'west town',
    info: '- черга 9 (здача 2 квартал 2024 року).'
  },
  {
    img: west8,
    month: 'Жовтень',
    title: 'west town',
    info: '- черга 9 (здача 2 квартал 2024 року).'
  },
  {
    img: west7,
    month: 'Жовтень',
    title: 'west town',
    info: '- черга 9 (здача 2 квартал 2024 року).'
  },
]

const album10 = [
  {
    img: que10July1,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que10July2,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que10July3,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que10July4,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que10June1,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que10June2,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que10June3,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que10June4,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May1,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May2,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May3,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May4,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10May5,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April1,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April2,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April3,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April4,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10April5,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March1,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March2,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March3,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March4,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Feb1,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que10Feb2,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov1,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov2,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov3,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov4,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
]

const album11 = [
  {
    img: que11July1,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July2,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July3,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July4,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July5,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July6,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July7,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July8,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11July9,
    month: 'Липень',
    title: 'west town',
    info: ''
  },
  {
    img: que11June1,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que11June2,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que11June3,
    month: 'Червень',
    title: 'west town',
    info: ''
  },
  {
    img: que11May1,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que11May2,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que11May3,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que11May4,
    month: 'Травень',
    title: 'west town',
    info: ''
  },
  {
    img: que11April1,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
  {
    img: que11April2,
    month: 'Квітень',
    title: 'west town',
    info: ''
  },
]


function BuildingStatus() {
    const [toggler, setToggler] = useState(false)
    const [togglerTwo, setTogglerTwo] = useState(false)
    const [togglerThree, setTogglerThree] = useState(false)
    const [togglerFour, setTogglerFour] = useState(false)
    const [togglerBeskid, setTogglerBeskid] = useState(false)
//====================================
    const [isActive, setIsActive] = useState(true)
    const handleClick = () => {
        setIsActive(!isActive)
    }
//====================================
    const [activeSlider, setActiveSlider] = useState(1)
    const showSlider = (sliderNumber) => {
        setActiveSlider(sliderNumber)
    }
//====================================
    const [activeButton, setActiveButton] = useState(1);
    const handleButtonClick = (buttonNumber) => {
      setActiveButton(buttonNumber)
    }
    return (
      <>
      <section className="build-status box" id='build-status'>
            <div className="wrapper">
                <div className="build-status__items">
                    <div className="build-status__item">
                        <h2 className="build-status__title main-title">Стани будівництва</h2>
                        <div className="build-status__actions">
                            <motion.button whileHover={{scale: 1.05}} transition={{duration: 0.1}} type="button" className={activeButton === 1 ? "build-status__actions-button button-active" : "build-status__actions-button"} onClick={() => handleButtonClick(1)} id='comf-town__button'>COMFORT TOWN</motion.button>
                            <motion.button whileHover={{scale: 1.05}} transition={{duration: 0.1}} type="button" className={activeButton === 2 ? "build-status__actions-button button-active" : "build-status__actions-button"} onClick={() => handleButtonClick(2)} id='wes-town__button'>WEST TOWN</motion.button>
                            <motion.button whileHover={{scale: 1.05}} transition={{duration: 0.1}} type="button" className={activeButton === 3 ? "build-status__actions-button button-active" : "build-status__actions-button"} onClick={() => handleButtonClick(3)}>BESKID HOME RESORT</motion.button>
                        </div>
                    </div>
                </div>

                <div className={activeButton === 1 ? 'build-status__slider' : 'slider-hidden'} onClick={() => {setToggler(!toggler)}}>
                    <ComfortStatusSlider/>
                </div>

                <div className={activeButton === 2 ? 'build-status__slider' : 'slider-hidden'}>
                    <div className='queue'>
                      <p className='queue-title'>Черга:</p>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 1 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(1)}>9</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 2 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(2)}>10</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 3 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(3)}>11</motion.button>
                    </div>
                    <div className={activeSlider === 1 ? '' : 'slider-hidden'} onClick={() => {setTogglerTwo(!togglerTwo)}}>
                        <WestStatusSlider photos={album9}/>
                    </div>
                    <div className={activeSlider === 2 ? '' : 'slider-hidden'} onClick={() => {setTogglerThree(!togglerThree)}}>
                        <WestStatusSlider photos={album10}/>
                    </div>
                    <div className={activeSlider === 3 ? '' : 'slider-hidden'} onClick={() => {setTogglerFour(!togglerFour)}}>
                        <WestStatusSlider photos={album11}/>
                    </div>
                </div>

                <div className={activeButton === 3 ? 'build-status__slider' : 'slider-hidden'} onClick={() => {setTogglerBeskid(!togglerBeskid)}}>
                    <BeskidStatusSlider/>
                </div>
            </div>
        </section>

        <FsLightbox 
          toggler={togglerTwo}
          sources={[
            que9July1,que9July2,que9July3,que9July4,que9July5,que9June1,que9June2,que9June3,que9May1,que9May2,que9May3,que9May4,que9May5,que9April1,que9April2,que9April3,que9April4,que9April5,que9April6,que9April7,que9March1,que9March2,que9March3,que9March4,que9March5,que9Feb1,que9Feb2,que9Nov1,que9Nov2,que9Nov3,que9Img11,que9Img12,que9Img13,que9Img1,que9Img2,que9Img3,que9Img4,que9Img5,que9Img6,que9Img7,que9Img8,que9Img9,que9Img10,
            west7,west8,west9,west12,west13,
          ]}
        />

        <FsLightbox 
          toggler={togglerThree}
          sources={[
            que10July1,
            que10July2,
            que10July3,
            que10July4,
            que10June1,
            que10June2,
            que10June3,
            que10June4,
            que10May1,
            que10May2,
            que10May3,
            que10May4,
            que10May5,
            que10April1,
            que10April2,
            que10April3,
            que10April4,
            que10April5,
            que10March1,
            que10March2,
            que10March3,
            que10March4,
            que10Feb1,
            que10Feb2,
            que10Nov1,
            que10Nov2,
            que10Nov3,
            que10Nov4,
            que10Img1,
            que10Img2,
            que10Img3,
          ]}
        />

        <FsLightbox 
          toggler={togglerBeskid}
          sources={[
            beskidSeptember1,
            beskidSeptember2,
            beskidSeptember3,
            beskidSeptember4,
            beskidSeptember5,
            beskidMay1,
            beskidMay2,
            beskidMay3,
            beskidMay4,
            beskidMay5,
            beskidMay6,
            beskidMay7,
            beskidApril1,
            beskidApril2,
            beskidApril3,
            beskidApril4,
            beskidApril5,
            beskidApril6,
            beskidApril7,
            beskidApril8,
            beskidApril9,
            beskidNovember1,
            beskidNovember2,
            beskidNovember3,
            beskidNovember4,
            beskidNovember5,
            beskidNovember6,
            beskid3,
            beskid4,
            beskid2,
            beskid1,
          ]}
        />

        <FsLightbox 
          toggler={togglerFour}
          sources={[
            que11July1,
            que11July2,
            que11July3,
            que11July4,
            que11July5,
            que11July6,
            que11July7,
            que11July8,
            que11July9,
            que11June1,
            que11June2,
            que11June3,
            que11May1,
            que11May2,
            que11May3,
            que11May4,
            que11April1,
            que11April2,
          ]}
        />
        <FsLightbox 
          toggler={toggler}
          sources={[
            comfortJuly1,
            comfortJuly2,
            comfortJuly3,
            comfortJuly4,
            comfortJune1,
            comfortJune2,
            comfortJune3,
            comfortMay1,
            comfortMay2,
            comfortMay3,
            comfortMay4,
          ]}
        />
        </>
    )
}

export default BuildingStatus