export declare type devServerOptionsType = {
    bonjour?: boolean | Record<string, any>;
    client?: devServerClientOptions;
    compress?: boolean;
    dev?: Record<string, any>;
    devMiddleware?: Record<string, any>;
    firewall?: boolean | string[];
    headers?: Record<string, unknown>;
    historyApiFallback?: boolean | Record<string, unknown>;
    host?: string | null;
    hot?: boolean | hotOptionEnum;
    http2?: boolean;
    https?: boolean | Record<string, unknown>;
    injectClient?: boolean | (() => void);
    injectHot?: boolean | (() => void);
    liveReload?: boolean;
    onAfterSetupMiddleware?: () => void;
    onBeforeSetupMiddleware?: () => void;
    onListening?: () => void;
    open?: string | boolean | openOptionObject;
    openPage?: string | string[];
    overlay?: boolean | Record<string, unknown>;
    port?: number | string | null;
    profile?: boolean;
    progress?: boolean;
    proxy?: Record<string, unknown> | (Record<string, unknown> | (() => void))[];
    public?: string;
    static?: boolean | string | Record<string, unknown> | (string | Record<string, unknown>)[];
    transportMode?: Record<string, unknown> | string;
    useLocalIp?: boolean;
    publicPath?: string | (() => void);
    stats?: string | boolean;
    watchFiles?: string | Record<string, unknown>;
};
declare enum hotOptionEnum {
    only = "only"
}
declare type devServerClientOptions = {
    host?: string;
    path?: string;
    port?: string | number | null;
    logging?: devServerClientLogging;
    progress?: boolean;
    overlay?: boolean | clientOverlay;
    needClientEntry?: boolean | (() => void);
    needHotEntry?: boolean | (() => void);
};
declare type openOptionObject = {
    target?: string;
    app?: string;
};
declare type clientOverlay = {
    errors?: boolean;
    warnings?: boolean;
};
declare enum devServerClientLogging {
    none = "none",
    error = "error",
    warn = "warn",
    info = "info",
    log = "log",
    verbose = "verbose"
}
export {};
