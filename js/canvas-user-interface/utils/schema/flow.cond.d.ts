import type { ItemSchema, CondSchema } from "../../types/schema/model";
import type { Position } from "../../types/state/position";
/**
 * Type guard for `CondSchema` objects.
 *
 * @param schema An `ItemSchema` object.
 * @returns A boolean indicating whether the `schema` is a `CondSchema` object.
 */
export declare function is(schema: ItemSchema): schema is CondSchema;
/**
 * Returns the initial position for the given `CondSchema` object if there is an initial position, otherwise it returns `null`.
 *
 * @param schema A `CondSchema` object.
 * @param values An object containing the generated values within the multi-step form.
 * @returns A `Position` object representing the initial position, or `null` if there is no initial position.
 */
export declare function into(schema: CondSchema, values: object): Position | null;
/**
 * Returns the next position for the given `CondSchema` object if there is a next position, otherwise it returns `null`.
 *
 * @param schema A `CondSchema` object.
 * @param position A `Position` object representing the current position.
 * @returns A `Position` object representing the next position, or `null` if there is no next position.
 */
export declare function next(schema: CondSchema, position: Position): Position | null;
/**
 * Returns the `ItemSchema` object at the given position within the given `CondSchema` object.
 *
 * @param schema The `CondSchema` object.
 * @param position The position within the `CondSchema` object.
 * @returns The `ItemSchema` object at the given position within the `CondSchema` object.
 */
export declare function at(schema: CondSchema, position: Position): ItemSchema;
//# sourceMappingURL=flow.cond.d.ts.map