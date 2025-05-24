import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Avatar, AvatarProps } from './avatar';
// import { ReactComponent as BaamsunLogo } from '../assets/media/baamsun-logo-primary.svg';
import { ReactComponent as BaamsunLogo } from '../assets/media/bank_logo_red.svg';

export default {
  component: Avatar,
  title: 'Components/Avatar',
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  // src: <BaamsunLogo />,
  icon: <i className='ri-train-fill' />,
  alt: 'Placeholder image',
};

export const Square = Template.bind({});
Square.args = {
  size: 'large',
  icon: <i className='ri-user-2-fill' />,
  alt: 'Placeholder image',
  shape: 'square',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  icon: <i className='ri-user-2-fill' />,
  alt: 'Placeholder image',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  icon: <i className='ri-user-2-fill' />,
  alt: 'Placeholder image',
  shape: 'square',
};
