import { Request } from 'rich-agent'
import * as LoaderRequest from './loader-request'
import { observable, action } from 'mobx'

export class PrivateLoader implements LoaderRequest.Informations {

    @observable status: LoaderRequest.Status = 'waiting'
    @observable progress: number = 0
    @observable errors: string[] = []

    protected _request: Request.Request

    constructor (request: Request.Request) {

        this._request = request

        this._request.onProgress(action((progress: number, direction: 'up' | 'down') => {
            if (direction === 'down') {
                this.progress = progress
            }
        }))

        this._request.onStatusChange(action((status: Request.Status) => {
            this.status = status

            this.errors.splice(0)
            if (status === 'error') {
                for (const err of this._request.errors) {
                    this.errors.push(err)
                }
            }
        }))
    }
}
