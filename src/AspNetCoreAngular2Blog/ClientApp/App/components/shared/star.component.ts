import {Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'star',
    template: require('./star.html'),
    styles: ['./star.css']
})
export class StarComponent implements OnChanges
{
    @Input()
    rating: number;

    @Output()
    ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    startWith: number;


    ngOnChanges(): void
    {
        this.startWith = this.rating * 86 / 5;
    }

    onclick()
    {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}