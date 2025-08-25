import type { ItemEntries, FlowEntries } from "../../types/flow/entries";
import type { Position } from "../../types/flow/position";
/**
 * Returns the value that is in the given `FlowEntries` object using the following parameters:
 *
 * - `path`: The path within the `FlowEntries` object that contains a `FormEntries` object.
 * - `name`: The name of the value within the `FormEntries` object.
 * - `keys`: The list of keys that is used to access the value within the `FormEntries` object.
 * - `defaultValue`: The default value to return if the value is not found.
 *
 * @param flow The `FlowEntries` object.
 * @param path The path within the `FlowEntries` object that contains a `FormEntries` object.
 * @param name The name of the value within the `FormEntries` object.
 * @param keys The list of keys that is used to access the value within the `FormEntries` object.
 * @param defaultValue The default value to return if the value is not found.
 * @returns The value that is in the given `FlowEntries` object or the default value if the value is not found.
 */
export declare function get(flow: FlowEntries, path: Position[], name: string, keys: PropertyKey[], defaultValue: unknown): unknown;
/**
 * Sets the value in the given `FlowEntries` object using the following parameters:
 *
 * - `path`: The path within the `FlowEntries` object that contains a `FormEntries` object.
 * - `name`: The name of the value within the `FormEntries` object.
 * - `keys`: The list of keys that is used to access the value within the `FormEntries` object.
 * - `value`: The value to set.
 *
 * @param flow The `FlowEntries` object.
 * @param path The path within the `FlowEntries` object that contains a `FormEntries` object.
 * @param name The name of the value within the `FormEntries` object.
 * @param keys The list of keys that is used to access the value within the `FormEntries` object.
 * @param data The value to set.
 * @returns The updated `FlowEntries` object.
 */
export declare function set(flow: FlowEntries, path: Position[], name: string, keys: PropertyKey[], data: unknown): FlowEntries;
/**
 * Creates a `FlowEntries` object.
 *
 * @returns The created `FlowEntries` object.
 */
export declare function create(position: Position): FlowEntries;
/**
 * Clones a `FlowEntries` object.
 *
 * @param flow A `FlowEntries` object.
 * @returns The cloned `FlowEntries` object.
 */
export declare function clone(flow: FlowEntries): FlowEntries;
/**
 * Returns the `ItemEntries` object at the given position within the given `FlowEntries` object, or `null` if there is no item at the given position.
 *
 * @param flow The `FlowEntries` object.
 * @param position The position within the `FlowEntries` object.
 * @returns The `ItemEntries` object at the given position within the `FlowEntries` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: FlowEntries, position: Position): ItemEntries | null;
/**
 * Sets the `ItemEntries` object at the given position within the given `FlowEntries` object.
 *
 * @param flow The `FlowEntries` object.
 * @param position The position within the `FlowEntries` object.
 * @param item The `ItemEntries` object to set.
 */
export declare function setItem(flow: FlowEntries, position: Position, item: ItemEntries): void;
//# sourceMappingURL=flow.d.ts.map