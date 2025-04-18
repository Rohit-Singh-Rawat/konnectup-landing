/**
 * Symbol used for type tagging to associate data types with query keys
 * without affecting the runtime value.
 * This is a phantom type that only exists at compile time.
 */
declare const dataTagSymbol: unique symbol;

/**
 * Type utility that associates a data type with another type.
 * Used to link expected response types with query keys.
 * 
 * @template Type - The base type being tagged (usually a query key array)
 * @template Value - The data type to associate with the base type
 */
export type DataTag<Type, Value> = Type & {
    readonly [dataTagSymbol]: Value;
};

/**
 * Tags a query key with its expected response data type.
 * Enables type safety when using query keys with React Query.
 * 
 * This is an advanced TypeScript pattern that provides compile-time type checking
 * without affecting runtime behavior. It allows the type system to track the
 * expected response type for each query key.
 * 
 * @example
 * // Define a type for your API response
 * type UserData = { id: number; name: string; email: string };
 * 
 * // Create a typed query key
 * const userQueryKey = dataTaggedQueryKey<UserData>(['users', userId]);
 * 
 * // When used with useQuery, TypeScript knows the return type
 * const { data } = useQuery({ queryKey: userQueryKey, queryFn: fetchUser });
 * // data is now typed as UserData | undefined
 * 
 * @template TData - The expected response data type
 * @template TKey - The query key array type
 * @param key - The query key to tag
 * @returns The same query key with type information attached
 */
export function dataTaggedQueryKey<
    TData,
    TKey extends readonly unknown[] = unknown[]
>(key: TKey): TKey & DataTag<TKey, TData> {
    return key as TKey & DataTag<TKey, TData>;
}
