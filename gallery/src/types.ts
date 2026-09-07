export type ComponentCategory =
  | 'button'
  | 'input'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'textarea'
  | 'tabs'
  | 'dialog'
  | 'tooltip';

export type SystemCategory =
  | 'tech-giant'
  | 'enterprise'
  | 'developer-tools'
  | 'e-commerce'
  | 'government'
  | 'automotive'
  | 'modern-react'
  | 'specialty-retro';

export interface SystemTokens {
  primaryColor: string;
  borderRadius: string;
  controlHeight: string;
  fontFamily: string;
  focusStyle: string;
}

export interface DesignSystemMeta {
  id: string;
  name: string;
  organization: string;
  category: SystemCategory;
  categoryLabel: string;
  docsUrl: string;
  repoUrl?: string;
  description: string;
  aestheticNotes: string;
  tokens: SystemTokens;
  variants: {
    buttons: string[];
    inputs: string[];
    selects: string[];
    radios: string[];
    checkboxes?: string[];
    switches?: string[];
    textareas?: string[];
    tabs?: string[];
    dialogs?: string[];
    tooltips?: string[];
  };
  canonicalCode: {
    button: string;
    input: string;
    select: string;
    radio: string;
    checkbox: string;
    switch: string;
    textarea: string;
    tabs: string;
    dialog: string;
    tooltip: string;
  };
}

export interface DesignSystemComponents {
  Button: React.FC;
  Input: React.FC;
  Select: React.FC;
  Radio: React.FC;
  Checkbox: React.FC;
  Switch: React.FC;
  Textarea: React.FC;
  Tabs: React.FC;
  Dialog: React.FC;
  Tooltip: React.FC;
}

export interface DesignSystemEntry {
  meta: DesignSystemMeta;
  components: DesignSystemComponents;
}
