import { HIT_TIME } from '../constants';

export default function styleCell(cell) {
  cell.style.display = 'flex';
  cell.style['align-items'] = 'center';
  cell.style['justify-content'] = 'center';
  cell.style['font-size'] = '4rem';
  cell.style['line-height'] = '1';
  cell.style.animation = `bounce-in-fwd ${HIT_TIME / 1000}s both`;
}
