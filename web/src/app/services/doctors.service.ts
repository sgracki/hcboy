import { Injectable, isDevMode } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class StatsService {
    private url: string

    constructor(private http: Http) {
        this.url = `${isDevMode() ? '/proxy' : ''}/api/v1/doctors`
    }

    public getBestDoctors(data: any) {
        return this.http.post(this.url, data)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError)
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error)
        return Promise.reject(error.message || error)
    }
}