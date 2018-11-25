import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { LandingItemComponent } from './landing-item/landing-item.component';
import { AgmCoreModule } from '@agm/core';
import { SpecializationsComponent } from './entry-form/specializations/specializations.component'
import { PipesModule } from '../pipes/pipes.module';
import { LoadingComponent } from './loading/loading.component';
import { DoctorComponent } from './entry-form/doctor/doctor.component';
import { StarRatingComponent } from './star-rating/star-rating.component'

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB6wxG6HeV800wrPkiir2BW2sL8AONTuSw'
        })
    ],
    declarations: [EntryFormComponent, LandingItemComponent, SpecializationsComponent, LoadingComponent, DoctorComponent, StarRatingComponent],
    exports: [EntryFormComponent, LandingItemComponent, LoadingComponent, StarRatingComponent]
})
export class ComponentsModule { }
