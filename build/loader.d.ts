import * as React from 'react';
import * as LoaderRequest from './loader-request';
interface Props {
    loadingInformation: LoaderRequest.Informations;
    translateError?: (message: string) => string;
    loaderSize?: 'sm' | 'md' | 'lg' | 'xl';
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
