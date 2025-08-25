import type { Values } from "../types/values";
import type { Schema as TypedSchema } from "../types/schema/typed";
import type { OnYield as TypedOnYield } from "../types/handlers/typed";
import type { OnReturn as TypedOnReturn } from "../types/handlers/typed";
import type { State } from "../types/state/state";
/**
 * Initializes the multi-step form and returns its initial state, including a point
 * pointing to the first form step. If no form step is found, or if a return operation
 * is encountered before reaching a form, an error is thrown.
 *
 * During traversal of the multi-step form, the `onYield` callback is triggered whenever
 * a yield operation is encountered, allowing for intermediate values to be processed.
 *
 * @param schema The `Schema` object that defines the structure and behavior of the multi-step form.
 * @param values An object containing the initial input values for the multi-step form.
 * @param onYield A callback function triggered when the multi-step form yields values.
 * @returns The initial state of the form as a `State` object.
 *
 * @throws An error if no form step is found or if a return operation is encountered before a form step.
 */
export declare function getInitialState<R, V extends Values, I extends object, P extends object>(schema: TypedSchema<R, V, I, P>, values: I, onYield: TypedOnYield<V>): State;
/**
 * Navigates to the next form step of the multi-step form and returns the updated state.
 * If there is no next form step, the returned state contains the current form step.
 *
 * The `onYield` callback is triggered whenever a yield operation is encountered during traversal,
 * allowing for intermediate values to be processed.
 *
 * The `onReturn` callback is triggered whenever a return operation is encountered during traversal,
 * allowing for final values to be processed.
 *
 * @param state The current state of the multi-step form.
 * @param schema The `Schema` object representing the multi-step form.
 * @param values An object containing the generated values within the multi-step form.
 * @param onYield A callback function triggered when the multi-step form yields values.
 * @param onReturn A callback function triggered when the multi-step form returns values.
 * @returns The updated state of the multi-step form.
 */
export declare function getNextState<R, V extends Values, I extends object, P extends object>(state: State, schema: TypedSchema<R, V, I, P>, values: object, onYield: TypedOnYield<V>, onReturn: TypedOnReturn<V>): State;
/**
 * Navigates to the previous form step of the multi-step form and returns the updated state.
 * If there is no previous form step, the returned state contains the current form step.
 *
 * @param state The current state of the multi-step form.
 * @param schema The `Schema` object representing the multi-step form.
 * @param values An object containing the generated values within the multi-step form.
 * @returns The updated state of the multi-step form.
 */
export declare function getPreviousState<R, V extends Values, I extends object, P extends object>(state: State, schema: TypedSchema<R, V, I, P>, values: object, onYield: TypedOnYield<V>): State;
//# sourceMappingURL=navigate.d.ts.map