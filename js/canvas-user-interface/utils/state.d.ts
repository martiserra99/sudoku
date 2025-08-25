import type { Values } from "../types/values";
import type { Schema as TypedSchema } from "../types/schema/typed";
import type { State } from "../types/state/state";
/**
 * Returns the current state of the multi-step form after updating the values of the current form.
 *
 * @param state The current state of the multi-step form.
 * @param schema The `Schema` object representing the multi-step form.
 * @param values An object containing the values of the current form.
 * @returns The current state of the multi-step form after updating the values of the current form.
 */
export declare function getState<R, V extends Values, I extends object, P extends object>(state: State, schema: TypedSchema<R, V, I, P>, values: object): State;
//# sourceMappingURL=state.d.ts.map