import type { ItemInputs, FlowInputs, SwitchInputs } from "../../types/state/inputs";
import type { Position } from "../../types/state/position";
/**
 * Creates a `SwitchInputs` object.
 *
 * @returns The created `SwitchInputs` object.
 */
export declare function create(): FlowInputs;
/**
 * Clones a `SwitchInputs` object.
 *
 * @param flow A `SwitchInputs` object.
 * @returns The cloned `SwitchInputs` object.
 */
export declare function clone(flow: SwitchInputs): FlowInputs;
/**
 * Returns the `ItemInputs` object at the given position within the given `SwitchInputs` object, or `null` if there is no item at the given position.
 *
 * @param flow The `SwitchInputs` object.
 * @param position The position within the `SwitchInputs` object.
 * @returns The `ItemInputs` object at the given position within the `SwitchInputs` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: SwitchInputs, position: Position): ItemInputs | null;
/**
 * Sets the `ItemInputs` object at the given position within the given `SwitchInputs` object.
 *
 * @param flow The `SwitchInputs` object.
 * @param position The position within the `SwitchInputs` object.
 * @param item The `ItemInputs` object to set.
 */
export declare function setItem(flow: SwitchInputs, position: Position, item: ItemInputs): void;
//# sourceMappingURL=flow.switch.d.ts.map