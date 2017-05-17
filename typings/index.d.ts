declare namespace Omnibar {
    // Result set
    type ListResult<T> = Array<T>;
    type ResolvedResults<T> = Promise<ListResult<T>>;
    type Results<T> = ListResult<T> | ResolvedResults<T>;

    // Extensions
    type FunctionalExtension<T> = (query: string) => Results<T>;
    type Extension<T> = FunctionalExtension<T>;

    interface Props<T> {
        // list of extensions
        extensions: Array<Omnibar.Extension<T>>;
        // max items
        maxResults?: number;
        // max items to display in view
        maxViewableResults?: number;
        // optional input placeholder text
        placeholder?: string;
        // optional input bar width
        width?: number;
        // optional input bar height
        height?: number;
        // optional input bar style override
        inputStyle?: React.CSSProperties
        // optional result item height
        rowHeight?: number;
        // optional result item style override
        rowStyle?: React.CSSProperties;
        // optional result list style override
        resultStyle?: React.CSSProperties;
        // optional result renderering function
        resultRenderer?: <T>(item: T) => React.ReactChild;
        // optional action override
        onAction?: <T>(item: T) => void;
        // optional input delay override
        inputDelay?: number;
    }

    interface State<T> {
        // list of matching results
        results: Array<T>;
        // current selected index
        selectedIndex: number;
        // display results?
        displayResults: boolean;
    }
}


declare module 'omnibar' {
    export default class Omnibar<T> extends React.Component<Omnibar.Props<T>, Omnibar.State<T>> { }
}
