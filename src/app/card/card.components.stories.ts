import {Meta, StoryObj} from '@storybook/angular';
import { CardComponent } from './card.component';

const meta:Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  render: (args: CardComponent)=> ({
    props: {
      ...args,
    },
  }),
};

export default meta;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Mountains',
    content: `Mountains are majestic natural formations that rise prominently above their surroundings, creating a striking contrast against the sky. These towering landforms, often covered in lush forests, serve as awe-inspiring reminders of the Earth's geological history.`,
    imgUrl: 'https://cdn.pixabay.com/photo/2020/09/19/19/37/landscape-5585247_1280.jpg',
    publishedDate: new Date(),
    action: 'View ->',
  },
};
