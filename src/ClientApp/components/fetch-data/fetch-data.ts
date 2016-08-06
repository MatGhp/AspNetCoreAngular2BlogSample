import * as ng from '@angular/core';
import { Http } from '@angular/http';
import {StarComponent} from '../shared/star'; 

@ng.Pipe({
    name: 'temperatureCFilter'
})
export class TemperatureCFilterPipe implements ng.PipeTransform
{
    transform(value: WeatherForecast[], arg: string): WeatherForecast[]
    {
        let filter: number = parseInt(arg);
        console.log(filter);
        return filter ? value.filter((w: WeatherForecast) =>
            w.temperatureC < filter) : value;
    }
}

@ng.Component({
  selector: 'fetch-data',
  template: require('./fetch-data.html'),
  styles: ['thead {color: blue;}'],
  pipes: [TemperatureCFilterPipe],
  directives: [StarComponent]
})
export class FetchData implements ng.OnInit
{
    public forecasts: WeatherForecast[];
    public tempFilter: number = 25;
    public pageTitle: string;
    constructor(http: Http) {
        http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json();
        });
    }

    ngOnInit(): void
    {
        console.log('In OnInit');
    }

    onRatingClicked(message: string): void
    {
        this.pageTitle = 'Temprature: ' + message;
    }
}



interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
