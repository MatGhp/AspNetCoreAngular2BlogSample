import {Directive, Input, Renderer, ElementRef} from '@angular/core';

@Directive({ selector: '[form-input]' })
export class FormInputDorective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'white');
        renderer.setElementStyle(el.nativeElement, 'maxWidth', '300px');
        renderer.setElementStyle(el.nativeElement, 'minWidth', '160px')

        renderer.setElementClass(el.nativeElement, 'form-control', true);


    }
}