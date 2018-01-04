import React from 'react';
import SettingsIcon from '../../base/icons/block-settings.svg';
import EditIcon from '../icons/icon-edit.svg';
import { BUTTONS } from '~/Plugins/base/buttons';
import { DEFAULTS } from '../divider-component';
import Styles from '../default-divider-styles.scss';

class SettingsModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.stateFromProps(props);
  };

  componentWillReceiveProps(nextProps) {
    this.setState(this.stateFromProps(nextProps));
  }

  stateFromProps = (props) => {
    return {
      width: (props.componentData && props.componentData && props.componentData.width) || DEFAULTS.width,
    };
  };

  changeWidth = (event) => {
    console.log('changeWidth in modal', event.target.valueAsNumber);
    const width = event.target.valueAsNumber;
    const componentData = {...this.props.componentData, width};
    this.props.store.set('componentData', componentData);
  };

  render = () => {
    return (
      <div>
        <div>
          <label htmlFor="width">Width</label>
          <input type="range" min="10" max="100" value={this.state.width} id="width"
                 step="1" onChange={this.changeWidth}/>
          <output htmlFor="width" id="widthVal">{this.state.width}%</output>
        </div>
      </div>
    );
  };
}


class EditModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.stateFromProps(props);
  };

  componentWillReceiveProps(nextProps) {
    this.setState(this.stateFromProps(nextProps));
  }

  stateFromProps = (props) => {
    return {
      type: (props.componentData && props.componentData.type) || 'divider1',
    };
  };

  changeType = (event) => {
    this.setState({ type: event.target.value }, () => {
      const componentData = {...this.props.componentData};
      componentData.type = this.state.type;
      this.props.store.set('componentData', componentData);
    });
  };

render = () => {
    return (
      <div style={{ width: 90 + 'px'}}>
        <div className={Styles.tabs}>
          <div className={Styles.tab}>
            <div>
              <input type="radio" name="type" id="divider1" value="divider1" checked={this.state.type === 'divider1'} onChange={this.changeType}></input>
              <label htmlFor="divider1">Divider 1</label>
            </div>
            <div>
              <input type="radio" name="type" id="divider2" value="divider2" checked={this.state.type === 'divider2'} onChange={this.changeType}></input>
              <label htmlFor="divider2">Divider 2</label>
            </div>
            <div>
              <input type="radio" name="type" id="divider3" value="divider3" checked={this.state.type === 'divider3'} onChange={this.changeType}></input>
              <label htmlFor="divider3">Divider 3</label>
            </div>
            <div>
              <input type="radio" name="type" id="divider4" value="divider4" checked={this.state.type === 'divider4'} onChange={this.changeType}></input>
              <label htmlFor="divider4">Divider 4</label>
            </div>
          </div>
        </div>
      </div>
    );
  };
}


const InlineButtons = [
  {keyName: 'edit', type: BUTTONS.MODAL, modalElement: EditModal, icon: EditIcon, onClick: pubsub => console.log('*** click edit *** ')},
  {type: BUTTONS.SEPARATOR},
  {type: BUTTONS.SIZE_SMALL_LEFT},
  {type: BUTTONS.SIZE_SMALL_CENTER},
  {type: BUTTONS.SIZE_SMALL_RIGHT},
  {type: BUTTONS.SIZE_CONTENT},
  {type: BUTTONS.SIZE_FULL_WIDTH},
  {type: BUTTONS.SEPARATOR},
  {keyName: 'settings', type: BUTTONS.MODAL, modalElement: SettingsModal,  icon: SettingsIcon, onClick: pubsub => console.log('*** click settings *** ')},
  {type: BUTTONS.LINK},
  {type: BUTTONS.DELETE},
];

export default InlineButtons;