import { Request } from 'rich-agent';
import * as LoaderRequest from './loader-request';
export declare class PrivateLoader implements LoaderRequest.PrivateRequest {
    status: LoaderRequest.Status;
    progress: number;
    protected _request: Request.Request;
    constructor(request: Request.Request);
    get responseData(): any | null;
}
