import { Main } from '~/Components/Main'

import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.App}>
      <div className={styles.nested}>
        Check that nesting works
      </div>
      <Main />
    </div>
  )
}
