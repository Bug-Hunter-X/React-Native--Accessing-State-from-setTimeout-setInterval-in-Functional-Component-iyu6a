```javascript
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Start Timer" onPress={startTimer} />
      <Button title="Stop Timer" onPress={stopTimer} />
    </View>
  );
};

export default MyComponent;
```