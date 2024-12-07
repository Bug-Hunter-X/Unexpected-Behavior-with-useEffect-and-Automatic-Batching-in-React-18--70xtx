```javascript
import { useSyncExternalStore } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const snapshot = useSyncExternalStore(subscribe, () => count, () => count);

  useEffect(() => {
    console.log('Component rendered with count:', snapshot);
  }, [snapshot]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```