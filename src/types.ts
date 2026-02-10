type CookieType = "required" | "functional" | "performance" | "ads";

export type ConsentState = Record<CookieType, boolean>;
