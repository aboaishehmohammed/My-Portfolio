import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  scroll=false;
@HostListener('document:scroll')
onWindowsScroll(){
  if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
    this.scroll=true;

  }
  else
  {
    this.scroll=false;

  }
}
 active=false;
  constructor() { }

  ngOnInit(): void {
  }

}
