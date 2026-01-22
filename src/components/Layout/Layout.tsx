import React from 'react';
import clsx from 'clsx';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { useRouter } from 'next/router';
import sharedStyles from 'utils/sharedStyles.module.scss';

import styles from './Layout.module.scss';

export const Layout = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.authorWrapper}>
        <span className={sharedStyles.text}>
          NextJS page tansitions with ThreeJS by
        </span>
        <span className={styles.contactSpacer} />
        <LinkHandler isExternal elHref="https://github.com/Priyanshu84iya">
          <span
            className={clsx(
              sharedStyles.text,
              sharedStyles.textBold,
              sharedStyles.textUnderline,
            )}
          >
            Prymon
          </span>
        </LinkHandler>
      </div>

      <div className={styles.inspiredWrapper}>
        <span className={sharedStyles.text}>Inspired by Nowhere</span>
      </div>

      <div className={styles.gitWrapper}>
        <LinkHandler isExternal elHref="https://github.com/Priyanshu84iya">
          <span className={clsx(sharedStyles.text, sharedStyles.textUnderline)}>
            GitHub
          </span>
        </LinkHandler>
      </div>
    </>
  );
};
