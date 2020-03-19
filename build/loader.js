var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { observer } from 'mobx-react';
import LoadingScreen from './loading-screen';
import cn from 'classnames';
let Loader = class Loader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        switch (this.props.loadingInformation.status) {
            case 'waiting':
                return this.renderWaiting();
            case 'pending':
                return this.renderPending();
            case 'error':
                return this.renderError();
            case 'canceled':
                return this.renderCanceled();
            case 'done':
                return this.renderDone();
        }
        return this.renderWaiting();
    }
    renderWaiting() {
        return (React.createElement(React.Fragment, null));
    }
    renderPending() {
        return (React.createElement(LoadingScreen, { progress: this.props.loadingInformation.progress, size: this.props.loaderSize }));
    }
    renderError() {
        let messages = this.props.loadingInformation.errors;
        if (this.props.translateError) {
            messages = messages.map((message, index) => {
                return React.createElement(React.Fragment, null, this.props.translateError ? this.props.translateError(message) : message);
            });
        }
        return (React.createElement("div", { className: cn('alert', 'alert-danger') }, messages));
    }
    renderCanceled() {
        return (React.createElement(React.Fragment, null));
    }
    renderDone() {
        return (React.createElement(React.Fragment, null, this.props.children));
    }
};
Loader = __decorate([
    observer
], Loader);
export default Loader;
