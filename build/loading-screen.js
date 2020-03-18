"use strict";
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
const classnames_1 = __importDefault(require("classnames"));
class LoadingScreen extends React.Component {
    render() {
        const { progress, className, size, ...otherProps } = this.props;
        let classSize = 'mdi-18px';
        switch (size) {
            case 'xl':
                classSize = 'mdi-48px';
                break;
            case 'lg':
                classSize = 'mdi-36px';
                break;
            case 'md':
                classSize = 'mdi-24px';
                break;
            case 'sm':
            default:
                classSize = 'mdi-18px';
                break;
        }
        return (React.createElement("div", { className: classnames_1.default('loading-screen', 'text-center', className) },
            React.createElement("div", { className: "loading-screen-indicator" }, progress === 0 ? (React.createElement("i", { className: classnames_1.default('mdi mdi-loading mdi-spin', classSize), "aria-hidden": "true" })) : (React.createElement("div", { className: "progress", style: { height: '1px' } },
                React.createElement("div", { className: classnames_1.default('progress-bar', 'bg-primary'), role: "progressbar", style: { width: progress + '%' } }))))));
    }
}
exports.default = LoadingScreen;
