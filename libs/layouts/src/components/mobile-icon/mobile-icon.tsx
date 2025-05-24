import { getIcon } from '../../utils/pwa-icon-utils';

const MobileIcon = ({ name, size = 32, ...props }) => {
  const IconComponent = getIcon(name);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} {...props} />;
};

export default MobileIcon;
