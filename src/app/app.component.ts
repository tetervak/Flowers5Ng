import { Component } from '@angular/core';
import {Flower} from './flower';
import {FlowerDataService} from './flower-data.service';

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
  public title = 'Flowers 5 Ng';
  constructor(flowerData: FlowerDataService) {
    this.flowerList = flowerData.getFlowers();
    this.selectFlower(this.flowerList[0]);
  }
  // show the flower by the index
  public selectFlower(flower: Flower) {
    this.selectedFlower = flower;
  }
}

