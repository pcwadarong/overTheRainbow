import { GradientProps } from '../types';

export const GradientColors = [
  {
    stops: [
      { color: 'rgba(221, 247, 225, 0.2)', offset: 0 },
      { color: 'rgba(255, 182, 197, 0.6)', offset: 60 },
      { color: 'rgba(255, 253, 244, 0.8)', offset: 100 },
    ],
    shape: 'linear',
    angle: 13,
  },
  {
    stops: [
      { color: 'rgba(238, 253, 197, 0.2)', offset: 0 },
      { color: 'rgba(238, 253, 197, 0.8)', offset: 50 },
      { color: 'rgba(130, 255, 213, 1)', offset: 100 },
    ],
    shape: 'radial',
  },
  {
    stops: [
      { color: 'rgba(221, 247, 225, 0.4)', offset: 0 },
      { color: 'rgba(190, 215, 242, 1)', offset: 40 },
      { color: 'rgba(190, 215, 242, 1)', offset: 60 },
      { color: 'rgba(226, 237, 244, 1)', offset: 100 },
    ],
    shape: 'linear',
    angle: 150,
  },
  {
    stops: [
      { color: 'rgba(221, 247, 225, 0.2)', offset: 0 },
      { color: 'rgba(255, 229, 57, 0.2)', offset: 20 },
      { color: 'rgba(255, 253, 244, 1)', offset: 100 },
    ],
    shape: 'linear',
  },
  {
    stops: [
      { color: 'rgba(184, 161, 243, 1)', offset: 0 },
      { color: 'rgba(123, 225, 225, 0.5)', offset: 50 },
      { color: 'rgba(245, 255, 180, 0.8)', offset: 100 },
    ],
    shape: 'linear',
  },
] satisfies GradientProps[];
