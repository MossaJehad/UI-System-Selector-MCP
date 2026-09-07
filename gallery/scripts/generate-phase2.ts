import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DESIGN_SYSTEMS } from '../src/registry/data.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DS_DIR = path.join(ROOT_DIR, 'src/design-systems');
const STYLES_FILE = path.join(ROOT_DIR, 'src/styles/design-systems.css');
const DATA_FILE = path.join(ROOT_DIR, 'src/registry/data.ts');
const REGISTRY_INDEX_FILE = path.join(ROOT_DIR, 'src/registry/index.ts');

console.log(`Loaded ${DESIGN_SYSTEMS.length} design systems from registry.`);

interface SystemSpec {
  checkbox_size: string;
  checkbox_radius: string;
  switch_width: string;
  switch_height: string;
  switch_radius: string;
  switch_thumb: string;
  switch_thumb_checked: string;
  switch_active_bg: string;
  dialog_radius: string;
  dialog_shadow: string;
  tooltip_radius: string;
  tooltip_bg: string;
  tooltip_fg: string;
  tab_style: 'underline' | 'pill' | 'beveled' | 'sharp';
  font: string;
  primary: string;
  radius: string;
  focus: string;
}

const SPECIAL_SPECS: Record<string, Partial<SystemSpec>> = {
  material: {
    checkbox_size: '18px',
    checkbox_radius: '2px',
    switch_width: '52px',
    switch_height: '32px',
    switch_radius: '9999px',
    switch_thumb: '16px',
    switch_thumb_checked: '24px',
    switch_active_bg: '#6750a4',
    dialog_radius: '28px',
    dialog_shadow: '0 8px 24px rgba(0,0,0,0.2)',
    tooltip_radius: '4px',
    tooltip_bg: '#313033',
    tooltip_fg: '#ffffff',
    tab_style: 'underline',
  },
  apple: {
    checkbox_size: '16px',
    checkbox_radius: '4px',
    switch_width: '51px',
    switch_height: '31px',
    switch_radius: '9999px',
    switch_thumb: '27px',
    switch_thumb_checked: '27px',
    switch_active_bg: '#34c759',
    dialog_radius: '14px',
    dialog_shadow: '0 20px 40px rgba(0,0,0,0.25)',
    tooltip_radius: '6px',
    tooltip_bg: 'rgba(29, 29, 31, 0.9)',
    tooltip_fg: '#ffffff',
    tab_style: 'pill',
  },
  fluent: {
    checkbox_size: '16px',
    checkbox_radius: '4px',
    switch_width: '40px',
    switch_height: '20px',
    switch_radius: '9999px',
    switch_thumb: '14px',
    switch_thumb_checked: '14px',
    switch_active_bg: '#0078d4',
    dialog_radius: '8px',
    dialog_shadow: '0 8px 16px rgba(0,0,0,0.14)',
    tooltip_radius: '4px',
    tooltip_bg: '#ffffff',
    tooltip_fg: '#242424',
    tab_style: 'underline',
  },
  carbon: {
    checkbox_size: '18px',
    checkbox_radius: '0px',
    switch_width: '48px',
    switch_height: '24px',
    switch_radius: '9999px',
    switch_thumb: '18px',
    switch_thumb_checked: '18px',
    switch_active_bg: '#0f62fe',
    dialog_radius: '0px',
    dialog_shadow: '0 12px 24px rgba(0,0,0,0.2)',
    tooltip_radius: '0px',
    tooltip_bg: '#161616',
    tooltip_fg: '#ffffff',
    tab_style: 'underline',
  },
  polaris: {
    checkbox_size: '18px',
    checkbox_radius: '4px',
    switch_width: '44px',
    switch_height: '24px',
    switch_radius: '9999px',
    switch_thumb: '18px',
    switch_thumb_checked: '18px',
    switch_active_bg: '#008060',
    dialog_radius: '12px',
    dialog_shadow: '0 8px 16px rgba(0,0,0,0.1)',
    tooltip_radius: '4px',
    tooltip_bg: '#202223',
    tooltip_fg: '#ffffff',
    tab_style: 'underline',
  },
  atlassian: {
    checkbox_size: '16px',
    checkbox_radius: '3px',
    switch_width: '40px',
    switch_height: '20px',
    switch_radius: '9999px',
    switch_thumb: '14px',
    switch_thumb_checked: '14px',
    switch_active_bg: '#0052cc',
    dialog_radius: '3px',
    dialog_shadow: '0 8px 16px rgba(9, 30, 66, 0.25)',
    tooltip_radius: '3px',
    tooltip_bg: '#172b4d',
    tooltip_fg: '#ffffff',
    tab_style: 'underline',
  },
  primer: {
    checkbox_size: '16px',
    checkbox_radius: '4px',
    switch_width: '32px',
    switch_height: '18px',
    switch_radius: '9999px',
    switch_thumb: '12px',
    switch_thumb_checked: '12px',
    switch_active_bg: '#1f883d',
    dialog_radius: '12px',
    dialog_shadow: '0 12px 28px rgba(140, 149, 159, 0.2)',
    tooltip_radius: '6px',
    tooltip_bg: '#24292f',
    tooltip_fg: '#ffffff',
    tab_style: 'underline',
  },
  govuk: {
    checkbox_size: '24px',
    checkbox_radius: '0px',
    switch_width: '44px',
    switch_height: '24px',
    switch_radius: '0px',
    switch_thumb: '18px',
    switch_thumb_checked: '18px',
    switch_active_bg: '#00703c',
    dialog_radius: '0px',
    dialog_shadow: '0 10px 20px rgba(0,0,0,0.3)',
    tooltip_radius: '0px',
    tooltip_bg: '#0b0c0c',
    tooltip_fg: '#ffffff',
    tab_style: 'sharp',
  },
  'base-web': {
    checkbox_size: '18px',
    checkbox_radius: '0px',
    switch_width: '44px',
    switch_height: '24px',
    switch_radius: '0px',
    switch_thumb: '18px',
    switch_thumb_checked: '18px',
    switch_active_bg: '#000000',
    dialog_radius: '0px',
    dialog_shadow: '0 10px 30px rgba(0,0,0,0.2)',
    tooltip_radius: '0px',
    tooltip_bg: '#000000',
    tooltip_fg: '#ffffff',
    tab_style: 'sharp',
  },
  porsche: {
    checkbox_size: '18px',
    checkbox_radius: '0px',
    switch_width: '44px',
    switch_height: '22px',
    switch_radius: '0px',
    switch_thumb: '16px',
    switch_thumb_checked: '16px',
    switch_active_bg: '#010205',
    dialog_radius: '0px',
    dialog_shadow: '0 12px 24px rgba(0,0,0,0.25)',
    tooltip_radius: '0px',
    tooltip_bg: '#010205',
    tooltip_fg: '#ffffff',
    tab_style: 'sharp',
  },
  audi: {
    checkbox_size: '18px',
    checkbox_radius: '0px',
    switch_width: '44px',
    switch_height: '22px',
    switch_radius: '0px',
    switch_thumb: '16px',
    switch_thumb_checked: '16px',
    switch_active_bg: '#000000',
    dialog_radius: '0px',
    dialog_shadow: '0 12px 24px rgba(0,0,0,0.25)',
    tooltip_radius: '0px',
    tooltip_bg: '#000000',
    tooltip_fg: '#ffffff',
    tab_style: 'sharp',
  },
  wise: {
    checkbox_size: '20px',
    checkbox_radius: '6px',
    switch_width: '48px',
    switch_height: '28px',
    switch_radius: '14px',
    switch_thumb: '20px',
    switch_thumb_checked: '20px',
    switch_active_bg: '#163300',
    dialog_radius: '16px',
    dialog_shadow: '0 16px 32px rgba(22, 51, 0, 0.2)',
    tooltip_radius: '8px',
    tooltip_bg: '#163300',
    tooltip_fg: '#9fe870',
    tab_style: 'pill',
  },
  mailchimp: {
    checkbox_size: '18px',
    checkbox_radius: '4px',
    switch_width: '44px',
    switch_height: '24px',
    switch_radius: '4px',
    switch_thumb: '18px',
    switch_thumb_checked: '18px',
    switch_active_bg: '#ffe01b',
    dialog_radius: '4px',
    dialog_shadow: '4px 4px 0 #241c15',
    tooltip_radius: '4px',
    tooltip_bg: '#ffe01b',
    tooltip_fg: '#241c15',
    tab_style: 'pill',
  },
  win98: {
    checkbox_size: '13px',
    checkbox_radius: '0px',
    switch_width: '36px',
    switch_height: '20px',
    switch_radius: '0px',
    switch_thumb: '14px',
    switch_thumb_checked: '14px',
    switch_active_bg: '#000080',
    dialog_radius: '0px',
    dialog_shadow: 'inset 1px 1px 0 #ffffff, inset -1px -1px 0 #000000, 2px 2px 0 rgba(0,0,0,0.5)',
    tooltip_radius: '0px',
    tooltip_bg: '#ffffe1',
    tooltip_fg: '#000000',
    tab_style: 'beveled',
  },
};

