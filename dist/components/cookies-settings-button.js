"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { DialogProvider } from "nakas-ui";
import { openCookiePreferences } from "./cookies-dialog-helper.js";
import { setCookie } from "../lib/cookies.js";
import { STORAGE_KEYS } from "../lib/utils.js";
const CookiesConsentModal = ({ appPrefix, children, }) => {
    const THEME_COOKIES_CONSENT_NAME = appPrefix + "-" + STORAGE_KEYS.COOKIES_CONSENT;
    const THEME_BANNER_COOKIES_DISMISSED_NAME = appPrefix + "-" + STORAGE_KEYS.BANNER_DISMISSED;
    const handleAction = (newConsent) => {
        setCookie(THEME_COOKIES_CONSENT_NAME, JSON.stringify(newConsent), 180 * 24 * 60 * 60);
        setCookie(THEME_BANNER_COOKIES_DISMISSED_NAME, "true", 180 * 24 * 60 * 60);
    };
    return (_jsx(DialogProvider, { children: _jsx("button", { onClick: () => openCookiePreferences({ appPrefix, onSave: handleAction }), children: children }) }));
};
export default CookiesConsentModal;
//# sourceMappingURL=cookies-settings-button.js.map