import { ConsentState } from "../types.js";
type CookiesPreferencesProps = {
    consent: ConsentState;
    toggle: (key: keyof ConsentState) => void;
    handleAction: (consent: ConsentState) => void;
};
declare const CookiesPreferences: ({ consent, toggle, handleAction, }: CookiesPreferencesProps) => React.ReactElement;
export default CookiesPreferences;
//# sourceMappingURL=cookies-preferences.d.ts.map