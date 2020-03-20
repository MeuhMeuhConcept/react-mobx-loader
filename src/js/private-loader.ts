import { Request } from 'rich-agent'
import * as LoaderRequest from './loader-request'
import { observable, action } from 'mobx'

export class PrivateLoader implements LoaderRequest.PrivateRequest {

    @observable status: LoaderRequest.Status = 'waiting'
    @observable progress: number = 0

    protected _request: Request.Request

    constructor (request: Request.Request) {

        this._request = request

        this._request.onProgress(action((progress: number) => {
            this.progress = progress
        }))

        this._request.onStatusChange(action((status: Request.Status) => {
            this.status = status
        }))
    }

    get responseData (): any | null {
        return this._request.responseData
    }
}
