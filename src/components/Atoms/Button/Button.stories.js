import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primaryText: 'Click me!',
  secondaryText: 'Go on!',
};

export const Light = Template.bind({});
Light.args = {
  primaryText: 'Click me!',
  secondaryText: 'Go on!',
  light: true,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  primaryText: 'Click me!',
  secondaryText: 'Success!',
  loadingText: 'Loading...',
  isLoading: false,
  isSuccess: false,
};

export const WithLoadinginProgress = Template.bind({});
WithLoadinginProgress.args = {
  primaryText: 'Click me!',
  secondaryText: 'Success!',
  loadingText: 'Loading...',
  isLoading: true,
  isSuccess: false,
};

export const WithLoadingSuccess = Template.bind({});
WithLoadingSuccess.args = {
  primaryText: 'Click me!',
  secondaryText: 'Success!',
  loadingText: 'Loading...',
  isLoading: false,
  isSuccess: true,
};

export const WithLoadingLight = Template.bind({});
WithLoadingLight.args = {
  primaryText: 'Click me!',
  secondaryText: 'Success!',
  loadingText: 'Loading...',
  isLoading: false,
  isSuccess: false,
  light: true,
};

export const WithLoadinginProgressLight = Template.bind({});
WithLoadinginProgressLight.args = {
  primaryText: 'Click me!',
  secondaryText: 'Success!',
  loadingText: 'Loading...',
  isLoading: true,
  isSuccess: false,
  light: true,
};

export const WithLoadingSuccessLight = Template.bind({});
WithLoadingSuccessLight.args = {
  primaryText: 'Click me!',
  secondaryText: 'Success!',
  loadingText: 'Loading...',
  isLoading: false,
  isSuccess: true,
  light: true,
};
