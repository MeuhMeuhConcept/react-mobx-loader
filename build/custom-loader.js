var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action } from 'mobx';
export class CustomLoader {
    constructor(request, autoLoad = true) {
        this.status = 'waiting';
        this.progress = 0;
        this._request = request;
        this._request.onProgress(action((progress) => {
            this.progress = progress;
        }));
        this._request.onStatusChange(action((status) => {
            this.status = status;
        }));
        if (autoLoad) {
            this.load();
        }
    }
    get request() {
        return this._request;
    }
    get responseData() {
        return this._request.responseData;
    }
    load() {
        this._request.send();
    }
}
__decorate([
    observable
], CustomLoader.prototype, "status", void 0);
__decorate([
    observable
], CustomLoader.prototype, "progress", void 0);
