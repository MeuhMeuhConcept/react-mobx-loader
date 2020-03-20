import { PrivateLoader } from './private-loader';
export class CustomLoader extends PrivateLoader {
    constructor(request, autoLoad = true) {
        super(request);
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
        return this._request.send();
    }
}
