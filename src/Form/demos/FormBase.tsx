import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Label,
  Radio,
  Select,
  Slider,
  Switch,
  Textarea,
} from 'react-papercss-design';

const App: React.FC = () => {
  const [formDisabled, setFormDisabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, any>>({});

  return (
    <>
      <p>Form Data: {JSON.stringify(formData, null, 2)}</p>
      <Checkbox
        checked={formDisabled}
        onChange={(value) => {
          setFormDisabled(value);
        }}
      >
        Form disabled
      </Checkbox>

      <Form
        disabled={formDisabled}
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.currentTarget;
          const formData = new FormData(form);
          const json: Record<string, any> = {};
          for (const key of (formData as any).keys()) {
            const values = formData.getAll(key);
            json[key] = values.length > 1 ? values : values[0];
          }
          setFormData(json);
        }}
      >
        <Form.Group controlId="formInput">
          <Label>Input</Label>
          <Input name="input" />
        </Form.Group>
        <Form.Group>
          <Label>Textarea</Label>
          <Textarea name="textarea" />
        </Form.Group>
        <Form.Group>
          <Label>Select</Label>
          <Select
            options={[
              {
                label: 'Option 1',
                value: 'option1',
              },
              {
                label: 'Option 2',
                value: 'option2',
              },
            ]}
            name="select"
          />
        </Form.Group>
        <Form.Group>
          <Label>Radio</Label>
          <Radio name="radios" value="radio1">
            Radio1
          </Radio>
          <Radio name="radios" value="radio2">
            Radio2
          </Radio>
        </Form.Group>
        <Form.Group>
          <Label>Checkbox</Label>
          <Checkbox name="checkboxes" value="checkbox1">
            Checkbox1
          </Checkbox>
          <Checkbox name="checkboxes" value="checkbox2">
            Checkbox2
          </Checkbox>
        </Form.Group>
        <Form.Group>
          <Label>Switch</Label>
          <Switch name="switch" />
        </Form.Group>
        <Form.Group as="fieldset">
          <p>Switch Tile</p>
          <Switch.Tile name="switchTile" checkedContent="Yes" unCheckedContent="No" />
        </Form.Group>
        <Form.Group>
          <Label>Slider</Label>
          <Slider name="slider" />
        </Form.Group>

        <Button htmlType="submit" type="secondary" disabled={formDisabled}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default App;
