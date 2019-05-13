export default class _default {
    static defaultProps: {
        element: string;
        raw: boolean;
        src: string;
    };
    constructor(...args: any[]);
    componentWillReceiveProps(_ref: any): void;
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export default namespace _default {
    namespace propTypes {
        function element(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace element {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function raw(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace raw {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function src(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
}
