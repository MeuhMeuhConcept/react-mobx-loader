export declare class LoaderManager {
    protected _contentStrategy: ContentStrategy;
    get contentStrategy(): ContentStrategy;
    set contentStrategy(v: ContentStrategy);
}
export declare const Manager: LoaderManager;
export declare type ContentStrategy = 'wait' | 'show';
