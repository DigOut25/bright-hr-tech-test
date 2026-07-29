# BrightHR Absences — Tech Test

A simple app showing employee absences, built with React, TypeScript, TanStack Query, and Tailwind.

## Running the app

```bash
npm install
npm run dev
```

## Running the tests

```bash
npm run test
```

## What I built

- A table showing all absences — name, start date, end date, absence type, and whether it's approved.
- The API doesn't give an end date, just a start date and how many days off — so I work the end date out myself from those two.
- **Conflict check** (feature 1): each row checks separately whether there's a conflict, and shows loading/error/warning depending on what comes back. The main row shows straight away and doesn't wait around for this extra check.
- **Sorting** (feature 2): a dropdown to sort by date, type, or name. It only sorts one way (not both ascending and descending) — the brief just asked for sorting, so I kept it simple.
- Some tests: a few for the small helper functions, and one testing the actual data-fetching hook.

## What I'd do with more time

- Add a proper component test for the conflict indicator covering its different states (loading, error, has conflict, no conflict) — I didn't get to wiring up React Testing Library for this one.
- Make the sorting proper clickable column headers instead of a dropdown, with arrows showing direction — more normal for a table like this. The logic wouldn't change much, just how you trigger it.
- Build the third optional feature (click a name to see all their absences) — didn't get to it, but it'd just mean filtering the same list by employee rather than anything new.
- Double-check the data coming back from the API actually matches what I'm expecting, rather than just trusting it — I'd use something like Zod for that.
- Right now every row makes its own separate request to check for conflicts — fine for this amount of data, but I'd want a better way of doing that if there were hundreds of rows.
- Make it look better on mobile — right now it just scrolls sideways rather than resizing properly.
