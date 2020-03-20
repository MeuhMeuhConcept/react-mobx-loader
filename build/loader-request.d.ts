import { Request as BaseRequest, Response } from 'rich-agent';
export interface Informations extends BaseRequest.RequestInformations {
}
export declare type Status = BaseRequest.Status;
export interface PrivateRequest {
    readonly responseData: any | null;
}
export interface Request extends PrivateRequest {
    load(): Promise<Response.Response>;
    request: BaseRequest.Request;
}
