import { Request } from 'rich-agent'
import * as LoaderRequest from './loader-request'
import { observable, action } from 'mobx'

export class CustomLoader implements LoaderRequest.Request {

    @observable status: LoaderRequest.Status = 'waiting'
    @observable progress: number = 0

    protected _request: Request.Request

    constructor (request: Request.Request, autoLoad: boolean = true) {

        this._request = request

        this._request.onProgress(action((progress: number) => {
            this.progress = progress
        }))

        this._request.onStatusChange(action((status: Request.Status) => {
            this.status = status
        }))

        if (autoLoad) {
            this.load()
        }
    }

    get request (): Request.Request {
        return this._request
    }

    get responseData (): any | null {
        return this._request.responseData
    }

    load() {
        this._request.send()
    }
}
