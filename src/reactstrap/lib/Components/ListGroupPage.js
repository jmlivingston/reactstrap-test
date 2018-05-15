/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
// import SectionTitle from '../UI/SectionTitle';
import ListGroupExample from '../examples/ListGroup';
import ListGroupBadgeExample from '../examples/ListGroupBadge';
import ListGroupDisabledItemsExample from '../examples/ListGroupDisabledItems';
import ListGroupAnchorsAndButtonsExample from '../examples/ListGroupAnchorsAndButtons';
import ListGroupContextualClassesExample from '../examples/ListGroupContextualClasses';
import ListGroupCustomContentExample from '../examples/ListGroupCustomContent';

import ListGroupBadgeExampleSource from '../examples/ListGroupBadge.txt';
import ListGroupExampleSource from '../examples/ListGroup.txt';
import ListGroupDisabledItemsExampleSource from '../examples/ListGroupDisabledItems.txt';
import ListGroupAnchorsAndButtonsExampleSource from '../examples/ListGroupAnchorsAndButtons.txt';
import ListGroupContextualClassesExampleSource from '../examples/ListGroupContextualClasses.txt';
import ListGroupCustomContentExampleSource from '../examples/ListGroupCustomContent.txt';

import '../../../styles/components/_list-group.scss'

export default class ListGroupPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="ListGroup" />
        <div className="docs-example">
          <ListGroupExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupExampleSource}
          </PrismCode>
        </pre>

        <legend>Tags</legend>
        <div className="docs-example">
          <ListGroupBadgeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupBadgeExampleSource}
          </PrismCode>
        </pre>

        <legend>Disabled items</legend>
        <div className="docs-example">
          <ListGroupDisabledItemsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupDisabledItemsExampleSource}
          </PrismCode>
        </pre>

        <legend>Anchors and buttons</legend>
        <div className="docs-example">
          <p>Note: you need add action props to make these buttons fit the list.</p>
          <ListGroupAnchorsAndButtonsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupAnchorsAndButtonsExampleSource}
          </PrismCode>
        </pre>

        <legend>Contextual classes</legend>
        <div className="docs-example">
          <ListGroupContextualClassesExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupContextualClassesExampleSource}
          </PrismCode>
        </pre>

        <legend>Custom content</legend>
        <div className="docs-example">
          <ListGroupCustomContentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupCustomContentExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
