import { Parser, Printer, SupportLanguage } from "prettier";
import { GoNode } from "./parse";
export declare type PrettierPluginGoTemplateParserOptions = {
    goTemplateBracketSpacing: boolean;
};
export declare const options: {
    [K in keyof PrettierPluginGoTemplateParserOptions]: any;
};
export declare const languages: SupportLanguage[];
export declare const parsers: {
    "go-template": Parser<GoNode>;
};
export declare const printers: {
    "go-template": Printer<GoNode>;
};
