// Type definitions for react-highlight.js 1.0
// Project: https://github.com/bvaughn/react-highlight.js
// Definitions by: Christian Murphy <https://github.com/ChristianMurphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentClass, ReactNode } from "react";

/**
 * Props for a Highlight component.
 */
export interface HighlightProps {
    /**
     * Language name to use as a class to signal type to highlight.js.
     */
    language: string;

    /**
     * Language name to use as a class to signal type to highlight.js.
     */
    className?: string | undefined;

    /**
     * Inline styles to apply to the rendered <pre> tag.
     */
    style?: React.CSSProperties | undefined;

    /**
     * Content that will be highlighted
     */
    children?: ReactNode | undefined;
}

/**
 * A lightweight React wrapper around the Highlight.js syntax highlighting library.
 */
declare const Highlight: ComponentClass<HighlightProps>;

export default Highlight;
