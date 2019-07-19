import { Style, StyleParser, Rule, Symbolizer, MarkSymbolizer, LineSymbolizer, FillSymbolizer, TextSymbolizer, StyleType, PointSymbolizer, IconSymbolizer, Filter } from 'geostyler-style';
export declare type OlParserStyleFct = Function & {
    __geoStylerStyle: Style;
};
/**
 * This parser can be used with the GeoStyler.
 * It implements the GeoStyler-Style Parser interface to work with OpenLayers styles.
 *
 * @class OlStyleParser
 * @implements StyleParser
 */
export declare class OlStyleParser implements StyleParser {
    /**
     * The name of the OlStyleParser.
     */
    static title: string;
    title: string;
    OlStyleConstructor: any;
    OlStyleImageConstructor: any;
    OlStyleFillConstructor: any;
    OlStyleStrokeConstructor: any;
    OlStyleTextConstructor: any;
    OlStyleCircleConstructor: any;
    OlStyleIconConstructor: any;
    OlStyleRegularshapeConstructor: any;
    isOlParserStyleFct: (x: any) => x is OlParserStyleFct;
    constructor(ol?: any);
    /**
     * Get the GeoStyler-Style PointSymbolizer from an OpenLayers Style object.
     *
     * @param {object} olStyle The OpenLayers Style object
     * @return {PointSymbolizer} The GeoStyler-Style PointSymbolizer
     */
    getPointSymbolizerFromOlStyle(olStyle: any): PointSymbolizer;
    /**
     * Get the GeoStyler-Style LineSymbolizer from an OpenLayers Style object.
     *
     * @param {object} olStyle The OpenLayers Style object
     * @return {LineSymbolizer} The GeoStyler-Style LineSymbolizer
     */
    getLineSymbolizerFromOlStyle(olStyle: any): LineSymbolizer;
    /**
     * Get the GeoStyler-Style FillSymbolizer from an OpenLayers Style object.
     *
     * PolygonSymbolizer Stroke is just partially supported.
     *
     * @param {OlStyle} olStyle The OpenLayers Style object
     * @return {FillSymbolizer} The GeoStyler-Style FillSymbolizer
     */
    getFillSymbolizerFromOlStyle(olStyle: any): FillSymbolizer;
    /**
     * Get the GeoStyler-Style TextSymbolizer from an OpenLayers Style object.
     *
     *
     * @param {OlStyle} olStyle The OpenLayers Style object
     * @return {TextSymbolizer} The GeoStyler-Style TextSymbolizer
     */
    getTextSymbolizerFromOlStyle(olStyle: any): TextSymbolizer;
    /**
     * Get the GeoStyler-Style Symbolizer from an OpenLayers Style object.
     *
     * @param {OlStyle} olStyle The OpenLayers Style object
     * @return {Symbolizer[]} The GeoStyler-Style Symbolizer array
     */
    getSymbolizersFromOlStyle(olStyles: any[]): Symbolizer[];
    /**
     * Get the GeoStyler-Style Rule from an OpenLayers Style object.
     *
     * @param {OlStyle} olStyle The OpenLayers Style object
     * @return {Rule} The GeoStyler-Style Rule
     */
    getRuleFromOlStyle(olStyles: any): Rule;
    /**
     * Get the GeoStyler-Style Symbolizer from an OpenLayers Style object.
     *
     * @param {OlStyle} olStyle The OpenLayers Style object
     * @return {Symbolizer} The GeoStyler-Style Symbolizer
     */
    getStyleTypeFromOlStyle(olStyle: any): StyleType;
    /**
     * Get the GeoStyler-Style Style from an OpenLayers Style object.
     *
     * @param {object} olStyle The OpenLayers Style object
     * @return {Style} The GeoStyler-Style Style
     */
    olStyleToGeoStylerStyle(olStyle: any): Style;
    /**
     * The readStyle implementation of the GeoStyler-Style StyleParser interface.
     * It reads an OpenLayers Style, an array of OpenLayers Styles or an olParserStyleFct and returns a Promise.
     *
     * The Promise itself resolves with a GeoStyler-Style Style.
     *
     * @param {OlStyle|OlStyle[]|OlParserStyleFct} olStyle The style to be parsed
     * @return {Promise} The Promise resolving with the GeoStyler-Style Style
     */
    readStyle(olStyle: any): Promise<Style>;
    /**
     * The writeStyle implementation of the GeoStyler-Style StyleParser interface.
     * It reads a GeoStyler-Style Style and returns a Promise.
     * The Promise itself resolves one of three types
     *
     * 1. OlStyle if input Style consists of
     *    one rule with one symbolizer, no filter, no scaleDenominator, no TextSymbolizer
     * 2. OlStyle[] if input Style consists of
     *    one rule with multiple symbolizers, no filter, no scaleDenominator, no TextSymbolizer
     * 3. OlParserStyleFct for everything else
     *
     * @param {Style} geoStylerStyle A GeoStyler-Style Style.
     * @return {Promise} The Promise resolving with one of above mentioned style types.
     */
    writeStyle(geoStylerStyle: Style): Promise<(any)>;
    /**
     * Decides which OlStyleType should be returned depending on given geoStylerStyle.
     * Three OlStyleTypes are possible:
     *
     * 1. OlStyle if input Style consists of
     *    one rule with one symbolizer, no filter, no scaleDenominator, no TextSymbolizer
     * 2. OlStyle[] if input Style consists of
     *    one rule with multiple symbolizers, no filter, no scaleDenominator, no TextSymbolizer
     * 3. OlParserStyleFct for everything else
     *
     * @param {geoStylerStyle} A GeoStyler-Style Style
     * @return {OlStyle|OlStyle[]|OlParserStyleFct}
     */
    getOlStyleTypeFromGeoStylerStyle(geoStylerStyle: Style): any;
    /**
     * Parses the first symbolizer of the first rule of a GeoStyler-Style Style.
     *
     * @param {geoStylerStyle} A GeoStyler-Style Style
     * @return {OlStyle} An OpenLayers Style Object
     */
    geoStylerStyleToOlStyle(geoStylerStyle: Style): any;
    /**
     * Parses all symbolizers of the first rule of a GeoStyler-Style Style.
     *
     * @param {geoStylerStyle} A GeoStyler-Style Style
     * @return {OlStyle[]} An array of OpenLayers Style Objects
     */
    geoStylerStyleToOlStyleArray(geoStylerStyle: Style): any[];
    /**
     * Get the OpenLayers Style object from an GeoStyler-Style Style
     *
     * @param {Style} geoStylerStyle A GeoStyler-Style Style.
     * @return {OlParserStyleFct} An OlParserStyleFct
     */
    geoStylerStyleToOlParserStyleFct(geoStylerStyle: Style): OlParserStyleFct;
    /**
     * Checks if a feature matches given filter expression(s)
     * @param feature ol.Feature
     * @param filter Filter
     * @return boolean true if feature matches filter expression
     */
    geoStylerFilterToOlParserFilter(feature: any, filter: Filter): boolean;
    /**
     * Get the OpenLayers Style object or an OL StyleFunction from an
     * GeoStyler-Style Symbolizer.
     *
     * @param {Symbolizer} symbolizer A GeoStyler-Style Symbolizer.
     * @return {object} The OpenLayers Style object or a StyleFunction
     */
    getOlSymbolizerFromSymbolizer(symbolizer: Symbolizer): any;
    /**
     * Get the OL Style object  from an GeoStyler-Style MarkSymbolizer.
     *
     * @param {MarkSymbolizer} markSymbolizer A GeoStyler-Style MarkSymbolizer.
     * @return {object} The OL Style object
     */
    getOlPointSymbolizerFromMarkSymbolizer(markSymbolizer: MarkSymbolizer): any;
    /**
     * Get the OL Style object  from an GeoStyler-Style IconSymbolizer.
     *
     * @param {IconSymbolizer} symbolizer  A GeoStyler-Style IconSymbolizer.
     * @return {object} The OL Style object
     */
    getOlIconSymbolizerFromIconSymbolizer(symbolizer: IconSymbolizer): any;
    /**
     * Get the OL Style object from an GeoStyler-Style LineSymbolizer.
     *
     * @param {LineSymbolizer} lineSymbolizer A GeoStyler-Style LineSymbolizer.
     * @return {object} The OL Style object
     */
    getOlLineSymbolizerFromLineSymbolizer(symbolizer: LineSymbolizer): any;
    /**
     * Get the OL Style object from an GeoStyler-Style FillSymbolizer.
     *
     * @param {FillSymbolizer} fillSymbolizer A GeoStyler-Style FillSymbolizer.
     * @return {object} The OL Style object
     */
    getOlPolygonSymbolizerFromFillSymbolizer(symbolizer: FillSymbolizer): any;
    /**
     * Get the OL StyleFunction object from an GeoStyler-Style TextSymbolizer.
     *
     * @param {TextSymbolizer} textSymbolizer A GeoStyler-Style TextSymbolizer.
     * @return {object} The OL StyleFunction
     */
    getOlTextSymbolizerFromTextSymbolizer(symbolizer: TextSymbolizer): any;
}
export default OlStyleParser;
