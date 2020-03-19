import { SimpleLoader } from './simple-loader'

export class JsonLoader extends SimpleLoader {

    transformResponseData (data: string): boolean {
        try {
            this._responseData = JSON.parse(this._responseData)
        } catch (e) {
            this._responseTextStatus = 'json_parse_error'
            return false
        }

        return true
    }
}
