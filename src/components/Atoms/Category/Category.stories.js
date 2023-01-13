import Category from './Category';

export default {
  title: 'Components/Atoms/Category',
  component: Category,
};

const Template = (args) => <Category {...args} />;

export const Tools = Template.bind({});
Tools.args = {
  category: 'tools',
};

export const Trips = Template.bind({});
Trips.args = {
  category: 'trips',
};

export const Thoughts = Template.bind({});
Thoughts.args = {
  category: 'thoughts',
};

export const Others = Template.bind({});
Others.args = {
  category: 'others',
};

export const ToolsLight = Template.bind({});
ToolsLight.args = {
  category: 'tools',
  light: true,
};

export const TripsLight = Template.bind({});
TripsLight.args = {
  category: 'trips',
  light: true,
};

export const ThoughtsLight = Template.bind({});
ThoughtsLight.args = {
  category: 'thoughts',
  light: true,
};

export const OthersLight = Template.bind({});
OthersLight.args = {
  category: 'others',
  light: true,
};
