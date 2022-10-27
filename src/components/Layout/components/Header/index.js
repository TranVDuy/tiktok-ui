import { useRef, useState } from 'react';

import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisVertical, faLanguage, faQuestionCircle, faKeyboard } from '@fortawesome/free-solid-svg-icons';

// Tippy
import Tippy from '@tippyjs/react/headless';


// from Popper --> Wrapper
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import SearchValue from '../../SearchValue';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu/index';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
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

const dataAccount = [
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f386fa2b374bf97bc9d6e77d9f5a9ad6~c5_100x100.jpeg?x-expires=1666926000&x-signature=5HczMD746wlRo%2FLp29H37ZHNylY%3D',
        nameaccount: 'khinaocopothidoiten.174',
        username: 'Duong My Phung'
    },
    {
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/75a546a64d58998bc3d0367200ce9e2c.jpeg?x-expires=1666962000&x-signature=8Roy%2BqgRQez%2BoYAGzxMLbf1VYMw%3D',
        nameaccount: 'hyeepham',
        username: 'Hyee Phạm'
    },
    {
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d958c3c3d2fbb2eef593d7e13be8b474.jpeg?x-expires=1666926000&x-signature=yMq%2FpV2D8plzyKftTjQGhLGQPis%3D',
        nameaccount: 'meongu08',
        username: 'Phương Trương (Mèo ngu)'
    }
]

function Header() {

    const [searchResult, setSearchResult] = useState([])

    const [searchValue, setSearchValue] = useState("")

    const handleSearch = (e) => {
        setSearchValue(e.target.value)

    }

    const inputRef = useRef()

    const handleClearValue = () => {
        setSearchValue("")
        inputRef.current.focus()
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo Tiktok" />
                </div>
                {/* Search */}
                <Tippy
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
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button outline className={cx('custom-button-upload')} leftIcon={<FontAwesomeIcon icon={faPlus} />} >Upload</Button>
                    <Button primary onClick={() => alert('LOLO')} >Log in</Button>
                    <Menu
                        items={MENU_ITEMS}
                    >
                        <span className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </span>
                    </Menu>

                </div>
            </div>
        </header>
    )
}

export default Header