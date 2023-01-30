import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    this.loaded.emit(this.img);
  }


  //  @Input('img')
  //  set ChangeImg(newImg: string){
  //   this.img = newImg;
  //   // console.log('change just img =>', this.img);


  //  }
  //  @Input() alt: string = "";

  //  @Output() loaded = new EventEmitter<string>();
  //  imageDefault= './assets/images/default.png';
  //  counter:number =0;
  //  counterFn: number | undefined;



  constructor() {
    //before render
    //async not run!!!!!  run -- once time
    // console.log('Constructor', 'imgValue =>',this.img);

  }



  ngOnChanges( changes: SimpleChanges ): void {
      //before -during render
      //changes inputs -- every times
      // console.log('ngOnChanges', 'imgValue =>',this.img);
      // console.log('changes ',changes);
  }

  ngOnInit():void{
      //before render
      // async - fetch -- once time
      // console.log('ngOnInit', 'imgValue =>',this.img);
      //  this.counterFn =  window.setInterval(() =>{
      //   this.counter +=1;
      //   console.log('run counter');
      // },1000)
  }

  ngAfterViewInit(): void {
    //--after render
    // handler children
    // console.log('ngAfterViewInit');


  }

  ngOnDestroy(): void {
      // delete
      // console.log('ngOnDestroy');
      // window.clearInterval(this.counterFn);
  }





}
