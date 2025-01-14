import React from 'react';
import { styled } from '@storybook/theming';
import { transparentize } from 'polished';
import { withReset } from '../typography/shared';

const Wrapper = styled.div<{}>(withReset, ({ theme }) => ({
  backgroundColor: theme.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
  borderRadius: theme.appBorderRadius,
  border: `1px dashed ${theme.appBorderColor}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  margin: '25px 0 40px',

  color:
    theme.base === 'light'
      ? transparentize(0.4, theme.color.defaultText)
      : transparentize(0.6, theme.color.defaultText),
}));

export const EmptyBlock = (props: any) => <Wrapper {...props} className="docblock-emptyblock" />;
