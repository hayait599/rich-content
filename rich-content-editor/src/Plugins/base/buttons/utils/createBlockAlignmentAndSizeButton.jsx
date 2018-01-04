import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default ({ alignment, size, content }) => (
  class BlockAlignmentAndSizeButton extends Component {
    static propTypes = {
      setAlignmentAndSize: PropTypes.func.isRequired,
      alignment: PropTypes.string,
      theme: PropTypes.object,
    };

    isActive = () => (this.props.alignment === alignment && this.props.size === size);

    handleClick = event => this.props.setAlignmentAndSize(alignment, size);

    preventBubblingUp = (event) => { event.preventDefault(); }

    render() {
      const { theme } = this.props;
      const className = this.isActive() ? classNames(theme.button, theme.active) : theme.button;
      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={className}
            onClick={this.handleClick}
            type="button"
            children={content}
          />
        </div>
      );
    }
  }
);