import { Button, Menu, MenuButton, MenuList, MenuItem, Avatar } from '@chakra-ui/react';
import { CaretDown } from 'phosphor-react';
import { useSharedState } from '../context/store';
import { useChangeProfile } from '../hooks/useChangeProfile';

export default function LensProfile(props: any) {
  const [state] = useSharedState();
  const { changeProfile } = useChangeProfile();
  const { all_profiles, current_profile } = state;

  return (
    <>
      {all_profiles?.length ? (
        <Menu>
          <MenuButton as={Button} {...props}>
            <Avatar size='xs' src={current_profile?.picture?.url} name={current_profile?.handle} />
            {current_profile?.handle}
            <CaretDown />
          </MenuButton>
          <MenuList>
            {all_profiles?.map((profile: any, idx: number) => (
              <MenuItem onClick={() => changeProfile(profile)} key={idx}>
                <Avatar size='xs' src={profile?.picture?.url} name={profile.handle} mr='10px' />
                {profile.handle}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <Button {...props}>No Lens Profiles</Button>
      )}
    </>
  );
}
