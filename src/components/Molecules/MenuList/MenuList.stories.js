import MenuListItem from '../../Atoms/MenuListItem/MenuListItem';
import MenuList from './MenuList';

export default {
  title: 'Components/Molecules/MenuList',
  component: MenuList,
};

const Template = (args) => (
  <MenuList>
    <MenuListItem {...args}>Item</MenuListItem>
    <MenuListItem {...args}>Item</MenuListItem>
  </MenuList>
);

export const Default = Template.bind({});

export const Light = Template.bind({});
Light.args = {
  light: true,
};

export const SocialMenu = Template.bind({});
SocialMenu.args = {
  social: 'instagram',
};

export const SocialMenuLight = Template.bind({});
SocialMenuLight.args = {
  social: 'instagram',
  light: true,
};
