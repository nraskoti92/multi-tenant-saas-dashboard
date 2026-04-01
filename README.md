# Frontend Exercise: Multi-Tenant SaaS Dashboard

## Time Limit: 50 minutes

## Overview

This is a React + TypeScript SPA that simulates a multi-tenant white-labeled SaaS product. It features tenant switching (branding), role-based access control (RBAC), and subscription-tier feature gating.

The app compiles and runs, but **QA has reported several bugs** and there are **three features left to implement**.

## Getting Started

```bash
npm install
npm run dev
```

Use the **Session Simulator** bar at the top to switch between tenants, user roles, and subscription tiers.

## Access Control Matrix

| Feature | Allowed Roles | Minimum Tier |
|---------|---------------|--------------|
| Dashboard | Admin, Analyst, Viewer | Tier 1 |
| Cases | Admin, Analyst, Viewer | Tier 1 |
| Reports | Admin, Analyst | Tier 2 |
| Rules | Admin, Analyst | Tier 2 |
| Admin Settings | Admin | Tier 1 |
| Audit Logs | Admin | Tier 2 |

---

## Part 1: Bug Fixes

QA has filed the following bug reports. Find the root cause of each and fix it.

> **Tip:** These bugs interact with each other. Fixing them in the listed order will make each one easier to verify.

### BUG-1: Route protection is inverted

> **Steps to reproduce:** Open the app. The default session is Admin + Tier 1, but instead of the Dashboard you see an Access Denied message.
>
> **Expected:** Per the Access Control Matrix, Admin + Tier 1 should have access to Dashboard, Cases, and Admin Settings. Only Reports, Rules, and Audit Logs (which require Tier 2) should show Access Denied.
>

### BUG-2: Tier-based access is backwards

> **Steps to reproduce:** After fixing BUG-1 — set session to Admin + Tier 1. Navigate to Reports or Rules — they load fine (they shouldn't, they require Tier 2). Now switch to Tier 2 — Dashboard shows Access Denied (it only requires Tier 1).
>
> **Expected:** Tier 1 users should only see Tier 1 features. Tier 2 users should see everything.
>

### BUG-3: Role switching has no effect

> **Steps to reproduce:** After fixing BUG-1 and BUG-2 — set session to any Viewer user. Navigate to Admin Settings — it loads fine (Viewers shouldn't have access). Switch between Admin, Analyst, and Viewer — access doesn't change.
>
> **Expected:** Only Admins should be able to access Admin Settings. Viewers should only see Dashboard and Cases.
>

### BUG-4: Tenant branding doesn't update in browser tab

> **Steps to reproduce:** App loads with ACME Analytics branding. Switch tenant to TechFlow Insights. The header logo updates, but the browser tab title and favicon still show ACME.
>
> **Expected:** The page title and favicon should update whenever the tenant changes.

---

## Part 2: Feature Implementation

### TODO-1: Navigation Filtering

The sidebar currently shows all 6 navigation items regardless of the user's role and tier. Implement filtering so that only accessible features appear.

**File:** `src/components/Navigation.tsx`

The `useAuthorization` hook (in `src/hooks/useAuthorization.ts`) provides a `hasAccess(feature)` method you can use.

### TODO-2: Create a `useAsync` Hook + Wire Cases Page

The Cases page (`src/pages/Cases.tsx`) currently shows "No cases loaded" because the data fetching isn't wired up. The mock API exists (`getCases` in `src/data/mockData.ts`) but there's no hook to call it.

**Your task:**

1. **Create** `src/hooks/useAsync.ts` -- a generic hook that takes an async function and manages the loading lifecycle.
2. **Wire it** into `src/pages/Cases.tsx` to load data from `getCases()`.

**Hints:**
- A `UseAsyncState<T>` discriminated union type is already defined in `src/types/index.ts` -- use it.
- The Cases page already has the loading spinner, error display, and table rendering. You just need to replace the placeholder constants at the top with actual hook state.
- `getCases()` simulates an 800ms network delay.

### TODO-3: Not Found Page

Navigating to a URL that doesn't exist (e.g. `/random`) renders a blank content area with no feedback. Add a catch-all route that displays a Not Found page for unmatched URLs.

---

## Verification Checklist

Once everything is working, test these scenarios:

1. **Admin + Tier 2**: All nav items visible, all pages accessible
2. **Admin + Tier 1**: Dashboard, Cases, Admin Settings visible; Reports, Rules, Audit Logs blocked
3. **Analyst + Tier 2**: Dashboard, Cases, Reports, Rules visible; Admin Settings, Audit Logs hidden
4. **Viewer + Tier 1**: Only Dashboard and Cases visible; direct URL to `/reports` shows Access Denied
5. **Tenant switch**: Switching to TechFlow updates header logo, page title, and favicon
6. **Cases page**: Shows a loading spinner briefly, then renders a table of 4 cases with correct status colors
7. **Unknown URL**: Navigating to `/random` shows a Not Found page
