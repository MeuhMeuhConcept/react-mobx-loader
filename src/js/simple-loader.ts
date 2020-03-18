import { BasicRequest, Request } from 'rich-agent'
import { LoaderRequest } from './loader-request'
import { observable, action } from 'mobx'

export interface RequestSettings {
    url: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    data?: {[key: string]: string | number | boolean}
    headers?: {[key: string]: string}
    dataType?: 'text' | 'json'
}

export class SimpleLoader extends BasicRequest implements LoaderRequest {

    @observable status: Request.Status = 'waiting'
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
