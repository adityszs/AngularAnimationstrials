import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-anganimate-box',
  templateUrl: './anganimate-box.component.html',
  styleUrls: ['./anganimate-box.component.css'],
  animations:[
    trigger('openclose',
      [ state('open', style({
        height:'200px',
        backgroundColor:'blue',
        opacity:0.5
      })),
      state('closed', style({
        height:'100px',
        width:'400px',
        backgroundColor:'yellow',
        opacity:0.9
      })),
    transition('open => closed',[
      animate('3s',
      style({opacity:'.1'}))
    ]),
    transition('closed => open',[
      animate('1s',
      style({opacity:'.1'}))
    ]),
    ]
    
    )]
})
export class AnganimateBoxComponent implements OnInit {

  isOpen:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle()
  {
this.isOpen = !this.isOpen;
  }


}
