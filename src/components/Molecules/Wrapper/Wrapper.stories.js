import Wrapper from './Wrapper';

export default {
  title: 'Components/Molecules/Wrapper',
  component: Wrapper,
};

const Template = (args) => (
  <Wrapper {...args}>
    <h3>Wrapper title</h3>
    <p>Lorem ipsum</p>
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  display: 'block',
};

export const Flex = Template.bind({});

export const FlexColumn = Template.bind({});
FlexColumn.args = {
  direction: 'column',
};
