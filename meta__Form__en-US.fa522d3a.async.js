"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[6569],{51482:function(d,a,e){var r;e.r(a),e.d(a,{demos:function(){return i}});var o=e(17061),l=e.n(o),p=e(17156),u=e.n(p),t=e(67294),f=e(65883),c=e(54268),i={"src-form-demo-formbase":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,87458))})),asset:{type:"BLOCK",id:"src-form-demo-formbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49546).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Basic",description:"Display of all form elements"},context:{react:r||(r=e.t(t,2)),"react-papercss-design":c},renderOpts:{compile:function(){var m=u()(l()().mark(function v(){var s,_=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,_));case 3:case"end":return n.stop()}},v)}));function I(){return m.apply(this,arguments)}return I}()}}}},73855:function(d,a,e){e.r(a),e.d(a,{texts:function(){return o}});var r=e(65883);const o=[{value:"A collection of controls for data entry",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Forms",paraId:1,tocIndex:0},{value:"PaperCSS form component styles are all written under ",paraId:2},{value:".form-group",paraId:2},{value:". For decoupling purposes, all form components have their styles extracted or partially overridden (for example, a notable difference is that when used standalone, form components are ",paraId:2},{value:"display: inline-block",paraId:2},{value:" instead of ",paraId:2},{value:"block",paraId:2},{value:"). However, when used with ",paraId:2},{value:"Form.Group",paraId:2},{value:", the styling remains consistent with PaperCSS without any modifications.",paraId:2},{value:"Basic Form usage: A ",paraId:3},{value:"Form",paraId:3},{value:" contains multiple ",paraId:3},{value:"Form.Group",paraId:3},{value:"s, each ",paraId:3},{value:"Form.Group",paraId:3},{value:" contains a set of ",paraId:3},{value:"Label",paraId:3},{value:" and form components. You can use ",paraId:3},{value:"controlId",paraId:3},{value:" to associate ",paraId:3},{value:"Label",paraId:3},{value:" with form components. A default one will be provided if not specified.",paraId:3},{value:`return (
  <Form>
    <Form.Group>
      <Label>Input</Label>
      <Input />
    </Form.Group>
    <Form.Group controlId="customId">
      <Label>Switch</Label>
      <Switch />
    </Form.Group>
  </Form>
);
`,paraId:4},{value:"The ",paraId:5,tocIndex:3},{value:"Form",paraId:5,tocIndex:3},{value:" component is just a wrapper around the native ",paraId:5,tocIndex:3},{value:"form",paraId:5,tocIndex:3},{value:" element with no other changes.",paraId:5,tocIndex:3},{value:"Property",paraId:6,tocIndex:5},{value:"Description",paraId:6,tocIndex:5},{value:"Type",paraId:6,tocIndex:5},{value:"Default",paraId:6,tocIndex:5},{value:"disabled",paraId:6,tocIndex:5},{value:"Whether to disable all form child elements",paraId:6,tocIndex:5},{value:"boolean",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"Equivalent to the native ",paraId:7,tocIndex:5},{value:"form",paraId:7,tocIndex:5},{value:" element, supports all ",paraId:7,tocIndex:5},{value:"form",paraId:7,tocIndex:5},{value:" attributes.",paraId:7,tocIndex:5},{value:"Property",paraId:8,tocIndex:6},{value:"Description",paraId:8,tocIndex:6},{value:"Type",paraId:8,tocIndex:6},{value:"Default",paraId:8,tocIndex:6},{value:"controlId",paraId:8,tocIndex:6},{value:"Provides ",paraId:8,tocIndex:6},{value:"id",paraId:8,tocIndex:6},{value:" attribute for ",paraId:8,tocIndex:6},{value:"Label",paraId:8,tocIndex:6},{value:" and form elements, defaults to a unique id if not provided",paraId:8,tocIndex:6},{value:"string | undefined",paraId:8,tocIndex:6},{value:"uniqId",paraId:8,tocIndex:6},{value:"as",paraId:8,tocIndex:6},{value:"Element to render, defaults to ",paraId:8,tocIndex:6},{value:"div",paraId:8,tocIndex:6},{value:", consider using ",paraId:8,tocIndex:6},{value:"fieldset",paraId:8,tocIndex:6},{value:"React.ElementType",paraId:8,tocIndex:6},{value:"div",paraId:8,tocIndex:6}]},49546:function(d,a){a.Z=`import React, { useState } from 'react';
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
`}}]);