function getSystemSpec(s: (typeof DESIGN_SYSTEMS)[number]): SystemSpec {
  const sid = s.id;
  const radius = s.tokens.borderRadius;
  const primary = s.tokens.primaryColor;
  const is_sharp = radius === '0px';
  const cb_radius = is_sharp ? '0px' : radius === '8px' || radius === '12px' ? '6px' : '4px';
  const sw_radius = is_sharp ? '0px' : '9999px';
  const dlg_radius = is_sharp ? '0px' : radius === '8px' || radius === '12px' ? '12px' : '6px';
  const tt_radius = is_sharp ? '0px' : '4px';

  const base: SystemSpec = {
    checkbox_size: '16px',
    checkbox_radius: cb_radius,
    switch_width: '40px',
    switch_height: '22px',
    switch_radius: sw_radius,
    switch_thumb: '16px',
    switch_thumb_checked: '16px',
    switch_active_bg: primary,
    dialog_radius: dlg_radius,
    dialog_shadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    tooltip_radius: tt_radius,
    tooltip_bg: '#1f2937',
    tooltip_fg: '#ffffff',
    tab_style: is_sharp ? 'sharp' : 'underline',
    font: s.tokens.fontFamily,
    primary: s.tokens.primaryColor,
    radius: s.tokens.borderRadius,
    focus: s.tokens.focusStyle,
  };

  const special = SPECIAL_SPECS[sid] || {};
  return { ...base, ...special };
}

