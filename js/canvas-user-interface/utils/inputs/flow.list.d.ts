import type { ItemInputs, FlowInputs, ListInputs } from "../../types/state/inputs";
import type { Position } from "../../types/state/position";
/**
 * Creates a `ListInputs` object.
 *
 * @returns The created `ListInputs` object.
 */
export declare function create(): FlowInputs;
/**
 * Clones a `ListInputs` object.
 *
 * @param flow A `ListInputs` object.
 * @returns The cloned `ListInputs` object.
 */
export declare function clone(flow: ListInputs): FlowInputs;
/**
 * Returns the `ItemInputs` object at the given position within the given `ListInputs` object, or `null` if there is no item at the given position.
 *
 * @param flow The `ListInputs` object.
 * @param position The position within the `ListInputs` object.
 * @returns The `ItemInputs` object at the given position within the `ListInputs` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: ListInputs, position: Position): ItemInputs | null;
/**
 * Sets the `ItemInputs` object at the given position within the given `ListInputs` object.
 *
 * @param flow The `ListInputs` object.
 * @param position The position within the `ListInputs` object.
 * @param item The `ItemInputs` object to set.
 */
export declare function setItem(flow: ListInputs, position: Position, item: ItemInputs): void;
//# sourceMappingURL=flow.list.d.ts.map