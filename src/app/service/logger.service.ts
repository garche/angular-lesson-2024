import { Injectable, isDevMode } from "@angular/core";

@Injectable()
export class LoggerService {
    public writeLog(title: string, data?: { [k: string]: any }): void {
        if(isDevMode()) {
            console.log(title)
            if(data){
                console.log(JSON.stringify(data, null, 4))
            }
        }
    }
}
