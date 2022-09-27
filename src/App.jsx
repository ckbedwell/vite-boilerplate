import React from 'react'
import { Main } from '~/Components/Main'
import { Container } from '~/Components/Container'

import styles from './App.module.css'

export function App() {
  return (
    <Container>
      <div className={styles.App}>
        <div className={styles.nested}>
          Check that nesting works
        </div>
        <Main />
      </div>
    </Container>
  )
}
