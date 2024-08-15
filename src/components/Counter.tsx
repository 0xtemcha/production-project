import { useState } from "react";
import * as styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <div>{count}</div>
      <button className={styles.btn} onClick={increment}>Increment</button>
    </div>
  )
};

export default Counter;