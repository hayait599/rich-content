// @flow
import styles from '../statics/styles/video-viewer.scss';
import { mergeStyles } from 'wix-rich-content-common';

export const containerClassName /*: ClassNameStrategy*/ = theme => {
  const mergedStyles = mergeStyles({ styles, theme });
  return mergedStyles.video_container;
};
