import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import JumbotronExample from '../examples/Jumbotron';
import JumbotronFluidExample from "../examples/JumbotronFluid";

import JumbotronExampleSource from '../examples/Jumbotron.txt';
import JumbotronFluidExampleSource from '../examples/JumbotronFluid.txt';

import '../../../styles/components/_jumbotron.scss'

export default class JumbotronPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Jumbotron" />
        <hr />
        <div className="docs-example">
          <JumbotronExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {JumbotronExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};`}
          </PrismCode>
        </pre>

        <SectionTitle>Fluid Jumbotron</SectionTitle>
        <hr />
        <div className="docs-example">
          <JumbotronFluidExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {JumbotronFluidExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
