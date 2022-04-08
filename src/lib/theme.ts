import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

/*
 *  Extend the default theme to include custom
 *  colors, fonts, options, etc.
 */

const colors = {};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('light_background', 'dark_background')(props),
    },
  }),
};

const components = {
  Button: {
    variants: {
      brand: (props: StyleFunctionProps) => ({
        backgroundColor: mode('yellow_accent', 'primary')(props),
      }),
    },
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const Theme = extendTheme({ colors, styles, components, config });

export default Theme;
