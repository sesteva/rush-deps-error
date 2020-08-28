// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MyLibComponent } from './my-lib.component';

export default {
  title: 'Example/MyLibComponent',
  component: MyLibComponent,
  argTypes: {},
} as Meta;

const Template: Story<MyLibComponent> = (args: MyLibComponent) => ({
  component: MyLibComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Button',
};
