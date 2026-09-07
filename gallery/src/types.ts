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
  | 'tooltip'
  | 'card'
  | 'dropdown-menu'
  | 'table'
  | 'alert'
  | 'toast'
  | 'badge'
  | 'accordion'
  | 'pagination'
  | 'breadcrumbs'
  | 'avatar';

export type SystemStatus =
  | 'active'
  | 'legacy'
  | 'deprecated'
  | 'unknown';

export type SystemType =
  | 'design-system'
  | 'ui-library'
  | 'platform-guidelines'
  | 'government-design-system'
  | 'legacy-ui';

export type SystemCategory =
  | 'tech-giant'
  | 'enterprise'
  | 'developer-tools'
  | 'e-commerce'
  | 'government'
  | 'automotive'
  | 'modern-react'
  | 'specialty-retro';

export interface ComponentSupport {
  button: boolean;
  input: boolean;
  select: boolean;
  radio: boolean;
  checkbox: boolean;
  switch: boolean;
  textarea: boolean;
  tabs: boolean;
  dialog: boolean;
  tooltip: boolean;
  card?: boolean;
  dropdownMenu?: boolean;
  table?: boolean;
  alert?: boolean;
  toast?: boolean;
  badge?: boolean;
  accordion?: boolean;
  pagination?: boolean;
  breadcrumbs?: boolean;
  avatar?: boolean;
}

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
  status: SystemStatus;
  type: SystemType;
  category: SystemCategory;
  categoryLabel: string;
  docsUrl: string;
  officialUrl?: string;
  repoUrl?: string;
  description: string;
  aestheticNotes: string;
  tokens: SystemTokens;
  platforms?: string[];
  framework?: string;
  openSource?: boolean;
  componentSupport: ComponentSupport;
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
    cards?: string[];
    menus?: string[];
    tables?: string[];
    alerts?: string[];
    toasts?: string[];
    badges?: string[];
    accordions?: string[];
    paginations?: string[];
    breadcrumbs?: string[];
    avatars?: string[];
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
    card?: string;
    'dropdown-menu'?: string;
    table?: string;
    alert?: string;
    toast?: string;
    badge?: string;
    accordion?: string;
    pagination?: string;
    breadcrumbs?: string;
    avatar?: string;
    [key: string]: string | undefined;
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
  Card: React.FC;
  DropdownMenu: React.FC;
  Table: React.FC;
  Alert: React.FC;
  Toast: React.FC;
  Badge: React.FC;
  Accordion: React.FC;
  Pagination: React.FC;
  Breadcrumbs: React.FC;
  Avatar: React.FC;
}

export interface DesignSystemEntry {
  meta: DesignSystemMeta;
  components: DesignSystemComponents;
}
