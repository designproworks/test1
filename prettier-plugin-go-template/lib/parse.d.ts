import { Parser } from "prettier";
export declare const parseGoTemplate: Parser<GoNode>["parse"];
export declare type GoNode = GoRoot | GoBlock | GoInline | GoMultiBlock | GoUnformattable;
export declare type GoBlockKeyword = "if" | "range" | "block" | "with" | "define" | "else" | "prettier-ignore-start" | "prettier-ignore-end" | "end";
export declare type GoRoot = {
    type: "root";
} & Omit<GoBlock, "type" | "keyword" | "parent" | "statement" | "id" | "startDelimiter" | "endDelimiter" | "start" | "end">;
export interface GoBaseNode<Type extends string> {
    id: string;
    type: Type;
    index: number;
    length: number;
    parent: GoBlock | GoRoot | GoMultiBlock;
}
export interface GoBlock extends GoBaseNode<"block">, WithDelimiter {
    keyword: GoBlockKeyword;
    children: {
        [id: string]: GoNode;
    };
    start: GoInline;
    end: GoInline | null;
    content: string;
    aliasedContent: string;
    contentStart: number;
}
export interface GoMultiBlock extends GoBaseNode<"double-block"> {
    blocks: (GoBlock | GoMultiBlock)[];
    keyword: GoBlockKeyword;
}
export declare type GoSharedDelimiter = "%" | "-" | "";
export declare type GoInlineStartDelimiter = "<" | "/*" | GoSharedDelimiter;
export declare type GoInlineEndDelimiter = ">" | "*/" | GoSharedDelimiter;
export interface GoUnformattable extends GoBaseNode<"unformattable"> {
    content: string;
}
export interface WithDelimiter {
    startDelimiter: GoInlineStartDelimiter;
    endDelimiter: GoInlineEndDelimiter;
}
export interface GoInline extends GoBaseNode<"inline">, WithDelimiter {
    statement: string;
}
export declare function isInline(node: GoNode): node is GoInline;
export declare function isBlock(node: GoNode): node is GoBlock;
export declare function isMultiBlock(node: GoNode): node is GoMultiBlock;
export declare function isRoot(node: GoNode): node is GoRoot;
export declare function isUnformattable(node: GoNode): node is GoRoot;
