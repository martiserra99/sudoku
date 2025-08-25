import type { ItemInputs, FlowInputs } from "../../types/state/inputs";
import type { Position } from "../../types/state/position";
/**
 * Returns the value that is in the given `FlowInputs` object using the following parameters:
 *
 * - `path`: The path within the `FlowInputs` object that contains a `FormInputs` object.
 * - `name`: The name of the value within the `FormInputs` object.
 * - `keys`: The list of keys that is used to access the value within the `FormInputs` object.
 * - `defaultValue`: The default value to return if the value is not found.
 *
 * @param flow The `FlowInputs` object.
 * @param path The path within the `FlowInputs` object that contains a `FormInputs` object.
 * @param name The name of the value within the `FormInputs` object.
 * @param keys The list of keys that is used to access the value within the `FormInputs` object.
 * @param defaultValue The default value to return if the value is not found.
 * @returns The value that is in the given `FlowInputs` object or the default value if the value is not found.
 */
export declare function get(flow: FlowInputs, path: Position[], name: string, keys: PropertyKey[], defaultValue: unknown): unknown;
/**
 * Sets the value in the given `FlowInputs` object using the following parameters:
 *
 * - `path`: The path within the `FlowInputs` object that contains a `FormInputs` object.
 * - `name`: The name of the value within the `FormInputs` object.
 * - `keys`: The list of keys that is used to access the value within the `FormInputs` object.
 * - `value`: The value to set.
 *
 * @param flow The `FlowInputs` object.
 * @param path The path within the `FlowInputs` object that contains a `FormInputs` object.
 * @param name The name of the value within the `FormInputs` object.
 * @param keys The list of keys that is used to access the value within the `FormInputs` object.
 * @param data The value to set.
 * @returns The updated `FlowInputs` object.
 */
export declare function set(flow: FlowInputs, path: Position[], name: string, keys: PropertyKey[], data: unknown): FlowInputs;
/**
 * Creates a `FlowInputs` object.
 *
 * @returns The created `FlowInputs` object.
 */
export declare function create(position: Position): FlowInputs;
/**
 * Clones a `FlowInputs` object.
 *
 * @param flow A `FlowInputs` object.
 * @returns The cloned `FlowInputs` object.
 */
export declare function clone(flow: FlowInputs): FlowInputs;
/**
 * Returns the `ItemInputs` object at the given position within the given `FlowInputs` object, or `null` if there is no item at the given position.
 *
 * @param flow The `FlowInputs` object.
 * @param position The position within the `FlowInputs` object.
 * @returns The `ItemInputs` object at the given position within the `FlowInputs` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: FlowInputs, position: Position): ItemInputs | null;
/**
 * Sets the `ItemInputs` object at the given position within the given `FlowInputs` object.
 *
 * @param flow The `FlowInputs` object.
 * @param position The position within the `FlowInputs` object.
 * @param item The `ItemInputs` object to set.
 */
export declare function setItem(flow: FlowInputs, position: Position, item: ItemInputs): void;
//# sourceMappingURL=flow.d.ts.map