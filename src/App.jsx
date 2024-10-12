import s from './App.module.css'
import { Counter } from './components/Counter'

export const App = () => {
  return (
    <div className={s.app}>
      <h1>Hello world!</h1>
      <Counter />
    </div>
  )
}
