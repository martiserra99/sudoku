import type { ItemSchema, SwitchSchema } from "../../types/schema/model";
import type { Position } from "../../types/state/position";
/**
 * Type guard for `SwitchSchema` objects.
 *
 * @param schema An `ItemSchema` object.
 * @returns A boolean indicating whether the `schema` is a `SwitchSchema` object.
 */
export declare function is(schema: ItemSchema): schema is SwitchSchema;
/**
 * Returns the initial position for the given `SwitchSchema` object if there is an initial position, otherwise it returns `null`.
 *
 * @param schema A `SwitchSchema` object.
 * @param values An object containing the generated values within the multi-step form.
 * @returns A `Position` object representing the initial position, or `null` if there is no initial position.
 */
export declare function into(schema: SwitchSchema, values: object): Position | null;
/**
 * Returns the next position for the given `SwitchSchema` object if there is a next position, otherwise it returns `null`.
 *
 * @param schema A `SwitchSchema` object.
 * @param position A `Position` object representing the current position.
 * @returns A `Position` object representing the next position, or `null` if there is no next position.
 */
export declare function next(schema: SwitchSchema, position: Position): Position | null;
/**
 * Returns the `ItemSchema` object at the given position within the given `SwitchSchema` object.
 *
 * @param schema The `SwitchSchema` object.
 * @param position The position within the `SwitchSchema` object.
 * @returns The `ItemSchema` object at the given position within the `SwitchSchema` object.
 */
export declare function at(schema: SwitchSchema, position: Position): ItemSchema;
//# sourceMappingURL=flow.switch.d.ts.map