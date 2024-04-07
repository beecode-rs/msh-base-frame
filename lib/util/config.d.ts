import Joi from 'joi';
export type ConfigurationTemplateType = {
    projectName: string;
};
export type ConfigurationType = {
    template: ConfigurationTemplateType;
    gitZipUrl: string;
    githubPersonAccessToken?: string;
    localTemplateFolder?: string;
    tempFolderPath: string;
    templateZipName: string;
};
export declare const configSchema: Joi.ObjectSchema<ConfigurationType>;
export declare class ConfigSetup {
    protected _configuration?: ConfigurationType;
    get configuration(): ConfigurationType | undefined;
    protected _getUserConfigIfExists(): Promise<any>;
    initialize(): Promise<void>;
}
export declare const configSetupSingleton: import("@beecode/msh-util/singleton/pattern").AnyFunctionNoParams<ConfigSetup>;
export declare const config: () => ConfigurationType;
//# sourceMappingURL=config.d.ts.map