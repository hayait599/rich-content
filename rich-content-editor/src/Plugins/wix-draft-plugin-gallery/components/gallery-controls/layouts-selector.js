import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SelectionList from '~/Components/SelectionList';
import { galleryLayouts } from '../../helpers';

import { mergeStyles } from '~/Utils/mergeStyles';
import styles from './layout-selector.scss';
class LayoutSelector extends Component {

  constructor(props) {
    super(props);
    this.styles = mergeStyles({ styles, theme: props.theme });
  }

  layouts = galleryLayouts.map(layout => {
    return { layoutId: layout.value, name: layout.label };
  });

  dataMapper = ({ layoutId }) => ({ value: layoutId });

  renderOption = ({ item, selected }) => (
    <div className={this.styles.layoutsSelector_tile}>
      <div
        className={classnames(this.styles[selected ?
          `layoutsSelector_icon_${item.name.toLowerCase()}_selected` : `layoutsSelector_icon_${item.name.toLowerCase()}`],
        this.styles.layoutsSelector_tile)}
      />
      <label className={this.styles.layoutsSelector_tile_label}>{item.name}</label>
    </div>
  );

  render() {
    const styles = this.styles;
    const { value, theme, onChange } = this.props;
    return (
      <div>
        <label className={styles.layoutsSelector_label}>Layouts</label>
        <SelectionList
          theme={theme}
          className={styles.layoutsSelector_grid}
          dataSource={this.layouts}
          dataMapper={this.dataMapper}
          renderItem={this.renderOption}
          value={value}
          onChange={value => onChange(value)}
        />
      </div>
    );
  }
}

LayoutSelector.propTypes = {
  value: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LayoutSelector;
