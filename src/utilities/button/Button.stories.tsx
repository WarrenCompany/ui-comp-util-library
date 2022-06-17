import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Utilities/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    background_color: { control: 'select' },
    background_color_density: { control: 'select' },
    padding_side: {control: 'multi-select'},
    // test change x2
    //hide base inheritance 
    colors: {table: {disable: true}},
    hundreds: {table: {disable: true}},
    fives: {table: {disable: true}},
    quarters: {table: {disable: true}},
    sizes: {table: {disable: true}},
    sides: {table: {disable: true}}
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Dynamic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dynamic.args = {
  label: 'Button',
  icon: '',
  link: '',

  text_color: 'indigo',
  text_color_density: 600,

  font: 'apple',
  font_size: 'md',
  font_weight: 'black',
  font_style: 'normal',
  font_case: true,

  padding: true,
  padding_side: ['x','y'],
  padding_x: 15,
  padding_y: 5,

  border: true,
  border_side: 'full',
  border_width: 'sm',
  border_radius: 'xl',
  border_color: 'indigo',
  border_color_density: 600,

  background_color: 'indigo',
  background_color_density: 100,

  // states
  isDisabled: false,
  isHovered: false,
  isClicked: false,
};
