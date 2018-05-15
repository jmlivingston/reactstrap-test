/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import BadgeExample from '../examples/Badge';
import BadgeExampleSource from '../examples/Badge.txt';

import BadgeButtonExample from '../examples/BadgeButton';
import BadgeButtonExampleSource from '../examples/BadgeButton.txt';

import BadgePillsExample from '../examples/BadgePills';
import BadgePillsExampleSource from '../examples/BadgePills.txt';

import BadgeVariationsExample from '../examples/BadgeVariations';
import BadgeVariationsExampleSource from '../examples/BadgeVariations.txt';

import BadgeLinksExample from '../examples/BadgeLinks';
import BadgeLinksExampleSource from '../examples/BadgeLinks.txt';

import '../../../styles/components/_badge.scss'

export default class BadgesPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Badges" />
        <hr />
        <p>Scale to parent</p>
        <div className="docs-example">
          <BadgeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeExampleSource}
          </PrismCode>
        </pre>
        <p>Badges can be used as part of links or buttons to provide a counter.</p>
        <div className="docs-example">
          <BadgeButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeButtonExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Contextual variations</SectionTitle>
        <div className="docs-example">
          <BadgeVariationsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeVariationsExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Pills</SectionTitle>
        <div className="docs-example">
          <BadgePillsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgePillsExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Links</SectionTitle>
        <p>Adding the <code>href</code> prop (without specifying a <code>tag</code> prop) will default the badge to a link.</p>
        <div className="docs-example">
          <BadgeLinksExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeLinksExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
