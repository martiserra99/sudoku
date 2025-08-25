import type { FormEntries } from "../../types/flow/entries";
/**
 * Returns the value that is in the given `FormEntries` object using the following parameters:
 *
 * - `name`: The name of the value within the `FormEntries` object.
 * - `keys`: The list of keys that is used to access the value within the `FormEntries` object.
 * - `defaultValue`: The default value to return if the value is not found.
 *
 * @param form The `FormEntries` object.
 * @param name The name of the value within the `FormEntries` object.
 * @param keys The list of keys that is used to access the value within the `FormEntries` object.
 * @param defaultValue The default value to return if the value is not found.
 * @returns The value that is in the given `FormEntries` object or the default value if the value is not found.
 */
export declare function get(form: FormEntries, name: string, keys: PropertyKey[], defaultValue: unknown): unknown;
/**
 * Sets the value in the given `FormEntries` object using the following parameters:
 *
 * - `name`: The name of the value within the `FormEntries` object.
 * - `keys`: The list of keys that is used to access the value within the `FormEntries` object.
 * - `data`: The value to set.
 *
 * @param form The `FormEntries` object.
 * @param name The name of the value within the `FormEntries` object.
 * @param keys The list of keys that is used to access the value within the `FormEntries` object.
 * @param data The value to set.
 * @returns The updated `FormEntries` object.
 */
export declare function set(form: FormEntries, name: string, keys: PropertyKey[], data: unknown): FormEntries;
//# sourceMappingURL=form.d.ts.map