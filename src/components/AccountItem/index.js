import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);


function AccountItem() {
    return ( 
        <div className={cx('item')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/75a546a64d58998bc3d0367200ce9e2c~c5_300x300.webp?x-expires=1665925200&x-signature=tVvnaHZ6stLBPwaz1qjiQuXfl9E%3D" alt="accountName" />
            <div className={cx('info')}>
                <h4 className={cx('name-account')}>
                    <span>hyeepham</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Hyee Phạm</span>
            </div>
        </div>
     );
}

export default AccountItem;