import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { LandingItemComponent } from './landing-item/landing-item.component';
import { AgmCoreModule } from '@agm/core'

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB6wxG6HeV800wrPkiir2BW2sL8AONTuSw'
        })
    ],
    declarations: [EntryFormComponent, LandingItemComponent],
    exports: [EntryFormComponent, LandingItemComponent]
})
export class ComponentsModule { }
