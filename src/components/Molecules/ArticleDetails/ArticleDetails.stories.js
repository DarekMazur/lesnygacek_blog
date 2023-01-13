import ArticleDetails from './ArticleDetails';

export default {
  title: 'Components/Molecules/ArticleDetails',
  component: ArticleDetails,
};

const Template = (args) => <ArticleDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: '2022-08-02T12:01:28.266Z',
  title: 'Article title',
  category: 'others',
};

export const Light = Template.bind({});
Light.args = {
  date: '2022-08-02T12:01:28.266Z',
  title: 'Article title',
  category: 'others',
  light: true,
};

export const Sub = Template.bind({});
Sub.args = {
  date: '2022-08-02T12:01:28.266Z',
  title: 'Article title',
  category: 'others',
  sub: true,
};

export const SubLight = Template.bind({});
SubLight.args = {
  date: '2022-08-02T12:01:28.266Z',
  title: 'Article title',
  category: 'others',
  sub: true,
  light: true,
};
