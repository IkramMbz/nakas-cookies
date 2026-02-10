import { ChevronDown, LucideIcon } from "lucide-react";
import { BodyText, Card } from "nakas-ui";
import { useState } from "react";

type CookiesPreferenceItemProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  open?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  alwaysActive?: boolean;
};

const CookiesPreferenceItem = ({
  icon,
  title,
  description,
  open,
  onToggle,
  children,
  alwaysActive = false,
}: CookiesPreferenceItemProps): React.ReactElement => {
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = useState(true);

  const isOpen = isControlled ? open : internalOpen;
  const IconComponent = icon;

  const handleToggle = (): void => {
    if (isControlled) {
      onToggle?.();
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  return (
    <Card className="nakas-cookies-card" gap="0">
      <button type="button" onClick={handleToggle}>
        <div className="nakas-cookies-content">
          <div className="nakas-cookies-header">
            <div className="nakas-cookies-title-wrapper">
              <IconComponent
                size={24}
                className="nakas-cookies-icon animate-float"
              />
              <BodyText size="lg">{title}</BodyText>
            </div>

            <ChevronDown
              size={20}
              className={`nakas-cookies-chevron ${isOpen ? "open" : ""}`}
            />
          </div>

          <BodyText className="nakas-cookies-description" size="md">
            {description}
          </BodyText>

          {alwaysActive && (
            <BodyText
              size="xs"
              color="var(--color-nega-bold-color)"
              className="nakas-cookies-active-badge"
            >
              Toujours actif
            </BodyText>
          )}
        </div>
      </button>

      {children && (
        <div
          className={`nakas-cookies-preference-item ${isOpen ? "open" : ""}`}
        >
          {children}
        </div>
      )}
    </Card>
  );
};

export default CookiesPreferenceItem;
