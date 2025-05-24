import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Timer, TimerProps } from './timer';

export default {
  component: Timer,
  title: 'Components/Timer',
} as Meta;

const Template: StoryFn<TimerProps> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialSeconds: 60,
};

export const Custom = Template.bind({});
Custom.args = {
  initialSeconds: 120,
  onCountDown: (seconds: number) => console.log(`Counting down ${seconds} seconds`),
  onComplete: () => console.log('Timer completed'),
};
