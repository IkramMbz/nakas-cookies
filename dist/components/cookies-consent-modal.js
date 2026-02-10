"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BodyText, Button, DialogProvider, Heading } from "nakas-ui";
import { useEffect, useState } from "react";
import "../styles/index.css";
import { openCookiePreferences } from "./cookies-dialog-helper.js";
import { DEFAULT_CONSENT, STORAGE_KEYS } from "../lib/utils.js";
import { getCookie, setCookie } from "../lib/cookies.js";
const CookiesConsentModal = ({ appPrefix, }) => {
    const [showBanner, setShowBanner] = useState(false);
    const [consent, setConsent] = useState(DEFAULT_CONSENT);
    const [isClient, setIsClient] = useState(false);
    const THEME_COOKIES_CONSENT_NAME = appPrefix + "-" + STORAGE_KEYS.COOKIES_CONSENT;
    const THEME_BANNER_COOKIES_DISMISSED_NAME = appPrefix + "-" + STORAGE_KEYS.BANNER_DISMISSED;
    const handleAction = (newConsent) => {
        setConsent(newConsent);
        setCookie(THEME_COOKIES_CONSENT_NAME, JSON.stringify(newConsent), 180 * 24 * 60 * 60);
        setCookie(THEME_BANNER_COOKIES_DISMISSED_NAME, "true", 180 * 24 * 60 * 60);
        setShowBanner(false);
    };
    useEffect(() => {
        setIsClient(true);
        const storedConsent = getCookie(THEME_COOKIES_CONSENT_NAME);
        if (storedConsent) {
            try {
                setConsent(JSON.parse(storedConsent));
            }
            catch (e) {
                console.warn("Erreur lors du parsing des cookies:", e);
                console.warn("Consent: ", consent);
            }
        }
        const dismissed = getCookie(THEME_BANNER_COOKIES_DISMISSED_NAME);
        if (!dismissed)
            setShowBanner(true);
    }, [THEME_COOKIES_CONSENT_NAME, THEME_BANNER_COOKIES_DISMISSED_NAME]);
    // Retourner le DialogProvider même si isClient est false ou showBanner est false
    if (!isClient)
        return null;
    return (_jsx(DialogProvider, { children: showBanner && (_jsx("div", { className: "nakas-cookies-banner", children: _jsxs("div", { className: "nakas-cookies-banner-content", children: [_jsxs("div", { className: "nakas-cookies-banner-text", children: [_jsx(Heading, { type: "h3", size: "sm", fullWidth: true, children: "\uD83C\uDF6A Gestion des cookies" }), _jsx(BodyText, { size: "md", children: "Nous utilisons des cookies pour am\u00E9liorer votre exp\u00E9rience, mesurer l'audience et personnaliser le contenu. Vous pouvez g\u00E9rer vos pr\u00E9f\u00E9rences \u00E0 tout moment." })] }), _jsxs("div", { className: "nakas-cookies-banner-content", children: [_jsx(Button, { size: "sm", onClick: () => openCookiePreferences({ appPrefix, onSave: handleAction }), children: "G\u00E9rer mes pr\u00E9f\u00E9rences" }), _jsx(Button, { size: "sm", onClick: () => handleAction({
                                    required: true,
                                    functional: true,
                                    performance: false,
                                    ads: false,
                                }), children: "Refuser les cookies non essentiels" }), _jsx(Button, { size: "sm", variant: "secondary", onClick: () => handleAction({
                                    required: true,
                                    functional: true,
                                    performance: true,
                                    ads: true,
                                }), children: "Tout accepter" })] })] }) })) }));
};
export default CookiesConsentModal;
//# sourceMappingURL=cookies-consent-modal.js.map