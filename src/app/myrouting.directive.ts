import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyrouting]'
})
export class MyroutingDirective {
@Input() appmyRouting:string="";
  constructor(
     //öncelikle elemete ulaşıyoruz
private _el:ElementRef<HTMLLinkElement>,
private _service:Router
  ) { }
@HostListener("click")click(){
  console.log(this.appmyRouting);

}
}
