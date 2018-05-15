/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import BreadcrumbExample from '../examples/Breadcrumb';
import BreadcrumbExampleSource from '../examples/Breadcrumb.txt';

import BreadcrumbNoListExample from '../examples/BreadcrumbNoList';
import BreadcrumbNoListExampleSource from '../examples/BreadcrumbNoList.txt';

export default class BreadcrumbsPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Breadcrumbs" />
        <div className="docs-example">
          <BreadcrumbExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BreadcrumbExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>No list</SectionTitle>
        <hr />
        <p>Breadcrumbs can work without the usage of list markup.</p>
        <div className="docs-example">
          <BreadcrumbNoListExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BreadcrumbNoListExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
