import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
import { BodyText, Card } from "nakas-ui";
import { useState } from "react";
const CookiesPreferenceItem = ({ icon, title, description, open, onToggle, children, alwaysActive = false, }) => {
    const isControlled = open !== undefined;
    const [internalOpen, setInternalOpen] = useState(true);
    const isOpen = isControlled ? open : internalOpen;
    const IconComponent = icon;
    const handleToggle = () => {
        if (isControlled) {
            onToggle?.();
        }
        else {
            setInternalOpen((prev) => !prev);
        }
    };
    return (_jsxs(Card, { className: "nakas-cookies-card", gap: "0", children: [_jsx("button", { type: "button", onClick: handleToggle, children: _jsxs("div", { className: "nakas-cookies-content", children: [_jsxs("div", { className: "nakas-cookies-header", children: [_jsxs("div", { className: "nakas-cookies-title-wrapper", children: [_jsx(IconComponent, { size: 24, className: "nakas-cookies-icon animate-float" }), _jsx(BodyText, { size: "lg", children: title })] }), _jsx(ChevronDown, { size: 20, className: `nakas-cookies-chevron ${isOpen ? "open" : ""}` })] }), _jsx(BodyText, { className: "nakas-cookies-description", size: "md", children: description }), alwaysActive && (_jsx(BodyText, { size: "xs", color: "var(--color-nega-bold-color)", className: "nakas-cookies-active-badge", children: "Toujours actif" }))] }) }), children && (_jsx("div", { className: `nakas-cookies-preference-item ${isOpen ? "open" : ""}`, children: children }))] }));
};
export default CookiesPreferenceItem;
//# sourceMappingURL=cookies-preference-item.js.map