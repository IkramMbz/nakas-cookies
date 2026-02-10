import { ConsentState } from "../types.js";
type OpenCookiePreferencesProps = {
    appPrefix: string;
    onSave?: (newConsent: ConsentState) => void;
};
export declare const openCookiePreferences: ({ appPrefix, onSave, }: OpenCookiePreferencesProps) => void;
export {};
//# sourceMappingURL=cookies-dialog-helper.d.ts.map