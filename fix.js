import reset from './property-groups/0-reset.js';
import positioning from './property-groups/1-positioning-layout.js';
import boxModel from './property-groups/2-box-model.js';
import visual from './property-groups/3-visual.js';
import typography from './property-groups/4-typography.js';
import animation from './property-groups/5-animation.js';
import misc from './property-groups/6-misc.js';
import stylistic from './rules/stylistic.js';

const outsideInOrder = [
  ...reset,
  ...positioning,
  ...boxModel,
  ...visual,
  ...typography,
  ...animation,
  ...misc,
];

export default {
  plugins: [
    'stylelint-order',
  ],
  rules: {
    ...stylistic,
    'order/properties-order': outsideInOrder,
    'order/properties-alphabetical-order': null,
  },
};