const CUSTOM_CANONICAL: Record<string, Partial<Record<'checkbox' | 'switch' | 'textarea' | 'tabs' | 'dialog' | 'tooltip', string>>> = {
  material: {
    checkbox: '<Checkbox checked={checked} onChange={setChecked} />',
    switch: '<Switch checked={enabled} onChange={setEnabled} />',
    textarea: '<TextField multiline rows={4} label="Notes" />',
    tabs: '<Tabs value={tab} onChange={setTab}><Tab label="Overview" /><Tab label="Settings" /></Tabs>',
    dialog: '<Dialog open={open} onClose={handleClose}><DialogTitle>Delete Environment?</DialogTitle></Dialog>',
    tooltip: '<Tooltip title="SOC2 Verified"><IconButton /></Tooltip>',
  },
  apple: {
    checkbox: 'Toggle("Consent", isOn: $isConsented)',
    switch: 'Toggle("Automated Backups", isOn: $backups).toggleStyle(.switch)',
    textarea: 'TextEditor(text: $notes).frame(height: 100)',
    tabs: 'TabView(selection: $selectedTab) { ... }.tabViewStyle(.segmented)',
    dialog: '.confirmationDialog("Delete Environment?", isPresented: $showDialog)',
    tooltip: '.help("SOC2 AA Verified")',
  },
  fluent: {
    checkbox: '<Checkbox checked={checked} onChange={setChecked} label="Consent" />',
    switch: '<Switch checked={enabled} onChange={setEnabled} label="Automated Backups" />',
    textarea: '<Textarea rows={4} placeholder="Service notes..." />',
    tabs: '<TabList selectedValue={tab} onTabSelect={setTab}><Tab value="overview">Overview</Tab></TabList>',
    dialog: '<Dialog open={isOpen}><DialogSurface><DialogTitle>Delete Cluster</DialogTitle></DialogSurface></Dialog>',
    tooltip: '<Tooltip content="SOC2 Verified" relationship="label"><Button>Status</Button></Tooltip>',
  },
  carbon: {
    checkbox: '<Checkbox labelText="Consent" id="cb" checked={checked} />',
    switch: '<Toggle labelText="Automated Backups" id="t1" toggled={on} />',
    textarea: '<TextArea labelText="Notes" rows={4} />',
    tabs: '<Tabs><TabList aria-label="System details"><Tab>Overview</Tab></TabList></Tabs>',
    dialog: '<Modal open={isOpen} modalHeading="Delete Cluster" onRequestClose={close} />',
    tooltip: '<Tooltip label="SOC2 Verified"><button type="button">Status</button></Tooltip>',
  },
  polaris: {
    checkbox: '<Checkbox label="Consent" checked={checked} onChange={setChecked} />',
    switch: '<SettingToggle enabled={enabled} onToggle={toggle}>Backups</SettingToggle>',
    textarea: '<TextField multiline={4} label="Notes" value={text} onChange={setText} />',
    tabs: '<Tabs tabs={tabs} selected={selected} onSelect={setSelected} />',
    dialog: '<Modal open={open} onClose={handleClose} title="Delete Environment?" />',
    tooltip: '<Tooltip content="SOC2 Verified"><Button>Status</Button></Tooltip>',
  },
  atlassian: {
    checkbox: '<Checkbox label="Consent" isChecked={checked} onChange={setChecked} />',
    switch: '<Toggle isChecked={enabled} onChange={setEnabled} />',
    textarea: '<TextArea placeholder="Service notes..." maxRows={4} />',
    tabs: '<Tabs id="details-tabs"><TabList><Tab>Overview</Tab></TabList></Tabs>',
    dialog: '<ModalTransition>{isOpen && <Modal onClose={close}><ModalHeader>Delete?</ModalHeader></Modal>}</ModalTransition>',
    tooltip: '<Tooltip content="SOC2 Verified"><Button>Status</Button></Tooltip>',
  },
  primer: {
    checkbox: '<Checkbox checked={checked} onChange={setChecked} />',
    switch: '<ToggleSwitch checked={on} onChange={setOn} />',
    textarea: '<Textarea block rows={4} placeholder="Notes..." />',
    tabs: '<UnderlineNav aria-label="Navigation"><UnderlineNav.Item selected>Overview</UnderlineNav.Item></UnderlineNav>',
    dialog: '<Dialog isOpen={isOpen} onDismiss={close} title="Delete Repository?" />',
    tooltip: '<Tooltip text="SOC2 Verified" direction="n"><Button>Status</Button></Tooltip>',
  },
  spectrum: {
    checkbox: '<Checkbox isSelected={checked} onChange={setChecked}>Consent</Checkbox>',
    switch: '<Switch isSelected={on} onChange={setOn}>Automated Backups</Switch>',
    textarea: '<TextArea label="Notes" value={val} onChange={setVal} />',
    tabs: '<Tabs aria-label="System tabs"><TabList><Item key="overview">Overview</Item></TabList></Tabs>',
    dialog: '<DialogContainer onDismiss={close}><Dialog><Heading>Delete Cluster</Heading></Dialog></DialogContainer>',
    tooltip: '<TooltipTrigger><ActionButton>Status</ActionButton><Tooltip>SOC2 Verified</Tooltip></TooltipTrigger>',
  },
  salesforce: {
    checkbox: '<Checkbox label="Consent" checked={checked} onChange={setChecked} />',
    switch: '<CheckboxToggle label="Automated Backups" checked={checked} />',
    textarea: '<Textarea label="Notes" placeholder="Service notes..." />',
    tabs: '<Tabs selectedId={tab} onSelect={setTab}><Tab id="overview" title="Overview" /></Tabs>',
    dialog: '<Modal isOpen={isOpen} title="Delete Environment" onRequestClose={close} />',
    tooltip: '<Tooltip content="SOC2 Verified"><Button label="Status" /></Tooltip>',
  },
  ant: {
    checkbox: '<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>Consent</Checkbox>',
    switch: '<Switch checked={enabled} onChange={setEnabled} />',
    textarea: '<Input.TextArea rows={4} placeholder="Service notes..." />',
    tabs: '<Tabs defaultActiveKey="overview" items={tabItems} />',
    dialog: '<Modal open={open} onCancel={close} title="Delete Environment?" />',
    tooltip: '<Tooltip title="SOC2 Verified"><Button>Status</Button></Tooltip>',
  },
  chakra: {
    checkbox: '<Checkbox isChecked={checked} onChange={e => setChecked(e.target.checked)}>Consent</Checkbox>',
    switch: '<Switch isChecked={enabled} onChange={e => setEnabled(e.target.checked)} />',
    textarea: '<Textarea placeholder="Service notes..." rows={4} />',
    tabs: '<Tabs><TabList><Tab>Overview</Tab></TabList></Tabs>',
    dialog: '<Modal isOpen={isOpen} onClose={onClose}><ModalContent><ModalHeader>Delete?</ModalHeader></ModalContent></Modal>',
    tooltip: '<Tooltip label="SOC2 Verified"><Button>Status</Button></Tooltip>',
  },
  mantine: {
    checkbox: '<Checkbox checked={checked} onChange={e => setChecked(e.currentTarget.checked)} label="Consent" />',
    switch: '<Switch checked={checked} onChange={e => setChecked(e.currentTarget.checked)} label="Backups" />',
    textarea: '<Textarea label="Notes" placeholder="Service notes..." rows={4} />',
    tabs: '<Tabs defaultValue="overview"><Tabs.List><Tabs.Tab value="overview">Overview</Tabs.Tab></Tabs.List></Tabs>',
    dialog: '<Modal opened={opened} onClose={close} title="Delete Environment?">...</Modal>',
    tooltip: '<Tooltip label="SOC2 Verified"><Button>Status</Button></Tooltip>',
  },
  radix: {
    checkbox: '<Checkbox.Root checked={checked} onCheckedChange={setChecked}><Checkbox.Indicator /></Checkbox.Root>',
    switch: '<Switch.Root checked={enabled} onCheckedChange={setEnabled}><Switch.Thumb /></Switch.Root>',
    textarea: '<TextArea size="2" placeholder="Service notes..." />',
    tabs: '<Tabs.Root defaultValue="overview"><Tabs.List><Tabs.Trigger value="overview">Overview</Tabs.Trigger></Tabs.List></Tabs.Root>',
    dialog: '<Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Content><Dialog.Title>Delete?</Dialog.Title></Dialog.Content></Dialog.Root>',
    tooltip: '<Tooltip.Root><Tooltip.Trigger asChild><Button>Status</Button></Tooltip.Trigger><Tooltip.Content>SOC2 Verified</Tooltip.Content></Tooltip.Root>',
  },
  shadcn: {
    checkbox: '<Checkbox id="terms" checked={checked} onCheckedChange={setChecked} />',
    switch: '<Switch id="airplane-mode" checked={enabled} onCheckedChange={setEnabled} />',
    textarea: '<Textarea placeholder="Type your message here." />',
    tabs: '<Tabs defaultValue="account"><TabsList><TabsTrigger value="account">Account</TabsTrigger></TabsList></Tabs>',
    dialog: '<Dialog open={open} onOpenChange={setOpen}><DialogContent><DialogHeader><DialogTitle>Delete?</DialogTitle></DialogHeader></DialogContent></Dialog>',
    tooltip: '<TooltipProvider><Tooltip><TooltipTrigger asChild><Button>Status</Button></TooltipTrigger><TooltipContent><p>SOC2 Verified</p></TooltipContent></Tooltip></TooltipProvider>',
  },
  eui: {
    checkbox: '<EuiCheckbox id="cb1" label="Consent" checked={checked} onChange={onChange} />',
    switch: '<EuiSwitch label="Automated Backups" checked={enabled} onChange={onChange} />',
    textarea: '<EuiTextArea placeholder="Service notes..." rows={4} />',
    tabs: '<EuiTabs>{tabs.map(t => <EuiTab key={t.id}>{t.name}</EuiTab>)}</EuiTabs>',
    dialog: '<EuiModal onClose={close}><EuiModalHeader><EuiModalHeaderTitle>Delete?</EuiModalHeaderTitle></EuiModalHeader></EuiModal>',
    tooltip: '<EuiToolTip content="SOC2 Verified"><EuiButton>Status</EuiButton></EuiToolTip>',
  },
  fiori: {
    checkbox: '<CheckBox text="Consent" checked={checked} onSelect={onSelect} />',
    switch: '<Switch state={enabled} change={onChange} />',
    textarea: '<TextArea rows={4} placeholder="Service notes..." />',
    tabs: '<IconTabBar select={handleSelect}><IconTabFilter text="Overview" /></IconTabBar>',
    dialog: '<Dialog title="Delete Environment" beginButton={<Button text="Delete" />} />',
    tooltip: '<Button text="Status" tooltip="SOC2 Verified" />',
  },
  govuk: {
    checkbox: '<govuk-checkboxes name="consent" items={items} />',
    switch: '<govuk-radios inline name="backups" items={yesNoItems} />',
    textarea: '<govuk-textarea name="notes" id="notes" rows={4} label={{ text: "Service notes" }} />',
    tabs: '<govuk-tabs items={tabItems} />',
    dialog: '<govuk-modal-dialog title="Confirm Action" />',
    tooltip: '<span className="govuk-tooltip" data-tooltip="SOC2 Verified">Status</span>',
  },
  uswds: {
    checkbox: '<Checkbox id="terms" name="terms" label="I agree to terms" />',
    switch: '<Checkbox id="backups" name="backups" toggle label="Automated Backups" />',
    textarea: '<Textarea id="notes" name="notes" placeholder="Service notes..." />',
    tabs: '<Tabs items={tabList} />',
    dialog: '<Modal id="delete-modal" title="Delete Environment?" />',
    tooltip: '<Tooltip label="SOC2 Verified"><Button>Status</Button></Tooltip>',
  },
  patternfly: {
    checkbox: '<Checkbox label="Consent" isChecked={checked} onChange={setChecked} id="cb" />',
    switch: '<Switch id="sw" label="Automated Backups" isChecked={enabled} onChange={setEnabled} />',
    textarea: '<TextArea value={value} onChange={setValue} aria-label="notes" />',
    tabs: '<Tabs activeKey={tab} onSelect={onSelect}><Tab eventKey={0} title="Overview" /></Tab>',
    dialog: '<Modal variant="small" title="Delete Environment?" isOpen={open} onClose={close} />',
    tooltip: '<Tooltip content="SOC2 Verified"><Button>Status</Button></Tooltip>',
  },
  'base-web': {
    checkbox: '<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>Consent</Checkbox>',
    switch: '<Checkbox checked={enabled} onChange={e => setEnabled(e.target.checked)} checkmarkType={STYLE_TYPE.toggle} />',
    textarea: '<Textarea value={value} onChange={e => setValue(e.target.value)} placeholder="Service notes..." />',
    tabs: '<Tabs activeKey={activeKey} onChange={({ activeKey }) => setActiveKey(activeKey)}><Tab title="Overview">...</Tab></Tabs>',
    dialog: '<Modal onClose={close} isOpen={isOpen}><ModalHeader>Delete Environment?</ModalHeader></Modal>',
    tooltip: '<StatefulTooltip content="SOC2 Verified"><Button>Status</Button></StatefulTooltip>',
  },
  blueprint: {
    checkbox: '<Checkbox checked={checked} onChange={handleChange} label="Consent" />',
    switch: '<Switch checked={enabled} onChange={handleChange} label="Automated Backups" />',
    textarea: '<TextArea fill={true} growVertically={true} placeholder="Service notes..." />',
    tabs: '<Tabs id="TabsExample" selectedTabId={tab} onChange={setTab}><Tab id="ov" title="Overview" /></Tabs>',
    dialog: '<Dialog isOpen={isOpen} onClose={close} title="Delete Environment?">...</Dialog>',
    tooltip: '<Tooltip content="SOC2 Verified" position="top"><Button text="Status" /></Tooltip>',
  },
  cloudscape: {
    checkbox: '<Checkbox checked={checked} onChange={({ detail }) => setChecked(detail.checked)}>Consent</Checkbox>',
    switch: '<Toggle checked={enabled} onChange={({ detail }) => setEnabled(detail.checked)}>Automated Backups</Toggle>',
    textarea: '<Textarea value={value} onChange={({ detail }) => setValue(detail.value)} placeholder="Service notes..." />',
    tabs: `<Tabs tabs={[{ label: 'Overview', id: 'overview' }]} activeTabId={activeTab} onChange={({ detail }) => setActiveTab(detail.activeTabId)} />`,
    dialog: '<Modal visible={visible} onDismiss={close} header="Delete Environment?">...</Modal>',
    tooltip: '<Popover content="SOC2 Verified" triggerType="custom"><Button>Status</Button></Popover>',
  },
  paste: {
    checkbox: '<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>Consent</Checkbox>',
    switch: '<Switch checked={enabled} onChange={e => setEnabled(e.target.checked)}>Backups</Switch>',
    textarea: '<TextArea id="notes" name="notes" placeholder="Service notes..." />',
    tabs: '<Tabs selectedId={tab}><TabList aria-label="System details"><Tab id="tab1">Overview</Tab></TabList></Tabs>',
    dialog: '<Modal ariaLabelledby="modal-header" isOpen={isOpen} onDismiss={close}><ModalHeader>Delete?</ModalHeader></Modal>',
    tooltip: '<Tooltip text="SOC2 Verified"><Button variant="secondary">Status</Button></Tooltip>',
  },
  win98: {
    checkbox: '<input type="checkbox" className="win98-checkbox" checked={checked} />',
    switch: '<input type="checkbox" role="switch" className="win98-toggle" />',
    textarea: '<textarea className="win98-textarea" rows={4} />',
    tabs: '<div className="win98-tabs"><button className="tab active">Overview</button></div>',
    dialog: '<div className="window"><div className="title-bar"><span>Delete?</span></div></div>',
    tooltip: '<div className="win98-tooltip">SOC2 Verified</div>',
  },
};

