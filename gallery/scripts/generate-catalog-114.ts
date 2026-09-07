import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DS_DIR = path.join(ROOT_DIR, 'src/design-systems');
const STYLES_FILE = path.join(ROOT_DIR, 'src/styles/design-systems.css');
const DATA_FILE = path.join(ROOT_DIR, 'src/registry/data.ts');
const REGISTRY_INDEX_FILE = path.join(ROOT_DIR, 'src/registry/index.ts');

interface SystemMetaEnrichment {
  status: 'active' | 'legacy' | 'deprecated';
  type: 'design-system' | 'ui-library' | 'platform-guidelines' | 'government-design-system' | 'legacy-ui';
  componentSupport: {
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
  };
}

const EXISTING_44_ENRICHMENT: Record<string, SystemMetaEnrichment> = {
  material: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  apple: { status: 'active', type: 'platform-guidelines', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  fluent: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  carbon: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  polaris: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  atlassian: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  primer: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  spectrum: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  salesforce: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  ant: { status: 'active', type: 'ui-library', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  chakra: { status: 'active', type: 'ui-library', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  mantine: { status: 'active', type: 'ui-library', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  radix: { status: 'active', type: 'ui-library', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  shadcn: { status: 'active', type: 'ui-library', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  eui: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  fiori: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  govuk: { status: 'active', type: 'government-design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: false } },
  uswds: { status: 'active', type: 'government-design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  mozilla: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  ubuntu: { status: 'active', type: 'platform-guidelines', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  patternfly: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  'base-web': { status: 'legacy', type: 'ui-library', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  blueprint: { status: 'active', type: 'ui-library', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  semantic: { status: 'legacy', type: 'ui-library', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  porsche: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  audi: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  pajamas: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  wise: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  mailchimp: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  garden: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  orbit: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  workday: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  leafygreen: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  cloudscape: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  paste: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  vitamin: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  backstage: { status: 'active', type: 'ui-library', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  cedar: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  thumbprint: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  nord: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  origami: { status: 'legacy', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  backpack: { status: 'active', type: 'design-system', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  photon: { status: 'legacy', type: 'platform-guidelines', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
  win98: { status: 'legacy', type: 'legacy-ui', componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true } },
};

export interface NewSystemConfig {
  id: string;
  name: string;
  organization: string;
  status: 'active' | 'legacy' | 'deprecated';
  type: 'design-system' | 'ui-library' | 'platform-guidelines' | 'government-design-system' | 'legacy-ui';
  category: 'tech-giant' | 'enterprise' | 'developer-tools' | 'e-commerce' | 'government' | 'automotive' | 'modern-react' | 'specialty-retro';
  categoryLabel: string;
  docsUrl: string;
  repoUrl?: string;
  description: string;
  aestheticNotes: string;
  tokens: {
    primaryColor: string;
    borderRadius: string;
    controlHeight: string;
    fontFamily: string;
    focusStyle: string;
  };
  componentSupport: {
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
  };
}

// 70 Verified New Systems
export const NEW_70_SYSTEMS: NewSystemConfig[] = [
  {
    id: 'acorn',
    name: 'Firefox Acorn',
    organization: 'Mozilla',
    status: 'active',
    type: 'platform-guidelines',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://acorn.firefox.com',
    repoUrl: 'https://github.com/mozilla/acorn',
    description: "Mozilla's modern design system specifically for Firefox browser desktop UI and browser experiences.",
    aestheticNotes: "Compact browser chrome density, Mozilla Blue accents (#0060df), 4px radii, and accessible high-contrast navigation tabs.",
    tokens: {
      primaryColor: '#0060df',
      borderRadius: '4px',
      controlHeight: '32px',
      fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(0, 96, 223, 0.35)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'geist',
    name: 'Vercel Geist',
    organization: 'Vercel',
    status: 'active',
    type: 'ui-library',
    category: 'modern-react',
    categoryLabel: 'Modern React',
    docsUrl: 'https://geist-ui.dev',
    repoUrl: 'https://github.com/geist-org/geist-ui',
    description: "High-contrast monochromatic design language crafted by Vercel for modern Next.js cloud interfaces.",
    aestheticNotes: "Pure black and stark white minimalism, crisp hairline borders (#eaeaea), 6px radii, and precision typographic hierarchy.",
    tokens: {
      primaryColor: '#000000',
      borderRadius: '6px',
      controlHeight: '40px',
      fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #000000',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'helios',
    name: 'HashiCorp Helios',
    organization: 'HashiCorp',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://helios.hashicorp.design',
    repoUrl: 'https://github.com/hashicorp/design-system',
    description: "Cloud infrastructure design system unifying Terraform, Vault, and Consul interfaces with rich slate neutrals.",
    aestheticNotes: "Engineering-grade technical density, HashiCorp Blue (#0068a5), dark slate surfaces (#15191e), and crisp 4px corners.",
    tokens: {
      primaryColor: '#0068a5',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(0, 104, 165, 0.3)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'codex',
    name: 'Wikimedia Codex',
    organization: 'Wikimedia Foundation',
    status: 'active',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://doc.wikimedia.org/codex/main/',
    repoUrl: 'https://github.com/wikimedia/codex',
    description: "Open-source design system powering Wikipedia and Wikimedia projects with encyclopedic clarity.",
    aestheticNotes: "Wiki Blue (#3366cc), 2px slight radii, high-legibility serif/sans typography, and accessible internationalized forms.",
    tokens: {
      primaryColor: '#3366cc',
      borderRadius: '2px',
      controlHeight: '32px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, sans-serif",
      focusStyle: '0 0 0 2px #3366cc',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'calcite',
    name: 'Esri Calcite',
    organization: 'Esri',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://developers.arcgis.com/calcite-design-system/',
    repoUrl: 'https://github.com/Esri/calcite-design-system',
    description: "Geospatial mapping and GIS design system for ArcGIS applications and spatial data visualizations.",
    aestheticNotes: "GIS map overlay compatibility, ArcGIS Blue (#007ac2), compact toolbar buttons, and floating map drawer dialogs.",
    tokens: {
      primaryColor: '#007ac2',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      focusStyle: '0 0 0 2px #007ac2',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'clarity',
    name: 'VMware Clarity',
    organization: 'VMware / Broadcom',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://clarity.design',
    repoUrl: 'https://github.com/vmware-clarity/core',
    description: "Enterprise virtualization and cloud infrastructure UX system with high-density data grids.",
    aestheticNotes: "Virtual center console styling, Clarity Blue (#0072a3), 3px corner radii, and high-contrast data visualization indicators.",
    tokens: {
      primaryColor: '#0072a3',
      borderRadius: '3px',
      controlHeight: '36px',
      fontFamily: "'Metropolis', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      focusStyle: '0 0 0 2px #0072a3',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'evergreen',
    name: 'Segment Evergreen',
    organization: 'Segment / Twilio',
    status: 'active',
    type: 'ui-library',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://evergreen.segment.com',
    repoUrl: 'https://github.com/segmentio/evergreen',
    description: "Pragmatic UI framework for customer data platform dashboards, API ingestion, and analytics.",
    aestheticNotes: "Subtle tinted elevation boxes, Segment Blue (#1070ca), soft 4px corners, and functional developer-first inputs.",
    tokens: {
      primaryColor: '#1070ca',
      borderRadius: '4px',
      controlHeight: '32px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px rgba(16, 112, 202, 0.4)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'grommet',
    name: 'HPE Grommet',
    organization: 'Hewlett Packard Enterprise',
    status: 'active',
    type: 'ui-library',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://v2.grommet.io',
    repoUrl: 'https://github.com/grommet/grommet',
    description: "Accessible, mobile-first React UI framework tailored for enterprise IT and hardware telemetries.",
    aestheticNotes: "Distinctive HPE Purple (#7D4CDB), rounded 18px pill buttons, wide touch targets, and accessible spacing.",
    tokens: {
      primaryColor: '#7D4CDB',
      borderRadius: '18px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #7D4CDB',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'redwood',
    name: 'Oracle Redwood',
    organization: 'Oracle',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://www.oracle.com/redwood',
    description: "Oracle's next-generation design language with warm organic earth tones and rounded surfaces.",
    aestheticNotes: "Warm coffee slate (#312d2a), terracotta red accents (#c74634), 6px radii, and modern card-based enterprise forms.",
    tokens: {
      primaryColor: '#312d2a',
      borderRadius: '6px',
      controlHeight: '40px',
      fontFamily: "'Oracle Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      focusStyle: '0 0 0 2px #c74634',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'momentum',
    name: 'Cisco Momentum UI',
    organization: 'Cisco',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://momentum.design',
    repoUrl: 'https://github.com/momentum-design/momentum-ui',
    description: "Collaboration and networking design language created for Webex and enterprise telecoms.",
    aestheticNotes: "Vibrant Cisco Cyan (#007aa3), 8px rounded controls, dark theme adaptability, and meeting room console styling.",
    tokens: {
      primaryColor: '#007aa3',
      borderRadius: '8px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(0, 122, 163, 0.35)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'rhds',
    name: 'Red Hat Design System',
    organization: 'Red Hat',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://ux.redhat.com',
    repoUrl: 'https://github.com/redhat-ux/red-hat-design-system',
    description: "Red Hat's unified brand and web design system featuring RedHatText and signature enterprise red.",
    aestheticNotes: "Red Hat Red (#ee0000), 3px corner radius, geometric Red Hat typography, and open source enterprise branding.",
    tokens: {
      primaryColor: '#ee0000',
      borderRadius: '3px',
      controlHeight: '36px',
      fontFamily: "'Red Hat Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      focusStyle: '0 0 0 2px #0066cc',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'quickbooks',
    name: 'Intuit Harmony / QuickBooks',
    organization: 'Intuit',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://designsystem.intuit.com',
    description: "Small business accounting and financial workflows design system used across QuickBooks and TurboTax.",
    aestheticNotes: "Intuit QuickBooks Green (#2ca01c), approachable 4px rounded buttons, invoice table dense typography, and friendly financial guidance.",
    tokens: {
      primaryColor: '#2ca01c',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #2ca01c',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'servicenow',
    name: 'ServiceNow Design System',
    organization: 'ServiceNow',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://developer.servicenow.com',
    description: "IT service management, workflow automation, and enterprise incident console design system.",
    aestheticNotes: "Deep Navy (#032d42), Now Green accents (#293e40), 4px border radius, and high-productivity workflow forms.",
    tokens: {
      primaryColor: '#032d42',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #293e40',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'hubspot',
    name: 'HubSpot Canvas',
    organization: 'HubSpot',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://canvas.hubspot.com',
    description: "Inbound marketing, CRM, and customer success management interface system with energetic orange accents.",
    aestheticNotes: "HubSpot Coral Orange (#ff7a59), 3px corner radii, friendly rounded input focus highlights, and clear marketing sales stages.",
    tokens: {
      primaryColor: '#ff7a59',
      borderRadius: '3px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(255, 122, 89, 0.3)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'infor',
    name: 'Infor Design System',
    organization: 'Infor',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://design.infor.com',
    repoUrl: 'https://github.com/infor-design/enterprise',
    description: "Heavy manufacturing, ERP, and supply chain enterprise interface system (SoHo XI).",
    aestheticNotes: "Industrial enterprise density, Infor Blue (#1377c9), 2px crisp corners, and robust tabular form data inputs.",
    tokens: {
      primaryColor: '#1377c9',
      borderRadius: '2px',
      controlHeight: '34px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #1377c9',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'instructure',
    name: 'Instructure UI',
    organization: 'Instructure',
    status: 'active',
    type: 'ui-library',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://instructure.github.io/instructure-ui/',
    repoUrl: 'https://github.com/instructure/instructure-ui',
    description: "Higher education LMS and Canvas student learning portal design system.",
    aestheticNotes: "Slate graphite (#2d3b45), Canvas Electric Blue (#008ee2), 4px border radius, and accessible academic readability.",
    tokens: {
      primaryColor: '#2d3b45',
      borderRadius: '4px',
      controlHeight: '38px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #008ee2',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'lexicon',
    name: 'Liferay Lexicon (Clay)',
    organization: 'Liferay',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://clayui.com',
    repoUrl: 'https://github.com/liferay/clay',
    description: "Enterprise digital experience platform (DXP) design system built on Bootstrap and Clay.",
    aestheticNotes: "Liferay Electric Cobalt (#0b5fff), 4px rounded geometry, polished form field paddings, and extensible portal navigation.",
    tokens: {
      primaryColor: '#0b5fff',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(11, 95, 255, 0.25)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'pega-cosmos',
    name: 'Pega Cosmos',
    organization: 'Pegasystems',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://design.pega.com',
    description: "High-volume case management and AI decisioning design system for banks and telecommunications.",
    aestheticNotes: "Deep Pega Navy (#003764), 4px subtle rounded cards, dense tabular workflow inputs, and multi-channel case views.",
    tokens: {
      primaryColor: '#003764',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #0066cc',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'pega-bolt',
    name: 'Pega Bolt Design System',
    organization: 'Pegasystems',
    status: 'legacy',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://boltdesignsystem.com',
    repoUrl: 'https://github.com/bolt-design-system/bolt',
    description: "Bolt Design System developed for Pega marketing platforms with web component architecture.",
    aestheticNotes: "High contrast dark slate (#20272c), 4px border radius, sharp typography, and content-centric presentation.",
    tokens: {
      primaryColor: '#20272c',
      borderRadius: '4px',
      controlHeight: '38px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #0066cc',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'pluralsight',
    name: 'Pluralsight Design System',
    organization: 'Pluralsight',
    status: 'active',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://design-system.pluralsight.com',
    repoUrl: 'https://github.com/pluralsight/pando',
    description: "Technology skills and developer learning platform design language with high contrast neon pink gradients.",
    aestheticNotes: "Pluralsight Neon Coral (#f15b2a), 4px border radii, tech-dark background compatibility, and high-visibility badges.",
    tokens: {
      primaryColor: '#f15b2a',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "'PS Commons', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      focusStyle: '0 0 0 3px rgba(241, 91, 42, 0.3)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'barista',
    name: 'Dynatrace Barista',
    organization: 'Dynatrace',
    status: 'active',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://barista.dynatrace.com',
    repoUrl: 'https://github.com/dynatrace-oss/barista',
    description: "Observability, APM, and cloud intelligence dashboard design system.",
    aestheticNotes: "Monitoring console Blue (#1496ff), compact 32px height controls, 3px border radius, and telemetry metric data pills.",
    tokens: {
      primaryColor: '#1496ff',
      borderRadius: '3px',
      controlHeight: '32px',
      fontFamily: "'BerninaSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      focusStyle: '0 0 0 2px #1496ff',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'anvil',
    name: 'ServiceTitan Anvil',
    organization: 'ServiceTitan',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://anvil.servicetitan.com',
    description: "Field service management, dispatch, and commercial trades ERP design system.",
    aestheticNotes: "Titan Electric Blue (#0066f5), 6px balanced radii, clear contrast form labels, and dispatch calendar controls.",
    tokens: {
      primaryColor: '#0066f5',
      borderRadius: '6px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #0066f5',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'wanda',
    name: 'Wonderflow Wanda',
    organization: 'Wonderflow',
    status: 'active',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://design.wonderflow.ai',
    repoUrl: 'https://github.com/wonderflow-bv/wanda',
    description: "Customer feedback analytics and AI consumer intelligence interface system.",
    aestheticNotes: "AI platform precision, Electric Blue (#0f62fe), 4px border radius, and clean sentiment analysis data cards.",
    tokens: {
      primaryColor: '#0f62fe',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #0f62fe',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'circuit-ui',
    name: 'SumUp Circuit UI',
    organization: 'SumUp',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://circuit.sumup.com',
    repoUrl: 'https://github.com/sumup-oss/circuit-ui',
    description: "Point of sale, micro-merchant payments, and card reader software design system.",
    aestheticNotes: "SumUp bold black brand tone (#000000), 8px corner radii, prominent tap touch targets, and high merchant legibility.",
    tokens: {
      primaryColor: '#000000',
      borderRadius: '8px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #1a1a1a',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'line',
    name: 'LINE Design System',
    organization: 'LINE Corporation / LY Corporation',
    status: 'active',
    type: 'design-system',
    category: 'tech-giant',
    categoryLabel: 'Tech Giants',
    docsUrl: 'https://designsystem.line.me',
    description: "Pan-Asian social messaging and fintech super-app design language with vibrant green (#06c755).",
    aestheticNotes: "Signature LINE Green (#06c755), friendly 6px radii, chat-bubble responsive inputs, and vibrant mobile-first UI.",
    tokens: {
      primaryColor: '#06c755',
      borderRadius: '6px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #06c755',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'one-ui',
    name: 'Samsung One UI',
    organization: 'Samsung Electronics',
    status: 'active',
    type: 'platform-guidelines',
    category: 'tech-giant',
    categoryLabel: 'Tech Giants',
    docsUrl: 'https://developer.samsung.com/one-ui',
    description: "Galaxy smartphone and tablet design language prioritizing reachable lower-screen interaction zones.",
    aestheticNotes: "Samsung Galaxy Blue (#0381fe), super-rounded 18px pill buttons and controls, thumb-friendly ergonomic spacing.",
    tokens: {
      primaryColor: '#0381fe',
      borderRadius: '18px',
      controlHeight: '40px',
      fontFamily: "'Samsung One', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      focusStyle: '0 0 0 3px rgba(3, 129, 254, 0.3)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'morningstar',
    name: 'Morningstar Design System',
    organization: 'Morningstar',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://designsystem.morningstar.com',
    description: "Financial investment research, market asset data, and portfolio analytics design system.",
    aestheticNotes: "Institutional Navy (#003262), 2px slight radii, Wall Street financial density, and structured numeric tables.",
    tokens: {
      primaryColor: '#003262',
      borderRadius: '2px',
      controlHeight: '32px',
      fontFamily: "'Morningstar', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      focusStyle: '0 0 0 2px #003262',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel Design System',
    organization: 'Mixpanel',
    status: 'active',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://mixpanel.com',
    description: "Product analytics, user funnel metrics, and retention cohort visualization design system.",
    aestheticNotes: "Mixpanel Violet (#7856ff), 6px rounded corners, query builder input aesthetics, and cohort breakdown cards.",
    tokens: {
      primaryColor: '#7856ff',
      borderRadius: '6px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #7856ff',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'nachos',
    name: 'Grubhub Nachos',
    organization: 'Grubhub',
    status: 'legacy',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://grubhub.github.io/nachos',
    repoUrl: 'https://github.com/grubhub/nachos',
    description: "Food delivery, consumer takeout menus, and merchant restaurant order management system.",
    aestheticNotes: "Diner Red (#f63440), 4px border radius, appetizing card photography borders, and quick-add checkout buttons.",
    tokens: {
      primaryColor: '#f63440',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #f63440',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'liquid',
    name: 'LRN Liquid Design System',
    organization: 'LRN',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://liquid.lrn.com',
    description: "Corporate ethics and compliance training portal design language.",
    aestheticNotes: "Corporate Blue (#1b75bb), 4px radii, approachable corporate learning workflows, and quiz interaction elements.",
    tokens: {
      primaryColor: '#1b75bb',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #1b75bb',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'feelix',
    name: 'MYOB Feelix',
    organization: 'MYOB',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://feelix.myob.com',
    repoUrl: 'https://github.com/myob-technology/feelix',
    description: "Australian and New Zealand accounting, tax, and small business payroll software system.",
    aestheticNotes: "MYOB Royal Purple (#6100a5), 4px rounded buttons, invoice reconciliation inputs, and accounting tax tags.",
    tokens: {
      primaryColor: '#6100a5',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #6100a5',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'elementary',
    name: 'elementary OS HIG',
    organization: 'elementary LLC',
    status: 'active',
    type: 'platform-guidelines',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://docs.elementary.io/hig/',
    description: "Human interface guidelines for open-source Linux desktop operating system emphasizing typography and soft roundness.",
    aestheticNotes: "Pantheon desktop Blue (#3689e6), 4px border radius, subtle GTK-style gradients, and centered app dialogs.",
    tokens: {
      primaryColor: '#3689e6',
      borderRadius: '4px',
      controlHeight: '34px',
      fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      focusStyle: '0 0 0 2px #3689e6',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'bbc-gel',
    name: 'BBC Global Experience Language',
    organization: 'BBC',
    status: 'active',
    type: 'design-system',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://www.bbc.co.uk/gel',
    description: "Global public broadcaster design language powering BBC News, iPlayer, and BBC Sport digital services.",
    aestheticNotes: "BBC Heritage Crimson (#bb1919), strictly 0px sharp rectangular corners, BBC Reith typography, and bold focus yellow (#ffdd00).",
    tokens: {
      primaryColor: '#bb1919',
      borderRadius: '0px',
      controlHeight: '40px',
      fontFamily: "'BBC Reith Sans', -apple-system, BlinkMacSystemFont, Arial, sans-serif",
      focusStyle: '0 0 0 3px #ffdd00',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'seeds',
    name: 'Sprout Social Seeds',
    organization: 'Sprout Social',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://seeds.sproutsocial.com',
    repoUrl: 'https://github.com/sproutsocial/seeds',
    description: "Social media publishing, customer care inbox, and engagement listening console system.",
    aestheticNotes: "Sprout Spruce Blue (#2b6cb0), 4px radius, message compose textarea enhancements, and social feed metadata.",
    tokens: {
      primaryColor: '#2b6cb0',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #2b6cb0',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'stacks',
    name: 'Stack Overflow Stacks',
    organization: 'Stack Overflow',
    status: 'active',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://stackoverflow.design',
    repoUrl: 'https://github.com/StackExchange/Stacks',
    description: "The iconic developer Q&A community design system built with utility classes and orange accents.",
    aestheticNotes: "Stack Overflow Orange (#f48024), 3px corner radii, code snippet integration, and community badge reputation styling.",
    tokens: {
      primaryColor: '#f48024',
      borderRadius: '3px',
      controlHeight: '34px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(244, 128, 36, 0.3)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'uniform',
    name: 'Hudl Uniform',
    organization: 'Hudl',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://uniform.hudl.com',
    repoUrl: 'https://github.com/hudl/uniform',
    description: "Athletic video analysis, sports breakdowns, and team recruitment platform design system.",
    aestheticNotes: "Hudl High-Performance Orange (#ff5100), 4px radius, high-contrast video overlay compatibility, and player stats cards.",
    tokens: {
      primaryColor: '#ff5100',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #ff5100',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'vtex',
    name: 'VTEX Styleguide',
    organization: 'VTEX',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://styleguide.vtex.com',
    repoUrl: 'https://github.com/vtex/styleguide',
    description: "Enterprise e-commerce platform powering commerce engines across Latin America and globally.",
    aestheticNotes: "VTEX Hot Pink (#f71963), 4px rounded geometry, merchant catalog stock selectors, and checkout currency inputs.",
    tokens: {
      primaryColor: '#f71963',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #f71963',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'yoga',
    name: 'Wellhub Yoga',
    organization: 'Wellhub (Gympass)',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://gympass.github.io/yoga',
    repoUrl: 'https://github.com/gympass/yoga',
    description: "Corporate wellness, gym access, and fitness app design system built with React Native and Web.",
    aestheticNotes: "Energy Red (#e63946), rounded 8px card surfaces, workout metric badges, and active lifestyle typography.",
    tokens: {
      primaryColor: '#e63946',
      borderRadius: '8px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #e63946',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'rivet',
    name: 'Indiana University Rivet',
    organization: 'Indiana University',
    status: 'active',
    type: 'design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://rivet.iu.edu',
    repoUrl: 'https://github.com/indiana-university/rivet-source',
    description: "Public university web design system featuring crimson branding, accessible markup, and clear hierarchy.",
    aestheticNotes: "Indiana Crimson (#990000), 4px border radius, academic institutional clarity, and accessible student portals.",
    tokens: {
      primaryColor: '#990000',
      borderRadius: '4px',
      controlHeight: '38px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #990000',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'priceline-one',
    name: 'Priceline One',
    organization: 'Priceline',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://priceline.github.io/design-system',
    repoUrl: 'https://github.com/priceline/design-system',
    description: "Online travel booking, hotel reservations, and flight checkout design language.",
    aestheticNotes: "Priceline Blue (#0068ef), 4px border radius, room rate deal tags, and travel itinerary selectors.",
    tokens: {
      primaryColor: '#0068ef',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #0068ef',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'seek',
    name: 'SEEK Style Guide (Braid)',
    organization: 'SEEK',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://seek-oss.github.io/braid-design-system',
    repoUrl: 'https://github.com/seek-oss/braid-design-system',
    description: "Australasia's leading job marketplace and employment portal design system.",
    aestheticNotes: "SEEK Navy Blue (#0d3880), 4px border radius, salary range filters, and structured job candidate forms.",
    tokens: {
      primaryColor: '#0d3880',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #0d3880',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'nhs',
    name: 'NHS digital service manual',
    organization: 'UK National Health Service',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://service-manual.nhs.uk/design-system',
    repoUrl: 'https://github.com/nhsuk/nhsuk-frontend',
    description: "UK public healthcare design system engineered for patient accessibility, high contrast, and low digital literacy.",
    aestheticNotes: "NHS Blue (#005eb8), 4px border radius, large 44px touch targets, Frutiger/Arial typography, and yellow high-visibility focus (#ffeb3b).",
    tokens: {
      primaryColor: '#005eb8',
      borderRadius: '4px',
      controlHeight: '44px',
      fontFamily: "'Frutiger', Arial, sans-serif",
      focusStyle: '0 0 0 3px #ffeb3b',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: false },
  },
  {
    id: 'singapore-gov',
    name: 'Singapore Design System',
    organization: 'GovTech Singapore',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://designsystem.tech.gov.sg',
    repoUrl: 'https://github.com/GovTechSG/design-system',
    description: "Official digital design standard for all Singapore government digital services (Singpass, Citizen portals).",
    aestheticNotes: "Singapore Purple (#5925dc), 6px rounded corners, official Singpass citizen authentication styling, and accessible multilingual text.",
    tokens: {
      primaryColor: '#5925dc',
      borderRadius: '6px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(89, 37, 220, 0.3)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: false },
  },
  {
    id: 'ontario',
    name: 'Ontario Design System',
    organization: 'Government of Ontario',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://designsystem.ontario.ca',
    repoUrl: 'https://github.com/ongov/ontario-design-system',
    description: "Civic design system for the Canadian province of Ontario, meeting AODA accessibility requirements.",
    aestheticNotes: "Ontario Civic Blue (#006699), 4px border radius, 44px minimum touch targets, and high-visibility gold focus indicator (#ffbf47).",
    tokens: {
      primaryColor: '#006699',
      borderRadius: '4px',
      controlHeight: '44px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px #ffbf47',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'nys',
    name: 'New York State Design System',
    organization: 'New York State ITS',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://designsystem.ny.gov',
    description: "Official digital component framework for state government agencies across New York State.",
    aestheticNotes: "Empire State Blue (#154973), 4px radii, Proxima Nova typography, and citizen benefit application forms.",
    tokens: {
      primaryColor: '#154973',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "'Proxima Nova', -apple-system, BlinkMacSystemFont, sans-serif",
      focusStyle: '0 0 0 3px #ffcb05',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'uae',
    name: 'UAE Design System',
    organization: 'United Arab Emirates Government',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://designsystem.gov.ae',
    description: "Unified federal digital design standard for UAE government online services and citizen portals.",
    aestheticNotes: "National Falcon Green (#00732f), 6px border radius, bilingual Arabic/English responsive alignment, and modern civic cards.",
    tokens: {
      primaryColor: '#00732f',
      borderRadius: '6px',
      controlHeight: '42px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(0, 115, 47, 0.3)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'helsinki',
    name: 'Helsinki Design System (HDS)',
    organization: 'City of Helsinki',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://hds.hel.fi',
    repoUrl: 'https://github.com/City-of-Helsinki/helsinki-design-system',
    description: "Award-winning open-source design system for Helsinki city municipal digital public services.",
    aestheticNotes: "Nordic Ultramarine (#0000bf), 0px architectural sharp corners, Helsinki Grotesk typography, and robust accessible civic inputs.",
    tokens: {
      primaryColor: '#0000bf',
      borderRadius: '0px',
      controlHeight: '44px',
      fontFamily: "'Helsinki Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
      focusStyle: '0 0 0 3px #0000bf',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'nsw',
    name: 'NSW Design System',
    organization: 'NSW Government',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://digital.nsw.gov.au/design-system',
    repoUrl: 'https://github.com/digitalnsw/nsw-design-system',
    description: "New South Wales state government digital design standard for Australian public services.",
    aestheticNotes: "Waratah Deep Navy (#002664), 4px border radius, Public Sans typography, and accessible license and registration forms.",
    tokens: {
      primaryColor: '#002664',
      borderRadius: '4px',
      controlHeight: '42px',
      fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      focusStyle: '0 0 0 3px #ffbf47',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'australian-gov',
    name: 'Australian Government Design System (GOLD)',
    organization: 'Commonwealth of Australia (DTA)',
    status: 'legacy',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://gold.designsystemau.org',
    repoUrl: 'https://github.com/designsystemau/gold-design-system',
    description: "Canonical Australian federal web component design system established by the Digital Transformation Agency.",
    aestheticNotes: "Canberra Federal Charcoal (#313131), 4px border radius, high-legibility government guidelines, and Section 508 WCAG 2.1 AAA compliance.",
    tokens: {
      primaryColor: '#313131',
      borderRadius: '4px',
      controlHeight: '44px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px #0072b2',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: false },
  },
  {
    id: 'italia',
    name: 'Designers Italia',
    organization: 'Team per la Trasformazione Digitale (Italy)',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://designers.italia.it',
    repoUrl: 'https://github.com/italia/design-react-kit',
    description: "Italian Republic digital public administration design system compliant with AgID guidelines.",
    aestheticNotes: "Azzurro Italia (#0066cc), 4px border radius, Titillium Web typography, and SPID digital identity citizen form conventions.",
    tokens: {
      primaryColor: '#0066cc',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "'Titillium Web', -apple-system, BlinkMacSystemFont, sans-serif",
      focusStyle: '0 0 0 3px #ff9900',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'det-faelles',
    name: 'Det Fælles Designsystem',
    organization: 'Digitaliseringsstyrelsen (Denmark)',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://designsystem.dk',
    repoUrl: 'https://github.com/detfaellesdesignsystem/dkfds',
    description: "Common Danish public sector design system for citizen self-service digital applications (Borger.dk).",
    aestheticNotes: "Danish Teal (#005f73), 2px slight radii, MitID citizen authentication forms, and Danish accessibility standards.",
    tokens: {
      primaryColor: '#005f73',
      borderRadius: '2px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px #ffb703',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'dsfr',
    name: "Système de Design de l'État (DSFR)",
    organization: 'République Française (DINUM)',
    status: 'active',
    type: 'government-design-system',
    category: 'government',
    categoryLabel: 'Government & Civic',
    docsUrl: 'https://www.systeme-de-design.gouv.fr',
    repoUrl: 'https://github.com/GouvernementFR/dsfr',
    description: "Official French national government design system powering Service-Public.fr and ministries.",
    aestheticNotes: "Bleu France (#000091), strictly 0px crisp rectangular corners, Marianne typography, and RGAA French accessibility compliance.",
    tokens: {
      primaryColor: '#000091',
      borderRadius: '0px',
      controlHeight: '40px',
      fontFamily: "'Marianne', -apple-system, BlinkMacSystemFont, Arial, sans-serif",
      focusStyle: '0 0 0 3px #000091',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: false, textarea: true, tabs: true, dialog: true, tooltip: false },
  },
  {
    id: 'ahoy',
    name: 'trivago Ahoy',
    organization: 'trivago',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://trivago.github.io/ahoy',
    repoUrl: 'https://github.com/trivago/ahoy',
    description: "Hotel search and accommodation comparison design system with playful red, blue, and yellow elements.",
    aestheticNotes: "trivago Marine Blue (#007fad), 4px border radius, hotel star rating indicators, and price comparison datepickers.",
    tokens: {
      primaryColor: '#007fad',
      borderRadius: '4px',
      controlHeight: '38px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #007fad',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'tractie',
    name: 'Tractor Supply Tractie',
    organization: 'Tractor Supply Company',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://tractie.tractorsupply.com',
    description: "Rural lifestyle and agricultural retail e-commerce design system.",
    aestheticNotes: "Tractor Barn Red (#cc0000), 4px border radius, rugged outdoor merchandise cards, and rural store pickup buttons.",
    tokens: {
      primaryColor: '#cc0000',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #cc0000',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'axa',
    name: 'AXA Design System',
    organization: 'AXA',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://axafr.github.io/design-system',
    repoUrl: 'https://github.com/AxaFrance/design-system',
    description: "Global insurance and asset management design language built for financial clarity and trustworthiness.",
    aestheticNotes: "AXA Blue (#00008f), 0px sharp rectangular corners, Source Sans Pro typography, and policy quote calculation cards.",
    tokens: {
      primaryColor: '#00008f',
      borderRadius: '0px',
      controlHeight: '42px',
      fontFamily: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif",
      focusStyle: '0 0 0 2px #00008f',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'arui-feather',
    name: 'Alfa Bank ARUI Feather',
    organization: 'Alfa Bank',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://alfa-laboratory.github.io/arui-feather',
    repoUrl: 'https://github.com/alfa-laboratory/arui-feather',
    description: "Commercial banking and retail fintech design library for high-speed online financial transactions.",
    aestheticNotes: "Alfa Red (#ef3124), 4px border radius, financial wire transfer forms, and currency account selectors.",
    tokens: {
      primaryColor: '#ef3124',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #ef3124',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'beeline',
    name: 'Beeline Design System',
    organization: 'VEON / Beeline',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://beeline.design',
    description: "Telecommunications operator design language featuring black and yellow identity and subscriber services.",
    aestheticNotes: "Beeline Honey Yellow (#ffbe00) and Jet Black (#000000), 8px corner radii, telecom data quota meters, and balance refill buttons.",
    tokens: {
      primaryColor: '#ffbe00',
      borderRadius: '8px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #000000',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'marvel',
    name: 'Marvel Styleguide',
    organization: 'Marvel App',
    status: 'legacy',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://marvelapp.com/styleguide',
    description: "Prototyping and design collaboration platform styleguide.",
    aestheticNotes: "Marvel Cerulean Blue (#1070ca), 6px rounded cards, prototyping canvas inspectors, and team project sharing dialogs.",
    tokens: {
      primaryColor: '#1070ca',
      borderRadius: '6px',
      controlHeight: '38px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #1070ca',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'office-fabric',
    name: 'Microsoft Office UI Fabric',
    organization: 'Microsoft',
    status: 'legacy',
    type: 'design-system',
    category: 'tech-giant',
    categoryLabel: 'Tech Giants',
    docsUrl: 'https://developer.microsoft.com/fluentui',
    repoUrl: 'https://github.com/microsoft/fluentui',
    description: "The classic Office 365 design system that predated Fluent 2, defining SharePoint, Outlook Web, and Word Online.",
    aestheticNotes: "Office 365 Blue (#0078d4), 2px crisp corners, Segoe UI typography, command bar buttons, and high-density ribbon styling.",
    tokens: {
      primaryColor: '#0078d4',
      borderRadius: '2px',
      controlHeight: '32px',
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      focusStyle: '0 0 0 2px #0078d4',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'gestalt',
    name: 'Pinterest Gestalt',
    organization: 'Pinterest',
    status: 'active',
    type: 'design-system',
    category: 'tech-giant',
    categoryLabel: 'Tech Giants',
    docsUrl: 'https://gestalt.pinterest.systems',
    repoUrl: 'https://github.com/pinterest/gestalt',
    description: "Visual discovery engine design system engineered for accessibility, high-contrast imagery, and pins.",
    aestheticNotes: "Pinterest Crimson (#e60023), 9999px full-pill action buttons, high-legibility bold titles, and image pin save interactions.",
    tokens: {
      primaryColor: '#e60023',
      borderRadius: '9999px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(230, 0, 35, 0.3)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'forma-36',
    name: 'Contentful Forma 36',
    organization: 'Contentful',
    status: 'active',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://f36.contentful.com',
    repoUrl: 'https://github.com/contentful/forma-36',
    description: "Headless CMS and composable content platform UI system for content editors and developers.",
    aestheticNotes: "Contentful Electric Blue (#0059c8), 6px radii, field editor form density, and publish state status badges.",
    tokens: {
      primaryColor: '#0059c8',
      borderRadius: '6px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #0059c8',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'kaizen',
    name: 'Culture Amp Kaizen',
    organization: 'Culture Amp',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://cultureamp.design',
    repoUrl: 'https://github.com/cultureamp/kaizen-design-system',
    description: "Employee engagement, performance review, and workplace analytics design system.",
    aestheticNotes: "Culture Amp Indigo (#2b3990), 6px rounded corners, employee survey likert scales, and inclusive performance review cards.",
    tokens: {
      primaryColor: '#2b3990',
      borderRadius: '6px',
      controlHeight: '38px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #2b3990',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'vibe',
    name: 'Monday.com Vibe',
    organization: 'monday.com',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://style.monday.com',
    repoUrl: 'https://github.com/mondaycom/vibe',
    description: "Work management OS and project collaboration UI system with playful multi-color tags and status pills.",
    aestheticNotes: "monday.com Electric Blue (#0073ea), 4px border radius, Poppins typography, multi-color task column tags, and board cells.",
    tokens: {
      primaryColor: '#0073ea',
      borderRadius: '4px',
      controlHeight: '34px',
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
      focusStyle: '0 0 0 2px #0073ea',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'intergalactic',
    name: 'Semrush Intergalactic',
    organization: 'Semrush',
    status: 'active',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://developer.semrush.com/intergalactic',
    repoUrl: 'https://github.com/semrush/intergalactic',
    description: "Search engine optimization, competitive intelligence, and digital marketing data console system.",
    aestheticNotes: "Semrush Orange (#ff642d), 6px border radii, high-density SEO ranking keyword tables, and traffic metric cards.",
    tokens: {
      primaryColor: '#ff642d',
      borderRadius: '6px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #ff642d',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'crayons',
    name: 'Freshworks Crayons',
    organization: 'Freshworks',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://crayons.freshworks.com',
    repoUrl: 'https://github.com/freshworks/crayons',
    description: "Customer support desk, CRM, and omnichannel messaging application web component system.",
    aestheticNotes: "Freshworks Midnight Slate (#12344d), 4px border radius, customer support ticket priority pills, and response draft inputs.",
    tokens: {
      primaryColor: '#12344d',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #12344d',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'auro',
    name: 'Alaska Airlines Auro',
    organization: 'Alaska Airlines',
    status: 'active',
    type: 'design-system',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    docsUrl: 'https://auro.alaskaair.com',
    repoUrl: 'https://github.com/alaskaairlines/auro-components',
    description: "Commercial airline digital passenger booking and boarding pass design system.",
    aestheticNotes: "Alaska Deep Navy (#01426a), 4px radii, flight seat map selectors, boarding pass barcode cards, and airport gate pills.",
    tokens: {
      primaryColor: '#01426a',
      borderRadius: '4px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #01426a',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'siemens-ix',
    name: 'Siemens Industrial Experience (IX)',
    organization: 'Siemens',
    status: 'active',
    type: 'design-system',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    docsUrl: 'https://ix.siemens.io',
    repoUrl: 'https://github.com/siemens/ix',
    description: "Industrial automation, factory IoT, and energy management digital human-machine interface system.",
    aestheticNotes: "Siemens Petroleum Teal (#00646e), 4px corner radius, SCADA factory sensor indicators, and industrial telemetry panels.",
    tokens: {
      primaryColor: '#00646e',
      borderRadius: '4px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #00646e',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'nasa-jpl',
    name: 'NASA JPL Explorer 1',
    organization: 'NASA Jet Propulsion Laboratory',
    status: 'active',
    type: 'design-system',
    category: 'developer-tools',
    categoryLabel: 'Developer Tools',
    docsUrl: 'https://github.com/nasa-jpl/explorer-1',
    repoUrl: 'https://github.com/nasa-jpl/explorer-1',
    description: "Deep space exploration, interplanetary robotics missions, and science public outreach design system.",
    aestheticNotes: "NASA JPL Rocket Red (#fc3d21), 2px crisp corners, deep space black telemetry themes, and satellite telemetry grids.",
    tokens: {
      primaryColor: '#fc3d21',
      borderRadius: '2px',
      controlHeight: '36px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #fc3d21',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'daisyui',
    name: 'daisyUI',
    organization: 'daisyUI Open Source',
    status: 'active',
    type: 'ui-library',
    category: 'modern-react',
    categoryLabel: 'Modern React',
    docsUrl: 'https://daisyui.com',
    repoUrl: 'https://github.com/saadeghi/daisyui',
    description: "Most popular semantic Tailwind CSS component library with clean rounded aesthetics and semantic color tokens.",
    aestheticNotes: "daisyUI Royal Purple (#491eb8), 8px border radii, semantic color tokens (primary, secondary, accent, neutral), and modern rounded badges.",
    tokens: {
      primaryColor: '#491eb8',
      borderRadius: '8px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #491eb8',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
  {
    id: 'heroui',
    name: 'HeroUI',
    organization: 'HeroUI (formerly NextUI)',
    status: 'active',
    type: 'ui-library',
    category: 'modern-react',
    categoryLabel: 'Modern React',
    docsUrl: 'https://heroui.com',
    repoUrl: 'https://github.com/heroui-inc/heroui',
    description: "Beautiful, fast, and modern React UI library built on Tailwind CSS with smooth spring animations.",
    aestheticNotes: "HeroUI Radiant Blue (#006fee), generous 12px smooth corners, modern blur backdrop modals, and fluid scale interaction feedback.",
    tokens: {
      primaryColor: '#006fee',
      borderRadius: '12px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 2px #006fee',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
  },
];

console.log(`Loaded ${NEW_70_SYSTEMS.length} new verified design systems.`);


// Import existing 44 systems
import { DESIGN_SYSTEMS as EXISTING_44 } from '../src/registry/data.ts';

console.log(`Loaded ${EXISTING_44.length} existing design systems from data.ts.`);

// Build enriched 44 systems
const enriched44 = EXISTING_44.map(s => {
  const enrichment = EXISTING_44_ENRICHMENT[s.id] || {
    status: 'active',
    type: 'design-system',
    componentSupport: {
      button: true,
      input: true,
      select: true,
      radio: true,
      checkbox: true,
      switch: true,
      textarea: true,
      tabs: true,
      dialog: true,
      tooltip: true,
    },
  };

  return {
    ...s,
    status: enrichment.status,
    type: enrichment.type,
    componentSupport: enrichment.componentSupport,
  };
});

// Build 70 new systems
const enriched70 = NEW_70_SYSTEMS.map(s => {
  const compPrefix = s.name.replace(/[^a-zA-Z0-9]/g, '');

  return {
    id: s.id,
    name: s.name,
    organization: s.organization,
    status: s.status,
    type: s.type,
    category: s.category,
    categoryLabel: s.categoryLabel,
    docsUrl: s.docsUrl,
    officialUrl: s.docsUrl,
    ...(s.repoUrl ? { repoUrl: s.repoUrl } : {}),
    description: s.description,
    aestheticNotes: s.aestheticNotes,
    tokens: s.tokens,
    componentSupport: s.componentSupport,
    variants: {
      buttons: ['Primary', 'Secondary', 'Tertiary', 'Destructive', 'Disabled'],
      inputs: ['Default', 'With Label & Helper', 'Placeholder', 'Filled', 'Error', 'Disabled'],
      selects: ['Default', 'Pre-selected', 'Error', 'Disabled'],
      radios: ['Unselected', 'Selected', 'Disabled Unselected', 'Disabled Selected', 'Interactive Group'],
      checkboxes: ['Unchecked', 'Checked', 'Indeterminate', 'Disabled Unchecked', 'Disabled Checked', 'Interactive Group'],
      switches: s.componentSupport.switch ? ['Off', 'On', 'Disabled Off', 'Disabled On'] : ['Not Documented / Omitted in Official Spec'],
      textareas: ['Default with Counter', 'Placeholder', 'Error', 'Disabled'],
      tabs: ['Overview', 'Settings', 'Activity (Accessible with arrow navigation)'],
      dialogs: ['Standard Modal with Backdrop, Close Action & Keyboard Dismissal'],
      tooltips: s.componentSupport.tooltip ? ['Hover & Keyboard Focus Bubble with Pointer Arrow'] : ['Not Documented / Omitted in Official Spec'],
    },
    canonicalCode: {
      button: `<${compPrefix}Button variant="primary">Get Started</${compPrefix}Button>`,
      input: `<${compPrefix}Input label="Email address" placeholder="alex@company.com" />`,
      select: `<${compPrefix}Select label="Region" options={regionOptions} />`,
      radio: `<${compPrefix}RadioGroup name="plan" options={planOptions} />`,
      checkbox: `<${compPrefix}Checkbox label="Consent" checked={checked} onChange={setChecked} />`,
      switch: s.componentSupport.switch ? `<${compPrefix}Switch checked={enabled} onChange={setEnabled} label="Automated Backups" />` : '/* Switch omitted in official design system: use Radio buttons */',
      textarea: `<${compPrefix}Textarea label="Notes" rows={4} placeholder="Service notes..." />`,
      tabs: `<${compPrefix}Tabs items={['Overview', 'Settings', 'Activity']} />`,
      dialog: `<${compPrefix}Modal open={isOpen} onClose={closeModal} title="Delete Environment?" />`,
      tooltip: s.componentSupport.tooltip ? `<${compPrefix}Tooltip content="SOC2 Verified"><Button>Status</Button></${compPrefix}Tooltip>` : '/* Tooltip omitted in official design system: use visible helper text */',
    },
  };
});

// All 114 systems
const ALL_114_SYSTEMS = [...enriched44, ...enriched70];
console.log(`Total catalog systems: ${ALL_114_SYSTEMS.length} (${enriched44.length} existing + ${enriched70.length} new)`);

// 1. Write gallery/src/registry/data.ts
console.log('Writing updated gallery/src/registry/data.ts...');
const dataFileContent = `import { DesignSystemMeta } from '../types.ts';

export const DESIGN_SYSTEMS: DesignSystemMeta[] = ${JSON.stringify(ALL_114_SYSTEMS, null, 2)};
`;
fs.writeFileSync(DATA_FILE, dataFileContent);
console.log('Saved gallery/src/registry/data.ts successfully.');

// 2. Component Templates
const BTN_TMPL = `import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Variants
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button
            type="button"
            className="ds-btn-SID ds-btn-SID-primary"
            onClick={() => setClickCount(c => c + 1)}
          >
            Primary {clickCount > 0 ? \`(\${clickCount})\` : ''}
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-secondary">
            Secondary
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-tertiary">
            Tertiary
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-danger">
            Destructive
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-primary" disabled>
            Disabled
          </button>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Interactive States
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button type="button" className="ds-btn-SID ds-btn-SID-primary" title="Default state">
            Default
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-primary" style={{ filter: 'brightness(0.92)' }} title="Hover simulated">
            Hover State
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-primary" style={{ filter: 'brightness(0.85)', transform: 'translateY(1px)' }} title="Active / Pressed">
            Active / Pressed
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-secondary" disabled>
            Secondary Disabled
          </button>
        </div>
      </div>
    </div>
  );
};
`;

const INP_TMPL = `import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-SID" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-SID">Default Input</label>
        <input
          type="text"
          className="ds-input-SID"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-SID">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-SID">Filled State</label>
        <input
          type="text"
          className="ds-input-SID"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-SID">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-SID">Error State</label>
        <input
          type="text"
          className="ds-input-SID error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-SID">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-SID">Disabled Input</label>
        <input
          type="text"
          className="ds-input-SID"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-SID">System generated read-only field</span>
      </div>
    </div>
  );
};
`;

const SEL_TMPL = `import React, { useState } from 'react';

export const Select: React.FC = () => {
  const [selected, setSelected] = useState('us-east');

  return (
    <div className="ds-SID" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-SID">Select Region (Interactive)</label>
        <select
          className="ds-select-SID"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          <option value="us-east">US East (N. Virginia)</option>
          <option value="us-west">US West (Oregon)</option>
          <option value="eu-central">EU Central (Frankfurt)</option>
          <option value="ap-east">AP East (Tokyo)</option>
          <option value="sa-east">South America (São Paulo)</option>
        </select>
        <span className="ds-helper-SID">Active choice: <strong>{selected}</strong></span>
      </div>

      <div>
        <label className="ds-label-SID">Selected Tier</label>
        <select className="ds-select-SID" defaultValue="enterprise">
          <option value="developer">Developer Plan ($0/mo)</option>
          <option value="team">Team Plan ($49/mo)</option>
          <option value="enterprise">Enterprise Tier ($499/mo)</option>
        </select>
        <span className="ds-helper-SID">Includes 24/7 SLA & priority routing</span>
      </div>

      <div>
        <label className="ds-label-SID">Error State</label>
        <select className="ds-select-SID error" defaultValue="">
          <option value="" disabled>-- Please select a VPC --</option>
          <option value="vpc-1">vpc-prod-primary</option>
          <option value="vpc-2">vpc-dev-sandbox</option>
        </select>
        <span className="ds-error-text-SID">You must select an isolated VPC</span>
      </div>

      <div>
        <label className="ds-label-SID">Disabled Select</label>
        <select className="ds-select-SID" defaultValue="locked" disabled>
          <option value="locked">Production Environment (Locked)</option>
          <option value="staging">Staging</option>
        </select>
        <span className="ds-helper-SID">Locked by compliance policy</span>
      </div>
    </div>
  );
};
`;

const RAD_TMPL = `import React, { useState } from 'react';

export const Radio: React.FC = () => {
  const [plan, setPlan] = useState('pro');

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label className="ds-label-SID">Interactive Radio Group</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="radio"
              name="plan-SID"
              className="ds-radio-SID"
              checked={plan === 'starter'}
              onChange={() => setPlan('starter')}
            />
            <span>Starter Plan (1 Node, 4GB RAM)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="radio"
              name="plan-SID"
              className="ds-radio-SID"
              checked={plan === 'pro'}
              onChange={() => setPlan('pro')}
            />
            <span>Pro Plan (3 Nodes, High Availability)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="radio"
              name="plan-SID"
              className="ds-radio-SID"
              checked={plan === 'enterprise'}
              onChange={() => setPlan('enterprise')}
            />
            <span>Enterprise Dedicated Cluster (Multi-Region)</span>
          </label>
        </div>
        <span className="ds-helper-SID">Active selection: <strong>{plan.toUpperCase()}</strong></span>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Radio States
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="radio" className="ds-radio-SID" defaultChecked name="state-demo-SID" />
            <span>Selected</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="radio" className="ds-radio-SID" name="state-demo-SID" />
            <span>Unselected</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', opacity: 0.6 }}>
            <input type="radio" className="ds-radio-SID" disabled />
            <span>Disabled Unchecked</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', opacity: 0.6 }}>
            <input type="radio" className="ds-radio-SID" checked readOnly disabled />
            <span>Disabled Checked</span>
          </label>
        </div>
      </div>
    </div>
  );
};
`;

const CHK_TMPL = `import React, { useState, useRef, useEffect } from 'react';

export const Checkbox: React.FC = () => {
  const [singleChecked, setSingleChecked] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState<string[]>(['email', 'push']);
  const indRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (indRef.current) {
      indRef.current.indeterminate = true;
    }
  }, []);

  const toggleGroup = (item: string) => {
    setSelectedGroup(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <label className="ds-label-SID">Single Checkbox (Interactive)</label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', marginTop: '6px', fontSize: '14px' }}>
          <input
            type="checkbox"
            className="ds-checkbox-SID"
            checked={singleChecked}
            onChange={e => setSingleChecked(e.target.checked)}
          />
          <span>I agree to the privacy and telemetry compliance terms</span>
        </label>
        <span className="ds-helper-SID">Status: {singleChecked ? 'Consented' : 'Declined'}</span>
      </div>

      <div>
        <label className="ds-label-SID">Checkbox Group (Multiple Selection)</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="checkbox"
              className="ds-checkbox-SID"
              checked={selectedGroup.includes('email')}
              onChange={() => toggleGroup('email')}
            />
            <span>Email digest reports (Weekly summary)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="checkbox"
              className="ds-checkbox-SID"
              checked={selectedGroup.includes('push')}
              onChange={() => toggleGroup('push')}
            />
            <span>Instant push notifications (Deployment & status alerts)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="checkbox"
              className="ds-checkbox-SID"
              checked={selectedGroup.includes('sms')}
              onChange={() => toggleGroup('sms')}
            />
            <span>Critical incident SMS notifications (High severity only)</span>
          </label>
        </div>
        <span className="ds-helper-SID">Selected channels: {selectedGroup.length ? selectedGroup.join(', ') : 'None'}</span>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          States Overview
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="checkbox" className="ds-checkbox-SID" defaultChecked name="chk-demo-SID" />
            <span>Checked</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="checkbox" className="ds-checkbox-SID" name="chk-demo-SID" />
            <span>Unchecked</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="checkbox" className="ds-checkbox-SID" ref={indRef} />
            <span>Indeterminate</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', opacity: 0.55 }}>
            <input type="checkbox" className="ds-checkbox-SID" disabled />
            <span>Disabled Unchecked</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', opacity: 0.55 }}>
            <input type="checkbox" className="ds-checkbox-SID" defaultChecked disabled />
            <span>Disabled Checked</span>
          </label>
        </div>
      </div>
    </div>
  );
};
`;

const SW_TMPL = `import React, { useState } from 'react';

export const Switch: React.FC = () => {
  const [backupOn, setBackupOn] = useState(true);
  const [debugOn, setDebugOn] = useState(false);

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '420px', cursor: 'pointer' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>Automated Daily Backups</div>
            <div className="ds-helper-SID" style={{ marginTop: '2px' }}>Snapshots taken nightly at 02:00 UTC</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={backupOn}
            className={\`ds-switch-track-SID \${backupOn ? 'checked' : ''}\`}
            onClick={() => setBackupOn(!backupOn)}
          >
            <span className={\`ds-switch-thumb-SID \${backupOn ? 'checked' : ''}\`} />
          </button>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '420px', cursor: 'pointer' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>Developer Debug Mode</div>
            <div className="ds-helper-SID" style={{ marginTop: '2px' }}>Streams detailed payload telemetry to client</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={debugOn}
            className={\`ds-switch-track-SID \${debugOn ? 'checked' : ''}\`}
            onClick={() => setDebugOn(!debugOn)}
          >
            <span className={\`ds-switch-thumb-SID \${debugOn ? 'checked' : ''}\`} />
          </button>
        </label>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          States Overview
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <span className="ds-switch-track-SID checked" style={{ cursor: 'default' }}>
              <span className="ds-switch-thumb-SID checked" />
            </span>
            <span>On</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <span className="ds-switch-track-SID" style={{ cursor: 'default' }}>
              <span className="ds-switch-thumb-SID" />
            </span>
            <span>Off</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', opacity: 0.5 }}>
            <span className="ds-switch-track-SID checked disabled" style={{ cursor: 'not-allowed' }}>
              <span className="ds-switch-thumb-SID checked" />
            </span>
            <span>Disabled On</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', opacity: 0.5 }}>
            <span className="ds-switch-track-SID disabled" style={{ cursor: 'not-allowed' }}>
              <span className="ds-switch-thumb-SID" />
            </span>
            <span>Disabled Off</span>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

const SW_UNSUPPORTED_TMPL = `import React from 'react';

export const Switch: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        This design system intentionally omits the Switch / Toggle component in its official specification, recommending standard radio buttons or checkboxes for clearer accessibility and cognitive clarity.
      </p>
      <a href="DOCS_URL" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
`;

const TA_TMPL = `import React, { useState } from 'react';

export const Textarea: React.FC = () => {
  const [notes, setNotes] = useState('Production deployment cluster with automated failover and regional DNS routing.');

  return (
    <div className="ds-SID" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <label className="ds-label-SID">Service Description (Interactive)</label>
          <span style={{ fontSize: '11px', color: 'var(--muted-fg)' }}>{notes.length} / 250</span>
        </div>
        <textarea
          className="ds-textarea-SID"
          rows={3}
          value={notes}
          maxLength={250}
          onChange={e => setNotes(e.target.value)}
          placeholder="Describe infrastructure requirements..."
        />
        <span className="ds-helper-SID">Live editable field with character count</span>
      </div>

      <div>
        <label className="ds-label-SID">Placeholder State</label>
        <textarea
          className="ds-textarea-SID"
          rows={3}
          placeholder="e.g. Include release notes, rollback instructions, and customer communication..."
        />
        <span className="ds-helper-SID">Provides context before typing starts</span>
      </div>

      <div>
        <label className="ds-label-SID">Error State</label>
        <textarea
          className="ds-textarea-SID error"
          rows={3}
          defaultValue="Failed DNS."
        />
        <span className="ds-error-text-SID">Description must contain at least 25 characters</span>
      </div>

      <div>
        <label className="ds-label-SID">Disabled State</label>
        <textarea
          className="ds-textarea-SID"
          rows={3}
          defaultValue="Read-only audit trail: Configuration checksum sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
          disabled
        />
        <span className="ds-helper-SID">Locked by security compliance policy</span>
      </div>
    </div>
  );
};
`;

const TAB_TMPL = `import React, { useState } from 'react';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'settings' | 'activity'>('overview');

  const handleKeyDown = (e: React.KeyboardEvent, current: 'overview' | 'settings' | 'activity') => {
    const tabs: ('overview' | 'settings' | 'activity')[] = ['overview', 'settings', 'activity'];
    const idx = tabs.indexOf(current);
    if (e.key === 'ArrowRight') {
      const next = tabs[(idx + 1) % tabs.length];
      setActiveTab(next);
    } else if (e.key === 'ArrowLeft') {
      const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
      setActiveTab(prev);
    }
  };

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="ds-tablist-SID" role="tablist" aria-label="System details">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'overview'}
          tabIndex={activeTab === 'overview' ? 0 : -1}
          className={\`ds-tab-SID \${activeTab === 'overview' ? 'active' : ''}\`}
          onClick={() => setActiveTab('overview')}
          onKeyDown={e => handleKeyDown(e, 'overview')}
        >
          Overview
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'settings'}
          tabIndex={activeTab === 'settings' ? 0 : -1}
          className={\`ds-tab-SID \${activeTab === 'settings' ? 'active' : ''}\`}
          onClick={() => setActiveTab('settings')}
          onKeyDown={e => handleKeyDown(e, 'settings')}
        >
          Settings
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'activity'}
          tabIndex={activeTab === 'activity' ? 0 : -1}
          className={\`ds-tab-SID \${activeTab === 'activity' ? 'active' : ''}\`}
          onClick={() => setActiveTab('activity')}
          onKeyDown={e => handleKeyDown(e, 'activity')}
        >
          Activity (3)
        </button>
      </div>

      <div className="ds-tabpanel-SID" role="tabpanel">
        {activeTab === 'overview' && (
          <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <strong>Cluster Health:</strong> All 12 worker nodes operational. Zero dropped network frames in last 24h.
          </div>
        )}
        {activeTab === 'settings' && (
          <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <strong>Security Profile:</strong> TLS 1.3 encryption, automatic certificate renewal, and private VPC routing enabled.
          </div>
        )}
        {activeTab === 'activity' && (
          <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <strong>Recent Events:</strong> Deployment <code>v2.4.1</code> rolled out smoothly across 3 availability zones 14 mins ago.
          </div>
        )}
      </div>
    </div>
  );
};
`;

const DLG_TMPL = `import React, { useState, useEffect } from 'react';

export const Dialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="ds-SID">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="ds-btn-SID ds-btn-SID-primary"
          onClick={() => setIsOpen(true)}
        >
          Open Modal Dialog
        </button>
        <span className="ds-helper-SID" style={{ marginTop: 0 }}>
          Click to trigger fully interactive modal with backdrop and keyboard dismissal (Esc)
        </span>
      </div>

      {isOpen && (
        <div
          className="ds-dialog-overlay-SID"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="ds-dialog-box-SID"
            onClick={e => e.stopPropagation()}
          >
            <div className="ds-dialog-header-SID">
              <span>Delete Deployment Environment?</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  color: 'inherit',
                  borderRadius: '4px',
                }}
                title="Close"
              >
                ✕
              </button>
            </div>
            <div className="ds-dialog-body-SID">
              <p style={{ margin: 0 }}>
                Are you sure you want to delete this resource cluster? All associated containers, isolated subnets, and live DNS records will be permanently deprovisioned. This action cannot be undone.
              </p>
            </div>
            <div className="ds-dialog-footer-SID">
              <button
                type="button"
                className="ds-btn-SID ds-btn-SID-secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="ds-btn-SID ds-btn-SID-danger"
                onClick={() => setIsOpen(false)}
              >
                Delete Cluster
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
`;

const TT_TMPL = `import React, { useState } from 'react';

export const Tooltip: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="ds-SID" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', padding: '16px 0' }}>
      <div className="ds-tooltip-wrapper-SID">
        <button
          type="button"
          className="ds-btn-SID ds-btn-SID-secondary"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          onFocus={() => setVisible(true)}
          onBlur={() => setVisible(false)}
        >
          Hover or Focus Me
        </button>

        <div className={\`ds-tooltip-bubble-SID \${visible ? 'visible' : ''}\`} role="tooltip">
          Security verified: SOC2 AA &amp; ISO 27001
          <span className="ds-tooltip-arrow-SID" />
        </div>
      </div>

      <div style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>
        Supports mouse hover and keyboard focus states with system-specific tooltip styling.
      </div>
    </div>
  );
};
`;

const TT_UNSUPPORTED_TMPL = `import React from 'react';

export const Tooltip: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        This design system avoids floating tooltip hover overlays in favor of always-visible inline helper text and accessible disclosure panels, ensuring full touch and screen-reader parity.
      </p>
      <a href="DOCS_URL" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
`;

// 3. Write components for all 70 new systems
console.log('Writing components for 70 new systems...');
for (const s of NEW_70_SYSTEMS) {
  const sid = s.id;
  const sdir = path.join(DS_DIR, sid);
  if (!fs.existsSync(sdir)) {
    fs.mkdirSync(sdir, { recursive: true });
  }

  // Button
  fs.writeFileSync(path.join(sdir, 'Button.tsx'), BTN_TMPL.replaceAll('SID', sid));

  // Input
  fs.writeFileSync(path.join(sdir, 'Input.tsx'), INP_TMPL.replaceAll('SID', sid));

  // Select
  fs.writeFileSync(path.join(sdir, 'Select.tsx'), SEL_TMPL.replaceAll('SID', sid));

  // Radio
  fs.writeFileSync(path.join(sdir, 'Radio.tsx'), RAD_TMPL.replaceAll('SID', sid));

  // Checkbox
  fs.writeFileSync(path.join(sdir, 'Checkbox.tsx'), CHK_TMPL.replaceAll('SID', sid));

  // Switch
  if (s.componentSupport.switch) {
    fs.writeFileSync(path.join(sdir, 'Switch.tsx'), SW_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Switch.tsx'), SW_UNSUPPORTED_TMPL.replaceAll('DOCS_URL', s.docsUrl));
  }

  // Textarea
  fs.writeFileSync(path.join(sdir, 'Textarea.tsx'), TA_TMPL.replaceAll('SID', sid));

  // Tabs
  fs.writeFileSync(path.join(sdir, 'Tabs.tsx'), TAB_TMPL.replaceAll('SID', sid));

  // Dialog
  fs.writeFileSync(path.join(sdir, 'Dialog.tsx'), DLG_TMPL.replaceAll('SID', sid));

  // Tooltip
  if (s.componentSupport.tooltip) {
    fs.writeFileSync(path.join(sdir, 'Tooltip.tsx'), TT_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Tooltip.tsx'), TT_UNSUPPORTED_TMPL.replaceAll('DOCS_URL', s.docsUrl));
  }

  // index.ts
  const idxCode = `export { Button } from './Button.tsx';
export { Input } from './Input.tsx';
export { Select } from './Select.tsx';
export { Radio } from './Radio.tsx';
export { Checkbox } from './Checkbox.tsx';
export { Switch } from './Switch.tsx';
export { Textarea } from './Textarea.tsx';
export { Tabs } from './Tabs.tsx';
export { Dialog } from './Dialog.tsx';
export { Tooltip } from './Tooltip.tsx';
`;
  fs.writeFileSync(path.join(sdir, 'index.ts'), idxCode);
}
console.log('Created components for all 70 new systems.');

// Also update govuk switch & tooltip to render unsupported cards
const govukDir = path.join(DS_DIR, 'govuk');
if (fs.existsSync(govukDir)) {
  fs.writeFileSync(path.join(govukDir, 'Switch.tsx'), SW_UNSUPPORTED_TMPL.replaceAll('DOCS_URL', 'https://design-system.service.gov.uk'));
  fs.writeFileSync(path.join(govukDir, 'Tooltip.tsx'), TT_UNSUPPORTED_TMPL.replaceAll('DOCS_URL', 'https://design-system.service.gov.uk'));
  console.log('Updated GOV.UK Switch & Tooltip to authentic unsupported cards.');
}

// 4. Generate CSS for the 70 new systems and append to gallery/src/styles/design-systems.css
console.log('Generating CSS for 70 new systems...');
let existingCss = fs.readFileSync(STYLES_FILE, 'utf-8');
if (existingCss.includes('/* === NEW 70 SYSTEMS STYLES === */')) {
  existingCss = existingCss.split('/* === NEW 70 SYSTEMS STYLES === */')[0].trim();
}

const cssChunks: string[] = [existingCss, '\n\n/* === NEW 70 SYSTEMS STYLES === */\n'];

for (const s of NEW_70_SYSTEMS) {
  const sid = s.id;
  const font = s.tokens.fontFamily;
  const primary = s.tokens.primaryColor;
  const radius = s.tokens.borderRadius;
  const height = s.tokens.controlHeight;
  const focus = s.tokens.focusStyle;

  const is_sharp = radius === '0px';
  const is_pill = radius === '9999px';
  const primary_fg = primary === '#ffbe00' || primary === '#ffe01b' ? '#000000' : '#ffffff';
  const input_radius = is_sharp ? '0px' : is_pill ? '8px' : radius;
  const chk_radius = is_sharp ? '0px' : '4px';
  const sw_radius = is_sharp ? '0px' : '9999px';
  const dlg_radius = is_sharp ? '0px' : is_pill ? '16px' : radius === '12px' || radius === '18px' ? radius : '8px';

  cssChunks.push(`/* ===== ${sid.toUpperCase()} ===== */
.ds-${sid} { font-family: ${font}; box-sizing: border-box; }
.ds-${sid} * { box-sizing: border-box; }

/* Button */
.ds-btn-${sid} {
  font-family: ${font};
  height: ${height};
  border-radius: ${radius};
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.ds-btn-${sid}:focus-visible { box-shadow: ${focus}; outline: none; }
.ds-btn-${sid}:disabled { opacity: 0.45; cursor: not-allowed; }
.ds-btn-${sid}-primary { background: ${primary}; color: ${primary_fg}; border: none; }
.ds-btn-${sid}-primary:hover:not(:disabled) { filter: brightness(0.92); }
.ds-btn-${sid}-primary:active:not(:disabled) { filter: brightness(0.85); transform: translateY(1px); }
.ds-btn-${sid}-secondary { background: #f3f4f6; color: #1f2937; border: 1px solid #d1d5db; }
.ds-btn-${sid}-secondary:hover:not(:disabled) { filter: brightness(0.95); }
.ds-btn-${sid}-tertiary { background: transparent; color: ${primary}; border: 1px solid ${primary}; }
.ds-btn-${sid}-tertiary:hover:not(:disabled) { background: rgba(0,0,0,0.05); }
.ds-btn-${sid}-danger { background: #dc2626; color: #ffffff; border: none; }
.ds-btn-${sid}-danger:hover:not(:disabled) { filter: brightness(0.9); }

/* Input */
.ds-input-${sid} {
  font-family: ${font};
  height: ${height};
  border-radius: ${input_radius};
  border: 1px solid #d1d5db;
  padding: 0 12px;
  font-size: 14px;
  width: 100%;
  background: #ffffff;
  color: #1a1a1a;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.ds-input-${sid}:focus { border-color: ${primary}; box-shadow: ${focus}; outline: none; }
.ds-input-${sid}:disabled { opacity: 0.5; background: #f5f5f5; cursor: not-allowed; }
.ds-input-${sid}.error { border-color: #d32f2f !important; }

/* Select */
.ds-select-${sid} {
  font-family: ${font};
  height: ${height};
  border-radius: ${input_radius};
  border: 1px solid #d1d5db;
  padding: 0 28px 0 12px;
  font-size: 14px;
  width: 100%;
  background: #ffffff;
  color: #1a1a1a;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
}
.ds-select-${sid}:focus { border-color: ${primary}; box-shadow: ${focus}; outline: none; }
.ds-select-${sid}:disabled { opacity: 0.5; background: #f5f5f5; cursor: not-allowed; }
.ds-select-${sid}.error { border-color: #d32f2f !important; }

/* Radio */
.ds-radio-${sid} {
  accent-color: ${primary};
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 0;
  vertical-align: middle;
}
.ds-radio-${sid}:disabled { opacity: 0.45; cursor: not-allowed; }

/* Labels & Helpers */
.ds-label-${sid} { font-family: ${font}; font-size: 13px; font-weight: 600; color: #2b2b2b; margin-bottom: 4px; display: block; }
.ds-helper-${sid} { font-family: ${font}; font-size: 12px; color: #6c757d; margin-top: 4px; display: block; }
.ds-error-text-${sid} { font-family: ${font}; font-size: 12px; color: #d32f2f; margin-top: 4px; display: block; font-weight: 500; }

/* Checkbox */
.ds-checkbox-${sid} {
  width: 16px;
  height: 16px;
  border-radius: ${chk_radius};
  accent-color: ${primary};
  cursor: pointer;
  vertical-align: middle;
  margin: 0;
}
.ds-checkbox-${sid}:disabled { opacity: 0.45; cursor: not-allowed; }

/* Switch */
.ds-switch-track-${sid} {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 44px;
  height: 24px;
  border-radius: ${sw_radius};
  background-color: #d1d5db;
  border: none;
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.ds-switch-track-${sid}:focus-visible { box-shadow: ${focus}; outline: none; }
.ds-switch-track-${sid}.checked { background-color: ${primary}; }
.ds-switch-track-${sid}.disabled { opacity: 0.45; cursor: not-allowed; }
.ds-switch-thumb-${sid} {
  display: block;
  width: 18px;
  height: 18px;
  border-radius: ${sw_radius};
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.25);
  transition: transform 0.2s ease, width 0.2s ease;
  transform: translateX(0);
}
.ds-switch-thumb-${sid}.checked {
  transform: translateX(20px);
}

/* Textarea */
.ds-textarea-${sid} {
  font-family: ${font};
  border-radius: ${input_radius};
  border: 1px solid #d1d5db;
  background: #ffffff;
  padding: 8px 12px;
  font-size: 14px;
  width: 100%;
  color: #1a1a1a;
  resize: vertical;
  line-height: 1.5;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.ds-textarea-${sid}:focus { border-color: ${primary}; outline: none; box-shadow: ${focus}; }
.ds-textarea-${sid}.error { border-color: #d32f2f !important; }
.ds-textarea-${sid}:disabled { opacity: 0.5; background: #f5f5f5; cursor: not-allowed; }

/* Tabs */
.ds-tablist-${sid} {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  gap: 16px;
}
.ds-tab-${sid} {
  font-family: ${font};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #6b7280;
  transition: color 0.15s ease, border-color 0.15s ease;
  padding: 8px 4px;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  margin-bottom: -1px;
}
.ds-tab-${sid}.active {
  color: ${primary};
  border-bottom: 2px solid ${primary};
  font-weight: 600;
}
.ds-tab-${sid}:focus-visible { box-shadow: ${focus}; outline: none; }
.ds-tabpanel-${sid} { font-family: ${font}; padding: 12px 0; font-size: 14px; color: #1f2937; }

/* Dialog */
.ds-dialog-overlay-${sid} {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}
.ds-dialog-box-${sid} {
  font-family: ${font};
  background: #ffffff;
  border-radius: ${dlg_radius};
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  width: 100%;
  max-width: 480px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}
.ds-dialog-header-${sid} {
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
  color: #111827;
}
.ds-dialog-body-${sid} {
  padding: 20px;
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
}
.ds-dialog-footer-${sid} {
  padding: 14px 20px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* Tooltip */
.ds-tooltip-wrapper-${sid} { position: relative; display: inline-block; }
.ds-tooltip-bubble-${sid} {
  font-family: ${font};
  background: #1f2937;
  color: #ffffff;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 12px;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease;
}
.ds-tooltip-bubble-${sid}.visible { opacity: 1; }
.ds-tooltip-arrow-${sid} {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -4px;
  border-width: 4px;
  border-style: solid;
  border-color: #1f2937 transparent transparent transparent;
}
`);
}

fs.writeFileSync(STYLES_FILE, cssChunks.join('\n'));
console.log('Updated gallery/src/styles/design-systems.css.');

// 5. Write gallery/src/registry/index.ts
console.log('Writing gallery/src/registry/index.ts for all 114 systems...');
const regLines = [
  "import { DesignSystemEntry } from '../types.ts';",
  "import { DESIGN_SYSTEMS } from './data.ts';\n",
];

for (const s of ALL_114_SYSTEMS) {
  const sid = s.id;
  const varName = sid.replace(/-/g, '_');
  regLines.push(`import * as ${varName}Components from '../design-systems/${sid}/index.ts';`);
}

regLines.push('\nexport const ALL_SYSTEM_ENTRIES: Record<string, DesignSystemEntry> = {');
for (const s of ALL_114_SYSTEMS) {
  const sid = s.id;
  const varName = sid.replace(/-/g, '_');
  regLines.push(`  '${sid}': {`);
  regLines.push(`    meta: DESIGN_SYSTEMS.find(m => m.id === '${sid}')!,`);
  regLines.push(`    components: ${varName}Components,`);
  regLines.push('  },');
}
regLines.push('};\n');

regLines.push('export const SYSTEM_LIST = Object.values(ALL_SYSTEM_ENTRIES);\n');
regLines.push("export { DESIGN_SYSTEMS } from './data.ts';\n");

fs.writeFileSync(REGISTRY_INDEX_FILE, regLines.join('\n'));
console.log('Created gallery/src/registry/index.ts successfully!');
console.log('Catalog generation complete: 114 systems fully generated.');
