import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const cx = classNames.bind(styles)

function Button({
    to, 
    href, 
    primary = false, 
    outline = false, 
    text = false, 
    disable = false, 
    rounded = false, 
    small = false, 
    large = false, 
    children = false, 
    leftIcon,
    rightIcon,
    className = false, 
    onClick, ...passProps }) {

    let Comp = 'button'

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disable,
        rounded,
        text,
        large,
    })

    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to;
        Comp = Link
    }
    else {
        if (href) {
            props.href = href
            Comp = 'a'
        }
    }
    // Remove event listener when btn is disable
    if (disable) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            
        </Comp>
    );
}

export default Button;