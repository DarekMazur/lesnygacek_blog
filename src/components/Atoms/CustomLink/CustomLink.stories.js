import CustomLink from './CustomLink';

export default {
  title: 'Components/Atoms/CustomLink',
  component: CustomLink,
};

const Template = (args) => <CustomLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://google.com',
  link: 'Link title',
};
