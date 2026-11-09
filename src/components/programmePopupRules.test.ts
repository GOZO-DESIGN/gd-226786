import { describe, expect, it } from "vitest";
import { canShowPopup, isMobileExitGesture, VIDEO_URL } from "./programmePopupRules";

describe("programme popup rules", () => {
  it("shows welcome only after seven seconds", () => {
    expect(canShowPopup("welcome", {}, 6_999, Infinity)).toBe(false);
    expect(canShowPopup("welcome", {}, 7_000, Infinity)).toBe(true);
  });
  it("does not repeat either popup across page views in the same visit", () => {
    expect(canShowPopup("welcome", { welcome: true }, 100_000, Infinity)).toBe(false);
    expect(canShowPopup("exit", { exit: true }, 100_000, Infinity)).toBe(false);
  });
  it("does not show further promotions after requesting the free video", () => {
    expect(canShowPopup("welcome", { requested: true }, 100_000, Infinity)).toBe(false);
    expect(canShowPopup("exit", { requested: true }, 100_000, Infinity)).toBe(false);
  });
  it("leaves thirty seconds between prompts", () => {
    expect(canShowPopup("exit", {}, 60_000, 29_999)).toBe(false);
    expect(canShowPopup("exit", {}, 60_000, 30_000)).toBe(true);
  });
  it("uses an upward scroll only after reading on mobile", () => {
    expect(isMobileExitGesture(44_999, 0.5, 800, 600)).toBe(false);
    expect(isMobileExitGesture(45_000, 0.34, 800, 600)).toBe(false);
    expect(isMobileExitGesture(45_000, 0.5, 600, 800)).toBe(false);
    expect(isMobileExitGesture(45_000, 0.5, 800, 600)).toBe(true);
  });
  it("links to Radka's supplied information video", () => {
    expect(VIDEO_URL).toBe("https://app.radkaeder.com/v/betreuung_die_bleibt");
  });
});