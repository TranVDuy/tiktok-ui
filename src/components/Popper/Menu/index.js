import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
// import {Wrapper as PopperWrapper} from '~/components/Popper/Wrapper'
import { Wrapper as PopperWrapper } from '~/components/Popper';

// Tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';

import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            visible
            placement='bottom-end'
            delay={[0, 800]}
            interactive={true}
            render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <Header title='Language' />
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )
            }
        >
            {children}
        </Tippy>
    );
}

export default Menu;