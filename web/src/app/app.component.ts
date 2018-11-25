import { Component, ElementRef } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    public landingItems: Array<any> = [{
        text: `High quality health care no longer has to mean spending dozens of hours on research and another several hours in queues! With Health Care Boy you get access to information from thousands of patients, reviewers and doctors at your fingertips, all neatly structured and presented in an easy to digest form. Choosing the best doctor in your vicinity just got a lot easier.`,
        image: './assets/maps.png'
    }, {
        text: `When you ask Health Care Boy to recommend you a specialist, it aggregates data from review sites, social media and government agencies alike, taking into considerations three most important issues:
        - Reviews from other patients, to provide you with the best doctors
        - Proximity to your location, for the easy commute
        - Current queue times, to start your treatment as soon as possible`,
        image: './assets/doctor.png'
    }, {
        text: `Taking care of one's health should be easy and possible for everyone, no matter where they live and who they are. We strive to be the change we want to see in the world, and that's why we took on the challenge of creating a better, more accessible health care system. We hope that Health Care Boy will make it easier for people all over the world to get access to health care they deserve, without spending so much of their time and resources.`,
        image: './assets/rating.png'
    }]

    public entryData: any = {}

    public scrollTo(el: HTMLElement) {
        el.scrollIntoView({block: 'start', behavior: 'smooth'})
    }
}
