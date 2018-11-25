import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { LandingItemComponent } from './landing-item/landing-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [EntryFormComponent, LandingItemComponent],
    exports: [EntryFormComponent, LandingItemComponent]
})
export class ComponentsModule { }
