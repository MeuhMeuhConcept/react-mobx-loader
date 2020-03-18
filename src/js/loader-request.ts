import { Request } from 'rich-agent'

export interface LoaderRequest extends Request.Request {
    load (): void
}
