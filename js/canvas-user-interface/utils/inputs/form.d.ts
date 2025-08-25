import type { FormInputs } from "../../types/state/inputs";
/**
 * Returns the value that is in the given `FormInputs` object using the following parameters:
 *
 * - `name`: The name of the value within the `FormInputs` object.
 * - `keys`: The list of keys that is used to access the value within the `FormInputs` object.
 * - `defaultValue`: The default value to return if the value is not found.
 *
 * @param form The `FormInputs` object.
 * @param name The name of the value within the `FormInputs` object.
 * @param keys The list of keys that is used to access the value within the `FormInputs` object.
 * @param defaultValue The default value to return if the value is not found.
 * @returns The value that is in the given `FormInputs` object or the default value if the value is not found.
 */
export declare function get(form: FormInputs, name: string, keys: PropertyKey[], defaultValue: unknown): unknown;
/**
 * Sets the value in the given `FormInputs` object using the following parameters:
 *
 * - `name`: The name of the value within the `FormInputs` object.
 * - `keys`: The list of keys that is used to access the value within the `FormInputs` object.
 * - `data`: The value to set.
 *
 * @param form The `FormInputs` object.
 * @param name The name of the value within the `FormInputs` object.
 * @param keys The list of keys that is used to access the value within the `FormInputs` object.
 * @param data The value to set.
 * @returns The updated `FormInputs` object.
 */
export declare function set(form: FormInputs, name: string, keys: PropertyKey[], data: unknown): FormInputs;
//# sourceMappingURL=form.d.ts.map