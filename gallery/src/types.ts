export type ComponentCategory = 'button' | 'input' | 'select' | 'radio';

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
  };
  canonicalCode: {
    button: string;
    input: string;
    select: string;
    radio: string;
  };
}

export interface DesignSystemComponents {
  Button: React.FC;
  Input: React.FC;
  Select: React.FC;
  Radio: React.FC;
}

export interface DesignSystemEntry {
  meta: DesignSystemMeta;
  components: DesignSystemComponents;
}
