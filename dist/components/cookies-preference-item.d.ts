import { LucideIcon } from "lucide-react";
type CookiesPreferenceItemProps = {
    title: string;
    description: string;
    icon: LucideIcon;
    open?: boolean;
    onToggle?: () => void;
    children?: React.ReactNode;
    alwaysActive?: boolean;
};
declare const CookiesPreferenceItem: ({ icon, title, description, open, onToggle, children, alwaysActive, }: CookiesPreferenceItemProps) => React.ReactElement;
export default CookiesPreferenceItem;
//# sourceMappingURL=cookies-preference-item.d.ts.map