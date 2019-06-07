// Dependencies
import * as React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
// Storybook
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
// Components
import { CodeSnippet } from '../src/components/CodeSnippet/CodeSnippet';
import { ComponentPresentation } from '../src/components/ComponentPresentation/ComponentPresentation';
import { RadioGroup } from '../src/components/Radio/RadioGroup';
import { Beavis } from '../src/components/Colors/Institutional/Beavis';
import { Mario } from '../src/components/Colors/Primary/Mario';
import { White } from '../src/components/Colors/Acromathic/White';

const initialState = {
  items: [
    {
      checked: false,
      label: 'Opcion 1',
      value: 1,
    },
    {
      checked: true,
      label: 'Opcion 2',
      value: 2,
    },
    {
      checked: false,
      label: 'Opcion 3',
      value: 3,
    },
    {
      checked: false,
      label: 'Opcion 4',
      value: 4,
    },
  ],
}

storiesOf('RadioGroup', module)
.add('Configuration', withState({ items: initialState.items })(({ store }) => {
  const componentProps = [
    { name: 'label', type: 'string', description: 'Label for Radio Button' },
    { name: 'color', type: 'enum: `PrimaryColor`, `InstitutionalColor`', default: 'Milhouse', description: 'Text Color Label for Radio Button' },
  ];

  const componentStyles = [
    { name: 'label', description: 'Label for Radio Button' },
    { name: 'color', description: 'Text Color Label for Radio Button' },
  ];

  return (
    <React.Fragment>
      <ComponentPresentation
        title="Radio Button"
        subtitle="El Radio Button es un componente de selección única entre múltiple opciones."
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        name="{ RadioButton }"
        library="@extendeal/ui-toolkit"
        componentProps={ componentProps }
        componentStyles={ componentStyles }
        children={
          <RadioGroup
            name="radios"
            items={ store.state.items }
            onClick={ (name, items) => store.set({ items }) }
          />
        }
      />
    </React.Fragment>
  )
}))

.add('Live Action', withState({ items: initialState.items })(({ store }) => {
  const scope = { RadioGroup, store };
  const code = `<RadioGroup name="radios" items={ store.state.items } onClick={ (name, items) => store.set({ items }) } />`;

  return (
    <React.Fragment>
      <LiveProvider
        code={ code }
        scope={ scope }
        noInline={ false }
        style={{ marginBottom: 20 }}
      >
        <LiveEditor
          style={{
            backgroundColor: Beavis.B800,
            fontFamily: 'monospace',
            fontSize: 12,
            padding: 12,
          }}
        />
        <LiveError
          style={{
            backgroundColor: Mario.Ma500,
            color: White.level4,
            fontFamily: 'monospace',
            fontSize: 12,
            padding: '6px 12px',
          }}
        />
        <LivePreview
          style={{ marginTop: 20 }}
        />
      </LiveProvider>

      <CodeSnippet objects={[{ items: store.state.items }]} identation={ 4 } />
    </React.Fragment>
  )
}))