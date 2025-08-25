import type { ItemEntries, FlowEntries, LoopEntries } from "../../types/flow/entries";
import type { Position } from "../../types/flow/position";
/**
 * Creates a `LoopEntries` object.
 *
 * @returns The created `LoopEntries` object.
 */
export declare function create(): FlowEntries;
/**
 * Clones a `LoopEntries` object.
 *
 * @param flow A `LoopEntries` object.
 * @returns The cloned `LoopEntries` object.
 */
export declare function clone(flow: LoopEntries): FlowEntries;
/**
 * Returns the `ItemEntries` object at the given position within the given `LoopEntries` object, or `null` if there is no item at the given position.
 *
 * @param flow The `LoopEntries` object.
 * @param position The position within the `LoopEntries` object.
 * @returns The `ItemEntries` object at the given position within the `LoopEntries` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: LoopEntries, position: Position): ItemEntries | null;
/**
 * Sets the `ItemEntries` object at the given position within the given `LoopEntries` object.
 *
 * @param flow The `LoopEntries` object.
 * @param position The position within the `LoopEntries` object.
 * @param item The `ItemEntries` object to set.
 */
export declare function setItem(flow: LoopEntries, position: Position, item: ItemEntries): void;
//# sourceMappingURL=flow.loop.d.ts.map