import { z } from '#src/lib/zod-wrapper';
export declare const userConfigurationTypeSchema: z.ZodOptional<z.ZodObject<{
    githubPersonAccessToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type UserConfigurationType = z.infer<typeof userConfigurationTypeSchema>;
export declare const configurationTypeSchemaFactory: () => z.ZodObject<{
    authorization: z.ZodOptional<z.ZodObject<{
        githubPersonAccessToken: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    localTemplateFolder: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    template: z.ZodObject<{
        fetchStrategy: z.ZodEnum<typeof import("#src/business/service/fetch-template/service").FetchTemplateStrategyType>;
        location: z.ZodString;
        variables: z.ZodObject<{
            projectName: z.ZodString;
        }, z.core.$loose>;
    }, z.core.$strip>;
    tmpFolderPath: z.ZodString;
}, z.core.$strip>;
type ConfigurationType = z.infer<ReturnType<typeof configurationTypeSchemaFactory>>;
export declare class ConfigSetup {
    protected _configuration?: ConfigurationType;
    get configuration(): ConfigurationType | undefined;
    protected _getUserConfigIfExists(): Promise<UserConfigurationType>;
    initialize(): Promise<void>;
}
export declare const configSetupSingleton: import("@beecode/msh-util/singleton/pattern").AnyFunctionNoParams<ConfigSetup>;
export declare const config: () => ConfigurationType;
export {};
//# sourceMappingURL=config.d.ts.map