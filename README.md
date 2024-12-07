# React 18+ Automatic Batching Bug

This repository demonstrates a potential issue with React 18+'s automatic batching of state updates within the useEffect hook.  The bug showcases how multiple state updates batched together might lead to unexpected behavior in the component's rendering and subsequent useEffect call executions.

## Bug Description
The `useEffect` hook is intended to run after every render, but in scenarios involving rapid state updates, automatic batching can lead to unexpected results. This example shows a simple counter where the `useEffect` logs the current count; however, due to batching, the log might not always accurately reflect the latest updated count immediately after clicking the button multiple times.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Rapidly click the button multiple times. Observe the console logs - they may not always display the most up-to-date `count` value.

## Solution
The provided solution leverages the `useSyncExternalStore` hook (React 18+) which allows for more control over the state updates preventing batching and ensuring that state updates are observed synchronously within the useEffect hook.