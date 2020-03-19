import { Request as BaseRequest } from 'rich-agent'

export interface Informations extends BaseRequest.RequestInformations {

}

export type Status = BaseRequest.Status

export interface Request {
    readonly responseData: any | null
    load (): void
    request: BaseRequest.Request
}


