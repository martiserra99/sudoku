import type { ItemInputs, FlowInputs, CondInputs } from "../../types/state/inputs";
import type { Position } from "../../types/state/position";
/**
 * Creates a `CondInputs` object.
 *
 * @returns The created `CondInputs` object.
 */
export declare function create(): FlowInputs;
/**
 * Clones a `CondInputs` object.
 *
 * @param flow A `CondInputs` object.
 * @returns The cloned `CondInputs` object.
 */
export declare function clone(flow: CondInputs): FlowInputs;
/**
 * Returns the `ItemInputs` object at the given position within the given `CondInputs` object, or `null` if there is no item at the given position.
 *
 * @param flow The `CondInputs` object.
 * @param position The position within the `CondInputs` object.
 * @returns The `ItemInputs` object at the given position within the `CondInputs` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: CondInputs, position: Position): ItemInputs | null;
/**
 * Sets the `ItemInputs` object at the given position within the given `CondInputs` object.
 *
 * @param flow The `CondInputs` object.
 * @param position The position within the `CondInputs` object.
 * @param item The `ItemInputs` object to set.
 */
export declare function setItem(flow: CondInputs, position: Position, item: ItemInputs): void;
//# sourceMappingURL=flow.cond.d.ts.map