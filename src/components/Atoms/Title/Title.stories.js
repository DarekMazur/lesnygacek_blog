import Title from './Title';

export default {
  title: 'Components/Atoms/Title',
  component: Title,
};

const Template = (args) => <Title {...args}>Title</Title>;

export const Default = Template.bind({});

export const Light = Template.bind({});
Light.args = {
  light: true,
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  sub: true,
};

export const SubtitleLight = Template.bind({});
SubtitleLight.args = {
  light: true,
  sub: true,
};
