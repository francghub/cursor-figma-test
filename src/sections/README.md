# Sections Directory

This directory contains standalone section components that can be composed to build the full website.

## Structure

Each section component includes:
- ✅ Assigned background image
- ✅ Title text
- ✅ Description text
- ✅ Correct background color from design
- ✅ Proper typography and spacing
- ✅ Responsive layout

## Available Sections

1. **ResearchSection** - Research printed with Espresso Book Machine
2. **PadliographySection** - Independent, self-hosted media research (Yellow)
3. **TranscriptsSection** - Transcripts from activists and journalists
4. **AMROSection** - Collaborative network (Purple)
5. **ArtsSection** - Arts Meet Radical Openness festival
6. **UndesigningSection** - Undesigning infrastructures
7. **GradshowSection** - XPUB Gradshow
8. **LibrarySection** - View/download project resources

## Usage

These sections mirror the components in `/src/components/` and can be used interchangeably or composed together for different page layouts.

```typescript
import ResearchSection from './sections/ResearchSection'
import PadliographySection from './sections/PadliographySection'

function Page() {
  return (
    <>
      <ResearchSection />
      <PadliographySection />
    </>
  )
}
```

## Design Tokens

All sections use the centralized design system from `/src/styles/design-tokens.css`:
- Colors: `var(--color-*)`
- Typography: `var(--font-size-*)`, `var(--font-weight-*)`
- Spacing: `var(--space-*)`, `var(--section-padding-*)`
- Containers: `var(--container-*-width)`

## Responsiveness

All sections are 100% responsive with breakpoints:
- Desktop: >768px
- Tablet: ≤768px
- Mobile: ≤480px
- Small Mobile: ≤360px

