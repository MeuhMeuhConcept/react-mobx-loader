import * as React from 'react';
import cn from 'classnames';
export default class LoadingScreen extends React.Component {
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
        return (React.createElement("div", { className: cn('loading-screen', 'text-center', className) },
            React.createElement("div", { className: "loading-screen-indicator" }, progress === 0 ? (React.createElement("i", { className: cn('mdi mdi-loading mdi-spin', classSize), "aria-hidden": "true" })) : (React.createElement("div", { className: "progress", style: { height: '1px' } },
                React.createElement("div", { className: cn('progress-bar', 'bg-primary'), role: "progressbar", style: { width: progress + '%' } }))))));
    }
}
