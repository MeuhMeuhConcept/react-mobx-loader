import * as React from 'react';
import * as LoaderRequest from './loader-request';
import { ContentStrategy } from './manager';
interface Props {
    loadingInformation: LoaderRequest.Informations;
    translateError?: (message: string) => string;
    loaderSize?: 'sm' | 'md' | 'lg' | 'xl';
    loadingClassname?: string;
    loadingScreen?: React.ComponentClass;
    contentStrategy?: ContentStrategy;
}
interface State {
}
export default class Loader extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
    renderWaiting(): JSX.Element;
    renderPending(): JSX.Element;
    renderError(): JSX.Element;
    renderCanceled(): JSX.Element;
    renderDone(): JSX.Element;
}
export {};
