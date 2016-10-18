import {Directive, Input, OnChanges} from '@angular/core';

@Directive({
    selector: '[infinit-scroll]'
})
export class InfinitScrollDirective implements OnChanges {
    @Input()
    sourceData: any[];
    @input()
    displayData: any[];

    private batchSize : number = 10;

    ngOnChanges(changes: Object): void {
        this.reloaddisplayData();
    }


}