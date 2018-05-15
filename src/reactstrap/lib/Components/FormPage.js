/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import FormExample from '../examples/Form';
import FormExampleSource from '../examples/Form.txt';

import FormGridExample from '../examples/FormGrid';
import FormGridExampleSource from '../examples/FormGrid.txt';

import FormInlineExample from '../examples/FormInline';
import FormInlineExampleSource from '../examples/FormInline.txt';

import FormFeedbackExample from '../examples/FormFeedback';
import FormFeedbackExampleSource from '../examples/FormFeedback.txt';

import InputTypeExample from '../examples/InputType';
import InputTypeExampleSource from '../examples/InputType.txt';

import InlineCheckboxesExample from '../examples/InlineCheckboxes';
import InlineCheckboxesExampleSource from '../examples/InlineCheckboxes.txt';

import InputSizingExample from '../examples/InputSizing';
import InputSizingExampleSource from '../examples/InputSizing.txt';

import InputGridSizingExample from '../examples/InputGridSizing';
import InputGridSizingExampleSource from '../examples/InputGridSizing.txt';

import LabelHiddenExample from '../examples/LabelHidden';
import LabelHiddenExampleSource from '../examples/LabelHidden.txt';

import CustomControlsExample from '../examples/CustomControls';
import CustomControlsExampleSource from '../examples/CustomControls.txt';

import '../../../styles/components/_forms.scss'
import '../../../styles/components/_custom-forms.scss'

export default class FormPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Form" />
        <div className="docs-example">
          <FormExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`Input.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
  valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
  invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};`}
{`CustomInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired, // radio, checkbox, select, range.
  label: PropTypes.string, // used for checkbox and radios
  inline: PropTypes.bool,
  valid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
  invalid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
  bsSize: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]) // for type="select"
};`}
          </PrismCode>
        </pre>

        <SectionTitle>Form Grid</SectionTitle>
        <div className="docs-example">
          <FormGridExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormGridExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Inline Form</SectionTitle>
        <div className="docs-example">
          <FormInlineExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormInlineExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Form Validation</SectionTitle>
        <div className="docs-example">
          <FormFeedbackExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormFeedbackExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Input Types</SectionTitle>
        <div className="docs-example">
          <InputTypeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputTypeExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Inline checkboxes</SectionTitle>
        <div className="docs-example">
          <InlineCheckboxesExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InlineCheckboxesExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Input Sizing</SectionTitle>
        <div className="docs-example">
          <InputSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputSizingExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Input Grid Sizing</SectionTitle>
        <div className="docs-example">
          <InputGridSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputGridSizingExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Hidden Labels</SectionTitle>
        <div className="docs-example">
          <LabelHiddenExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LabelHiddenExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Custom Inputs</SectionTitle>
        <div className="docs-example">
          <CustomControlsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CustomControlsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
