/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import TableExample from '../examples/Table';
import TableBorderedExample from '../examples/TableBordered';
import TableBorderlessExample from '../examples/TableBorderless';
import TableHoverExample from '../examples/TableHover';
import TableDarkExample from '../examples/TableDark';
import TableResponsiveExample from '../examples/TableResponsive';
import TableSizingExample from '../examples/TableSizing';
import TableStripedExample from '../examples/TableStriped';

import TableExampleSource from '../examples/Table.txt';
import TableBorderedExampleSource from '../examples/TableBordered.txt';
import TableBorderlessExampleSource from '../examples/TableBorderless.txt';
import TableHoverExampleSource from '../examples/TableHover.txt';
import TableDarkExampleSource from '../examples/TableDark.txt';
import TableResponsiveExampleSource from '../examples/TableResponsive.txt';
import TableSizingExampleSource from '../examples/TableSizing.txt';
import TableStripedExampleSource from '../examples/TableStriped.txt';

import '../../../styles/components/_tables.scss'

export default class TablesPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Tables" />
        <hr />
        <div className="docs-example">
          <TableExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
        <PrismCode className="language-jsx">
{`Table.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
size: PropTypes.string,
bordered: PropTypes.bool,
borderless: PropTypes.bool,
striped: PropTypes.bool,
dark: PropTypes.bool,
hover: PropTypes.bool,
responsive: PropTypes.bool
};`}
        </PrismCode>
        </pre>
        <SectionTitle>Dark table</SectionTitle>
        <div className="docs-example">
          <TableDarkExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableDarkExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Striped rows</SectionTitle>
        <div className="docs-example">
          <TableStripedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableStripedExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Bordered table</SectionTitle>
        <div className="docs-example">
          <TableBorderedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableBorderedExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Borderless table</SectionTitle>
        <div className="docs-example">
          <TableBorderlessExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableBorderlessExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Hoverable rows</SectionTitle>
        <div className="docs-example">
          <TableHoverExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableHoverExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Small table</SectionTitle>
        <div className="docs-example">
          <TableSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableSizingExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Responsive table</SectionTitle>
        <div className="docs-example">
          <TableResponsiveExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableResponsiveExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
