import { Component, OnInit, EventEmitter } from '@angular/core'
import { DoctorsService } from 'src/app/services/doctors.service'

@Component({
    selector: 'form-specializations',
    templateUrl: './specializations.component.html',
    styleUrls: ['./specializations.component.sass']
})
export class SpecializationsComponent implements OnInit {
    public onSpecPick = new EventEmitter()
    public specializations: Array<string>
    public searchText: string

    constructor(private doctorsService: DoctorsService) { }

    ngOnInit() {
        this.doctorsService.listPossibleSpecializations()
        .then((specs: Array<string>) => this.specializations = specs)
    }

    public saveChoosenSpecToLocalStorage(spec: string) {
        const currentSpecs = localStorage.getItem('recentSpecializations')
        console.log(currentSpecs)

        localStorage.setItem('recentSpecializations', JSON.stringify({a:'b'}))
    }

    public pickSpecialization(spec: string) {
        console.log(spec)
        this.searchText = spec
        this.saveChoosenSpecToLocalStorage(spec)
        this.onSpecPick.emit(spec)
    }

}
