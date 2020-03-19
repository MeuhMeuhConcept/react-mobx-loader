import { Request } from 'rich-agent'

export interface LoaderRequestInformations extends Request.RequestInformations {

}

export interface LoaderRequest extends Request.Request {
    load (): void
}
