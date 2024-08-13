import styles from './Button.module.scss';
export const Button = ({action, size = 'medium', theme = 'light', text}) => {
    const buttonClass = `${styles.button} ${styles[size]} ${styles[theme]}`;
    
    return (
        <button
            className = {buttonClass}
            onClick = {action}
        >
            {text}
        </button>
    );
};

