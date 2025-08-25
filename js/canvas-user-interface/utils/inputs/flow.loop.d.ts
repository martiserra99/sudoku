import type { ItemInputs, FlowInputs, LoopInputs } from "../../types/state/inputs";
import type { Position } from "../../types/state/position";
/**
 * Creates a `LoopInputs` object.
 *
 * @returns The created `LoopInputs` object.
 */
export declare function create(): FlowInputs;
/**
 * Clones a `LoopInputs` object.
 *
 * @param flow A `LoopInputs` object.
 * @returns The cloned `LoopInputs` object.
 */
export declare function clone(flow: LoopInputs): FlowInputs;
/**
 * Returns the `ItemInputs` object at the given position within the given `LoopInputs` object, or `null` if there is no item at the given position.
 *
 * @param flow The `LoopInputs` object.
 * @param position The position within the `LoopInputs` object.
 * @returns The `ItemInputs` object at the given position within the `LoopInputs` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: LoopInputs, position: Position): ItemInputs | null;
/**
 * Sets the `ItemInputs` object at the given position within the given `LoopInputs` object.
 *
 * @param flow The `LoopInputs` object.
 * @param position The position within the `LoopInputs` object.
 * @param item The `ItemInputs` object to set.
 */
export declare function setItem(flow: LoopInputs, position: Position, item: ItemInputs): void;
//# sourceMappingURL=flow.loop.d.ts.map