function getCanonicalSnippets(s: (typeof DESIGN_SYSTEMS)[number]) {
  const sid = s.id;
  const name = s.name.replace(/[^a-zA-Z0-9]/g, '');
  const custom = CUSTOM_CANONICAL[sid] || {};

  return {
    checkbox: custom.checkbox || `<${name}Checkbox checked={checked} onChange={setChecked} label="Consent" />`,
    switch: custom.switch || `<${name}Switch checked={enabled} onChange={setEnabled} label="Automated Backups" />`,
    textarea: custom.textarea || `<${name}Textarea rows={4} placeholder="Service notes..." value={text} />`,
    tabs: custom.tabs || `<${name}Tabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />`,
    dialog: custom.dialog || `<${name}Dialog open={isOpen} onClose={() => setIsOpen(false)} title="Delete Environment?" />`,
    tooltip: custom.tooltip || `<${name}Tooltip content="SOC2 Verified"><button>Status</button></${name}Tooltip>`,
  };
}

// 1. Update gallery/src/registry/data.ts
console.log('Writing updated gallery/src/registry/data.ts...');
const dataFileLines = [
  "import { DesignSystemMeta } from '../types.ts';\n",
  'export const DESIGN_SYSTEMS: DesignSystemMeta[] = [',
];

for (const s of DESIGN_SYSTEMS) {
  const c = getCanonicalSnippets(s);
  dataFileLines.push('  {');
  dataFileLines.push(`    id: '${s.id}',`);
  dataFileLines.push(`    name: ${JSON.stringify(s.name)},`);
  dataFileLines.push(`    organization: ${JSON.stringify(s.organization)},`);
  dataFileLines.push(`    category: '${s.category}',`);
  dataFileLines.push(`    categoryLabel: '${s.categoryLabel}',`);
  dataFileLines.push(`    docsUrl: '${s.docsUrl}',`);
  if (s.repoUrl) {
    dataFileLines.push(`    repoUrl: '${s.repoUrl}',`);
  }
  dataFileLines.push(`    description: ${JSON.stringify(s.description)},`);
  dataFileLines.push(`    aestheticNotes: ${JSON.stringify(s.aestheticNotes)},`);
  dataFileLines.push('    tokens: {');
  dataFileLines.push(`      primaryColor: '${s.tokens.primaryColor}',`);
  dataFileLines.push(`      borderRadius: '${s.tokens.borderRadius}',`);
  dataFileLines.push(`      controlHeight: '${s.tokens.controlHeight}',`);
  dataFileLines.push(`      fontFamily: ${JSON.stringify(s.tokens.fontFamily)},`);
  dataFileLines.push(`      focusStyle: ${JSON.stringify(s.tokens.focusStyle)},`);
  dataFileLines.push('    },');
  dataFileLines.push('    variants: {');
  dataFileLines.push(`      buttons: ${JSON.stringify(s.variants.buttons)},`);
  dataFileLines.push("      inputs: ['Default', 'With Label & Helper', 'Placeholder', 'Filled', 'Error', 'Disabled'],");
  dataFileLines.push("      selects: ['Default', 'Pre-selected', 'Error', 'Disabled'],");
  dataFileLines.push("      radios: ['Unselected', 'Selected', 'Disabled Unselected', 'Disabled Selected', 'Interactive Group'],");
  dataFileLines.push("      checkboxes: ['Unchecked', 'Checked', 'Indeterminate', 'Disabled Unchecked', 'Disabled Checked', 'Interactive Group'],");
  dataFileLines.push("      switches: ['Off', 'On', 'Disabled Off', 'Disabled On'],");
  dataFileLines.push("      textareas: ['Default with Counter', 'Placeholder', 'Error', 'Disabled'],");
  dataFileLines.push("      tabs: ['Overview', 'Settings', 'Activity (Accessible with arrow navigation)'],");
  dataFileLines.push("      dialogs: ['Standard Modal with Backdrop, Close Action & Keyboard Dismissal'],");
  dataFileLines.push("      tooltips: ['Hover & Keyboard Focus Bubble with Pointer Arrow'],");
  dataFileLines.push('    },');
  dataFileLines.push('    canonicalCode: {');
  dataFileLines.push(`      button: ${JSON.stringify(s.canonicalCode.button)},`);
  dataFileLines.push(`      input: ${JSON.stringify(s.canonicalCode.input)},`);
  dataFileLines.push(`      select: ${JSON.stringify(s.canonicalCode.select)},`);
  dataFileLines.push(`      radio: ${JSON.stringify(s.canonicalCode.radio)},`);
  dataFileLines.push(`      checkbox: ${JSON.stringify(c.checkbox)},`);
  dataFileLines.push(`      switch: ${JSON.stringify(c.switch)},`);
  dataFileLines.push(`      textarea: ${JSON.stringify(c.textarea)},`);
  dataFileLines.push(`      tabs: ${JSON.stringify(c.tabs)},`);
  dataFileLines.push(`      dialog: ${JSON.stringify(c.dialog)},`);
  dataFileLines.push(`      tooltip: ${JSON.stringify(c.tooltip)},`);
  dataFileLines.push('    },');
  dataFileLines.push('  },');
}

