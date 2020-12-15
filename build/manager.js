"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoaderManager {
    constructor() {
        this._contentStrategy = 'wait';
    }
    get contentStrategy() {
        return this._contentStrategy;
    }
    set contentStrategy(v) {
        this._contentStrategy = v;
    }
}
exports.LoaderManager = LoaderManager;
exports.Manager = new LoaderManager();
