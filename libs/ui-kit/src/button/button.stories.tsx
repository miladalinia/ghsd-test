import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'No, click me instead!',
  type: 'dashed',
};

export const Large = Template.bind({});
Large.args = {
  children: 'I am big and bold!',
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'You cannot click me :(',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Please wait...',
  loading: true,
};
