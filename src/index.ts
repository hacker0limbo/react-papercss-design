import { jss } from 'react-jss';

// 覆盖 jss 的自动生成类名, 仅仅根据 rule 的 key 来生成, 同时增加 prefix: rpd(react-papercss-design)
jss.setup({
  createGenerateId: () => {
    return (rule: Record<string, any>) => `rpd-${rule.key}`;
  },
});

export * from './Alert';
export * from './Article';
export * from './BackTop';
export * from './Badge';
export * from './Breadcrumb';
export * from './Button';
export * from './Card';
export * from './Checkbox';
export * from './Collapse';
export * from './ConfigProvider';
export * from './Container';
export * from './FLexbox';
export * from './Form';
export { default as hooks } from './hooks';
export * from './Image';
export * from './Input';
export * from './Label';
export * from './List';
export * from './Message';
export * from './Modal';
export * from './Navbar';
export * from './Pagination';
export * from './Popover';
export * from './Progress';
export * from './Radio';
export * from './Select';
export * from './Slider';
export * from './Space';
export * from './Switch';
export * from './Table';
export * from './Tabs';
export * from './Textarea';
export * from './Typography';
