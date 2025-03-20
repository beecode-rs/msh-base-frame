import { JoiUtil } from '@beecode/msh-util/joi-util';
export const validationUtil = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-redundant-type-constituents
    sanitize: (objectToValidate, schema) => {
        return new JoiUtil().sanitize(objectToValidate, schema);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-redundant-type-constituents
    validate: (objectToValidate, schema) => {
        return new JoiUtil().validate(objectToValidate, schema);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGlvbi11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUdwRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUc7SUFDN0IsaUhBQWlIO0lBQ2pILFFBQVEsRUFBRSxDQUFJLGdCQUFrQyxFQUFFLE1BQW1DLEVBQUssRUFBRTtRQUMzRixPQUFPLElBQUksT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFDRCxpSEFBaUg7SUFDakgsUUFBUSxFQUFFLENBQUksZ0JBQWtDLEVBQUUsTUFBbUMsRUFBSyxFQUFFO1FBQzNGLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDeEQsQ0FBQztDQUNELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKb2lVdGlsIH0gZnJvbSAnQGJlZWNvZGUvbXNoLXV0aWwvam9pLXV0aWwnXG5pbXBvcnQgeyB0eXBlIE9iamVjdFNjaGVtYSwgdHlwZSBTY2hlbWEgfSBmcm9tICdqb2knXG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uVXRpbCA9IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnksIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZWR1bmRhbnQtdHlwZS1jb25zdGl0dWVudHNcblx0c2FuaXRpemU6IDxUPihvYmplY3RUb1ZhbGlkYXRlOiBQYXJ0aWFsPFQ+IHwgYW55LCBzY2hlbWE6IFNjaGVtYTxUPiB8IE9iamVjdFNjaGVtYTxUPik6IFQgPT4ge1xuXHRcdHJldHVybiBuZXcgSm9pVXRpbCgpLnNhbml0aXplKG9iamVjdFRvVmFsaWRhdGUsIHNjaGVtYSlcblx0fSxcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnksIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZWR1bmRhbnQtdHlwZS1jb25zdGl0dWVudHNcblx0dmFsaWRhdGU6IDxUPihvYmplY3RUb1ZhbGlkYXRlOiBQYXJ0aWFsPFQ+IHwgYW55LCBzY2hlbWE6IFNjaGVtYTxUPiB8IE9iamVjdFNjaGVtYTxUPik6IFQgPT4ge1xuXHRcdHJldHVybiBuZXcgSm9pVXRpbCgpLnZhbGlkYXRlKG9iamVjdFRvVmFsaWRhdGUsIHNjaGVtYSlcblx0fSxcbn1cbiJdfQ==