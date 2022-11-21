import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import classNames from "classnames/bind";
import Image from "../Image";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);


function AccountItem({dataAccount}) {
    return ( 
        <Link to={`/@${dataAccount.nickname}`} className={cx('item')}>
            <Image className={cx('avatar')} src={dataAccount.avatar} alt={dataAccount.last_name} />
            <div className={cx('info')}>
                <h4 className={cx('name-account')}>
                    <span>{dataAccount.full_name}</span>
                    {dataAccount.tick && 
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    }
                </h4>
                <span className={cx('username')}>{dataAccount.nickname}</span>
            </div>
        </Link>
     );
}

export default AccountItem;