import classNames from 'classnames';
import './T20_Button.css'; // Assuming you have a CSS file

const Button = ({ isActive, isDisabled, isRed }) => {
  const buttonClass = classNames({
    'btn': true,               // Always apply 'btn' class
    'btn-active': isActive,     // Apply 'btn-active' if `isActive` is true
    'btn-disabled': isDisabled, // Apply 'btn-disabled' if `isDisabled` is true
    'btn-red': isRed,           // Apply 'btn-red' if `isRed` is true
    'btn-blue': !isRed          // Apply 'btn-blue' if `isRed` is false
  });
//   const buttonClass = classNames('btn', { 'btn-active': isActive });
// const buttonClass = classNames(['btn', isActive && 'btn-active']);

  return (
    <button className={buttonClass}>
      Click Me
    </button>
  );
};

export default Button;
