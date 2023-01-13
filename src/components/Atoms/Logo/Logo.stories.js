import Logo from './Logo';

export default {
  title: 'Components/Atoms/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: 'long',
};

export const Light = Template.bind({});
Light.args = {
  logo: 'long',
  light: true,
};

export const Square = Template.bind({});
Square.args = {
  logo: 'square',
};

export const SquareLight = Template.bind({});
SquareLight.args = {
  logo: 'square',
  light: true,
};
