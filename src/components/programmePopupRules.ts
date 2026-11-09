export type PopupKind = "welcome" | "exit";

export const VIDEO_URL = "https://app.radkaeder.com/v/betreuung_die_bleibt";
export const WELCOME_DELAY = 7_000;
export const EXIT_DELAY = 30_000;
export const MOBILE_EXIT_DELAY = 45_000;
export const POPUP_COOLDOWN = 30_000;
export const POPUP_STORAGE_KEY = "fd-programme-popups-v1";

export type PopupHistory = { welcome?: boolean; exit?: boolean; requested?: boolean };

export function canShowPopup(kind: PopupKind, history: PopupHistory, elapsed: number, sinceClosed: number) {
  return !history.requested && !history[kind] &&
    elapsed >= (kind === "welcome" ? WELCOME_DELAY : EXIT_DELAY) &&
    sinceClosed >= POPUP_COOLDOWN;
}

export function isMobileExitGesture(elapsed: number, deepestScroll: number, previousY: number, currentY: number) {
  return elapsed >= MOBILE_EXIT_DELAY && deepestScroll >= 0.35 && previousY - currentY >= 80;
}