"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rich_agent_1 = require("rich-agent");
const mobx_1 = require("mobx");
class SimpleLoader extends rich_agent_1.BasicRequest {
    constructor(url, autoLoad = true) {
        super(url, 'GET');
        this.status = 'waiting';
        this.progress = 0;
        this.onProgress(mobx_1.action((progress) => {
            this.progress = progress;
        }));
        this.onStatusChange(mobx_1.action((status) => {
            this.status = status;
        }));
        if (autoLoad) {
            this.load();
        }
    }
    load() {
        this.send();
    }
}
__decorate([
    mobx_1.observable
], SimpleLoader.prototype, "status", void 0);
__decorate([
    mobx_1.observable
], SimpleLoader.prototype, "progress", void 0);
exports.SimpleLoader = SimpleLoader;
