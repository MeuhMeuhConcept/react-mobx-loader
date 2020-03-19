import { BasicRequest } from 'rich-agent';
import { CustomLoader } from './custom-loader';
export class SimpleLoader extends CustomLoader {
    constructor(url, autoLoad = true) {
        super(new BasicRequest(url), autoLoad);
    }
}
