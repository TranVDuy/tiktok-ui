import { useRef, useState } from 'react';

import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Tippy
import Tippy from '@tippyjs/react/headless';

// from Popper --> Wrapper
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import SearchValue from '../../SearchValue';
import Button from '~/components/Button';

const cx = classNames.bind(styles)

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
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
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
                {/* Action */}
                <div className={cx('action')}>
                    <Button text >Upload</Button>
                    <Button outline primary rounded onClick={()=>alert('LOLO')} >Log in</Button>
                </div>
            </div>
        </header>
    )
}

export default Header