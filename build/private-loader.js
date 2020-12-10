"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
class PrivateLoader {
    constructor(request) {
        this.status = 'waiting';
        this.progress = 0;
        this.uploadProgress = 0;
        this.errors = [];
        this._request = request;
        this._request.onProgress(mobx_1.action((progress, direction) => {
            if (direction === 'down') {
                this.progress = progress;
            }
            else {
                this.uploadProgress = progress;
            }
        }));
        this._request.onStatusChange(mobx_1.action((status) => {
            this.status = status;
            this.errors.splice(0);
            if (status === 'error') {
                for (const err of this._request.errors) {
                    this.errors.push(err);
                }
            }
        }));
    }
}
__decorate([
    mobx_1.observable
], PrivateLoader.prototype, "status", void 0);
__decorate([
    mobx_1.observable
], PrivateLoader.prototype, "progress", void 0);
__decorate([
    mobx_1.observable
], PrivateLoader.prototype, "uploadProgress", void 0);
__decorate([
    mobx_1.observable
], PrivateLoader.prototype, "errors", void 0);
exports.PrivateLoader = PrivateLoader;
