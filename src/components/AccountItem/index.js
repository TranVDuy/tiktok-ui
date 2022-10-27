import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);


function AccountItem({dataAccount}) {
    return ( 
        <div className={cx('item')}>
            <img className={cx('avatar')} src={dataAccount.avatar} alt="accountName" />
            <div className={cx('info')}>
                <h4 className={cx('name-account')}>
                    <span>{dataAccount.nameaccount}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>{dataAccount.username}</span>
            </div>
        </div>
     );
}

export default AccountItem;