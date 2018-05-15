/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import NavsExample from '../examples/Navs';
import NavsExampleSource from '../examples/Navs.txt';
import NavVerticalExample from '../examples/NavVertical';
import NavVerticalExampleSource from '../examples/NavVertical.txt';
import NavTabsExample from '../examples/NavTabs';
import NavTabsExampleSource from '../examples/NavTabs.txt';
import NavPillsExample from '../examples/NavPills';
import NavPillsExampleSource from '../examples/NavPills.txt';

import '../../../styles/components/_nav.scss'

export default class NavssPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Nav" />
        <div className="docs-example">
          <NavsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavsExampleSource}
          </PrismCode>
        </pre>
        <h4>Nav Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Nav.propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  card: PropTypes.bool,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h4>NavItem Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h4>NavLink Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavLink.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  // pass in custom element to use
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the NavLink component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}`}
          </PrismCode>
        </pre>
        <SectionTitle>Vertical</SectionTitle>
        <div className="docs-example">
          <NavVerticalExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavVerticalExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Tabs</SectionTitle>
        <div className="docs-example">
          <NavTabsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavTabsExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Pills</SectionTitle>
        <div className="docs-example">
          <NavPillsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavPillsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
