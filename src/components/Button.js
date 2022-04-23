import PropTypes from 'prop-types';
import styles from '../assets/styles/App.module.css';

// eslint-disable-next-line require-jsdoc
function Button({text}) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
