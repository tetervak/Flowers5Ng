import { Component } from '@angular/core';
import {Flower} from './flower';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // to initialize the flowers
  private static names: string[] = ['aster', 'carnation', 'daffodil', 'orchid', 'rose'];
  // all flower objects
  public flowerList: Flower[];
  // the selected flower object
  public selectedFlower: Flower;
  // noinspection JSMismatchedCollectionQueryUpdate
  private images: HTMLImageElement[];
  public title = 'Flowers 4 Ng';
  constructor() {
    this.flowerList = [];
    this.images = [];
    this.makeFlowers();
    this.preloadImages();
    this.selectFlower(this.flowerList[0]);
  }
  // make flower objects
  private makeFlowers() {
    AppComponent.names.forEach(name => {
      this.flowerList.push(new Flower(name));
    });
  }
  // preload the large images from the server
  private preloadImages() {
    this.flowerList.forEach(flower => {
      const image: HTMLImageElement = new Image();
      image.src = flower.largeImgSrc;
      this.images.push(image);
    });
  }
  // show the flower by the index
  public selectFlower(flower: Flower) {
    this.selectedFlower = flower;
  }
}

