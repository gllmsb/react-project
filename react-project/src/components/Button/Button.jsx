import styles from './Button.module.scss';
export const Button = ({action, size = 'medium', theme = 'light', text}) => {
    // const { action, size = 'medium', theme = 'light', text } = props;
    //  when using props as an object so basically u just using destructured props difference is that direct props is better for offering flexibility for more complex components or scenario while the destructured props preferred for simpler components where u only need specific props
    const buttonClass = `${styles.button} ${styles[size]} ${styles[theme]}`;
    // The ${styles[size]} syntax?? is basically used because it is dynamic, and has no specific styling until its declared in my understanding, since there are 3 sizes and 2 themes. otherwise it wouldve been fx. style.small, style.medium etc...  
    return (
        <button
            className = {buttonClass}
            onClick = {action}
        >
            {text}
        </button>
    );
};  

