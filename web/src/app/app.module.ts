import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ComponentsModule } from './components/components.module'
import { DoctorsService } from './services/doctors.service'
import { HttpModule } from '@angular/http'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        ComponentsModule
    ],
    providers: [DoctorsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
