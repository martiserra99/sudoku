import type { Values } from "../types/values";
import type { Schema as TypedSchema } from "../types/schema/typed";
import type { State } from "../types/state/state";
import type { OnNext, OnBack, GetState, SetState } from "../types/controls";
/**
 * Returns the rendered form for the current step of the multi-step form.
 *
 * @param state The current state of the multi-step form.
 * @param schema The `Schema` object representing the multi-step form.
 * @param params An object containing the parameters for the form.
 * @param onNext A callback function used to navigate to the next step of the multi-step form.
 * @param onBack A callback function used to navigate to the previous step of the multi-step form.
 * @param getState A callback function used to get the current state of the multi-step form.
 * @param setState A callback function used to set the current state of the multi-step form.
 * @returns The rendered form for the current step of the multi-step form.
 */
export declare function getForm<R, V extends Values, I extends object, P extends object>(state: State, schema: TypedSchema<R, V, I, P>, params: P, onNext: OnNext, onBack: OnBack, getState: GetState, setState: SetState): R;
//# sourceMappingURL=form.d.ts.map