dataFileLines.push('];\n');
fs.writeFileSync(DATA_FILE, dataFileLines.join('\n'));
console.log('Saved gallery/src/registry/data.ts.');

// 2. Append/Update CSS for the 6 new components in gallery/src/styles/design-systems.css
console.log('Updating CSS in gallery/src/styles/design-systems.css...');
let existingCss = fs.readFileSync(STYLES_FILE, 'utf-8');
if (existingCss.includes('/* === PHASE 2 EXTENDED COMPONENTS === */')) {
  existingCss = existingCss.split('/* === PHASE 2 EXTENDED COMPONENTS === */')[0];
}

const cssLines: string[] = [existingCss.trim(), '\n\n/* === PHASE 2 EXTENDED COMPONENTS === */\n'];

for (const s of DESIGN_SYSTEMS) {
  const sid = s.id;
  const sp = getSystemSpec(s);
  const is_sharp = sp.radius === '0px';
  const ta_radius = is_sharp ? '0px' : sp.radius === '8px' || sp.radius === '12px' ? '8px' : '4px';

  cssLines.push(`/* ----- ${sid.toUpperCase()} Phase 2 ----- */`);

  // Checkbox
  cssLines.push(`.ds-checkbox-${sid} {`);
  cssLines.push(`  width: ${sp.checkbox_size};`);
  cssLines.push(`  height: ${sp.checkbox_size};`);
  cssLines.push(`  border-radius: ${sp.checkbox_radius};`);
  cssLines.push(`  accent-color: ${sp.primary};`);
  cssLines.push('  cursor: pointer;');
  cssLines.push('  vertical-align: middle;');
  cssLines.push('  margin: 0;');
  cssLines.push('}');
  cssLines.push(`.ds-checkbox-${sid}:disabled { opacity: 0.45; cursor: not-allowed; }`);

  // Switch
  cssLines.push(`.ds-switch-track-${sid} {`);
  cssLines.push('  position: relative;');
  cssLines.push('  display: inline-flex;');
  cssLines.push('  align-items: center;');
  cssLines.push(`  width: ${sp.switch_width};`);
  cssLines.push(`  height: ${sp.switch_height};`);
  cssLines.push(`  border-radius: ${sp.switch_radius};`);
  cssLines.push('  background-color: #d1d5db;');
  cssLines.push('  border: none;');
  cssLines.push('  padding: 2px;');
  cssLines.push('  cursor: pointer;');
  cssLines.push('  transition: background-color 0.2s ease;');
  cssLines.push('}');
  cssLines.push(`.ds-switch-track-${sid}:focus-visible { box-shadow: ${sp.focus}; outline: none; }`);
  cssLines.push(`.ds-switch-track-${sid}.checked { background-color: ${sp.switch_active_bg}; }`);
  cssLines.push(`.ds-switch-track-${sid}.disabled { opacity: 0.45; cursor: not-allowed; }`);

  cssLines.push(`.ds-switch-thumb-${sid} {`);
  cssLines.push('  display: block;');
  cssLines.push(`  width: ${sp.switch_thumb};`);
  cssLines.push(`  height: ${sp.switch_thumb};`);
  cssLines.push(`  border-radius: ${sp.switch_radius};`);
  cssLines.push('  background-color: #ffffff;');
  cssLines.push('  box-shadow: 0 1px 3px rgba(0,0,0,0.25);');
  cssLines.push('  transition: transform 0.2s ease, width 0.2s ease;');
  cssLines.push('  transform: translateX(0);');
  cssLines.push('}');
  cssLines.push(`.ds-switch-thumb-${sid}.checked {`);
  cssLines.push(`  transform: translateX(calc(${sp.switch_width} - ${sp.switch_thumb_checked} - 4px));`);
  cssLines.push(`  width: ${sp.switch_thumb_checked};`);
  cssLines.push('}');

  // Textarea
  cssLines.push(`.ds-textarea-${sid} {`);
  cssLines.push(`  font-family: ${sp.font};`);
  cssLines.push(`  border-radius: ${ta_radius};`);
  if (sid === 'carbon') {
    cssLines.push('  border: none; border-bottom: 1px solid #8d8d8d; background: #f4f4f4;');
  } else if (sid === 'govuk') {
    cssLines.push('  border: 2px solid #0b0c0c; background: #ffffff;');
  } else if (sid === 'win98') {
    cssLines.push('  border-top: 1px solid #808080; border-left: 1px solid #808080; border-right: 1px solid #dfdfdf; border-bottom: 1px solid #dfdfdf; box-shadow: inset 1px 1px 0 #000000, inset -1px -1px 0 #ffffff; background: #ffffff;');
  } else {
    cssLines.push('  border: 1px solid #d1d5db; background: #ffffff;');
  }
  cssLines.push('  padding: 8px 12px;');
  cssLines.push('  font-size: 14px;');
  cssLines.push('  width: 100%;');
  cssLines.push('  color: #1a1a1a;');
  cssLines.push('  resize: vertical;');
  cssLines.push('  line-height: 1.5;');
  cssLines.push('  transition: border-color 0.15s ease, box-shadow 0.15s ease;');
  cssLines.push('}');
  if (sid === 'carbon') {
    cssLines.push(`.ds-textarea-${sid}:focus { border-bottom: 2px solid ${sp.primary}; outline: none; }`);
  } else if (sid === 'govuk') {
    cssLines.push(`.ds-textarea-${sid}:focus { outline: 3px solid #ffdd00; box-shadow: inset 0 0 0 2px #0b0c0c; }`);
  } else {
    cssLines.push(`.ds-textarea-${sid}:focus { border-color: ${sp.primary}; outline: none; box-shadow: 0 0 0 2px rgba(15, 98, 254, 0.2); }`);
  }
  cssLines.push(`.ds-textarea-${sid}.error { border-color: #d32f2f !important; }`);
  cssLines.push(`.ds-textarea-${sid}:disabled { opacity: 0.5; background: #f5f5f5; cursor: not-allowed; }`);

  // Tabs
  cssLines.push(`.ds-tablist-${sid} {`);
  cssLines.push('  display: flex;');
  cssLines.push('  align-items: center;');
  if (sp.tab_style === 'pill') {
    cssLines.push('  background: #f1f3f5; padding: 4px; border-radius: 8px; gap: 4px; border-bottom: none;');
  } else if (sp.tab_style === 'beveled') {
    cssLines.push('  gap: 2px; border-bottom: 2px solid #ffffff;');
  } else {
    cssLines.push('  border-bottom: 1px solid #e5e7eb; gap: 16px;');
  }
  cssLines.push('}');

  cssLines.push(`.ds-tab-${sid} {`);
  cssLines.push(`  font-family: ${sp.font};`);
  cssLines.push('  font-size: 14px;');
  cssLines.push('  font-weight: 500;');
  cssLines.push('  cursor: pointer;');
  cssLines.push('  border: none;');
  cssLines.push('  background: transparent;');
  cssLines.push('  color: #6b7280;');
  cssLines.push('  transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;');
  if (sp.tab_style === 'pill') {
    cssLines.push('  padding: 6px 14px; border-radius: 6px;');
  } else if (sp.tab_style === 'beveled') {
    cssLines.push('  padding: 4px 10px; background: #c0c0c0; border-top: 1px solid #ffffff; border-left: 1px solid #ffffff; border-right: 1px solid #000000; border-bottom: none; border-radius: 0; color: #000000;');
  } else {
    cssLines.push('  padding: 8px 4px; border-bottom: 2px solid transparent; border-radius: 0; margin-bottom: -1px;');
  }
  cssLines.push('}');

  if (sp.tab_style === 'pill') {
    cssLines.push(`.ds-tab-${sid}.active { background: #ffffff; color: ${sp.primary}; font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }`);
  } else if (sp.tab_style === 'beveled') {
    cssLines.push(`.ds-tab-${sid}.active { background: #c0c0c0; font-weight: 700; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-right: 2px solid #000000; }`);
  } else {
    cssLines.push(`.ds-tab-${sid}.active { color: ${sp.primary}; border-bottom: 2px solid ${sp.primary}; font-weight: 600; }`);
  }
  cssLines.push(`.ds-tab-${sid}:focus-visible { box-shadow: ${sp.focus}; outline: none; }`);

  cssLines.push(`.ds-tabpanel-${sid} { font-family: ${sp.font}; padding: 12px 0; font-size: 14px; color: #1f2937; }`);

  // Dialog / Modal
  cssLines.push(`.ds-dialog-overlay-${sid} {`);
  cssLines.push('  position: fixed;');
  cssLines.push('  inset: 0;');
  cssLines.push('  background: rgba(0, 0, 0, 0.45);');
  if (sid === 'apple') {
    cssLines.push('  backdrop-filter: blur(8px);');
  }
  cssLines.push('  display: flex;');
  cssLines.push('  align-items: center;');
  cssLines.push('  justify-content: center;');
  cssLines.push('  z-index: 1000;');
  cssLines.push('  padding: 16px;');
  cssLines.push('}');

  cssLines.push(`.ds-dialog-box-${sid} {`);
  cssLines.push(`  font-family: ${sp.font};`);
  cssLines.push('  background: #ffffff;');
  cssLines.push(`  border-radius: ${sp.dialog_radius};`);
  cssLines.push(`  box-shadow: ${sp.dialog_shadow};`);
  cssLines.push('  width: 100%;');
  cssLines.push('  max-width: 480px;');
  if (sid === 'win98') {
    cssLines.push('  background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-right: 2px solid #000000; border-bottom: 2px solid #000000; padding: 3px;');
  } else if (sid === 'govuk') {
    cssLines.push('  border: 2px solid #0b0c0c;');
  } else if (is_sharp) {
    cssLines.push('  border: 1px solid #111111;');
  } else {
    cssLines.push('  border: 1px solid #e5e7eb;');
  }
  cssLines.push('  overflow: hidden;');
  cssLines.push('}');

  cssLines.push(`.ds-dialog-header-${sid} {`);
  if (sid === 'win98') {
    cssLines.push('  background: #000080; color: #ffffff; padding: 4px 8px; font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: space-between;');
  } else if (sid === 'carbon') {
    cssLines.push('  background: #161616; color: #ffffff; padding: 16px 20px; font-weight: 600; font-size: 15px; display: flex; align-items: center; justify-content: space-between;');
  } else {
    cssLines.push('  padding: 16px 20px; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: space-between; font-weight: 700; font-size: 16px; color: #111827;');
  }
  cssLines.push('}');

  cssLines.push(`.ds-dialog-body-${sid} {`);
  if (sid === 'win98') {
    cssLines.push('  padding: 16px; font-size: 12px; color: #000000; line-height: 1.5;');
  } else {
    cssLines.push('  padding: 20px; font-size: 14px; color: #374151; line-height: 1.6;');
  }
  cssLines.push('}');

  cssLines.push(`.ds-dialog-footer-${sid} {`);
  if (sid === 'win98') {
    cssLines.push('  padding: 10px 16px; display: flex; justify-content: flex-end; gap: 8px; background: #c0c0c0;');
  } else {
    cssLines.push('  padding: 14px 20px; border-top: 1px solid #f3f4f6; display: flex; justify-content: flex-end; gap: 10px; background: #fafafa;');
  }
  cssLines.push('}');

  // Tooltip
  cssLines.push(`.ds-tooltip-wrapper-${sid} { position: relative; display: inline-block; }`);
  cssLines.push(`.ds-tooltip-bubble-${sid} {`);
  cssLines.push(`  font-family: ${sp.font};`);
  cssLines.push(`  background: ${sp.tooltip_bg};`);
  cssLines.push(`  color: ${sp.tooltip_fg};`);
  cssLines.push(`  border-radius: ${sp.tooltip_radius};`);
  if (sid === 'win98') {
    cssLines.push('  border: 1px solid #000000; font-size: 11px; padding: 3px 6px;');
  } else {
    cssLines.push('  font-size: 12px; padding: 6px 10px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.15);');
  }
  cssLines.push('  position: absolute;');
  cssLines.push('  bottom: calc(100% + 8px);');
  cssLines.push('  left: 50%;');
  cssLines.push('  transform: translateX(-50%);');
  cssLines.push('  white-space: nowrap;');
  cssLines.push('  z-index: 100;');
  cssLines.push('  pointer-events: none;');
  cssLines.push('  opacity: 0;');
  cssLines.push('  transition: opacity 0.15s ease;');
  cssLines.push('}');
  cssLines.push(`.ds-tooltip-bubble-${sid}.visible { opacity: 1; }`);

  cssLines.push(`.ds-tooltip-arrow-${sid} {`);
  cssLines.push('  position: absolute;');
  cssLines.push('  top: 100%;');
  cssLines.push('  left: 50%;');
  cssLines.push('  margin-left: -4px;');
  cssLines.push('  border-width: 4px;');
  cssLines.push('  border-style: solid;');
  cssLines.push(`  border-color: ${sp.tooltip_bg} transparent transparent transparent;`);
  cssLines.push('}\n');
}

