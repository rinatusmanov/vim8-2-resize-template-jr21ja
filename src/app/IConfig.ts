import { InjectionToken } from "@angular/core";

export interface IConfig {
    medium: number;
    large: number;
}

export const ICONFIG_TOKEN = new InjectionToken<IConfig>("configuration for IfViewportSizeDirective");