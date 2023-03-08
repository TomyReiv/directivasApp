import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cIf]'
})
export class CustomIfDirective {

  @Input() set cIf(condicion: boolean) {
    if (condicion){
      this.viewConteiner.createEmbeddedView(this.templateRef);
    }
  else{
    this.viewConteiner.clear();
}}

constructor(
  private templateRef: TemplateRef<HTMLElement>,
  private viewConteiner: ViewContainerRef
){ }

}
