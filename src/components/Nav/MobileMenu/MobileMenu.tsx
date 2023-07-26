import { useRef, useState } from 'react';

import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpened((prev) => !prev);
    menuRef.current?.classList.toggle(styles.active);
  };
  return (
    <>
      <div ref={menuRef} className={styles.slidingMenu}>
        <ul className={styles.menuNav}>
          <li>
            <a href="#">Chrome Extension</a>
          </li>
          <li>
            <a href="#">Price Comparison</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className={styles.menuWrapper}>
        {isOpened ? (
          <img src="close.svg" alt="Close menu icon" className={styles.menuIcon} width={19} height={16} />
        ) : (
          <img src="menu.svg" alt="Open menu icon" className={styles.menuIcon} width={19} height={16} />
        )}
      </div>
    </>
  );
};

export default MobileMenu;
