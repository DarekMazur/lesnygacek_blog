import Input from './Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Input',
  id: 'input',
  label: 'Input',
  value: '',
};
