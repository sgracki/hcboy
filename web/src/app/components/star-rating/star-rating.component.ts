import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.sass']
})
export class StarRatingComponent implements OnInit {
    @Input() rating: Number
    @Input() reviews: Number
    public maxRate: Array<Number> = new Array(5)
    constructor() { }

    ngOnInit() {
    }

}
