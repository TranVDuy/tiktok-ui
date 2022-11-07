import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
// import {Wrapper as PopperWrapper} from '~/components/Popper/Wrapper'
import { Wrapper as PopperWrapper } from '~/components/Popper';

// Tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';

import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {}

function Menu({ children, items, onChange =  defaultFn}) {

    const [history, setHistory] = useState([{data: items}])
    const [title, setTitle] = useState('');
    const current = history[history.length - 1]

    // console.log('ITEMS');
    // console.log(items);
    // console.log('HISTORY');
    // console.log(history);
    // console.log('CURRENT');
    // console.log(current);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent){
                    setTitle(item.children.title)
                    setHistory(prev => [...prev, item.children])
                }
                else{
                    onChange(item)
                }
            }} />
        })
    }

    return (
        <Tippy
            placement='bottom-end'
            offset={[20,10]}
            delay={[0, 700]}
            interactive={true}
            render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && <Header title={title} onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length - 1))
                            }} />}
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )
            }
            onHide={() => {setHistory(prev => prev.slice(0,1))}}
        >
            {children}
        </Tippy>
    );
}

export default Menu;