import Icon from '@/assets/svg/Github.svg';
import React from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import BaseIcon from '@/components/icons/BaseIcon';

const GithubIcon: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default GithubIcon;
