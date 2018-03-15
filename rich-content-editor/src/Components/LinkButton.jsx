import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import ToolbarButton from '~/Components/ToolbarButton';

import LinkIcon from '~/RichContentEditor/Toolbars/icons/link.svg';
import styles from '~/Styles/inline-toolbar-button.scss';

export default class LinkButton extends Component {

  constructor(props) {
    super(props);
    const { buttonStyles } = props.theme;

    this.styles = {
      button: classNames(
        styles.inlineToolbarButton,
        buttonStyles && (buttonStyles.inlineToolbarButton || buttonStyles.pluginToolbarButton)
      ),
      buttonWrapper: classNames(
        styles.inlineToolbarButton_wrapper,
        buttonStyles && (buttonStyles.inlineToolbarButton_wrapper || buttonStyles.pluginToolbarButton_wrapper)
      ),
      icon: classNames(styles.inlineToolbarButton_icon,
        buttonStyles && (buttonStyles.inlineToolbarButton_icon || buttonStyles.pluginToolbarButton_icon)
      ),
      active: classNames(styles.inlineToolbarButton_active,
        buttonStyles && (buttonStyles.inlineToolbarButton_active || buttonStyles.pluginToolbarButton_active)
      ),
    };
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    theme: PropTypes.object.isRequired,
    isMobile: PropTypes.bool,
    tooltipText: PropTypes.string,
  };

  handleClick = () => this.props.onClick && this.props.onClick();

  preventBubblingUp = event => event.preventDefault();

  render() {
    const { isActive, theme, isMobile, tooltipText } = this.props;
    const { styles } = this;
    const showTooltip = !isMobile && !isEmpty(tooltipText);

    const iconClassNames = classNames(styles.icon,
      {
        [styles.active]: isActive,
      }
    );

    const linkButton = (
      <div className={styles.buttonWrapper} onMouseDown={this.preventBubblingUp}>
        <button onClick={this.handleClick} className={styles.button}>
          <div className={iconClassNames}>
            <LinkIcon />
          </div>
        </button>
      </div>
    );

    return <ToolbarButton theme={theme} showTooltip={showTooltip} tooltipText={tooltipText} button={linkButton} />;
  }
}
