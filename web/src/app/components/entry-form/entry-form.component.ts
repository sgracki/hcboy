import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'entry-form',
    templateUrl: './entry-form.component.html',
    styleUrls: ['./entry-form.component.sass']
})
export class EntryFormComponent implements OnInit {
    private entryData: any = {}
    @Output() formReady = new EventEmitter()
    constructor() { }

    ngOnInit() {
        if(window.navigator.geolocation)
            window.navigator.geolocation.getCurrentPosition(this.setUserLocation.bind(this))
    }

    private setUserLocation({coords}) {
        console.log(coords)
        this.entryData.lat = coords.latitude
        this.entryData.lon = coords.longitude
        this.entryData.accuracy = coords.accuracy
    }

    public submitForm() {
        this.formReady.emit(this.entryData)
    }

}
