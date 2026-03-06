

## Problem

Buttons across the site are not consistently styled. Key issues found:

1. **Invisible outline button on purple CTA sections**: On Angehoerige, Schulungen, Index, and UeberMich pages, the secondary/outline buttons in the purple CTA sections use `text-primary-foreground` (white) or `border-primary-foreground/30` -- making them nearly invisible against the purple background.

2. **Outline variant in button.tsx**: The `outline` variant defaults to `hover:bg-accent hover:text-accent-foreground`, but the base state uses `bg-background` (white) with no explicit text color override in many contexts, leading to white-on-white or low-contrast situations.

3. **Inconsistent button shapes**: Some buttons use `rounded-full`, others `rounded-xl`, others use the default `rounded-md` from the variant.

4. **"Weitere Nachricht senden" on Kontakt**: Uses bare `variant="outline"` with no custom classes -- gets default outline styling which may blend in.

## Plan

### 1. Fix button.tsx outline variant
Update the `outline` variant to always have visible text: `border border-accent text-accent-foreground bg-accent/10 hover:bg-accent hover:text-accent-foreground`. This ensures outline buttons are always readable.

### 2. Fix all CTA section secondary buttons (purple backgrounds)
These need special handling since they sit on dark purple backgrounds. Update to use gold border + gold text with hover to solid gold:

**Files affected:**
- `src/pages/Angehoerige.tsx` (lines 121, 290): Outline button in hero and CTA
- `src/pages/Index.tsx` (line 106, 329): Outline/phone button in hero and CTA
- `src/pages/Schulungen.tsx` (line 215): Phone link in CTA
- `src/pages/UeberMich.tsx` (line 215): Outline button in CTA
- `src/pages/Betreuung24h.tsx` (line 225): Outline button in CTA
- `src/components/CTA.tsx` (line 21): Outline button
- `src/components/Hero.tsx` (line 44): Outline button

**Consistent styling for secondary buttons:**
- On light backgrounds: `border-primary text-primary hover:bg-primary hover:text-primary-foreground`
- On dark/purple backgrounds: `border-accent text-accent hover:bg-accent hover:text-accent-foreground`

### 3. Standardize button shapes
All buttons should use `rounded-full` consistently (matching the established pattern on Angehoerige page).

### 4. Kontakt page "Weitere Nachricht senden" button
Add explicit styling: `border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full`

### Summary of files to edit:
- `src/components/ui/button.tsx` -- update outline variant
- `src/pages/Angehoerige.tsx` -- fix outline buttons
- `src/pages/Index.tsx` -- fix phone button in hero + CTA link
- `src/pages/Schulungen.tsx` -- fix CTA phone link to proper Button
- `src/pages/UeberMich.tsx` -- fix CTA outline button
- `src/pages/Betreuung24h.tsx` -- fix CTA outline button
- `src/components/CTA.tsx` -- fix outline button
- `src/components/Hero.tsx` -- fix outline button
- `src/pages/Kontakt.tsx` -- fix "Weitere Nachricht senden" button

