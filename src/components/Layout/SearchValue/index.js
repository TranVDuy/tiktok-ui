import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './SearchValue.module.scss'

const cx = classNames.bind(styles)

function SearchValue({valueS}) {
    return ( 
        <div className={cx('search')}>
            <FontAwesomeIcon className={cx('glass-search')} icon={faSearch} />
            <h4 className={cx('search-value')}>
               {valueS}
            </h4>
        </div>
    );
}

export default SearchValue;