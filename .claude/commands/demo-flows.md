Scan all Playwright demo spec files in the `e2e/` directory (files matching `*-demo.spec.ts`).

For each file, parse the test definitions and extract:
- Flow number (sequential, starting from 1)
- Flow name (from the `test('...')` string)
- Number of steps (count the `step(` calls inside each test)
- Designer notes (extract the text content from each `step()` call to build a brief description of what the flow demonstrates)

Present the results to the user in this format:

```
Playwright Demo Flows
=====================

#1 · <Flow Name>
   Steps: <N>
   <Brief 1-2 sentence description based on the designer notes>

#2 · <Flow Name>
   Steps: <N>
   <Brief 1-2 sentence description based on the designer notes>

...
```

After showing the list, tell the user: "Say **run #N** to launch a flow."

If the user says "run #N" or "запусти N" or similar — launch that specific test using:
```
npx playwright test e2e/<filename> -g "<exact test name>"
```
Make sure the dev server is running on localhost:5173 before launching. If it's not, start it first with `npm run dev` in the background.

Important: launch Playwright in background so the user can continue chatting. Do NOT use `--ui` flag.
