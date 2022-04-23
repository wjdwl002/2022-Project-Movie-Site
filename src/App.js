/* eslint-disable */
import Button from './components/Button';
import styles from './assets/styles/App.module.css';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <div className={styles.title}>Hi</div>
      <Button text="hi" />
    </div>
  );
}

export default App;
