import { Component, OnInit, ViewChild } from '@angular/core';
// import { } from '@types/googlemaps'

@Component({
    selector: 'gmap',
    templateUrl: './gmap.component.html',
    styleUrls: ['./gmap.component.sass']
})
export class GmapComponent implements OnInit {
    lat: number = 51.678418;
    lng: number = 7.809007;

    ngOnInit() { }
}
