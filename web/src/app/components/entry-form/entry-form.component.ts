import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'entry-form',
    templateUrl: './entry-form.component.html',
    styleUrls: ['./entry-form.component.sass']
})
export class EntryFormComponent implements OnInit {
    @Input() entryData: any
    constructor() { }

    ngOnInit() {
        if(window.navigator.geolocation){
            window.navigator.geolocation.getCurrentPosition(this.setUserLocation.bind(this))
        }
    }

    private setUserLocation({coords}) {
        this.entryData.lat = coords.latitude
        this.entryData.lon = coords.longitude
        this.entryData.accuracy = coords.accuracy
    }

}
