import { Component } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cards: Card[] = [
    {
      title: "Oceans",
      content: `The ocean is a vast, enigmatic expanse of water that covers more than 70% of the Earth's surface, playing a crucial role in the planet's climate and ecosystems. Its boundless horizons and ever-changing hues evoke a sense of wonder and mystery.`,
      publishedDate: new Date(),
      imgUrl: "https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_1280.jpg",
      action:"View ->"
    },
    {
      title: "Mountains",
      content: `
Mountains are majestic natural formations that rise prominently above their surroundings, creating a striking contrast against the sky. These towering landforms, often covered in lush forests, serve as awe-inspiring reminders of the Earth's geological history.`,
      publishedDate: new Date(),
      imgUrl: "https://cdn.pixabay.com/photo/2020/09/19/19/37/landscape-5585247_1280.jpg",
      action:"View ->"
    },
    {
      title: "Sea Beach",
      content: `A beach, where the land meets the sea, is a place of serene beauty and natural wonder. It's a dynamic environment that captivates the senses with its sights, sounds, and smells, offering a tranquil escape and a playground for various activities.`,
      publishedDate: new Date(),
      imgUrl: "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_1280.jpg",
      action:"View ->"
    },
    {
      title: "Plants",
      content: `Planting is an act of nurturing and fostering growth, deeply rooted in the cycle of life and nature. Planting is a process that connects us to the earth, offering a sense of fulfillment and a tangible way to contribute to the environment.`,
      publishedDate: new Date(),
      imgUrl: "https://cdn.pixabay.com/photo/2013/03/01/18/40/crispus-87928_1280.jpg",
      action:"View ->"
    },
    {
      title: "Beach",
      content: `A beach, where the land meets the sea, is a place of serene beauty and natural wonder. It's a dynamic environment that captivates the senses with its sights, sounds, and smells, offering a tranquil escape and a playground for various activities.`,
      publishedDate: new Date(),
      imgUrl: "https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_1280.jpg",
      action:"View ->"
    },
    {
      title: "Sea",
      content: `The sea is a vast, enigmatic expanse of water that plays a crucial role in the Earth's ecosystem and offers a breathtaking display of natural beauty. It stretches beyond the horizon, a boundless blue that captivates the senses and evokes a deep sense of wonder.`,
      publishedDate: new Date(),
      imgUrl: "https://cdn.pixabay.com/photo/2013/02/01/18/14/url-77169_1280.jpg",
      action:"View ->"
    },
  ];
}
