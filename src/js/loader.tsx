import * as React from 'react'
import { observer } from 'mobx-react'
import { LoaderRequestInformations } from './loader-request'
import LoadingScreen from './loading-screen'
import cn from 'classnames'

interface Props {
    loadingInformation: LoaderRequestInformations,
    translateError?: (message: string) => string
    loaderSize?: 'sm' | 'md' | 'lg' | 'xl'
}

interface State {

}

@observer
export default class Loader extends React.Component<Props, State> {

    constructor (props: Props) {
        super(props)
    }

    render () {
        switch (this.props.loadingInformation.status) {
        case 'waiting':
            return this.renderWaiting()
        case 'pending':
            return this.renderPending()
        case 'error':
            return this.renderError()
        case 'canceled':
            return this.renderCanceled()
        case 'done':
            return this.renderDone()
        }

        return this.renderWaiting()
    }

    renderWaiting () {
        return (
            <></>
        )
    }

    renderPending () {
        return (
            <LoadingScreen progress={this.props.loadingInformation.progress} size={this.props.loaderSize} />
        )
    }

    renderError () {
        let messages: any[] = this.props.loadingInformation.errors

        if (this.props.translateError) {
            messages = messages.map((message: string, index: number) => {
                return <>{this.props.translateError ? this.props.translateError(message) : message}</>
            })
        }

        return (
            <div className={cn('alert', 'alert-danger')}>
                { messages }
            </div>
        )
    }

    renderCanceled () {
        return (
            <></>
        )
    }

    renderDone () {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}
