import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";

@Directive({
    selector:"[appRenklendir]"
})
export class RenklendirDirective{
    // elmente değer atama
    @Input() appRenklendir:string="";
    @Input() test:String="0";
constructor( 
  // elemntref ewlemnentin bilgilerine ulaşmamızı sağlar
     private _el:ElementRef
){
// this._el.nativeElement.style.backgroundColor="Blue"
// this._el.nativeElement.className="form-control"

}
// event ile yakalama
@HostListener("mouseenter")metot(){
this._el.nativeElement.style.backgroundColor=this.appRenklendir;
this.appRenklendir;
console.log(this.test);
}
@HostListener("mouseleave")metot2(){
this._el.nativeElement.style.backgroundColor="purple";
}
}