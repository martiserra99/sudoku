import type { Flow } from "../types/flow/flow";
import type { ListSchema as CustomListSchema } from "../types/schema/custom";
import type { ListValues } from "../types/values";
/**
 * Returns the current state of the multi-step form after updating the values of the current form.
 *
 * @param flow The current state of the multi-step form.
 * @param schema The `ListSchema` object representing the multi-step form.
 * @param values An object containing the values of the current form.
 * @returns The current state of the multi-step form after updating the values of the current form.
 */
export declare function getFlow<Render, Values extends ListValues, Inputs extends object, Params extends object>(flow: Flow, schema: CustomListSchema<Render, Values, Inputs, Params>, values: object): Flow;
//# sourceMappingURL=flow.d.ts.map