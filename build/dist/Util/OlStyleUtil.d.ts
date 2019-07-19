import { TextSymbolizer } from 'geostyler-style';
/**
 * Offers some utility functions to work with OpenLayers Styles.
 */
declare class OlStyleUtil {
    /**
     * Transforms a HEX encoded color and an opacity value to a RGB(A) notation.
     *
     * @param {string} colorString HEX encoded color
     * @param {number} opacity  Opacity (Betweeen 0 and 1)
     * @return {string} the RGB(A) value of the input color
     */
    static getRgbaColor(colorString: string, opacity: number): string | undefined;
    /**
     * Splits a RGBA encoded color into its color values.
     *
     * @param {string} rgbaColor RGB(A) encoded color
     * @return {number[]} Numeric color values as array
     */
    static splitRgbaColor(rgbaColor: string): number[];
    /**
     * Transforms a RGB(A) color value to a HEX encoded notation.
     * If a HEX color is provided it will be returned untransformed.
     *
     * @param {string} inColor The color to transform
     * @return {string | undefined} The HEX color representation of the given color
     */
    static getHexColor(inColor: string): string | undefined;
    /**
     * Returns the opacity value of a RGB(A) color value.
     *
     * @param rgbaColor RGBA encoded color
     * @return {string | undefined} The opacity value of the given RGBA color
     */
    static getOpacity(rgbaColor: string): number | undefined;
    /**
     * Returns an OL compliant font string.
     *
     * @param symbolizer The TextSymbolizer to derive the font string from
     */
    static getTextFont(symbolizer: TextSymbolizer): string;
    /**
     * Resolves the given template string with the given feature attributes, e.g.
     * the template "Size of area is {{AREA_SIZE}} km²" would be to resolved
     * to "Size of area is 1909 km²" (assuming the feature's attribute AREA_SIZE
     * really exists).
     *
     * @param {ol.Feature} feature The feature to get the attributes from.
     * @param {String} template The template string to resolve.
     * @param {String} [noValueFoundText] The text to apply, if the templated value
     *   could not be found, default is to 'n.v.'.
     * @param {Function} [valueAdjust] A method that will be called with each
     *   key/value match, we'll use what this function returns for the actual
     *   replacement. Optional, defaults to a function which will return the raw
     *   value it received. This can be used for last minute adjustments before
     *   replacing happens, e.g. to filter out falsy values or to do number
     *   formatting and such.
     * @return {String} The resolved template string.
     */
    static resolveAttributeTemplate(feature: any, template: string, noValueFoundText?: string, valueAdjust?: Function): string;
}
export default OlStyleUtil;
