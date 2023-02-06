import { GRID_SIZE } from '../constants';

export default function getRandomPos() {
  const x = Math.floor((Math.random() * GRID_SIZE));
  const y = Math.floor((Math.random() * GRID_SIZE));
  const isHorizontal = Math.round(Math.random()) === 1;
  return { x, y, isHorizontal };
}
