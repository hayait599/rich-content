import { BUTTONS } from '~/Plugins/base/buttons';
import { MODALS } from '~/RichContentEditor/RichContentModal';
import { getModalStyles } from '~/Utils';
import MediaReplaceIcon from '../icons/toolbar/media-replace.svg';
import SettingsIcon from '~/Plugins/base/icons/block-settings.svg';

const modalStyles = getModalStyles();

const InlineButtons = [
  { type: BUTTONS.SIZE_ORIGINAL_CENTER, mobile: false },
  { type: BUTTONS.SIZE_SMALL_LEFT, mobile: false },
  { type: BUTTONS.SIZE_SMALL_CENTER, mobile: false },
  { type: BUTTONS.SIZE_SMALL_RIGHT, mobile: false },
  { type: BUTTONS.SIZE_CONTENT, mobile: false },
  { type: BUTTONS.SIZE_FULL_WIDTH, mobile: false },
  { type: BUTTONS.SEPARATOR, mobile: false },
  {
    keyName: 'settings',
    type: BUTTONS.EXTERNAL_MODAL,
    icon: SettingsIcon,
    modalName: MODALS.IMAGE_SETTINGS,
    modalStyles,
    mobile: true,
  },
  // { type: BUTTONS.SEPARATOR, mobile: true },
  { type: BUTTONS.LINK, mobile: false },
  {
    keyName: 'replace',
    type: BUTTONS.FILES,
    icon: MediaReplaceIcon,
    mobile: true,
  },
  // { type: BUTTONS.SEPARATOR, mobile: true },
  { type: BUTTONS.DELETE, mobile: true },
];

export default InlineButtons;
