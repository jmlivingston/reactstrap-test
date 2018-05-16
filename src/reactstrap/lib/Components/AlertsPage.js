/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
// import { Alert } from 'reactstrap';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import AlertExample from '../examples/Alert';
import AlertExampleSource from '../examples/Alert.txt';

import AlertLinkExample from '../examples/AlertLink';
import AlertLinkExampleSource from '../examples/AlertLink.txt';

import AlertContentExample from '../examples/AlertContent';
import AlertContentExampleSource from '../examples/AlertContent.txt';

import AlertDismissExample from '../examples/AlertDismiss';
import AlertDismissExampleSource from '../examples/AlertDismiss.txt';

import AlertUncontrolledDismissExample from '../examples/AlertUncontrolledDismiss';
import AlertUncontrolledDismissExampleSource from '../examples/AlertUncontrolledDismiss.txt';


export default class AlertsPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Alerts" />
        <div className="docs-example">
          <AlertExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`Alert.propTypes = {
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  color: PropTypes.string, // default: 'success'
  isOpen: PropTypes.bool,  // default: true
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // Controls the transition of the alert fading in and out
  // See [Fade](/components/fade/) for more details
  transition: PropTypes.shape(Fade.propTypes),
}`}
          </PrismCode>
        </pre>

        <SectionTitle>Link color</SectionTitle>
        <div className="docs-example">
          <AlertLinkExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertLinkExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Additional content</SectionTitle>
        <div className="docs-example">
          <AlertContentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertContentExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Dismissing</SectionTitle>
        <div className="docs-example">
          <AlertDismissExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertDismissExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Uncontrolled [disable] Alerts</SectionTitle>
        <p>
          For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledAlert</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.
        </p>
        <div className="docs-example">
          <AlertUncontrolledDismissExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertUncontrolledDismissExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
