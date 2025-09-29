import { FetchTemplateStrategyType } from '#src/business/model/fetch-template-strategy-type';
import { z } from '#src/lib/zod-adapter';
export declare const userConfigurationTypeSchema: z.ZodOptional<z.ZodObject<{
    githubPersonAccessToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type UserConfigurationType = z.infer<typeof userConfigurationTypeSchema>;
export declare const configurationTypeSchema: z.ZodObject<{
    authorization: z.ZodOptional<z.ZodObject<{
        githubPersonAccessToken: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    template: z.ZodObject<{
        fetchStrategy: z.ZodEnum<typeof FetchTemplateStrategyType>;
        localDestinationFolder: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        location: z.ZodString;
        subFolderLocation: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    tmpFolderPath: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    variables: z.ZodObject<{
        projectName: z.ZodString;
    }, z.core.$loose>;
}, z.core.$strip>;
export type ConfigurationType = z.infer<typeof configurationTypeSchema>;
export declare class ConfigSetup {
    protected _configuration?: ConfigurationType;
    get configuration(): ConfigurationType | undefined;
    protected _getUserConfigIfExists(): Promise<UserConfigurationType>;
    initialize(): Promise<void>;
}
export declare const configSetupSingleton: import("@beecode/msh-util/singleton/pattern").AnyFunctionNoParams<ConfigSetup>;
export declare const config: () => ConfigurationType;
//# sourceMappingURL=config.d.ts.map