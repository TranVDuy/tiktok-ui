import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Header() {
    console.log(images.src);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo Tiktok" />
                </div>
                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={true} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                {/* Action */}
                <div className={cx('action')}>

                </div>
            </div>
        </header>
    )
}

export default Header