fs.writeFileSync(STYLES_FILE, cssLines.join('\n'));
console.log('Updated gallery/src/styles/design-systems.css.');

// 3. React component templates
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

// 4. Generate component files for all 44 systems
console.log('Writing component files for all 44 systems...');
for (const s of DESIGN_SYSTEMS) {
  const sid = s.id;
  const sdir = path.join(DS_DIR, sid);
  if (!fs.existsSync(sdir)) {
    fs.mkdirSync(sdir, { recursive: true });
  }

  // Checkbox.tsx
  fs.writeFileSync(path.join(sdir, 'Checkbox.tsx'), CHK_TMPL.replaceAll('SID', sid));

  // Switch.tsx
  fs.writeFileSync(path.join(sdir, 'Switch.tsx'), SW_TMPL.replaceAll('SID', sid));

  // Textarea.tsx
  fs.writeFileSync(path.join(sdir, 'Textarea.tsx'), TA_TMPL.replaceAll('SID', sid));

  // Tabs.tsx
  fs.writeFileSync(path.join(sdir, 'Tabs.tsx'), TAB_TMPL.replaceAll('SID', sid));

  // Dialog.tsx
  fs.writeFileSync(path.join(sdir, 'Dialog.tsx'), DLG_TMPL.replaceAll('SID', sid));

  // Tooltip.tsx
  fs.writeFileSync(path.join(sdir, 'Tooltip.tsx'), TT_TMPL.replaceAll('SID', sid));

  // index.ts exporting all 10 components
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
console.log('Created Checkbox, Switch, Textarea, Tabs, Dialog, Tooltip for all 44 systems.');

// 5. Update gallery/src/registry/index.ts
console.log('Writing gallery/src/registry/index.ts...');
const regLines = [
  "import { DesignSystemEntry } from '../types.ts';",
  "import { DESIGN_SYSTEMS } from './data.ts';\n",
];

for (const s of DESIGN_SYSTEMS) {
  const sid = s.id;
  const varName = sid.replace(/-/g, '_');
  regLines.push(`import * as ${varName}Components from '../design-systems/${sid}/index.ts';`);
}

regLines.push('\nexport const ALL_SYSTEM_ENTRIES: Record<string, DesignSystemEntry> = {');
for (const s of DESIGN_SYSTEMS) {
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
