"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_loader_1 = require("./simple-loader");
class JsonLoader extends simple_loader_1.SimpleLoader {
    transformResponseData(data) {
        try {
            this._responseData = JSON.parse(this._responseData);
        }
        catch (e) {
            this._responseTextStatus = 'json_parse_error';
            return false;
        }
        return true;
    }
}
exports.JsonLoader = JsonLoader;
