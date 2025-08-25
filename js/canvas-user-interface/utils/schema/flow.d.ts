import type { ItemSchema, FlowSchema } from "../../types/schema/model";
import type { Position } from "../../types/state/position";
/**
 * Type guard for `FlowSchema` objects.
 *
 * @param schema An `ItemSchema` object.
 * @returns A boolean indicating whether the `schema` is a `FlowSchema` object.
 */
export declare function is(schema: ItemSchema): schema is FlowSchema;
/**
 * Returns the initial position for the given `FlowSchema` object if there is an initial position, otherwise it returns `null`.
 *
 * @param schema A `FlowSchema` object.
 * @param values An object containing the generated values within the multi-step form.
 * @returns A `Position` object representing the initial position, or `null` if there is no initial position.
 */
export declare function into(schema: FlowSchema, values: object): Position | null;
/**
 * Returns the next position for the given `FlowSchema` object if there is a next position, otherwise it returns `null`.
 *
 * @param schema A `FlowSchema` object.
 * @param position A `Position` object representing the current position.
 * @param values An object containing the generated values within the multi-step form.
 * @returns A `Position` object representing the next position, or `null` if there is no next position.
 */
export declare function next(schema: FlowSchema, position: Position, values: object): Position | null;
/**
 * Returns the `ItemSchema` object at the given position within the given `FlowSchema` object.
 *
 * @param schema The `FlowSchema` object.
 * @param position The position within the `FlowSchema` object.
 * @returns The `ItemSchema` object at the given position within the `FlowSchema` object.
 */
export declare function at(schema: FlowSchema, position: Position): ItemSchema;
/**
 * Returns the `ItemSchema` object at the given path within the given `FlowSchema` object.
 *
 * @param schema The `FlowSchema` object.
 * @param path The path within the `FlowSchema` object.
 * @returns The `ItemSchema` object at the given path within the `FlowSchema` object.
 */
export declare function find(schema: FlowSchema, path: Position[]): ItemSchema;
//# sourceMappingURL=flow.d.ts.map