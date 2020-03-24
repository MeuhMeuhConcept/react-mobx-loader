var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
let LoaderIndicator = class LoaderIndicator extends React.Component {
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
        if (this.props.waiting === false) {
            return null;
        }
        return (React.createElement("i", { className: cn(this.props.waiting ? this.props.waiting : 'mdi mdi-loading mdi-spin'), "aria-hidden": "true" }));
    }
    renderPending() {
        if (this.props.pending === false) {
            return null;
        }
        return (React.createElement("i", { className: cn(this.props.pending ? this.props.pending : 'mdi mdi-loading mdi-spin text-primary'), "aria-hidden": "true" }));
    }
    renderError() {
        if (this.props.error === false) {
            return null;
        }
        return (React.createElement("i", { className: cn(this.props.error ? this.props.error : 'mdi mdi-exclamation-thick text-danger'), "aria-hidden": "true" }));
    }
    renderCanceled() {
        if (this.props.canceled === false) {
            return null;
        }
        return (React.createElement("i", { className: cn(this.props.canceled ? this.props.canceled : 'mdi mdi-close text-warning'), "aria-hidden": "true" }));
    }
    renderDone() {
        if (this.props.done === false) {
            return null;
        }
        return (React.createElement("i", { className: cn(this.props.done ? this.props.done : 'mdi mdi-check text-success'), "aria-hidden": "true" }));
    }
};
LoaderIndicator = __decorate([
    observer
], LoaderIndicator);
export default LoaderIndicator;
