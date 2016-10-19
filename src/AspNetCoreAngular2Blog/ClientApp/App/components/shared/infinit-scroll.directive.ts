import {
  Directive,
  Input,
  OnChanges,
  HostListener
} from "@angular/core";

@Directive({ selector: '[my-lazy-loader]' })
export class MyLazyLoaderDirective implements OnChanges {
    @Input() sourceData: any[];
    @Input() displayData: any[] = [];

    private batchSize: number = 10; 

    ngOnChanges (): void {
        this.reloadDisplayData();
    }

    reloadDisplayData (): void {
        const data = this.sourceData.slice(0, this.batchSize);
        this.appendData(data);
    }
  
    @HostListener('scroll', ['$event.target']) 
    handleScroll(element: any): void {
        console.debug('element', element);
        if (element.scrollTop > element.scrollHeight * 0.75) {
            const data = this.getNextBatch();
            this.appendData(data);
        }
    }

    private getNextBatch (): any {
        const endIndex = this.displayData.length + this.batchSize;
        return this.sourceData.slice(this.displayData.length, endIndex);
    }

    private appendData (data: any): void {
        this.displayData.splice(this.displayData.length, 0, ...data);
    }
}