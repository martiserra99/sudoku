import ElementType, { ElementLifecycle } from '../../type/generic/element';
declare class ViewType extends ElementType {
    protected getLifecycle(): ViewLifecycle;
}
declare class ViewLifecycle extends ElementLifecycle {
    protected setFunctions(): void;
}
export default ViewType;
//# sourceMappingURL=view.d.ts.map