import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AutoSlider';
  images: any[] = [];
  displayImg: string = '';
  imgIndex!: number;

  constructor() {}

  getImages(event: any) {
    let files = event.target.files;
    let sliderLength = files.length + this.images.length;
    let limit = files.length + this.images.length;

    if (sliderLength > 5) {
      let limit = 5 - this.images.length;
      for (let i = 0; i < limit; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          this.images.push(reader.result);
        };
      }
    } else {
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          this.images.push(reader.result);
        };
      }
    }
  }

  display(index: number) {
    this.displayImg = this.images[index];
    this.imgIndex = index;
  }

  deleteImg() {
    this.images.splice(this.imgIndex, 1);
    this.images.length == this.imgIndex
      ? this.display(this.imgIndex - 1)
      : this.display(this.imgIndex);
  }

  goLeft() {
    this.display(--this.imgIndex);
  }

  goRight() {
    this.display(++this.imgIndex);
  }
}
