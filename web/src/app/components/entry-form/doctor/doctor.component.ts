import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.sass']
})
export class DoctorComponent implements OnInit {
    @Input() data: any
    constructor() { }

    ngOnInit() {
    }

}
