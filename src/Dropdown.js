/* eslint-disable  react/prop-types */
import { closest } from './utils/dom';
import generateContainer from './toggleable/generate-container';
const Container = generateContainer('dropdown');

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Menu Items with class names 'dropdown-item'
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
export default class Dropdown extends Container {
  // Control arias used by subcomponents
  contentArias = { labelledby: true }
  triggerArias = { expanded: true, haspopup: true, id: true }

  _clickHandler = e => {
    // Check if the click was inside the dropdown
    let clickInDropdown = closest(e.target, `${this.guid}-container`) ? true : false;

    // If the click was ouside dropdown, close the dropdown and then cleanup the listener
    if (!clickInDropdown) {
      this.toggleActive();
    }
  }

  _keyHandler = e => {
    // Escape key is which 27, when escape key is hit, toggle state
    if (e.which === 27) {
      this.toggleActive();
    }
  }

  toggleActive = e => {
    let { active } = this.props;
    if (active === undefined) {
      active = this.state.active;
    }

    if (!active) {
      // If the dropdown is closed, it's now opening, so setup event listeners
      this.props.onActivate(this, e); // Consumer hooks
      document.addEventListener('mouseup', this._clickHandler);
      document.addEventListener('touchend', this._clickHandler);
      document.addEventListener('keydown', this._keyHandler);
    } else {
      // If the dropdown is open, it's now closing, so remove event listeners
      this.props.onDeactivate(this, e); // Consumer hooks
      document.removeEventListener('mouseup', this._clickHandler);
      document.removeEventListener('touchend', this._clickHandler);
      document.removeEventListener('keydown', this._keyHandler);
    }

    if (this.props.active === undefined) {
      // State is not controlled, update internal state
      this.setState({ active: !active });
    }

    if (!active) {
      // If the dropdown is closed, it's now opening, so setup event listeners
      this.props.onActivated(this, e); // Consumer hooks
    } else {
      // If the dropdown is open, it's now closing, so remove event listeners
      this.props.onDeactivated(this, e); // Consumer hooks
    }
  }
}