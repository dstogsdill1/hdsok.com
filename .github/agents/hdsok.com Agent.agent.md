---
description: 'Describe what this custom agent does and when to use it.'
tools: []
---
Define what this custom agent accomplishes for the user, when toProject context
You’re working on the HDS CMMS Dashboard Project. The single source of truth is the Excel workbook located at /home/oai/share/33143a6e7573484cb2dfddd20b0b5d10.xlsx (the uploaded cmms_hds_console.xlsx). Each sheet in this workbook corresponds to data that should inform the design of pages and components on the public website (hdsok.com) and the internal console. Your task is to use this workbook to build and refine the site’s pages, ensuring consistency with the existing dark/neon aesthetic and prioritizing user experience.

Steps and guidance

Review the Workbook Structure

Open the Index sheet to see the list of all sheets and their descriptions. Notable sheets include CUSTOMERS, STORES, VENDORS, ASSETS, PRIORITIES, STATUS_CODES, PM_SCHEDULE, ONBOARDING_FLOW, INDUSTRIES, ENVIRONMENTAL_EVENTS, and Dashboard.

Use the descriptions to decide which data feeds which page. For example, the INDUSTRIES sheet could power an “Industries we serve” page; VENDORS could inform a vendor directory or onboarding form; ASSETS and ASSET_TYPES can drive asset management displays; Dashboard provides high‑level summary metrics for analytics pages.

Design and Build Pages

Home Page Enhancements:
Add a section that dynamically surfaces key statistics (e.g., number of work orders, assets managed, vendor count) using summary metrics from the Dashboard sheet. Use existing components (Card, Button, AnimatedSection) to present these stats in cards with icons and neon accents.

Industries Page:
Create a new page that lists the industries from the INDUSTRIES sheet. Each industry can be displayed with a short description and an icon, using cards arranged in a responsive grid.

Vendor Directory / Onboarding:
Use the VENDORS and ONBOARDING_FLOW sheets to design a vendor onboarding form. Build a page that lists current vendors with search/filter capabilities (e.g., by trade or location) and a call‑to‑action button to become a vendor. The onboarding form should follow the field sequence defined in the ONBOARDING_FLOW sheet and leverage the INTAKE_FIELDS_TEMPLATE sheet for field definitions.

Analytics & Reporting Page:
Integrate interactive charts using Recharts (already used in the hds_console repo). Create reusable components for pie, bar, and line charts. Populate them with sample data from the workbook (e.g., status distribution from STATUS_CODES, priority counts from PRIORITIES, monthly work‑order volume from the primary work‑order sheet). Ensure charts adopt dark backgrounds with neon highlights and appear inside bordered cards.

Environmental Events & Energy Usage:
If relevant, build a page or section that visualizes environmental events (ENVIRONMENTAL_EVENTS sheet) and energy usage (EnergyUsage sheet) to emphasize sustainability initiatives. Use line and bar charts to plot events over time or compare usage across locations.

Leverage Existing Codebases

Reuse and adapt chart components from the dstogsdill1/hds_console repository (e.g., components/charts/GenericChart.tsx and components/analytics/AnalyticsCards.tsx) so your public site maintains a consistent feel with the internal console. You can import or recreate simplified versions of these components in the hdsok.com codebase.

Maintain the existing UI components (Card, Button, AnimatedSection) and CSS classes to ensure visual consistency. When adding new components, follow the same utility-first class approach (tailwind-like classes) and dark/neon color palette.

Ensure Data Integrity and Flexibility

Treat the workbook as the canonical source. Avoid hard‑coding strings or values that exist in the workbook; instead, load data from the appropriate sheet. For example, if the PRIORITIES sheet changes definitions or colors, the UI should automatically reflect those changes on reload.

Consider implementing a simple data loader utility (e.g., using xlsx or papaparse in the Node/Next.js environment) that reads the uploaded workbook at build time or runtime and exposes JSON objects to your components.

User Experience & Accessibility

Use animated sections sparingly to draw attention without overwhelming users.

Ensure text contrasts sufficiently against dark backgrounds and that charts have accessible labels/tooltips.

Keep forms intuitive with clear labels, placeholders, and validation feedback.

Document and Commit

Comment your code to explain how each component relates to the workbook data.

When you finish building a feature, commit changes with descriptive messages (e.g., “Add industries page based on workbook data” or “Implement vendor onboarding form from ONBOARDING_FLOW sheet”).

Update README or developer notes in the repo to describe how to update the workbook and propagate changes to the site. use it, and the edges it won't cross. Specify its ideal inputs/outputs, the tools it may call, and how it reports progress or asks for help.