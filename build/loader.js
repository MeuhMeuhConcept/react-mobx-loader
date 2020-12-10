"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
const loading_screen_1 = __importDefault(require("./loading-screen"));
const classnames_1 = __importDefault(require("classnames"));
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
        if (this.props.loadingScreen) {
            return React.createElement(this.props.loadingScreen);
        }
        return (React.createElement(loading_screen_1.default, { progress: this.props.loadingInformation.progress, size: this.props.loaderSize, className: this.props.loadingClassname }));
    }
    renderError() {
        let messages = this.props.loadingInformation.errors;
        if (this.props.translateError) {
            messages = messages.map((message, index) => {
                return React.createElement(React.Fragment, null, this.props.translateError ? this.props.translateError(message) : message);
            });
        }
        return (React.createElement("div", { className: classnames_1.default('alert', 'alert-danger') }, messages));
    }
    renderCanceled() {
        return (React.createElement(React.Fragment, null));
    }
    renderDone() {
        return (React.createElement(React.Fragment, null, this.props.children));
    }
};
Loader = __decorate([
    mobx_react_1.observer
], Loader);
exports.default = Loader;
