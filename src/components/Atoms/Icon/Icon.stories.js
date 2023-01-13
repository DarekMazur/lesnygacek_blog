import Icon from './Icon';

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const FontAwesomeDefault = Template.bind({});
FontAwesomeDefault.args = {
  icon: 'fa',
  iconType: ['fab', 'facebook-messenger'],
  size: 'default',
};

export const FontAwesomeLight = Template.bind({});
FontAwesomeLight.args = {
  icon: 'fa',
  iconType: ['fab', 'facebook-messenger'],
  size: 'default',
  light: true,
};

export const CustomIconDefault = Template.bind({});
CustomIconDefault.args = {
  iconType: 'axe',
  size: 'default',
};

export const IconMedium = Template.bind({});
IconMedium.args = {
  iconType: 'axe',
  size: 'medium',
};

export const IconSmall = Template.bind({});
IconSmall.args = {
  iconType: 'axe',
  size: 'small',
};

export const CustomIconLight = Template.bind({});
CustomIconLight.args = {
  iconType: 'axe',
  size: 'default',
  light: true,
};

export const IconMediumLight = Template.bind({});
IconMediumLight.args = {
  iconType: 'axe',
  size: 'medium',
  light: true,
};

export const IconSmallLight = Template.bind({});
IconSmallLight.args = {
  iconType: 'axe',
  size: 'small',
  light: true,
};
