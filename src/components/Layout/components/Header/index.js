import { useRef} from 'react';

import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images'

// Image components
import Image from '~/components/Image';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlus, 
    faEllipsisVertical, 
    faLanguage, 
    faQuestionCircle, 
    faKeyboard, 
    faCoins, faGear, 
    faArrowRightFromBracket, 
    faUser, faVideo 
} from '@fortawesome/free-solid-svg-icons';


// Tippy
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';


// from Popper --> Wrapper
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu/index';
import { 
    InboxIcon, 
    MessagesIcon 
} from '~/components/Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

// Tippy menu luc chua login
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    code: 'jp',
                    title: 'Japanese'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',

    }
]



// Tippy menu khi user da login
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@dmp'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
        to: '/live'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Logout',
        to: '/logout',
        separate: true,
    }
]

function Header() {

    // Trang thai user da dang nhap (true)
    const currentUser = true

    // const inputRef = useRef()

    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <Link to='/'><img src={images.logo} alt="Logo Tiktok" /></Link>
                </div>
                {/* Search */}
                <Search/>
                {/* End Search */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                outline
                                className={cx('custom-button-upload')}
                                leftIcon={<FontAwesomeIcon icon={faPlus} />} >
                                Upload
                            </Button>

                            <Tippy content="Messages" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>99</span>
                                </button>
                            </Tippy>
                        </>
                    )
                        : (
                            <>
                                <Button outline className={cx('custom-button-upload')} leftIcon={<FontAwesomeIcon icon={faPlus} />} >Upload</Button>
                                <Button primary >Log in</Button>
                            </>

                        )
                    }
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/69845ae3b4eb364d2a2f32fcce68c3e9~c5_100x100.jpeg?x-expires=1668819600&x-signature=SZVlC0EwByVgwjS6%2FXO0b9Ftcas%3D"
                                alt="Hê lô mấy cưng"
                               
                            />
                        ) : (
                            <span className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </span>
                        )}
                    </Menu>
                </div>
            </div>
        </header >
    )
}

export default Header