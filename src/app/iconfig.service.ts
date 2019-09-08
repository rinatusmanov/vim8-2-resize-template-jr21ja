import { Injectable, Inject, InjectionToken } from "@angular/core";

export interface IConfig {
    medium: number;
    large: number;
}

export const ICONFIG_TOKEN = new InjectionToken<IConfig>("configuration for IfViewportSizeDirective");


@Injectable()
export class UserService {
    private medium: number = 100;
    private large: number = 500;

    constructor(@Inject() config: ICONFIG_TOKEN) {
        this.medium = config.medium;
        this.large = config.large;
    }

    isSee(inData: string): boolean {
        switch (inData) {
            case 'small':
                return true;
                break;
            case 'medium':
                return true;
                break;
            default:
                return true;
                break;
        }
    }
}