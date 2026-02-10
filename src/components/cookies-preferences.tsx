import { ChartColumnBig, LockKeyhole, Settings, Target } from "lucide-react";
import { BodyText, Button, HR, Toggler } from "nakas-ui";

import PreferenceItem from "./cookies-preference-item.js";
import { ConsentState } from "../types.js";

type CookiesPreferencesProps = {
  consent: ConsentState;
  toggle: (key: keyof ConsentState) => void;
  handleAction: (consent: ConsentState) => void;
};

const CookiesPreferences = ({
  consent,
  toggle,
  handleAction,
}: CookiesPreferencesProps): React.ReactElement => {
  return (
    <>
      <BodyText size="md">
        Vous pouvez accepter ou refuser les cookies non essentiels. Les cookies
        strictement nécessaires sont toujours actifs car indispensables au
        fonctionnement du site.
      </BodyText>

      <div className="nakas-cookies-preferences">
        <PreferenceItem
          icon={LockKeyhole}
          title="Cookies strictement nécessaires"
          description="Indispensables au fonctionnement du site"
          alwaysActive
        >
          <BodyText size="sm">
            Ces cookies sont requis pour assurer des fonctionnalités
            essentielles telles que la sécurité, l'authentification ou la
            gestion de vos préférences de consentement. Ils ne peuvent pas être
            désactivés.
          </BodyText>
        </PreferenceItem>

        <PreferenceItem
          icon={Settings}
          title="Cookies fonctionnels"
          description="Améliorent et personnalisent votre expérience"
          alwaysActive
        >
          <BodyText size="sm">
            Ces cookies permettent de mémoriser vos choix (langue, interface,
            préférences utilisateur) afin de vous offrir une navigation
            cohérente et personnalisée.
          </BodyText>
        </PreferenceItem>

        <PreferenceItem
          icon={ChartColumnBig}
          title="Cookies de mesure d'audience"
          description="Nous aident à améliorer le site"
        >
          <BodyText size="sm">
            Ces cookies nous permettent de mesurer l'audience et d'analyser
            l'utilisation du site afin d'en améliorer les performances et
            l'ergonomie. Les données collectées sont utilisées à des fins
            statistiques uniquement.
          </BodyText>

          <div className="nakas-cookies-dialog-action">
            <Toggler
              value={consent.performance}
              onChange={() => toggle("performance")}
              trackClassName="bg-accent"
              thumbClassName="bg-nega-bold-color"
              aria-label="Activer ou désactiver les cookies de mesure d'audience"
            />
          </div>
        </PreferenceItem>

        {typeof consent.ads !== "undefined" && (
          <PreferenceItem
            icon={Target}
            title="Cookies marketing"
            description="Publicités et contenus personnalisés"
          >
            <BodyText size="sm">
              Ces cookies peuvent être utilisés pour vous proposer des contenus
              ou publicités personnalisés, en fonction de votre navigation. Ils
              peuvent impliquer des partenaires tiers.
            </BodyText>

            <div className="nakas-cookies-dialog-action">
              <Toggler
                value={consent.ads}
                onChange={() => toggle("ads")}
                trackClassName="bg-accent"
                thumbClassName="bg-nega-bold-color"
                aria-label="Activer ou désactiver les cookies marketing"
              />
            </div>
          </PreferenceItem>
        )}
      </div>

      <HR className="nakas-cookies-hr" />

      <div className="nakas-cookies-dialog-action">
        <Button
          onClick={() =>
            handleAction({
              required: true,
              functional: true,
              performance: false,
              ads: false,
            })
          }
        >
          Tout refuser
        </Button>

        <Button variant="primary" onClick={() => handleAction(consent)}>
          Enregistrer mes choix
        </Button>
      </div>
    </>
  );
};

export default CookiesPreferences;
