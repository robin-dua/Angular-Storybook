import { moduleMetadata } from '@storybook/angular';
import { StoryObj, Meta } from '@storybook/angular';
import { RadiobuttonComponent } from '../app/radiobutton/radiobutton.component';
export default {
  title: 'Components/RadioButton',
  component: RadiobuttonComponent,
  decorators: [
    moduleMetadata({
      declarations: [RadiobuttonComponent],
    }),
  ],
  argTypes: {
    showError: {
      control: 'boolean',
    },
    errorMessage: {
      control: 'text',
    },
  },
} as Meta<RadiobuttonComponent>;

type RadioButtonStory = StoryObj<RadiobuttonComponent>;
const Template: RadioButtonStory = {
  args: {},
};

export const radioButton: RadioButtonStory = {
  ...Template,
  args: {
    label: 'Option',
  },
};
