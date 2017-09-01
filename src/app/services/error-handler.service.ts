
import { EventEmitter } from "@angular/core";

export class Error {
    constructor (public title:string,
                 public message:string) {}
}

export class ErrorHandlerService {
    public errorObject$: EventEmitter<Error>;

    constructor() {
        this.errorObject$ = new EventEmitter();
    }

    showError (error:Error){
        this.errorObject$.emit(error)
    }
}
