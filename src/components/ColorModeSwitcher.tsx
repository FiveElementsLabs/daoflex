import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';
import { Moon, Sun } from 'phosphor-react';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export default function ColorModeSwitcher(props: ColorModeSwitcherProps) {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(Moon, Sun);

  return (
    <IconButton
      size='md'
      fontSize='xl'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
}
