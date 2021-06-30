export type RawSourceMap = import("source-map").RawSourceMap;
export type ExtractCommentsOptions =
  import("./index.js").ExtractCommentsOptions;
export type CustomMinifyFunction = import("./index.js").CustomMinifyFunction;
export type TerserMinifyOptions = import("terser").MinifyOptions;
export type MinifyOutput = import("terser").MinifyOutput;
export type FormatOptions = import("terser").FormatOptions;
export type MangleOptions = import("terser").MangleOptions;
export type ExtractCommentsFunction =
  import("./index.js").ExtractCommentsFunction;
export type ExtractCommentsCondition =
  import("./index.js").ExtractCommentsCondition;
export type CustomMinifyOptions = any;
export type InternalMinifyOptions = {
  name: string;
  input: string;
  inputSourceMap?: import("source-map").RawSourceMap | undefined;
  extractComments: ExtractCommentsOptions;
  minify?: import("./index.js").CustomMinifyFunction | undefined;
  minifyOptions: TerserMinifyOptions | CustomMinifyOptions;
};
export type ExtractedComments = Array<string>;
export type InternalMinifyResult = Promise<
  MinifyOutput & {
    extractedComments?: string[];
  }
>;
export type NormalizedTerserMinifyOptions = TerserMinifyOptions & {
  sourceMap: undefined;
} & (
    | {
        output: FormatOptions & {
          beautify: boolean;
        };
      }
    | {
        format: FormatOptions & {
          beautify: boolean;
        };
      }
  );
/**
 * @param {InternalMinifyOptions} options
 * @returns {InternalMinifyResult}
 */
export function minify(options: InternalMinifyOptions): InternalMinifyResult;
/**
 * @param {string} options
 * @returns {InternalMinifyResult}
 */
export function transform(options: string): InternalMinifyResult;
