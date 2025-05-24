import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LoadingOutlined } from '@ant-design/icons';

import { Loading, LoadingProps } from './loading';

export default {
  component: Loading,
  title: 'Components/Loading',
} as Meta;

const Template: StoryFn<LoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  // children: 'Loading...',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  // children: 'Loading...',
  margin: '5rem',
};

export const WithCustomSize = Template.bind({});
WithCustomSize.args = {
  // children: 'Loading...',
  width: '50%',
  height: '200px',
};

export const WithAllSpinAttributes = Template.bind({});
WithAllSpinAttributes.args = {
  // children: 'Loading...',
  indicator: <LoadingOutlined />,
  size: 'large',
  tip: 'Please wait...',
  delay: 500,
  spinning: true,
};
