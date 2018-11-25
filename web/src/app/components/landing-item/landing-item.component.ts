import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'landing-item',
    templateUrl: './landing-item.component.html',
    styleUrls: ['./landing-item.component.sass']
})
export class LandingItemComponent implements OnInit {
    @Input() isOdd: Boolean
    @Input() imageUrl: string
    @Input() text: string
    
    constructor() { }

    ngOnInit() {
    }

}
