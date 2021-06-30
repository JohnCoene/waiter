export default TerserPlugin;
export type ExtractedCommentsInfo = {
  extractedCommentsSource: import("webpack").sources.RawSource;
  commentsFilename: string;
};
export type Schema = import("schema-utils/declarations/validate").Schema;
export type Compiler = import("webpack").Compiler;
export type Compilation = import("webpack").Compilation;
export type WebpackError = import("webpack").WebpackError;
export type Asset = import("webpack").Asset;
export type TerserECMA = import("terser").ECMA;
export type TerserMinifyOptions = import("terser").MinifyOptions;
export type JestWorker = import("jest-worker").default;
export type RawSourceMap = import("source-map").RawSourceMap;
export type InternalMinifyOptions = import("./minify.js").InternalMinifyOptions;
export type InternalMinifyResult = import("./minify.js").InternalMinifyResult;
export type CustomMinifyOptions = import("./minify.js").CustomMinifyOptions;
export type Rule = RegExp | string;
export type Rules = Rule[] | Rule;
export type MinifyWorker = MinifyWorker;
export type ExtractCommentsFunction = (
  astNode: any,
  comment: {
    value: string;
    type: "comment1" | "comment2" | "comment3" | "comment4";
    pos: number;
    line: number;
    col: number;
  }
) => boolean;
export type ExtractCommentsCondition =
  | boolean
  | string
  | RegExp
  | ExtractCommentsFunction;
export type ExtractCommentsFilename = string | ((fileData: any) => string);
export type ExtractCommentsBanner =
  | string
  | boolean
  | ((commentsFile: string) => string);
export type ExtractCommentsObject = {
  condition: ExtractCommentsCondition;
  filename: ExtractCommentsFilename;
  banner: ExtractCommentsBanner;
};
export type CustomMinifyFunction = (
  fileAndCode: {
    [file: string]: string;
  },
  sourceMap?: import("source-map").RawSourceMap | undefined,
  minifyOptions: any
) => any;
export type ExtractCommentsOptions =
  | ExtractCommentsCondition
  | ExtractCommentsObject;
export type PluginWithTerserOptions = {
  test?: Rules | undefined;
  include?: Rules | undefined;
  exclude?: Rules | undefined;
  terserOptions?: import("terser").MinifyOptions | undefined;
  extractComments?: ExtractCommentsOptions | undefined;
  parallel?: boolean | undefined;
  minify?: CustomMinifyFunction | undefined;
};
export type PluginWithCustomMinifyOptions = {
  test?: Rules | undefined;
  include?: Rules | undefined;
  exclude?: Rules | undefined;
  terserOptions?: any;
  extractComments?: ExtractCommentsOptions | undefined;
  parallel?: boolean | undefined;
  minify?: CustomMinifyFunction | undefined;
};
export type TerserPluginOptions =
  | PluginWithTerserOptions
  | PluginWithCustomMinifyOptions;
/** @typedef {import("schema-utils/declarations/validate").Schema} Schema */
/** @typedef {import("webpack").Compiler} Compiler */
/** @typedef {import("webpack").Compilation} Compilation */
/** @typedef {import("webpack").WebpackError} WebpackError */
/** @typedef {import("webpack").Asset} Asset */
/** @typedef {import("terser").ECMA} TerserECMA */
/** @typedef {import("terser").MinifyOptions} TerserMinifyOptions */
/** @typedef {import("jest-worker").default} JestWorker */
/** @typedef {import("source-map").RawSourceMap} RawSourceMap */
/** @typedef {import("./minify.js").InternalMinifyOptions} InternalMinifyOptions */
/** @typedef {import("./minify.js").InternalMinifyResult} InternalMinifyResult */
/** @typedef {import("./minify.js").CustomMinifyOptions} CustomMinifyOptions */
/** @typedef {RegExp | string} Rule */
/** @typedef {Rule[] | Rule} Rules */
/** @typedef {JestWorker & { transform: (options: string) => InternalMinifyResult, minify: (options: InternalMinifyOptions) => InternalMinifyResult }} MinifyWorker */
/**
 * @callback ExtractCommentsFunction
 * @param {any} astNode
 * @param {{ value: string, type: 'comment1' | 'comment2' | 'comment3' | 'comment4', pos: number, line: number, col: number }} comment
 * @returns {boolean}
 */
