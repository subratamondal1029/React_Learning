When we make an API request and print the data from the API response, an issue arises where the component rerenders and the request repeats, causing a loop. To handle this, we use the `useEffect()` hook.

The `useEffect()` hook runs based on dependencies. For instance:
- Using `[]` runs the effect only once, like fetching data.
- Using a state variable as a dependency causes the effect to run whenever the variable updates.
- `useEffect()` also supports cleanup functions that run when a component unmounts from the page, as seen in Hello.jsx.

### Features of `useEffect()`:
1. **Running a function once**: Use an empty array (`[]`) to ensure a function like fetching data runs only once.
2. **Tracking state changes**: Set a state variable as a dependency to run code when that variable updates.
3. **Cleanup on unmount**: Allows defining cleanup functions that execute when a component unmounts.
