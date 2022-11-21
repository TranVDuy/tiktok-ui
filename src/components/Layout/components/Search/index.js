import { useEffect, useRef, useState } from 'react';


import {
    MagnifyingGlass,
} from '~/components/Icons';

// Hooks custom

import { useDebounce } from '~/hooks';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import SearchValue from '../../SearchValue';

// Styles scss
import styles from './Search.module.scss'
import classNames from 'classnames/bind';

import * as services from '~/apiServices/searchServices'
// Danh sach Account
// const dataAccount = [
//     {
//         avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f386fa2b374bf97bc9d6e77d9f5a9ad6~c5_100x100.jpeg?x-expires=1668236400&x-signature=wzmd8dlh2WD37g%2B%2FSQex48b2Sgw%3D',
//         nameaccount: 'khinaocopothidoiten.174',
//         username: 'Duong My Phung'
//     },
//     {
//         avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/75a546a64d58998bc3d0367200ce9e2c.jpeg?x-expires=1668236400&x-signature=pyZr98QLthQ92pPszRB1JungWTY%3D',
//         nameaccount: 'hyeepham',
//         username: 'Hyee Phạm'
//     },
// ]

const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    const debounced = useDebounce(searchValue, 600)

    useEffect(() => {

        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        const fetchAPI = async () => {
            setLoading(true)
            const result = await services.search(debounced)
            setSearchResult(result)
            setLoading(false)
        } 

        fetchAPI()
        // q=${encodeURIComponent(debounced)}&type=less


    }, [debounced])

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClearValue = () => {
        setSearchValue("")
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            visible={searchResult.length > 0 && showResult}
            interactive={true}
            onClickOutside={handleHideResult}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <SearchValue valueS={searchValue} />
                        <SearchValue valueS={searchValue} />
                        <SearchValue valueS={searchValue} />

                        <h4 className={cx('search-title')}>
                            Account
                        </h4>

                        {searchResult.map((result) => (
                            <AccountItem key={result.id} dataAccount={result} />
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
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading &&
                    <button onClick={handleClearValue} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                }

                {loading &&
                    <div className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </div>
                }

                <button className={cx('search-btn')}>
                    <MagnifyingGlass />
                </button>

            </div>
        </HeadlessTippy >
    );
}

export default Search;