/**
 * @typedef {boolean | string | RegExp | ExtractCommentsFunction} ExtractCommentsCondition
 */
/**
 * @typedef {string | ((fileData: any) => string)} ExtractCommentsFilename
 */
/**
 * @typedef {boolean | string | ((commentsFile: string) => string)} ExtractCommentsBanner
 */
/**
 * @typedef {Object} ExtractCommentsObject
 * @property {ExtractCommentsCondition} condition
 * @property {ExtractCommentsFilename} filename
 * @property {ExtractCommentsBanner} banner
 */
/**
 * @callback CustomMinifyFunction
 * @param {{ [file: string]: string }} fileAndCode
 * @param {RawSourceMap} [sourceMap]
 * @param {Object.<any, any>} minifyOptions
 */
/**
 * @typedef {ExtractCommentsCondition | ExtractCommentsObject} ExtractCommentsOptions
 */
/**
 * @typedef {Object} PluginWithTerserOptions
 * @property {Rules} [test]
 * @property {Rules} [include]
 * @property {Rules} [exclude]
 * @property {TerserMinifyOptions} [terserOptions]
 * @property {ExtractCommentsOptions} [extractComments]
 * @property {boolean} [parallel]
 * @property {CustomMinifyFunction} [minify]
 */
/**
 * @typedef {Object} PluginWithCustomMinifyOptions
 * @property {Rules} [test]
 * @property {Rules} [include]
 * @property {Rules} [exclude]
 * @property {Object.<any, any>} [terserOptions]
 * @property {ExtractCommentsOptions} [extractComments]
 * @property {boolean} [parallel]
 * @property {CustomMinifyFunction} [minify]
 */
/**
 * @typedef {PluginWithTerserOptions | PluginWithCustomMinifyOptions} TerserPluginOptions
 */
declare class TerserPlugin {
  /**
   * @private
   * @param {any} input
   * @returns {boolean}
   */
  private static isSourceMap;
  /**
   * @private
   * @param {Error & { line: number, col: number}} error
   * @param {string} file
   * @param {Compilation["requestShortener"]} [requestShortener]
   * @param {SourceMapConsumer} [sourceMap]
   * @returns {Error}
   */
  private static buildError;
  /**
   * @private
   * @param {boolean} parallel
   * @returns {number}
   */
  private static getAvailableNumberOfCores;
  /**
   * @private
   * @param {any} environment
   * @returns {TerserECMA}
   */
  private static getEcmaVersion;
  /**
   * @param {TerserPluginOptions} options
   */
  constructor(options?: TerserPluginOptions);
  options: {
    test: Rules;
    extractComments: ExtractCommentsOptions;
    parallel: boolean;
    include: Rules | undefined;
    exclude: Rules | undefined;
    minify: CustomMinifyFunction | undefined;
    terserOptions: any;
  };
  /**
   * @param {Compiler} compiler
   * @param {Compilation} compilation
   * @param {Record<string, import("webpack").sources.Source>} assets
   * @param {{availableNumberOfCores: number}} optimizeOptions
   * @returns {Promise<void>}
   */
  optimize(
    compiler: Compiler,
    compilation: Compilation,
    assets: Record<string, import("webpack").sources.Source>,
    optimizeOptions: {
      availableNumberOfCores: number;
    }
  ): Promise<void>;
  /**
   * @param {Compiler} compiler
   * @returns {void}
   */
  apply(compiler: Compiler): void;
}
