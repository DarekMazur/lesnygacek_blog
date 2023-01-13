import Signature from './Signature';

export default {
  title: 'Components/Atoms/Signature',
  component: Signature,
};

const Template = (args) => <Signature {...args} />;

export const Default = Template.bind({});
Default.args = {
  author: { name: 'John Doe' },
};
