import { BasicRequest, Request } from 'rich-agent'
import * as LoaderRequest from './loader-request'
import { observable, action } from 'mobx'

export class SimpleLoader extends BasicRequest implements LoaderRequest.Request {

    @observable status: LoaderRequest.Status = 'waiting'
    @observable progress: number = 0

    constructor (url: string, autoLoad: boolean = true) {
        super(url, 'GET')

        this.onProgress(action((progress: number) => {
            this.progress = progress
        }))

        this.onStatusChange(action((status: Request.Status) => {
            this.status = status
        }))

        if (autoLoad) {
            this.load()
        }
    }

    load() {
        this.send()
    }
}
