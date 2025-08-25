import ElementType, { ElementLifecycle } from '../../type/generic/element';
declare class CompositeType extends ElementType {
    protected getLifecycle(): CompositeLifecycle;
}
declare class CompositeLifecycle extends ElementLifecycle {
    setFunctions(): void;
}
export default CompositeType;
//# sourceMappingURL=composite.d.ts.map