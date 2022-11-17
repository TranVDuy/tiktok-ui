import { useRef, useState } from 'react';

import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images'

// Image components
import Image from '~/components/Image';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faPlus, faEllipsisVertical, faLanguage, faQuestionCircle, faKeyboard, faCoins, faGear, faArrowRightFromBracket, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';


// Tippy
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';


// from Popper --> Wrapper
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import SearchValue from '../../SearchValue';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu/index';
import { InboxIcon, MagnifyingGlass, MessagesIcon } from '~/components/Icons';

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

// Danh sach Account
const dataAccount = [
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f386fa2b374bf97bc9d6e77d9f5a9ad6~c5_100x100.jpeg?x-expires=1668236400&x-signature=wzmd8dlh2WD37g%2B%2FSQex48b2Sgw%3D',
        nameaccount: 'khinaocopothidoiten.174',
        username: 'Duong My Phung'
    },
    {
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/75a546a64d58998bc3d0367200ce9e2c.jpeg?x-expires=1668236400&x-signature=pyZr98QLthQ92pPszRB1JungWTY%3D',
        nameaccount: 'hyeepham',
        username: 'Hyee Phạm'
    },
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

    const [searchResult, setSearchResult] = useState([])

    const [searchValue, setSearchValue] = useState("")

    const handleSearch = (e) => {
        setSearchValue(e.target.value)

    }

    // Trang thai user da dang nhap (true)
    const currentUser = true

    const inputRef = useRef()

    const handleClearValue = () => {
        setSearchValue("")
        inputRef.current.focus()
    }

    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo Tiktok" />
                </div>
                {/* Search */}
                <HeadlessTippy
                    visible={searchValue !== ""}
                    interactive={true}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <SearchValue valueS={searchValue} />
                                <SearchValue valueS={searchValue} />
                                <SearchValue valueS={searchValue} />

                                <h4 className={cx('search-title')}>
                                    Account
                                </h4>

                                {dataAccount.map((data, index) => (
                                    <AccountItem key={index} dataAccount={data} />
                                ))}

                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            onChange={(e) => handleSearch(e)}
                            placeholder='Search accounts and videos'
                            spellCheck={true}
                        />
                        <button onClick={handleClearValue} className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <div className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>

                        <button className={cx('search-btn')}>
                            <MagnifyingGlass />
                        </button>

                    </div>
                </HeadlessTippy>
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
                                fallback=""
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