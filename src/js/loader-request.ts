import { Request as BaseRequest } from 'rich-agent'

export interface Informations extends BaseRequest.RequestInformations {

}

export type Status = BaseRequest.Status

export interface Request extends BaseRequest.Request {
    load (): void
}
