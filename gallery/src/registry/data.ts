import { DesignSystemMeta } from '../types.ts';

export const DESIGN_SYSTEMS: DesignSystemMeta[] = [
  {
    "id": "material",
    "name": "Material Design 3",
    "organization": "Google",
    "category": "tech-giant",
    "categoryLabel": "Tech Giants",
    "docsUrl": "https://m3.material.io",
    "repoUrl": "https://github.com/material-components/material-web",
    "description": "Google's open-source design system featuring expressive colors, dynamic theming, pill buttons, and elevation surfaces.",
    "aestheticNotes": "Pill-shaped controls (9999px radius), pastel tonal containers, floating label inputs, and ripple-style focus feedback.",
    "tokens": {
      "primaryColor": "#6750a4",
      "borderRadius": "9999px",
      "controlHeight": "40px",
      "fontFamily": "'Roboto', system-ui, sans-serif",
      "focusStyle": "0 0 0 3px rgba(103, 80, 164, 0.3)"
    },
    "variants": {
      "buttons": [
        "Filled",
        "Tonal",
        "Outlined",
        "Elevated",
        "Destructive"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"filled\">Get Started</Button>",
      "input": "<TextField label=\"Email address\" variant=\"outlined\" />",
      "select": "<Select label=\"Region\" options={regions} />",
      "radio": "<RadioGroup name=\"plan\" value={plan} onChange={setPlan} />",
      "checkbox": "<Checkbox checked={checked} onChange={setChecked} />",
      "switch": "<Switch checked={enabled} onChange={setEnabled} />",
      "textarea": "<TextField multiline rows={4} label=\"Notes\" />",
      "tabs": "<Tabs value={tab} onChange={setTab}><Tab label=\"Overview\" /><Tab label=\"Settings\" /></Tabs>",
      "dialog": "<Dialog open={open} onClose={handleClose}><DialogTitle>Delete Environment?</DialogTitle></Dialog>",
      "tooltip": "<Tooltip title=\"SOC2 Verified\"><IconButton /></Tooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "apple",
    "name": "Human Interface Guidelines",
    "organization": "Apple",
    "category": "tech-giant",
    "categoryLabel": "Tech Giants",
    "docsUrl": "https://developer.apple.com/design/human-interface-guidelines",
    "repoUrl": "https://developer.apple.com/xcode/swiftui",
    "description": "Apple's unified design language for macOS, iOS, and visionOS emphasizing clarity, subtle frosted glass translucency, and SF typography.",
    "aestheticNotes": "SF Pro typography, 8px rounded corners, system blue accents (#0071e3), subtle inner input shadows, and refined desktop density.",
    "tokens": {
      "primaryColor": "#0071e3",
      "borderRadius": "8px",
      "controlHeight": "32px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      "focusStyle": "0 0 0 3.5px rgba(0, 113, 227, 0.4)"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tinted",
        "Destructive"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"borderedProminent\">Continue</Button>",
      "input": "<TextField placeholder=\"Enter name\" roundedBorder />",
      "select": "<Picker selected={region}>{regions}</Picker>",
      "radio": "<RadioGroup selection={selected} />",
      "checkbox": "Toggle(\"Consent\", isOn: $isConsented)",
      "switch": "Toggle(\"Automated Backups\", isOn: $backups).toggleStyle(.switch)",
      "textarea": "TextEditor(text: $notes).frame(height: 100)",
      "tabs": "TabView(selection: $selectedTab) { ... }.tabViewStyle(.segmented)",
      "dialog": ".confirmationDialog(\"Delete Environment?\", isPresented: $showDialog)",
      "tooltip": ".help(\"SOC2 AA Verified\")"
    },
    "status": "active",
    "type": "platform-guidelines",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "fluent",
    "name": "Fluent 2 Design System",
    "organization": "Microsoft",
    "category": "tech-giant",
    "categoryLabel": "Tech Giants",
    "docsUrl": "https://fluent2.microsoft.design",
    "repoUrl": "https://github.com/microsoft/fluentui",
    "description": "Microsoft's cross-platform design system powering Windows 11, Microsoft 365, and Azure cloud applications.",
    "aestheticNotes": "Segoe UI typography, 4px radius, double-ring focus outline, and signature bottom-line accent highlight on focused inputs.",
    "tokens": {
      "primaryColor": "#0078d4",
      "borderRadius": "4px",
      "controlHeight": "32px",
      "fontFamily": "'Segoe UI', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #ffffff, 0 0 0 4px #000000"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Subtle",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button appearance=\"primary\">Save changes</Button>",
      "input": "<Input appearance=\"underline\" placeholder=\"Search...\" />",
      "select": "<Dropdown placeholder=\"Select an option\" />",
      "radio": "<RadioGroup options={plans} />",
      "checkbox": "<Checkbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<Switch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<Textarea rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<TabList selectedValue={tab} onTabSelect={setTab}><Tab value=\"overview\">Overview</Tab></TabList>",
      "dialog": "<Dialog open={isOpen}><DialogSurface><DialogTitle>Delete Cluster</DialogTitle></DialogSurface></Dialog>",
      "tooltip": "<Tooltip content=\"SOC2 Verified\" relationship=\"label\"><Button>Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "carbon",
    "name": "Carbon Design System",
    "organization": "IBM",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://carbondesignsystem.com",
    "repoUrl": "https://github.com/carbon-design-system/carbon",
    "description": "IBM's open-source design system engineered for high-density enterprise data visualization, cloud consoles, and strict accessibility.",
    "aestheticNotes": "Zero border radius (sharp 0px rectangular corners), 2x grid, bottom-border only input fields, and high-contrast blue (#0f62fe).",
    "tokens": {
      "primaryColor": "#0f62fe",
      "borderRadius": "0px",
      "controlHeight": "40px",
      "fontFamily": "'IBM Plex Sans', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #0f62fe"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button kind=\"primary\">Deploy Cluster</Button>",
      "input": "<TextInput id=\"uid\" labelText=\"User ID\" />",
      "select": "<Select id=\"env\" labelText=\"Environment\" />",
      "radio": "<RadioButtonGroup name=\"radio-group\" defaultSelected=\"default\" />",
      "checkbox": "<Checkbox labelText=\"Consent\" id=\"cb\" checked={checked} />",
      "switch": "<Toggle labelText=\"Automated Backups\" id=\"t1\" toggled={on} />",
      "textarea": "<TextArea labelText=\"Notes\" rows={4} />",
      "tabs": "<Tabs><TabList aria-label=\"System details\"><Tab>Overview</Tab></TabList></Tabs>",
      "dialog": "<Modal open={isOpen} modalHeading=\"Delete Cluster\" onRequestClose={close} />",
      "tooltip": "<Tooltip label=\"SOC2 Verified\"><button type=\"button\">Status</button></Tooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "polaris",
    "name": "Shopify Polaris",
    "organization": "Shopify",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://polaris.shopify.com",
    "repoUrl": "https://github.com/Shopify/polaris",
    "description": "The gold standard merchant design system crafted for complex e-commerce administration, billing, and inventory workflows.",
    "aestheticNotes": "Inter typography, Merchant emerald green (#008060), soft 8px radii, subtle inset button shadows, and crystal-clear form helper text.",
    "tokens": {
      "primaryColor": "#008060",
      "borderRadius": "8px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #2c6ecb"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Plain",
        "Critical"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"primary\">Save product</Button>",
      "input": "<TextField label=\"Store domain\" autoComplete=\"off\" />",
      "select": "<Select label=\"Fulfillment method\" options={options} />",
      "radio": "<RadioButton label=\"Free shipping\" checked={selected} />",
      "checkbox": "<Checkbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<SettingToggle enabled={enabled} onToggle={toggle}>Backups</SettingToggle>",
      "textarea": "<TextField multiline={4} label=\"Notes\" value={text} onChange={setText} />",
      "tabs": "<Tabs tabs={tabs} selected={selected} onSelect={setSelected} />",
      "dialog": "<Modal open={open} onClose={handleClose} title=\"Delete Environment?\" />",
      "tooltip": "<Tooltip content=\"SOC2 Verified\"><Button>Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "atlassian",
    "name": "Atlassian Design System",
    "organization": "Atlassian",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://atlassian.design",
    "repoUrl": "https://bitbucket.org/atlassian/atlassian-frontend",
    "description": "The battle-tested design system behind Jira, Confluence, and Bitbucket built for collaborative team productivity.",
    "aestheticNotes": "Charlie/Segoe typography, Jira blue (#0052cc), compact 3px radius, neutral subdued backgrounds (#091e420f), and 2px focus outlines.",
    "tokens": {
      "primaryColor": "#0052cc",
      "borderRadius": "3px",
      "controlHeight": "32px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #4c9aff"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Default",
        "Subtle",
        "Warning"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button appearance=\"primary\">Create issue</Button>",
      "input": "<Textfield name=\"summary\" placeholder=\"Issue summary\" />",
      "select": "<Select placeholder=\"Choose assignee\" />",
      "radio": "<RadioGroup options={priorities} />",
      "checkbox": "<Checkbox label=\"Consent\" isChecked={checked} onChange={setChecked} />",
      "switch": "<Toggle isChecked={enabled} onChange={setEnabled} />",
      "textarea": "<TextArea placeholder=\"Service notes...\" maxRows={4} />",
      "tabs": "<Tabs id=\"details-tabs\"><TabList><Tab>Overview</Tab></TabList></Tabs>",
      "dialog": "<ModalTransition>{isOpen && <Modal onClose={close}><ModalHeader>Delete?</ModalHeader></Modal>}</ModalTransition>",
      "tooltip": "<Tooltip content=\"SOC2 Verified\"><Button>Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "primer",
    "name": "GitHub Primer",
    "organization": "GitHub",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://primer.style",
    "repoUrl": "https://github.com/primer/react",
    "description": "GitHub's design system powering github.com, pull requests, code reviews, and developer CLI tools.",
    "aestheticNotes": "6px radius, GitHub green (#1f883d) primary, light gray border (#d0d7de) with subtle 1px bottom drop shadow on secondary buttons.",
    "tokens": {
      "primaryColor": "#1f883d",
      "borderRadius": "6px",
      "controlHeight": "32px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif",
      "focusStyle": "0 0 0 3px rgba(9, 105, 218, 0.3)"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Default",
        "Invisible",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"primary\">Merge pull request</Button>",
      "input": "<TextInput placeholder=\"Repository name\" />",
      "select": "<Select>{branches}</Select>",
      "radio": "<RadioGroup name=\"visibility\" />",
      "checkbox": "<Checkbox checked={checked} onChange={setChecked} />",
      "switch": "<ToggleSwitch checked={on} onChange={setOn} />",
      "textarea": "<Textarea block rows={4} placeholder=\"Notes...\" />",
      "tabs": "<UnderlineNav aria-label=\"Navigation\"><UnderlineNav.Item selected>Overview</UnderlineNav.Item></UnderlineNav>",
      "dialog": "<Dialog isOpen={isOpen} onDismiss={close} title=\"Delete Repository?\" />",
      "tooltip": "<Tooltip text=\"SOC2 Verified\" direction=\"n\"><Button>Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "spectrum",
    "name": "Adobe Spectrum",
    "organization": "Adobe",
    "category": "tech-giant",
    "categoryLabel": "Tech Giants",
    "docsUrl": "https://spectrum.adobe.com",
    "repoUrl": "https://github.com/adobe/react-spectrum",
    "description": "Adobe's design system powering Photoshop Web, Illustrator, Creative Cloud, and Experience Cloud suites.",
    "aestheticNotes": "Adobe Clean font, 16px pill or 4px radius, Spectrum blue (#0265dc), quiet variants, and AAA accessible focus rings.",
    "tokens": {
      "primaryColor": "#0265dc",
      "borderRadius": "16px",
      "controlHeight": "32px",
      "fontFamily": "'Adobe Clean', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #ffffff, 0 0 0 4px #0265dc"
    },
    "variants": {
      "buttons": [
        "Accent",
        "Primary",
        "Secondary",
        "Negative"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"accent\">Export asset</Button>",
      "input": "<TextField label=\"Canvas width\" />",
      "select": "<Picker label=\"Color space\">{items}</Picker>",
      "radio": "<RadioGroup label=\"Blend mode\" />",
      "checkbox": "<Checkbox isSelected={checked} onChange={setChecked}>Consent</Checkbox>",
      "switch": "<Switch isSelected={on} onChange={setOn}>Automated Backups</Switch>",
      "textarea": "<TextArea label=\"Notes\" value={val} onChange={setVal} />",
      "tabs": "<Tabs aria-label=\"System tabs\"><TabList><Item key=\"overview\">Overview</Item></TabList></Tabs>",
      "dialog": "<DialogContainer onDismiss={close}><Dialog><Heading>Delete Cluster</Heading></Dialog></DialogContainer>",
      "tooltip": "<TooltipTrigger><ActionButton>Status</ActionButton><Tooltip>SOC2 Verified</Tooltip></TooltipTrigger>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "salesforce",
    "name": "Lightning Design System (SLDS)",
    "organization": "Salesforce",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://www.lightningdesignsystem.com",
    "repoUrl": "https://github.com/salesforce-ux/design-system",
    "description": "The enterprise CRM design system powering Salesforce Service Cloud, Sales Cloud, and Lightning Web Components.",
    "aestheticNotes": "Salesforce Sans, Salesforce blue (#0176d3), 4px border radius, clear required field asterisks, and neutral borders (#747474).",
    "tokens": {
      "primaryColor": "#0176d3",
      "borderRadius": "4px",
      "controlHeight": "32px",
      "fontFamily": "'Salesforce Sans', -apple-system, sans-serif",
      "focusStyle": "0 0 3px #0176d3"
    },
    "variants": {
      "buttons": [
        "Brand",
        "Neutral",
        "Outline-Brand",
        "Destructive"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"brand\">Convert Lead</Button>",
      "input": "<Input label=\"Account Name\" required />",
      "select": "<Combobox label=\"Stage\" options={stages} />",
      "radio": "<RadioGroup name=\"rating\" />",
      "checkbox": "<Checkbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<CheckboxToggle label=\"Automated Backups\" checked={checked} />",
      "textarea": "<Textarea label=\"Notes\" placeholder=\"Service notes...\" />",
      "tabs": "<Tabs selectedId={tab} onSelect={setTab}><Tab id=\"overview\" title=\"Overview\" /></Tabs>",
      "dialog": "<Modal isOpen={isOpen} title=\"Delete Environment\" onRequestClose={close} />",
      "tooltip": "<Tooltip content=\"SOC2 Verified\"><Button label=\"Status\" /></Tooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "ant",
    "name": "Ant Design",
    "organization": "Ant Group",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://ant.design",
    "repoUrl": "https://github.com/ant-design/ant-design",
    "description": "Enterprise-class UI design language and React component library widely adopted across Asia and global fintech.",
    "aestheticNotes": "Ant tech blue (#1677ff), 6px radius, subtle bottom drop shadow on primary buttons, dashed variant, and click wave animations.",
    "tokens": {
      "primaryColor": "#1677ff",
      "borderRadius": "6px",
      "controlHeight": "32px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px rgba(5, 145, 255, 0.1)"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Default",
        "Dashed",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button type=\"primary\">Submit Query</Button>",
      "input": "<Input placeholder=\"Enter keyword\" allowClear />",
      "select": "<Select defaultValue=\"lucy\" style={{ width: 120 }} />",
      "radio": "<Radio.Group onChange={onChange} value={value} />",
      "checkbox": "<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>Consent</Checkbox>",
      "switch": "<Switch checked={enabled} onChange={setEnabled} />",
      "textarea": "<Input.TextArea rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<Tabs defaultActiveKey=\"overview\" items={tabItems} />",
      "dialog": "<Modal open={open} onCancel={close} title=\"Delete Environment?\" />",
      "tooltip": "<Tooltip title=\"SOC2 Verified\"><Button>Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "ui-library",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "chakra",
    "name": "Chakra UI",
    "organization": "Chakra UI Team",
    "category": "modern-react",
    "categoryLabel": "Modern React",
    "docsUrl": "https://chakra-ui.com",
    "repoUrl": "https://github.com/chakra-ui/chakra-ui",
    "description": "Simple, modular, and accessible component library giving developers the building blocks to build React applications fast.",
    "aestheticNotes": "Teal brand color (#319795), 6px radius, 40px height, solid/outline/ghost variants, and thick translucent focus rings.",
    "tokens": {
      "primaryColor": "#319795",
      "borderRadius": "6px",
      "controlHeight": "40px",
      "fontFamily": "system-ui, -apple-system, sans-serif",
      "focusStyle": "0 0 0 3px rgba(49, 151, 149, 0.4)"
    },
    "variants": {
      "buttons": [
        "Solid",
        "Outline",
        "Ghost",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button colorScheme=\"teal\">Join workspace</Button>",
      "input": "<Input placeholder=\"Basic usage\" size=\"md\" />",
      "select": "<Select placeholder=\"Select option\">{opts}</Select>",
      "radio": "<RadioGroup defaultValue=\"1\"><HStack>{radios}</HStack></RadioGroup>",
      "checkbox": "<Checkbox isChecked={checked} onChange={e => setChecked(e.target.checked)}>Consent</Checkbox>",
      "switch": "<Switch isChecked={enabled} onChange={e => setEnabled(e.target.checked)} />",
      "textarea": "<Textarea placeholder=\"Service notes...\" rows={4} />",
      "tabs": "<Tabs><TabList><Tab>Overview</Tab></TabList></Tabs>",
      "dialog": "<Modal isOpen={isOpen} onClose={onClose}><ModalContent><ModalHeader>Delete?</ModalHeader></ModalContent></Modal>",
      "tooltip": "<Tooltip label=\"SOC2 Verified\"><Button>Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "ui-library",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "mantine",
    "name": "Mantine",
    "organization": "Mantine Team",
    "category": "modern-react",
    "categoryLabel": "Modern React",
    "docsUrl": "https://mantine.dev",
    "repoUrl": "https://github.com/mantinedev/mantine",
    "description": "A fully featured React components library with native dark mode support, light/filled/subtle variants, and rich hooks.",
    "aestheticNotes": "Mantine blue (#228be6), 8px border radius, 36px height, signature 'light' tinted background variant, and crisp input borders.",
    "tokens": {
      "primaryColor": "#228be6",
      "borderRadius": "8px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #228be6"
    },
    "variants": {
      "buttons": [
        "Filled",
        "Light",
        "Outline",
        "Subtle"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"filled\" color=\"blue\">Save changes</Button>",
      "input": "<TextInput label=\"Username\" placeholder=\"Your name\" />",
      "select": "<Select label=\"Framework\" data={['React', 'Vue']} />",
      "radio": "<Radio.Group value={val} label=\"Select role\" />",
      "checkbox": "<Checkbox checked={checked} onChange={e => setChecked(e.currentTarget.checked)} label=\"Consent\" />",
      "switch": "<Switch checked={checked} onChange={e => setChecked(e.currentTarget.checked)} label=\"Backups\" />",
      "textarea": "<Textarea label=\"Notes\" placeholder=\"Service notes...\" rows={4} />",
      "tabs": "<Tabs defaultValue=\"overview\"><Tabs.List><Tabs.Tab value=\"overview\">Overview</Tabs.Tab></Tabs.List></Tabs>",
      "dialog": "<Modal opened={opened} onClose={close} title=\"Delete Environment?\">...</Modal>",
      "tooltip": "<Tooltip label=\"SOC2 Verified\"><Button>Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "ui-library",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "radix",
    "name": "Radix Themes",
    "organization": "WorkOS / Radix",
    "category": "modern-react",
    "categoryLabel": "Modern React",
    "docsUrl": "https://www.radix-ui.com/themes",
    "repoUrl": "https://github.com/radix-ui/themes",
    "description": "An open-source component library optimized for fast development, easy maintenance, and accessible modern interfaces.",
    "aestheticNotes": "Indigo/violet (#3e63dd), 6px radius, soft translucent pastel surfaces, surface variant with subtle border, and refined spacing.",
    "tokens": {
      "primaryColor": "#3e63dd",
      "borderRadius": "6px",
      "controlHeight": "32px",
      "fontFamily": "system-ui, -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #3e63dd"
    },
    "variants": {
      "buttons": [
        "Solid",
        "Soft",
        "Surface",
        "Outline"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"solid\" color=\"indigo\">Invite member</Button>",
      "input": "<TextField.Root placeholder=\"Search members…\" />",
      "select": "<Select.Root defaultValue=\"apple\">{items}</Select.Root>",
      "radio": "<RadioGroup.Root defaultValue=\"1\" />",
      "checkbox": "<Checkbox.Root checked={checked} onCheckedChange={setChecked}><Checkbox.Indicator /></Checkbox.Root>",
      "switch": "<Switch.Root checked={enabled} onCheckedChange={setEnabled}><Switch.Thumb /></Switch.Root>",
      "textarea": "<TextArea size=\"2\" placeholder=\"Service notes...\" />",
      "tabs": "<Tabs.Root defaultValue=\"overview\"><Tabs.List><Tabs.Trigger value=\"overview\">Overview</Tabs.Trigger></Tabs.List></Tabs.Root>",
      "dialog": "<Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Content><Dialog.Title>Delete?</Dialog.Title></Dialog.Content></Dialog.Root>",
      "tooltip": "<Tooltip.Root><Tooltip.Trigger asChild><Button>Status</Button></Tooltip.Trigger><Tooltip.Content>SOC2 Verified</Tooltip.Content></Tooltip.Root>"
    },
    "status": "active",
    "type": "ui-library",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "shadcn",
    "name": "shadcn/ui",
    "organization": "shadcn",
    "category": "modern-react",
    "categoryLabel": "Modern React",
    "docsUrl": "https://ui.shadcn.com",
    "repoUrl": "https://github.com/shadcn-ui/ui",
    "description": "Beautifully designed components built with Radix UI and Tailwind CSS that you can copy and paste into your apps.",
    "aestheticNotes": "Zinc/slate monochrome palette, 8px radius (0.5rem), high-contrast black/white primary (#18181b), and double offset focus rings.",
    "tokens": {
      "primaryColor": "#18181b",
      "borderRadius": "8px",
      "controlHeight": "36px",
      "fontFamily": "system-ui, -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #ffffff, 0 0 0 4px #18181b"
    },
    "variants": {
      "buttons": [
        "Default",
        "Secondary",
        "Outline",
        "Destructive"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"default\">Deploy Project</Button>",
      "input": "<Input type=\"email\" placeholder=\"Email\" />",
      "select": "<Select><SelectTrigger>{val}</SelectTrigger></Select>",
      "radio": "<RadioGroup defaultValue=\"comfortable\">{items}</RadioGroup>",
      "checkbox": "<Checkbox id=\"terms\" checked={checked} onCheckedChange={setChecked} />",
      "switch": "<Switch id=\"airplane-mode\" checked={enabled} onCheckedChange={setEnabled} />",
      "textarea": "<Textarea placeholder=\"Type your message here.\" />",
      "tabs": "<Tabs defaultValue=\"account\"><TabsList><TabsTrigger value=\"account\">Account</TabsTrigger></TabsList></Tabs>",
      "dialog": "<Dialog open={open} onOpenChange={setOpen}><DialogContent><DialogHeader><DialogTitle>Delete?</DialogTitle></DialogHeader></DialogContent></Dialog>",
      "tooltip": "<TooltipProvider><Tooltip><TooltipTrigger asChild><Button>Status</Button></TooltipTrigger><TooltipContent><p>SOC2 Verified</p></TooltipContent></Tooltip></TooltipProvider>"
    },
    "status": "active",
    "type": "ui-library",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "eui",
    "name": "Elastic UI (EUI)",
    "organization": "Elastic",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://eui.elastic.co",
    "repoUrl": "https://github.com/elastic/eui",
    "description": "The design system framework behind Kibana and Elasticsearch, built for high-density telemetry, search, and observability.",
    "aestheticNotes": "Inter font, Elastic teal/blue (#006bb4), 4px radius, compact 32px height, and dense data-oriented filter controls.",
    "tokens": {
      "primaryColor": "#006bb4",
      "borderRadius": "4px",
      "controlHeight": "32px",
      "fontFamily": "Inter, -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #006bb4"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Warning",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<EuiButton fill color=\"primary\">Run query</EuiButton>",
      "input": "<EuiFieldText placeholder=\"KQL query...\" />",
      "select": "<EuiSelect options={options} />",
      "radio": "<EuiRadioGroup options={radios} idSelected={id} />",
      "checkbox": "<EuiCheckbox id=\"cb1\" label=\"Consent\" checked={checked} onChange={onChange} />",
      "switch": "<EuiSwitch label=\"Automated Backups\" checked={enabled} onChange={onChange} />",
      "textarea": "<EuiTextArea placeholder=\"Service notes...\" rows={4} />",
      "tabs": "<EuiTabs>{tabs.map(t => <EuiTab key={t.id}>{t.name}</EuiTab>)}</EuiTabs>",
      "dialog": "<EuiModal onClose={close}><EuiModalHeader><EuiModalHeaderTitle>Delete?</EuiModalHeaderTitle></EuiModalHeader></EuiModal>",
      "tooltip": "<EuiToolTip content=\"SOC2 Verified\"><EuiButton>Status</EuiButton></EuiToolTip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "fiori",
    "name": "SAP Fiori",
    "organization": "SAP",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://experience.sap.com/fiori-design-web",
    "repoUrl": "https://github.com/SAP/ui5-webcomponents",
    "description": "SAP's enterprise design system powering S/4HANA, enterprise ERP systems, supply chains, and business suites worldwide.",
    "aestheticNotes": "SAP 72 typography, Morning Horizon corporate blue (#0854a0), 4px radius, and cozy business data controls.",
    "tokens": {
      "primaryColor": "#0854a0",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "'72', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #0854a0"
    },
    "variants": {
      "buttons": [
        "Emphasized",
        "Standard",
        "Transparent",
        "Attention"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<ui5-button design=\"Emphasized\">Approve PO</ui5-button>",
      "input": "<ui5-input placeholder=\"Purchase order number\" />",
      "select": "<ui5-select>{items}</ui5-select>",
      "radio": "<ui5-radio-button text=\"Express Delivery\" />",
      "checkbox": "<CheckBox text=\"Consent\" checked={checked} onSelect={onSelect} />",
      "switch": "<Switch state={enabled} change={onChange} />",
      "textarea": "<TextArea rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<IconTabBar select={handleSelect}><IconTabFilter text=\"Overview\" /></IconTabBar>",
      "dialog": "<Dialog title=\"Delete Environment\" beginButton={<Button text=\"Delete\" />} />",
      "tooltip": "<Button text=\"Status\" tooltip=\"SOC2 Verified\" />"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "govuk",
    "name": "GOV.UK Design System",
    "organization": "UK Government GDS",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://design-system.service.gov.uk",
    "repoUrl": "https://github.com/alphagov/govuk-frontend",
    "description": "The benchmark government digital service design system trusted across hundreds of UK public sector services.",
    "aestheticNotes": "Zero border radius (sharp rectangular), heavy 2px black borders, Start Green button (#00703c) with bottom bevel, and iconic yellow focus highlight.",
    "tokens": {
      "primaryColor": "#00703c",
      "borderRadius": "0px",
      "controlHeight": "40px",
      "fontFamily": "'GDS Transport', Arial, sans-serif",
      "focusStyle": "0 0 0 3px #ffdd00, 0 0 0 6px #0b0c0c"
    },
    "variants": {
      "buttons": [
        "Start (Green)",
        "Secondary",
        "Warning"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button isStartButton>Start now</Button>",
      "input": "<Input id=\"nin\" label={{ text: 'National Insurance number' }} />",
      "select": "<Select id=\"sort\" items={items} />",
      "radio": "<Radios name=\"whereDoYouLive\" items={options} />",
      "checkbox": "<govuk-checkboxes name=\"consent\" items={items} />",
      "switch": "<govuk-radios inline name=\"backups\" items={yesNoItems} />",
      "textarea": "<govuk-textarea name=\"notes\" id=\"notes\" rows={4} label={{ text: \"Service notes\" }} />",
      "tabs": "<govuk-tabs items={tabItems} />",
      "dialog": "<govuk-modal-dialog title=\"Confirm Action\" />",
      "tooltip": "<span className=\"govuk-tooltip\" data-tooltip=\"SOC2 Verified\">Status</span>"
    },
    "status": "active",
    "type": "government-design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": false
    }
  },
  {
    "id": "uswds",
    "name": "U.S. Web Design System",
    "organization": "U.S. GSA",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://designsystem.digital.gov",
    "repoUrl": "https://github.com/uswds/uswds",
    "description": "Federal open-source design system supporting Section 508 accessibility compliance across federal agency websites.",
    "aestheticNotes": "Public Sans typography, Federal blue (#005ea2), 4px radius, 40px height, and clear accessible 4px focus rings.",
    "tokens": {
      "primaryColor": "#005ea2",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "'Public Sans', -apple-system, sans-serif",
      "focusStyle": "0 0 0 4px #2491ff"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Outline",
        "Accent-Cool"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button type=\"button\">Submit application</Button>",
      "input": "<TextInput id=\"ssn\" name=\"ssn\" type=\"text\" />",
      "select": "<Dropdown id=\"state\" name=\"state\" options={states} />",
      "radio": "<Radio id=\"historical\" name=\"presidential\" />",
      "checkbox": "<Checkbox id=\"terms\" name=\"terms\" label=\"I agree to terms\" />",
      "switch": "<Checkbox id=\"backups\" name=\"backups\" toggle label=\"Automated Backups\" />",
      "textarea": "<Textarea id=\"notes\" name=\"notes\" placeholder=\"Service notes...\" />",
      "tabs": "<Tabs items={tabList} />",
      "dialog": "<Modal id=\"delete-modal\" title=\"Delete Environment?\" />",
      "tooltip": "<Tooltip label=\"SOC2 Verified\"><Button>Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "government-design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "mozilla",
    "name": "Mozilla Protocol",
    "organization": "Mozilla",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://protocol.mozilla.org",
    "repoUrl": "https://github.com/mozilla/protocol",
    "description": "Mozilla's design system powering mozilla.org, Firefox product pages, and open web initiatives.",
    "aestheticNotes": "Metropolis typography, Firefox blue (#0060df), punchy 4px radius, and high-contrast web standards aesthetics.",
    "tokens": {
      "primaryColor": "#0060df",
      "borderRadius": "4px",
      "controlHeight": "38px",
      "fontFamily": "'Metropolis', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #0a84ff, 0 0 0 4px rgba(10,132,255,0.3)"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Ghost"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"primary\">Download Firefox</Button>",
      "input": "<Input placeholder=\"Enter your email\" />",
      "select": "<Select name=\"locale\" options={locales} />",
      "radio": "<RadioGroup name=\"frequency\" />",
      "checkbox": "<MozillaProtocolCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<MozillaProtocolSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<MozillaProtocolTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<MozillaProtocolTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<MozillaProtocolDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<MozillaProtocolTooltip content=\"SOC2 Verified\"><button>Status</button></MozillaProtocolTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "ubuntu",
    "name": "Ubuntu Vanilla Framework",
    "organization": "Canonical",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://vanillaframework.io",
    "repoUrl": "https://github.com/canonical/vanilla-framework",
    "description": "Canonical's extensible CSS framework powering Ubuntu Linux portal, Snapcraft, and MAAS datacenter consoles.",
    "aestheticNotes": "Ubuntu font, Canonical orange (#e95420), aubergine (#77216f), minimal 2px radius, and clean server-grade utility.",
    "tokens": {
      "primaryColor": "#e95420",
      "borderRadius": "2px",
      "controlHeight": "36px",
      "fontFamily": "'Ubuntu', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #e95420"
    },
    "variants": {
      "buttons": [
        "Positive",
        "Default",
        "Brand",
        "Negative"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<button class=\"p-button--positive\">Install package</button>",
      "input": "<input type=\"text\" class=\"p-form-validation__input\" />",
      "select": "<select class=\"p-form-validation__input\">{opts}</select>",
      "radio": "<input type=\"radio\" class=\"p-radio__input\" />",
      "checkbox": "<UbuntuVanillaFrameworkCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<UbuntuVanillaFrameworkSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<UbuntuVanillaFrameworkTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<UbuntuVanillaFrameworkTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<UbuntuVanillaFrameworkDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<UbuntuVanillaFrameworkTooltip content=\"SOC2 Verified\"><button>Status</button></UbuntuVanillaFrameworkTooltip>"
    },
    "status": "active",
    "type": "platform-guidelines",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "patternfly",
    "name": "Red Hat PatternFly",
    "organization": "Red Hat",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://www.patternfly.org",
    "repoUrl": "https://github.com/patternfly/patternfly-react",
    "description": "Red Hat's open source design system built for enterprise cloud consoles like OpenShift, Ansible, and Fedora.",
    "aestheticNotes": "Red Hat Text font, Red Hat blue (#06c), 3px radius, active bottom-border highlight on input focus, and technical clarity.",
    "tokens": {
      "primaryColor": "#0066cc",
      "borderRadius": "3px",
      "controlHeight": "36px",
      "fontFamily": "'Red Hat Text', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #0066cc"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"primary\">Deploy container</Button>",
      "input": "<TextInput value={value} type=\"text\" />",
      "select": "<FormSelect value={value}>{options}</FormSelect>",
      "radio": "<Radio label=\"Persistent Volume\" />",
      "checkbox": "<Checkbox label=\"Consent\" isChecked={checked} onChange={setChecked} id=\"cb\" />",
      "switch": "<Switch id=\"sw\" label=\"Automated Backups\" isChecked={enabled} onChange={setEnabled} />",
      "textarea": "<TextArea value={value} onChange={setValue} aria-label=\"notes\" />",
      "tabs": "<Tabs activeKey={tab} onSelect={onSelect}><Tab eventKey={0} title=\"Overview\" /></Tab>",
      "dialog": "<Modal variant=\"small\" title=\"Delete Environment?\" isOpen={open} onClose={close} />",
      "tooltip": "<Tooltip content=\"SOC2 Verified\"><Button>Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "base-web",
    "name": "Base Web",
    "organization": "Uber",
    "category": "tech-giant",
    "categoryLabel": "Tech Giants",
    "docsUrl": "https://baseweb.design",
    "repoUrl": "https://github.com/uber/baseweb",
    "description": "Uber's design system built for rider, driver, and enterprise logistics platforms across high-volume mobile and web apps.",
    "aestheticNotes": "Zero border radius (0px sharp geometric corners), stark monochrome black (#000000) and white, and high-impact minimalism.",
    "tokens": {
      "primaryColor": "#000000",
      "borderRadius": "0px",
      "controlHeight": "40px",
      "fontFamily": "'Uber Move Text', -apple-system, sans-serif",
      "focusStyle": "0 0 0 3px #000000"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button kind=\"primary\">Request ride</Button>",
      "input": "<Input placeholder=\"Enter pickup location\" />",
      "select": "<Select options={vehicles} />",
      "radio": "<RadioGroup name=\"payment\" />",
      "checkbox": "<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>Consent</Checkbox>",
      "switch": "<Checkbox checked={enabled} onChange={e => setEnabled(e.target.checked)} checkmarkType={STYLE_TYPE.toggle} />",
      "textarea": "<Textarea value={value} onChange={e => setValue(e.target.value)} placeholder=\"Service notes...\" />",
      "tabs": "<Tabs activeKey={activeKey} onChange={({ activeKey }) => setActiveKey(activeKey)}><Tab title=\"Overview\">...</Tab></Tabs>",
      "dialog": "<Modal onClose={close} isOpen={isOpen}><ModalHeader>Delete Environment?</ModalHeader></Modal>",
      "tooltip": "<StatefulTooltip content=\"SOC2 Verified\"><Button>Status</Button></StatefulTooltip>"
    },
    "status": "legacy",
    "type": "ui-library",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "blueprint",
    "name": "Blueprint",
    "organization": "Palantir",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://blueprintjs.com",
    "repoUrl": "https://github.com/palantir/blueprint",
    "description": "Palantir's React-based UI toolkit optimized for building complex, data-dense web interfaces for desktop applications.",
    "aestheticNotes": "Palantir cobalt blue (#106ba3), 3px radius, compact 30px height, subtle inset gradients, and rich desktop analytical ergonomics.",
    "tokens": {
      "primaryColor": "#106ba3",
      "borderRadius": "3px",
      "controlHeight": "30px",
      "fontFamily": "-apple-system, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #137cbd"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Default",
        "Minimal",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button intent=\"primary\" text=\"Execute analysis\" />",
      "input": "<InputGroup placeholder=\"Filter dataset...\" />",
      "select": "<HTMLSelect options={metrics} />",
      "radio": "<RadioGroup selectedValue={val}>{radios}</RadioGroup>",
      "checkbox": "<Checkbox checked={checked} onChange={handleChange} label=\"Consent\" />",
      "switch": "<Switch checked={enabled} onChange={handleChange} label=\"Automated Backups\" />",
      "textarea": "<TextArea fill={true} growVertically={true} placeholder=\"Service notes...\" />",
      "tabs": "<Tabs id=\"TabsExample\" selectedTabId={tab} onChange={setTab}><Tab id=\"ov\" title=\"Overview\" /></Tabs>",
      "dialog": "<Dialog isOpen={isOpen} onClose={close} title=\"Delete Environment?\">...</Dialog>",
      "tooltip": "<Tooltip content=\"SOC2 Verified\" position=\"top\"><Button text=\"Status\" /></Tooltip>"
    },
    "status": "active",
    "type": "ui-library",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "semantic",
    "name": "Semantic UI",
    "organization": "Semantic Community",
    "category": "modern-react",
    "categoryLabel": "Modern React",
    "docsUrl": "https://semantic-ui.com",
    "repoUrl": "https://github.com/Semantic-Org/Semantic-UI-React",
    "description": "Classic UI component framework using human-friendly HTML conventions, natural class naming, and expressive components.",
    "aestheticNotes": "Lato typography, iconic teal (#00b5ad) and royal blue (#2185d0), 4px radius, embossed buttons, and familiar web styling.",
    "tokens": {
      "primaryColor": "#2185d0",
      "borderRadius": "4px",
      "controlHeight": "38px",
      "fontFamily": "'Lato', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #85b7d9"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Teal",
        "Basic",
        "Negative"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button primary>Sign in</Button>",
      "input": "<Input placeholder=\"Search tags...\" />",
      "select": "<Dropdown selection options={friendOptions} />",
      "radio": "<Form.Radio label=\"Small\" value=\"sm\" />",
      "checkbox": "<SemanticUICheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<SemanticUISwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SemanticUITextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<SemanticUITabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SemanticUIDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<SemanticUITooltip content=\"SOC2 Verified\"><button>Status</button></SemanticUITooltip>"
    },
    "status": "legacy",
    "type": "ui-library",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "porsche",
    "name": "Porsche Design System",
    "organization": "Porsche",
    "category": "automotive",
    "categoryLabel": "Automotive & Luxury",
    "docsUrl": "https://designsystem.porsche.com",
    "repoUrl": "https://github.com/porsche-design-system/porsche-design-system",
    "description": "Porsche's official design system delivering premium luxury automotive digital experiences across web and in-car portals.",
    "aestheticNotes": "Porsche Next typography, pure black (#010205) with red accent (#d5001c), 0px sharp corners, and razor-clean German luxury precision.",
    "tokens": {
      "primaryColor": "#010205",
      "borderRadius": "0px",
      "controlHeight": "40px",
      "fontFamily": "'Porsche Next', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #010205"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Red Accent"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<p-button variant=\"primary\">Configure 911</p-button>",
      "input": "<p-text-field-wrapper label=\"VIN Number\"><input /></p-text-field-wrapper>",
      "select": "<p-select-wrapper label=\"Trim\"><select /></p-select-wrapper>",
      "radio": "<p-radio-button-wrapper label=\"Manual Transmission\" />",
      "checkbox": "<PorscheDesignSystemCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<PorscheDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<PorscheDesignSystemTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<PorscheDesignSystemTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<PorscheDesignSystemDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<PorscheDesignSystemTooltip content=\"SOC2 Verified\"><button>Status</button></PorscheDesignSystemTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "audi",
    "name": "Audi Design System",
    "organization": "Audi",
    "category": "automotive",
    "categoryLabel": "Automotive & Luxury",
    "docsUrl": "https://www.audi.com/ci/en/guides/user-interface/introduction.html",
    "repoUrl": "https://github.com/audi",
    "description": "Audi's progressive UI system emphasizing high-tech minimalism, monochrome clarity, and luxury mobility cockpit ergonomics.",
    "aestheticNotes": "Audi Type font, 0px border radius, monochrome black/white palette with Audi red (#ea0a8e) accents, and architectural minimalism.",
    "tokens": {
      "primaryColor": "#000000",
      "borderRadius": "0px",
      "controlHeight": "40px",
      "fontFamily": "'Audi Type', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #000000"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Ghost"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<button class=\"audi-btn-primary\">Schedule test drive</button>",
      "input": "<input class=\"audi-input\" placeholder=\"Postal code\" />",
      "select": "<select class=\"audi-select\">{models}</select>",
      "radio": "<input type=\"radio\" class=\"audi-radio\" />",
      "checkbox": "<AudiDesignSystemCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<AudiDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<AudiDesignSystemTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<AudiDesignSystemTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<AudiDesignSystemDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<AudiDesignSystemTooltip content=\"SOC2 Verified\"><button>Status</button></AudiDesignSystemTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "pajamas",
    "name": "GitLab Pajamas",
    "organization": "GitLab",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://design.gitlab.com",
    "repoUrl": "https://gitlab.com/gitlab-org/gitlab-ui",
    "description": "GitLab's open design system built for code review, CI/CD pipelines, security scanning, and DevOps collaboration.",
    "aestheticNotes": "GitLab indigo/blue (#1f75cb), 4px radius, 32px height, calm neutral borders (#dcdcde), and developer workspace utility.",
    "tokens": {
      "primaryColor": "#1f75cb",
      "borderRadius": "4px",
      "controlHeight": "32px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #1f75cb"
    },
    "variants": {
      "buttons": [
        "Confirm",
        "Default",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<GlButton variant=\"confirm\">Merge</GlButton>",
      "input": "<GlFormInput placeholder=\"Commit message\" />",
      "select": "<GlFormSelect options={runners} />",
      "radio": "<GlFormRadio name=\"pipeline-trigger\" />",
      "checkbox": "<GitLabPajamasCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<GitLabPajamasSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<GitLabPajamasTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<GitLabPajamasTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<GitLabPajamasDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<GitLabPajamasTooltip content=\"SOC2 Verified\"><button>Status</button></GitLabPajamasTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "wise",
    "name": "Wise Design System",
    "organization": "Wise",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://wise.design",
    "repoUrl": "https://github.com/transferwise/components",
    "description": "Wise's high-energy global financial design system powering frictionless multi-currency international transfers.",
    "aestheticNotes": "Wise Sans, signature Forest Green (#163300) paired with Neon Lime (#9fe870), 12px rounded pill corners, and high typography punch.",
    "tokens": {
      "primaryColor": "#163300",
      "borderRadius": "12px",
      "controlHeight": "44px",
      "fontFamily": "'Wise Sans', -apple-system, sans-serif",
      "focusStyle": "0 0 0 3px #163300"
    },
    "variants": {
      "buttons": [
        "Forest/Lime",
        "Neon Lime",
        "Subdued"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button size=\"md\">Send money</Button>",
      "input": "<Input label=\"Amount in GBP\" />",
      "select": "<Select label=\"Recipient currency\" />",
      "radio": "<RadioGroup name=\"fee-speed\" />",
      "checkbox": "<WiseDesignSystemCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<WiseDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<WiseDesignSystemTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<WiseDesignSystemTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<WiseDesignSystemDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<WiseDesignSystemTooltip content=\"SOC2 Verified\"><button>Status</button></WiseDesignSystemTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "mailchimp",
    "name": "Mailchimp Wink",
    "organization": "Mailchimp / Intuit",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://ux.mailchimp.com/patterns",
    "repoUrl": "https://github.com/mailchimp",
    "description": "Mailchimp's quirky, delightful design language featuring bold black borders, retro-modern typography, and Cavendish Yellow.",
    "aestheticNotes": "Means serif headers with crisp UI, Cavendish Yellow (#ffe01b), bold 2px black borders, and playful 2px offset drop shadows.",
    "tokens": {
      "primaryColor": "#ffe01b",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "'Means', Georgia, sans-serif",
      "focusStyle": "0 0 0 3px #007c89"
    },
    "variants": {
      "buttons": [
        "Primary Yellow",
        "Secondary White",
        "Destructive"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<button class=\"btn-primary\">Launch campaign</button>",
      "input": "<input class=\"mc-input\" placeholder=\"Campaign name\" />",
      "select": "<select class=\"mc-select\">{audiences}</select>",
      "radio": "<input type=\"radio\" class=\"mc-radio\" />",
      "checkbox": "<MailchimpWinkCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<MailchimpWinkSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<MailchimpWinkTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<MailchimpWinkTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<MailchimpWinkDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<MailchimpWinkTooltip content=\"SOC2 Verified\"><button>Status</button></MailchimpWinkTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "garden",
    "name": "Zendesk Garden",
    "organization": "Zendesk",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://garden.zendesk.com",
    "repoUrl": "https://github.com/zendeskgarden/react-components",
    "description": "Zendesk's customer service design system focused on calm, organic, approachable interfaces for high-volume support agents.",
    "aestheticNotes": "Zendesk Garden Kale green (#17494d), 4px radius, 36px height, and soothing calm neutral color harmony.",
    "tokens": {
      "primaryColor": "#17494d",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "system-ui, -apple-system, sans-serif",
      "focusStyle": "0 0 0 3px rgba(23, 73, 77, 0.35)"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Basic",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button isPrimary>Solve ticket</Button>",
      "input": "<Field><Label>Requester</Label><Input /></Field>",
      "select": "<Dropdown><Select>{status}</Select></Dropdown>",
      "radio": "<Field><Radio name=\"channel\" /></Field>",
      "checkbox": "<ZendeskGardenCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<ZendeskGardenSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<ZendeskGardenTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<ZendeskGardenTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<ZendeskGardenDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<ZendeskGardenTooltip content=\"SOC2 Verified\"><button>Status</button></ZendeskGardenTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "orbit",
    "name": "Orbit Design System",
    "organization": "Kiwi.com",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://orbit.kiwi",
    "repoUrl": "https://github.com/kiwicom/orbit",
    "description": "Kiwi.com's open-source design system crafted for fast, joyful, and accessible flight search and travel booking.",
    "aestheticNotes": "Circular Pro font, Kiwi cyan (#00a991), 6px radius, cheerful travel booking visual clarity, and soft 44px touch targets.",
    "tokens": {
      "primaryColor": "#00a991",
      "borderRadius": "6px",
      "controlHeight": "40px",
      "fontFamily": "'Circular Pro', -apple-system, sans-serif",
      "focusStyle": "0 0 0 3px rgba(0, 169, 145, 0.3)"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Critical"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button type=\"primary\">Search flights</Button>",
      "input": "<InputField label=\"Departure date\" />",
      "select": "<Select label=\"Cabin class\" options={classes} />",
      "radio": "<Radio label=\"Direct flights only\" />",
      "checkbox": "<OrbitDesignSystemCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<OrbitDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<OrbitDesignSystemTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<OrbitDesignSystemTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<OrbitDesignSystemDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<OrbitDesignSystemTooltip content=\"SOC2 Verified\"><button>Status</button></OrbitDesignSystemTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "workday",
    "name": "Workday Canvas",
    "organization": "Workday",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://canvas.workday.com",
    "repoUrl": "https://github.com/Workday/canvas-kit",
    "description": "Workday's accessible design system powering global enterprise HR, payroll, benefits, and financial management systems.",
    "aestheticNotes": "Workday Sans, Workday bright blue (#0875e1), 4px radius, 40px height, and clear accessible corporate typography.",
    "tokens": {
      "primaryColor": "#0875e1",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "'Workday Sans', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #0875e1"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<PrimaryButton>Submit time off</PrimaryButton>",
      "input": "<TextInput placeholder=\"Employee ID\" />",
      "select": "<Select options={departments} />",
      "radio": "<RadioGroup name=\"employment-type\" />",
      "checkbox": "<WorkdayCanvasCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<WorkdayCanvasSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<WorkdayCanvasTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<WorkdayCanvasTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<WorkdayCanvasDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<WorkdayCanvasTooltip content=\"SOC2 Verified\"><button>Status</button></WorkdayCanvasTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "leafygreen",
    "name": "MongoDB LeafyGreen",
    "organization": "MongoDB",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://www.mongodb.design",
    "repoUrl": "https://github.com/mongodb/leafygreen-ui",
    "description": "MongoDB's design system powering MongoDB Atlas cloud console, Compass database GUI, and developer telemetry.",
    "aestheticNotes": "Euclid Circular font, MongoDB spring green (#00ed64) with slate dark (#001e2b), 6px radius, and technical database clarity.",
    "tokens": {
      "primaryColor": "#00ed64",
      "borderRadius": "6px",
      "controlHeight": "36px",
      "fontFamily": "'Euclid Circular A', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #016bf8"
    },
    "variants": {
      "buttons": [
        "Primary Green",
        "Dark Slate",
        "Default Outline"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"primary\">Deploy cluster</Button>",
      "input": "<TextInput label=\"Connection string\" />",
      "select": "<Select label=\"Cluster tier\">{tiers}</Select>",
      "radio": "<RadioGroup name=\"provider\" />",
      "checkbox": "<MongoDBLeafyGreenCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<MongoDBLeafyGreenSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<MongoDBLeafyGreenTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<MongoDBLeafyGreenTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<MongoDBLeafyGreenDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<MongoDBLeafyGreenTooltip content=\"SOC2 Verified\"><button>Status</button></MongoDBLeafyGreenTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "cloudscape",
    "name": "AWS Cloudscape",
    "organization": "Amazon Web Services",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://cloudscape.design",
    "repoUrl": "https://github.com/cloudscape-design/components",
    "description": "AWS's official open-source design system built for the AWS Management Console, high-density DevOps tables, and cloud management.",
    "aestheticNotes": "Open Sans, AWS console blue (#0972d3), 4px radius, compact 32px height, double-ring focus, and high-density resource controls.",
    "tokens": {
      "primaryColor": "#0972d3",
      "borderRadius": "4px",
      "controlHeight": "32px",
      "fontFamily": "'Open Sans', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #ffffff, 0 0 0 4px #0972d3"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Normal",
        "Link"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"primary\">Launch instance</Button>",
      "input": "<Input value={value} placeholder=\"Search VPCs\" />",
      "select": "<Select selectedOption={selected} options={regions} />",
      "radio": "<RadioGroup items={instanceTypes} />",
      "checkbox": "<Checkbox checked={checked} onChange={({ detail }) => setChecked(detail.checked)}>Consent</Checkbox>",
      "switch": "<Toggle checked={enabled} onChange={({ detail }) => setEnabled(detail.checked)}>Automated Backups</Toggle>",
      "textarea": "<Textarea value={value} onChange={({ detail }) => setValue(detail.value)} placeholder=\"Service notes...\" />",
      "tabs": "<Tabs tabs={[{ label: 'Overview', id: 'overview' }]} activeTabId={activeTab} onChange={({ detail }) => setActiveTab(detail.activeTabId)} />",
      "dialog": "<Modal visible={visible} onDismiss={close} header=\"Delete Environment?\">...</Modal>",
      "tooltip": "<Popover content=\"SOC2 Verified\" triggerType=\"custom\"><Button>Status</Button></Popover>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "paste",
    "name": "Twilio Paste",
    "organization": "Twilio",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://paste.twilio.design",
    "repoUrl": "https://github.com/twilio-labs/paste",
    "description": "Twilio's accessible design system built for omnichannel customer engagement, telephony portals, and communications APIs.",
    "aestheticNotes": "Twilio Sans, Twilio brand blue (#0263e0), 4px radius, 36px height, and radical focus ring contrast for high trust.",
    "tokens": {
      "primaryColor": "#0263e0",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "'Twilio Sans', -apple-system, sans-serif",
      "focusStyle": "0 0 0 3px #0263e0"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Destructive"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button variant=\"primary\">Buy phone number</Button>",
      "input": "<Input id=\"webhook\" type=\"text\" />",
      "select": "<Select id=\"country\">{countries}</Select>",
      "radio": "<RadioGroup name=\"voice-method\" />",
      "checkbox": "<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>Consent</Checkbox>",
      "switch": "<Switch checked={enabled} onChange={e => setEnabled(e.target.checked)}>Backups</Switch>",
      "textarea": "<TextArea id=\"notes\" name=\"notes\" placeholder=\"Service notes...\" />",
      "tabs": "<Tabs selectedId={tab}><TabList aria-label=\"System details\"><Tab id=\"tab1\">Overview</Tab></TabList></Tabs>",
      "dialog": "<Modal ariaLabelledby=\"modal-header\" isOpen={isOpen} onDismiss={close}><ModalHeader>Delete?</ModalHeader></Modal>",
      "tooltip": "<Tooltip text=\"SOC2 Verified\"><Button variant=\"secondary\">Status</Button></Tooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "vitamin",
    "name": "Decathlon Vitamin",
    "organization": "Decathlon",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://vitamin.decathlon.design",
    "repoUrl": "https://github.com/Decathlon/vitamin-web",
    "description": "Decathlon's dynamic athletic design system powering sports retail across 60+ countries and thousands of retail stores.",
    "aestheticNotes": "Roboto font, Decathlon electric blue (#0082c3), 4px radius, energetic sports retail styling, and dynamic high visibility.",
    "tokens": {
      "primaryColor": "#0082c3",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "'Roboto', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #0082c3"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Ghost"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<VtmnButton variant=\"primary\">Add to cart</VtmnButton>",
      "input": "<VtmnTextInput placeholder=\"Shoe size\" />",
      "select": "<VtmnSelect options={sports} />",
      "radio": "<VtmnRadioButton name=\"pickup-method\" />",
      "checkbox": "<DecathlonVitaminCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<DecathlonVitaminSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<DecathlonVitaminTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<DecathlonVitaminTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<DecathlonVitaminDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<DecathlonVitaminTooltip content=\"SOC2 Verified\"><button>Status</button></DecathlonVitaminTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "backstage",
    "name": "Spotify Backstage",
    "organization": "Spotify",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://backstage.io",
    "repoUrl": "https://github.com/backstage/backstage",
    "description": "Spotify's open platform for building internal developer portals, microservice catalogs, and infrastructure orchestration.",
    "aestheticNotes": "Spotify green (#1db954) on dark slate (#121212) or clean light, 4px radius, 36px height, and clear developer tooling ergonomics.",
    "tokens": {
      "primaryColor": "#1db954",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "'Helvetica Neue', Helvetica, Arial, sans-serif",
      "focusStyle": "0 0 0 2px #1db954"
    },
    "variants": {
      "buttons": [
        "Primary Green",
        "Dark Secondary",
        "Text"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button color=\"primary\" variant=\"contained\">Register component</Button>",
      "input": "<TextField label=\"Repository URL\" />",
      "select": "<Select label=\"Owner team\">{teams}</Select>",
      "radio": "<RadioGroup name=\"lifecycle-stage\" />",
      "checkbox": "<SpotifyBackstageCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<SpotifyBackstageSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SpotifyBackstageTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<SpotifyBackstageTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SpotifyBackstageDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<SpotifyBackstageTooltip content=\"SOC2 Verified\"><button>Status</button></SpotifyBackstageTooltip>"
    },
    "status": "active",
    "type": "ui-library",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "cedar",
    "name": "REI Cedar",
    "organization": "REI Co-op",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://cedar.rei.com",
    "repoUrl": "https://github.com/rei/cedar",
    "description": "REI Co-op's outdoor recreation design system built with warm nature tones, accessible co-op values, and outdoor gear shopping.",
    "aestheticNotes": "Stuart serif paired with clean sans, Cedar evergreen (#2b6636), 4px radius, 40px height, and earthy organic warmth.",
    "tokens": {
      "primaryColor": "#2b6636",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "'Stuart', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #2b6636"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<CdrButton modifier=\"primary\">Find trailhead</CdrButton>",
      "input": "<CdrInput label=\"National park\" />",
      "select": "<CdrSelect label=\"Tent capacity\" />",
      "radio": "<CdrRadio name=\"membership-tier\" />",
      "checkbox": "<REICedarCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<REICedarSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<REICedarTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<REICedarTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<REICedarDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<REICedarTooltip content=\"SOC2 Verified\"><button>Status</button></REICedarTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "thumbprint",
    "name": "Thumbprint",
    "organization": "Thumbtack",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://thumbprint.design",
    "repoUrl": "https://github.com/thumbtack/thumbprint",
    "description": "Thumbtack's design system powering the local home services marketplace connecting millions of customers with pros.",
    "aestheticNotes": "Thumbtack blue (#009fd9), 4px radius, 40px height, approachable consumer styling, and friendly clear microcopy.",
    "tokens": {
      "primaryColor": "#009fd9",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, sans-serif",
      "focusStyle": "0 0 0 2px #009fd9"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<Button theme=\"primary\">Request quotes</Button>",
      "input": "<TextInput placeholder=\"ZIP code\" />",
      "select": "<Select options={categories} />",
      "radio": "<Radio name=\"project-urgency\" />",
      "checkbox": "<ThumbprintCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<ThumbprintSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<ThumbprintTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<ThumbprintTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<ThumbprintDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<ThumbprintTooltip content=\"SOC2 Verified\"><button>Status</button></ThumbprintTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "nord",
    "name": "Nord Health",
    "organization": "Nordhealth",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://nordhealth.design",
    "repoUrl": "https://github.com/nordhealth/nordcomponents",
    "description": "Nordhealth's design system engineered for clinical electronic health records (EHR), veterinary software, and medical safety.",
    "aestheticNotes": "Inter typography, clinical deep teal (#0e8a8a), 6px radius, 36px height, and quiet medical-grade clarity.",
    "tokens": {
      "primaryColor": "#0e8a8a",
      "borderRadius": "6px",
      "controlHeight": "36px",
      "fontFamily": "Inter, -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #0e8a8a"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Default",
        "Danger"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<nord-button variant=\"primary\">Save patient note</nord-button>",
      "input": "<nord-input label=\"Patient ID\" />",
      "select": "<nord-select label=\"Dosage form\">{options}</nord-select>",
      "radio": "<nord-radio label=\"Active Prescription\" />",
      "checkbox": "<NordHealthCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<NordHealthSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<NordHealthTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<NordHealthTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<NordHealthDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<NordHealthTooltip content=\"SOC2 Verified\"><button>Status</button></NordHealthTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "origami",
    "name": "FT Origami",
    "organization": "Financial Times",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://origami.ft.com",
    "repoUrl": "https://github.com/Financial-Times/origami",
    "description": "Financial Times' design system powering ft.com, market intelligence portals, and international financial journalism.",
    "aestheticNotes": "Financier Display serif headers, FT claret (#990f3d) on iconic FT paper pink (#fff1e5), 0px sharp rectangular corners, and broadsheet elegance.",
    "tokens": {
      "primaryColor": "#990f3d",
      "borderRadius": "0px",
      "controlHeight": "38px",
      "fontFamily": "'Financier Display', Georgia, serif",
      "focusStyle": "0 0 0 2px #990f3d"
    },
    "variants": {
      "buttons": [
        "Primary Claret",
        "Paper Pink Secondary",
        "Inverse"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<button class=\"o-buttons o-buttons--primary\">Read market report</button>",
      "input": "<input class=\"o-forms-input__text\" placeholder=\"Ticker or equity\" />",
      "select": "<select class=\"o-forms-input__select\">{markets}</select>",
      "radio": "<input type=\"radio\" class=\"o-forms-input__radio\" />",
      "checkbox": "<FTOrigamiCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<FTOrigamiSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<FTOrigamiTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<FTOrigamiTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<FTOrigamiDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<FTOrigamiTooltip content=\"SOC2 Verified\"><button>Status</button></FTOrigamiTooltip>"
    },
    "status": "legacy",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "backpack",
    "name": "Skyscanner Backpack",
    "organization": "Skyscanner",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://backpack.github.io",
    "repoUrl": "https://github.com/skyscanner/backpack",
    "description": "Skyscanner's travel design system powering flight, hotel, and car rental discovery for over 100 million monthly travelers.",
    "aestheticNotes": "Skyscanner sky blue (#0770e3), 8px border radius, 40px height, clean travel booking buttons, and crisp form validation.",
    "tokens": {
      "primaryColor": "#0770e3",
      "borderRadius": "8px",
      "controlHeight": "40px",
      "fontFamily": "'Skyscanner Relative', -apple-system, sans-serif",
      "focusStyle": "0 0 0 2px #0770e3"
    },
    "variants": {
      "buttons": [
        "Featured",
        "Secondary",
        "Destructive"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<BpkButton>Search cheap flights</BpkButton>",
      "input": "<BpkInput id=\"dest\" placeholder=\"Destination city\" />",
      "select": "<BpkSelect id=\"cabin\">{cabins}</BpkSelect>",
      "radio": "<BpkRadio name=\"trip-type\" label=\"Round trip\" />",
      "checkbox": "<SkyscannerBackpackCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<SkyscannerBackpackSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SkyscannerBackpackTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<SkyscannerBackpackTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SkyscannerBackpackDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<SkyscannerBackpackTooltip content=\"SOC2 Verified\"><button>Status</button></SkyscannerBackpackTooltip>"
    },
    "status": "active",
    "type": "design-system",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "photon",
    "name": "Firefox Photon",
    "organization": "Mozilla",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://design.firefox.com/photon",
    "repoUrl": "https://github.com/FirefoxUX/photon",
    "description": "The classic Firefox browser UI design system engineered for browser toolbars, tab chrome, and desktop customization.",
    "aestheticNotes": "Photon blue (#0060df), 2px radius, compact 32px height, and authentic browser chrome ergonomics.",
    "tokens": {
      "primaryColor": "#0060df",
      "borderRadius": "2px",
      "controlHeight": "32px",
      "fontFamily": "-apple-system, 'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 2px #0a84ff"
    },
    "variants": {
      "buttons": [
        "Primary",
        "Default",
        "Micro"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<button class=\"photon-btn-primary\">Customize toolbar</button>",
      "input": "<input class=\"photon-input\" placeholder=\"Search bookmarks\" />",
      "select": "<select class=\"photon-select\">{options}</select>",
      "radio": "<input type=\"radio\" class=\"photon-radio\" />",
      "checkbox": "<FirefoxPhotonCheckbox checked={checked} onChange={setChecked} label=\"Consent\" />",
      "switch": "<FirefoxPhotonSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<FirefoxPhotonTextarea rows={4} placeholder=\"Service notes...\" value={text} />",
      "tabs": "<FirefoxPhotonTabs activeTab={activeTab} onChange={setActiveTab} items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<FirefoxPhotonDialog open={isOpen} onClose={() => setIsOpen(false)} title=\"Delete Environment?\" />",
      "tooltip": "<FirefoxPhotonTooltip content=\"SOC2 Verified\"><button>Status</button></FirefoxPhotonTooltip>"
    },
    "status": "legacy",
    "type": "platform-guidelines",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "win98",
    "name": "98.css (Classic Retro)",
    "organization": "Retro Community",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://jdan.github.io/98.css",
    "repoUrl": "https://github.com/jdan/98.css",
    "description": "Authentic pixel-accurate implementation of Windows 95/98 desktop operating system controls and beveled UI dialogs.",
    "aestheticNotes": "MS Sans Serif font, battleship gray (#c0c0c0), 0px radius with 3D beveled borders (top-left white, bottom-right black), and 24px height.",
    "tokens": {
      "primaryColor": "#000080",
      "borderRadius": "0px",
      "controlHeight": "24px",
      "fontFamily": "'MS Sans Serif', Tahoma, sans-serif",
      "focusStyle": "1px dotted #000000"
    },
    "variants": {
      "buttons": [
        "Default 3D",
        "Pressed",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<button>OK</button>",
      "input": "<input type=\"text\" value=\"C:\\WINDOWS\\SYSTEM32\" />",
      "select": "<select><option>Floppy (A:)</option></select>",
      "radio": "<input type=\"radio\" id=\"radio1\" /><label for=\"radio1\">Enable dial-up</label>",
      "checkbox": "<input type=\"checkbox\" className=\"win98-checkbox\" checked={checked} />",
      "switch": "<input type=\"checkbox\" role=\"switch\" className=\"win98-toggle\" />",
      "textarea": "<textarea className=\"win98-textarea\" rows={4} />",
      "tabs": "<div className=\"win98-tabs\"><button className=\"tab active\">Overview</button></div>",
      "dialog": "<div className=\"window\"><div className=\"title-bar\"><span>Delete?</span></div></div>",
      "tooltip": "<div className=\"win98-tooltip\">SOC2 Verified</div>"
    },
    "status": "legacy",
    "type": "legacy-ui",
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    }
  },
  {
    "id": "acorn",
    "name": "Firefox Acorn",
    "organization": "Mozilla",
    "status": "active",
    "type": "platform-guidelines",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://acorn.firefox.com",
    "officialUrl": "https://acorn.firefox.com",
    "repoUrl": "https://github.com/mozilla/acorn",
    "description": "Mozilla's modern design system specifically for Firefox browser desktop UI and browser experiences.",
    "aestheticNotes": "Compact browser chrome density, Mozilla Blue accents (#0060df), 4px radii, and accessible high-contrast navigation tabs.",
    "tokens": {
      "primaryColor": "#0060df",
      "borderRadius": "4px",
      "controlHeight": "32px",
      "fontFamily": "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(0, 96, 223, 0.35)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<FirefoxAcornButton variant=\"primary\">Get Started</FirefoxAcornButton>",
      "input": "<FirefoxAcornInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<FirefoxAcornSelect label=\"Region\" options={regionOptions} />",
      "radio": "<FirefoxAcornRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<FirefoxAcornCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<FirefoxAcornSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<FirefoxAcornTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<FirefoxAcornTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<FirefoxAcornModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<FirefoxAcornTooltip content=\"SOC2 Verified\"><Button>Status</Button></FirefoxAcornTooltip>"
    }
  },
  {
    "id": "geist",
    "name": "Vercel Geist",
    "organization": "Vercel",
    "status": "active",
    "type": "ui-library",
    "category": "modern-react",
    "categoryLabel": "Modern React",
    "docsUrl": "https://geist-ui.dev",
    "officialUrl": "https://geist-ui.dev",
    "repoUrl": "https://github.com/geist-org/geist-ui",
    "description": "High-contrast monochromatic design language crafted by Vercel for modern Next.js cloud interfaces.",
    "aestheticNotes": "Pure black and stark white minimalism, crisp hairline borders (#eaeaea), 6px radii, and precision typographic hierarchy.",
    "tokens": {
      "primaryColor": "#000000",
      "borderRadius": "6px",
      "controlHeight": "40px",
      "fontFamily": "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #000000"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<VercelGeistButton variant=\"primary\">Get Started</VercelGeistButton>",
      "input": "<VercelGeistInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<VercelGeistSelect label=\"Region\" options={regionOptions} />",
      "radio": "<VercelGeistRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<VercelGeistCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<VercelGeistSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<VercelGeistTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<VercelGeistTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<VercelGeistModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<VercelGeistTooltip content=\"SOC2 Verified\"><Button>Status</Button></VercelGeistTooltip>"
    }
  },
  {
    "id": "helios",
    "name": "HashiCorp Helios",
    "organization": "HashiCorp",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://helios.hashicorp.design",
    "officialUrl": "https://helios.hashicorp.design",
    "repoUrl": "https://github.com/hashicorp/design-system",
    "description": "Cloud infrastructure design system unifying Terraform, Vault, and Consul interfaces with rich slate neutrals.",
    "aestheticNotes": "Engineering-grade technical density, HashiCorp Blue (#0068a5), dark slate surfaces (#15191e), and crisp 4px corners.",
    "tokens": {
      "primaryColor": "#0068a5",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(0, 104, 165, 0.3)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<HashiCorpHeliosButton variant=\"primary\">Get Started</HashiCorpHeliosButton>",
      "input": "<HashiCorpHeliosInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<HashiCorpHeliosSelect label=\"Region\" options={regionOptions} />",
      "radio": "<HashiCorpHeliosRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<HashiCorpHeliosCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<HashiCorpHeliosSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<HashiCorpHeliosTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<HashiCorpHeliosTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<HashiCorpHeliosModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<HashiCorpHeliosTooltip content=\"SOC2 Verified\"><Button>Status</Button></HashiCorpHeliosTooltip>"
    }
  },
  {
    "id": "codex",
    "name": "Wikimedia Codex",
    "organization": "Wikimedia Foundation",
    "status": "active",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://doc.wikimedia.org/codex/main/",
    "officialUrl": "https://doc.wikimedia.org/codex/main/",
    "repoUrl": "https://github.com/wikimedia/codex",
    "description": "Open-source design system powering Wikipedia and Wikimedia projects with encyclopedic clarity.",
    "aestheticNotes": "Wiki Blue (#3366cc), 2px slight radii, high-legibility serif/sans typography, and accessible internationalized forms.",
    "tokens": {
      "primaryColor": "#3366cc",
      "borderRadius": "2px",
      "controlHeight": "32px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, sans-serif",
      "focusStyle": "0 0 0 2px #3366cc"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<WikimediaCodexButton variant=\"primary\">Get Started</WikimediaCodexButton>",
      "input": "<WikimediaCodexInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<WikimediaCodexSelect label=\"Region\" options={regionOptions} />",
      "radio": "<WikimediaCodexRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<WikimediaCodexCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<WikimediaCodexTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<WikimediaCodexTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<WikimediaCodexModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<WikimediaCodexTooltip content=\"SOC2 Verified\"><Button>Status</Button></WikimediaCodexTooltip>"
    }
  },
  {
    "id": "calcite",
    "name": "Esri Calcite",
    "organization": "Esri",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://developers.arcgis.com/calcite-design-system/",
    "officialUrl": "https://developers.arcgis.com/calcite-design-system/",
    "repoUrl": "https://github.com/Esri/calcite-design-system",
    "description": "Geospatial mapping and GIS design system for ArcGIS applications and spatial data visualizations.",
    "aestheticNotes": "GIS map overlay compatibility, ArcGIS Blue (#007ac2), compact toolbar buttons, and floating map drawer dialogs.",
    "tokens": {
      "primaryColor": "#007ac2",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 2px #007ac2"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<EsriCalciteButton variant=\"primary\">Get Started</EsriCalciteButton>",
      "input": "<EsriCalciteInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<EsriCalciteSelect label=\"Region\" options={regionOptions} />",
      "radio": "<EsriCalciteRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<EsriCalciteCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<EsriCalciteSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<EsriCalciteTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<EsriCalciteTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<EsriCalciteModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<EsriCalciteTooltip content=\"SOC2 Verified\"><Button>Status</Button></EsriCalciteTooltip>"
    }
  },
  {
    "id": "clarity",
    "name": "VMware Clarity",
    "organization": "VMware / Broadcom",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://clarity.design",
    "officialUrl": "https://clarity.design",
    "repoUrl": "https://github.com/vmware-clarity/core",
    "description": "Enterprise virtualization and cloud infrastructure UX system with high-density data grids.",
    "aestheticNotes": "Virtual center console styling, Clarity Blue (#0072a3), 3px corner radii, and high-contrast data visualization indicators.",
    "tokens": {
      "primaryColor": "#0072a3",
      "borderRadius": "3px",
      "controlHeight": "36px",
      "fontFamily": "'Metropolis', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 2px #0072a3"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<VMwareClarityButton variant=\"primary\">Get Started</VMwareClarityButton>",
      "input": "<VMwareClarityInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<VMwareClaritySelect label=\"Region\" options={regionOptions} />",
      "radio": "<VMwareClarityRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<VMwareClarityCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<VMwareClaritySwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<VMwareClarityTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<VMwareClarityTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<VMwareClarityModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<VMwareClarityTooltip content=\"SOC2 Verified\"><Button>Status</Button></VMwareClarityTooltip>"
    }
  },
  {
    "id": "evergreen",
    "name": "Segment Evergreen",
    "organization": "Segment / Twilio",
    "status": "active",
    "type": "ui-library",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://evergreen.segment.com",
    "officialUrl": "https://evergreen.segment.com",
    "repoUrl": "https://github.com/segmentio/evergreen",
    "description": "Pragmatic UI framework for customer data platform dashboards, API ingestion, and analytics.",
    "aestheticNotes": "Subtle tinted elevation boxes, Segment Blue (#1070ca), soft 4px corners, and functional developer-first inputs.",
    "tokens": {
      "primaryColor": "#1070ca",
      "borderRadius": "4px",
      "controlHeight": "32px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px rgba(16, 112, 202, 0.4)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<SegmentEvergreenButton variant=\"primary\">Get Started</SegmentEvergreenButton>",
      "input": "<SegmentEvergreenInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<SegmentEvergreenSelect label=\"Region\" options={regionOptions} />",
      "radio": "<SegmentEvergreenRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<SegmentEvergreenCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<SegmentEvergreenSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SegmentEvergreenTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<SegmentEvergreenTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SegmentEvergreenModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<SegmentEvergreenTooltip content=\"SOC2 Verified\"><Button>Status</Button></SegmentEvergreenTooltip>"
    }
  },
  {
    "id": "grommet",
    "name": "HPE Grommet",
    "organization": "Hewlett Packard Enterprise",
    "status": "active",
    "type": "ui-library",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://v2.grommet.io",
    "officialUrl": "https://v2.grommet.io",
    "repoUrl": "https://github.com/grommet/grommet",
    "description": "Accessible, mobile-first React UI framework tailored for enterprise IT and hardware telemetries.",
    "aestheticNotes": "Distinctive HPE Purple (#7D4CDB), rounded 18px pill buttons, wide touch targets, and accessible spacing.",
    "tokens": {
      "primaryColor": "#7D4CDB",
      "borderRadius": "18px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #7D4CDB"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<HPEGrommetButton variant=\"primary\">Get Started</HPEGrommetButton>",
      "input": "<HPEGrommetInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<HPEGrommetSelect label=\"Region\" options={regionOptions} />",
      "radio": "<HPEGrommetRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<HPEGrommetCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<HPEGrommetSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<HPEGrommetTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<HPEGrommetTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<HPEGrommetModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<HPEGrommetTooltip content=\"SOC2 Verified\"><Button>Status</Button></HPEGrommetTooltip>"
    }
  },
  {
    "id": "redwood",
    "name": "Oracle Redwood",
    "organization": "Oracle",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://www.oracle.com/redwood",
    "officialUrl": "https://www.oracle.com/redwood",
    "description": "Oracle's next-generation design language with warm organic earth tones and rounded surfaces.",
    "aestheticNotes": "Warm coffee slate (#312d2a), terracotta red accents (#c74634), 6px radii, and modern card-based enterprise forms.",
    "tokens": {
      "primaryColor": "#312d2a",
      "borderRadius": "6px",
      "controlHeight": "40px",
      "fontFamily": "'Oracle Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 2px #c74634"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<OracleRedwoodButton variant=\"primary\">Get Started</OracleRedwoodButton>",
      "input": "<OracleRedwoodInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<OracleRedwoodSelect label=\"Region\" options={regionOptions} />",
      "radio": "<OracleRedwoodRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<OracleRedwoodCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<OracleRedwoodSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<OracleRedwoodTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<OracleRedwoodTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<OracleRedwoodModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<OracleRedwoodTooltip content=\"SOC2 Verified\"><Button>Status</Button></OracleRedwoodTooltip>"
    }
  },
  {
    "id": "momentum",
    "name": "Cisco Momentum UI",
    "organization": "Cisco",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://momentum.design",
    "officialUrl": "https://momentum.design",
    "repoUrl": "https://github.com/momentum-design/momentum-ui",
    "description": "Collaboration and networking design language created for Webex and enterprise telecoms.",
    "aestheticNotes": "Vibrant Cisco Cyan (#007aa3), 8px rounded controls, dark theme adaptability, and meeting room console styling.",
    "tokens": {
      "primaryColor": "#007aa3",
      "borderRadius": "8px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(0, 122, 163, 0.35)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<CiscoMomentumUIButton variant=\"primary\">Get Started</CiscoMomentumUIButton>",
      "input": "<CiscoMomentumUIInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<CiscoMomentumUISelect label=\"Region\" options={regionOptions} />",
      "radio": "<CiscoMomentumUIRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<CiscoMomentumUICheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<CiscoMomentumUISwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<CiscoMomentumUITextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<CiscoMomentumUITabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<CiscoMomentumUIModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<CiscoMomentumUITooltip content=\"SOC2 Verified\"><Button>Status</Button></CiscoMomentumUITooltip>"
    }
  },
  {
    "id": "rhds",
    "name": "Red Hat Design System",
    "organization": "Red Hat",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://ux.redhat.com",
    "officialUrl": "https://ux.redhat.com",
    "repoUrl": "https://github.com/redhat-ux/red-hat-design-system",
    "description": "Red Hat's unified brand and web design system featuring RedHatText and signature enterprise red.",
    "aestheticNotes": "Red Hat Red (#ee0000), 3px corner radius, geometric Red Hat typography, and open source enterprise branding.",
    "tokens": {
      "primaryColor": "#ee0000",
      "borderRadius": "3px",
      "controlHeight": "36px",
      "fontFamily": "'Red Hat Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 2px #0066cc"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<RedHatDesignSystemButton variant=\"primary\">Get Started</RedHatDesignSystemButton>",
      "input": "<RedHatDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<RedHatDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<RedHatDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<RedHatDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<RedHatDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<RedHatDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<RedHatDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<RedHatDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<RedHatDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></RedHatDesignSystemTooltip>"
    }
  },
  {
    "id": "quickbooks",
    "name": "Intuit Harmony / QuickBooks",
    "organization": "Intuit",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://designsystem.intuit.com",
    "officialUrl": "https://designsystem.intuit.com",
    "description": "Small business accounting and financial workflows design system used across QuickBooks and TurboTax.",
    "aestheticNotes": "Intuit QuickBooks Green (#2ca01c), approachable 4px rounded buttons, invoice table dense typography, and friendly financial guidance.",
    "tokens": {
      "primaryColor": "#2ca01c",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #2ca01c"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<IntuitHarmonyQuickBooksButton variant=\"primary\">Get Started</IntuitHarmonyQuickBooksButton>",
      "input": "<IntuitHarmonyQuickBooksInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<IntuitHarmonyQuickBooksSelect label=\"Region\" options={regionOptions} />",
      "radio": "<IntuitHarmonyQuickBooksRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<IntuitHarmonyQuickBooksCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<IntuitHarmonyQuickBooksSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<IntuitHarmonyQuickBooksTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<IntuitHarmonyQuickBooksTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<IntuitHarmonyQuickBooksModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<IntuitHarmonyQuickBooksTooltip content=\"SOC2 Verified\"><Button>Status</Button></IntuitHarmonyQuickBooksTooltip>"
    }
  },
  {
    "id": "servicenow",
    "name": "ServiceNow Design System",
    "organization": "ServiceNow",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://developer.servicenow.com",
    "officialUrl": "https://developer.servicenow.com",
    "description": "IT service management, workflow automation, and enterprise incident console design system.",
    "aestheticNotes": "Deep Navy (#032d42), Now Green accents (#293e40), 4px border radius, and high-productivity workflow forms.",
    "tokens": {
      "primaryColor": "#032d42",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #293e40"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<ServiceNowDesignSystemButton variant=\"primary\">Get Started</ServiceNowDesignSystemButton>",
      "input": "<ServiceNowDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<ServiceNowDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<ServiceNowDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<ServiceNowDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<ServiceNowDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<ServiceNowDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<ServiceNowDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<ServiceNowDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<ServiceNowDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></ServiceNowDesignSystemTooltip>"
    }
  },
  {
    "id": "hubspot",
    "name": "HubSpot Canvas",
    "organization": "HubSpot",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://canvas.hubspot.com",
    "officialUrl": "https://canvas.hubspot.com",
    "description": "Inbound marketing, CRM, and customer success management interface system with energetic orange accents.",
    "aestheticNotes": "HubSpot Coral Orange (#ff7a59), 3px corner radii, friendly rounded input focus highlights, and clear marketing sales stages.",
    "tokens": {
      "primaryColor": "#ff7a59",
      "borderRadius": "3px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(255, 122, 89, 0.3)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<HubSpotCanvasButton variant=\"primary\">Get Started</HubSpotCanvasButton>",
      "input": "<HubSpotCanvasInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<HubSpotCanvasSelect label=\"Region\" options={regionOptions} />",
      "radio": "<HubSpotCanvasRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<HubSpotCanvasCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<HubSpotCanvasSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<HubSpotCanvasTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<HubSpotCanvasTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<HubSpotCanvasModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<HubSpotCanvasTooltip content=\"SOC2 Verified\"><Button>Status</Button></HubSpotCanvasTooltip>"
    }
  },
  {
    "id": "infor",
    "name": "Infor Design System",
    "organization": "Infor",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://design.infor.com",
    "officialUrl": "https://design.infor.com",
    "repoUrl": "https://github.com/infor-design/enterprise",
    "description": "Heavy manufacturing, ERP, and supply chain enterprise interface system (SoHo XI).",
    "aestheticNotes": "Industrial enterprise density, Infor Blue (#1377c9), 2px crisp corners, and robust tabular form data inputs.",
    "tokens": {
      "primaryColor": "#1377c9",
      "borderRadius": "2px",
      "controlHeight": "34px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #1377c9"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<InforDesignSystemButton variant=\"primary\">Get Started</InforDesignSystemButton>",
      "input": "<InforDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<InforDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<InforDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<InforDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<InforDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<InforDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<InforDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<InforDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<InforDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></InforDesignSystemTooltip>"
    }
  },
  {
    "id": "instructure",
    "name": "Instructure UI",
    "organization": "Instructure",
    "status": "active",
    "type": "ui-library",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://instructure.github.io/instructure-ui/",
    "officialUrl": "https://instructure.github.io/instructure-ui/",
    "repoUrl": "https://github.com/instructure/instructure-ui",
    "description": "Higher education LMS and Canvas student learning portal design system.",
    "aestheticNotes": "Slate graphite (#2d3b45), Canvas Electric Blue (#008ee2), 4px border radius, and accessible academic readability.",
    "tokens": {
      "primaryColor": "#2d3b45",
      "borderRadius": "4px",
      "controlHeight": "38px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #008ee2"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<InstructureUIButton variant=\"primary\">Get Started</InstructureUIButton>",
      "input": "<InstructureUIInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<InstructureUISelect label=\"Region\" options={regionOptions} />",
      "radio": "<InstructureUIRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<InstructureUICheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<InstructureUISwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<InstructureUITextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<InstructureUITabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<InstructureUIModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<InstructureUITooltip content=\"SOC2 Verified\"><Button>Status</Button></InstructureUITooltip>"
    }
  },
  {
    "id": "lexicon",
    "name": "Liferay Lexicon (Clay)",
    "organization": "Liferay",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://clayui.com",
    "officialUrl": "https://clayui.com",
    "repoUrl": "https://github.com/liferay/clay",
    "description": "Enterprise digital experience platform (DXP) design system built on Bootstrap and Clay.",
    "aestheticNotes": "Liferay Electric Cobalt (#0b5fff), 4px rounded geometry, polished form field paddings, and extensible portal navigation.",
    "tokens": {
      "primaryColor": "#0b5fff",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(11, 95, 255, 0.25)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<LiferayLexiconClayButton variant=\"primary\">Get Started</LiferayLexiconClayButton>",
      "input": "<LiferayLexiconClayInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<LiferayLexiconClaySelect label=\"Region\" options={regionOptions} />",
      "radio": "<LiferayLexiconClayRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<LiferayLexiconClayCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<LiferayLexiconClaySwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<LiferayLexiconClayTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<LiferayLexiconClayTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<LiferayLexiconClayModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<LiferayLexiconClayTooltip content=\"SOC2 Verified\"><Button>Status</Button></LiferayLexiconClayTooltip>"
    }
  },
  {
    "id": "pega-cosmos",
    "name": "Pega Cosmos",
    "organization": "Pegasystems",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://design.pega.com",
    "officialUrl": "https://design.pega.com",
    "description": "High-volume case management and AI decisioning design system for banks and telecommunications.",
    "aestheticNotes": "Deep Pega Navy (#003764), 4px subtle rounded cards, dense tabular workflow inputs, and multi-channel case views.",
    "tokens": {
      "primaryColor": "#003764",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #0066cc"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<PegaCosmosButton variant=\"primary\">Get Started</PegaCosmosButton>",
      "input": "<PegaCosmosInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<PegaCosmosSelect label=\"Region\" options={regionOptions} />",
      "radio": "<PegaCosmosRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<PegaCosmosCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<PegaCosmosSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<PegaCosmosTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<PegaCosmosTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<PegaCosmosModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<PegaCosmosTooltip content=\"SOC2 Verified\"><Button>Status</Button></PegaCosmosTooltip>"
    }
  },
  {
    "id": "pega-bolt",
    "name": "Pega Bolt Design System",
    "organization": "Pegasystems",
    "status": "legacy",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://boltdesignsystem.com",
    "officialUrl": "https://boltdesignsystem.com",
    "repoUrl": "https://github.com/bolt-design-system/bolt",
    "description": "Bolt Design System developed for Pega marketing platforms with web component architecture.",
    "aestheticNotes": "High contrast dark slate (#20272c), 4px border radius, sharp typography, and content-centric presentation.",
    "tokens": {
      "primaryColor": "#20272c",
      "borderRadius": "4px",
      "controlHeight": "38px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #0066cc"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<PegaBoltDesignSystemButton variant=\"primary\">Get Started</PegaBoltDesignSystemButton>",
      "input": "<PegaBoltDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<PegaBoltDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<PegaBoltDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<PegaBoltDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<PegaBoltDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<PegaBoltDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<PegaBoltDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<PegaBoltDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></PegaBoltDesignSystemTooltip>"
    }
  },
  {
    "id": "pluralsight",
    "name": "Pluralsight Design System",
    "organization": "Pluralsight",
    "status": "active",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://design-system.pluralsight.com",
    "officialUrl": "https://design-system.pluralsight.com",
    "repoUrl": "https://github.com/pluralsight/pando",
    "description": "Technology skills and developer learning platform design language with high contrast neon pink gradients.",
    "aestheticNotes": "Pluralsight Neon Coral (#f15b2a), 4px border radii, tech-dark background compatibility, and high-visibility badges.",
    "tokens": {
      "primaryColor": "#f15b2a",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "'PS Commons', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 3px rgba(241, 91, 42, 0.3)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<PluralsightDesignSystemButton variant=\"primary\">Get Started</PluralsightDesignSystemButton>",
      "input": "<PluralsightDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<PluralsightDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<PluralsightDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<PluralsightDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<PluralsightDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<PluralsightDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<PluralsightDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<PluralsightDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<PluralsightDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></PluralsightDesignSystemTooltip>"
    }
  },
  {
    "id": "barista",
    "name": "Dynatrace Barista",
    "organization": "Dynatrace",
    "status": "active",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://barista.dynatrace.com",
    "officialUrl": "https://barista.dynatrace.com",
    "repoUrl": "https://github.com/dynatrace-oss/barista",
    "description": "Observability, APM, and cloud intelligence dashboard design system.",
    "aestheticNotes": "Monitoring console Blue (#1496ff), compact 32px height controls, 3px border radius, and telemetry metric data pills.",
    "tokens": {
      "primaryColor": "#1496ff",
      "borderRadius": "3px",
      "controlHeight": "32px",
      "fontFamily": "'BerninaSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 2px #1496ff"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<DynatraceBaristaButton variant=\"primary\">Get Started</DynatraceBaristaButton>",
      "input": "<DynatraceBaristaInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<DynatraceBaristaSelect label=\"Region\" options={regionOptions} />",
      "radio": "<DynatraceBaristaRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<DynatraceBaristaCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<DynatraceBaristaSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<DynatraceBaristaTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<DynatraceBaristaTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<DynatraceBaristaModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<DynatraceBaristaTooltip content=\"SOC2 Verified\"><Button>Status</Button></DynatraceBaristaTooltip>"
    }
  },
  {
    "id": "anvil",
    "name": "ServiceTitan Anvil",
    "organization": "ServiceTitan",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://anvil.servicetitan.com",
    "officialUrl": "https://anvil.servicetitan.com",
    "description": "Field service management, dispatch, and commercial trades ERP design system.",
    "aestheticNotes": "Titan Electric Blue (#0066f5), 6px balanced radii, clear contrast form labels, and dispatch calendar controls.",
    "tokens": {
      "primaryColor": "#0066f5",
      "borderRadius": "6px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #0066f5"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<ServiceTitanAnvilButton variant=\"primary\">Get Started</ServiceTitanAnvilButton>",
      "input": "<ServiceTitanAnvilInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<ServiceTitanAnvilSelect label=\"Region\" options={regionOptions} />",
      "radio": "<ServiceTitanAnvilRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<ServiceTitanAnvilCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<ServiceTitanAnvilSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<ServiceTitanAnvilTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<ServiceTitanAnvilTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<ServiceTitanAnvilModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<ServiceTitanAnvilTooltip content=\"SOC2 Verified\"><Button>Status</Button></ServiceTitanAnvilTooltip>"
    }
  },
  {
    "id": "wanda",
    "name": "Wonderflow Wanda",
    "organization": "Wonderflow",
    "status": "active",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://design.wonderflow.ai",
    "officialUrl": "https://design.wonderflow.ai",
    "repoUrl": "https://github.com/wonderflow-bv/wanda",
    "description": "Customer feedback analytics and AI consumer intelligence interface system.",
    "aestheticNotes": "AI platform precision, Electric Blue (#0f62fe), 4px border radius, and clean sentiment analysis data cards.",
    "tokens": {
      "primaryColor": "#0f62fe",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #0f62fe"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<WonderflowWandaButton variant=\"primary\">Get Started</WonderflowWandaButton>",
      "input": "<WonderflowWandaInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<WonderflowWandaSelect label=\"Region\" options={regionOptions} />",
      "radio": "<WonderflowWandaRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<WonderflowWandaCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<WonderflowWandaSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<WonderflowWandaTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<WonderflowWandaTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<WonderflowWandaModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<WonderflowWandaTooltip content=\"SOC2 Verified\"><Button>Status</Button></WonderflowWandaTooltip>"
    }
  },
  {
    "id": "circuit-ui",
    "name": "SumUp Circuit UI",
    "organization": "SumUp",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://circuit.sumup.com",
    "officialUrl": "https://circuit.sumup.com",
    "repoUrl": "https://github.com/sumup-oss/circuit-ui",
    "description": "Point of sale, micro-merchant payments, and card reader software design system.",
    "aestheticNotes": "SumUp bold black brand tone (#000000), 8px corner radii, prominent tap touch targets, and high merchant legibility.",
    "tokens": {
      "primaryColor": "#000000",
      "borderRadius": "8px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #1a1a1a"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<SumUpCircuitUIButton variant=\"primary\">Get Started</SumUpCircuitUIButton>",
      "input": "<SumUpCircuitUIInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<SumUpCircuitUISelect label=\"Region\" options={regionOptions} />",
      "radio": "<SumUpCircuitUIRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<SumUpCircuitUICheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<SumUpCircuitUISwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SumUpCircuitUITextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<SumUpCircuitUITabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SumUpCircuitUIModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<SumUpCircuitUITooltip content=\"SOC2 Verified\"><Button>Status</Button></SumUpCircuitUITooltip>"
    }
  },
  {
    "id": "line",
    "name": "LINE Design System",
    "organization": "LINE Corporation / LY Corporation",
    "status": "active",
    "type": "design-system",
    "category": "tech-giant",
    "categoryLabel": "Tech Giants",
    "docsUrl": "https://designsystem.line.me",
    "officialUrl": "https://designsystem.line.me",
    "description": "Pan-Asian social messaging and fintech super-app design language with vibrant green (#06c755).",
    "aestheticNotes": "Signature LINE Green (#06c755), friendly 6px radii, chat-bubble responsive inputs, and vibrant mobile-first UI.",
    "tokens": {
      "primaryColor": "#06c755",
      "borderRadius": "6px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #06c755"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<LINEDesignSystemButton variant=\"primary\">Get Started</LINEDesignSystemButton>",
      "input": "<LINEDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<LINEDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<LINEDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<LINEDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<LINEDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<LINEDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<LINEDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<LINEDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<LINEDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></LINEDesignSystemTooltip>"
    }
  },
  {
    "id": "one-ui",
    "name": "Samsung One UI",
    "organization": "Samsung Electronics",
    "status": "active",
    "type": "platform-guidelines",
    "category": "tech-giant",
    "categoryLabel": "Tech Giants",
    "docsUrl": "https://developer.samsung.com/one-ui",
    "officialUrl": "https://developer.samsung.com/one-ui",
    "description": "Galaxy smartphone and tablet design language prioritizing reachable lower-screen interaction zones.",
    "aestheticNotes": "Samsung Galaxy Blue (#0381fe), super-rounded 18px pill buttons and controls, thumb-friendly ergonomic spacing.",
    "tokens": {
      "primaryColor": "#0381fe",
      "borderRadius": "18px",
      "controlHeight": "40px",
      "fontFamily": "'Samsung One', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 3px rgba(3, 129, 254, 0.3)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<SamsungOneUIButton variant=\"primary\">Get Started</SamsungOneUIButton>",
      "input": "<SamsungOneUIInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<SamsungOneUISelect label=\"Region\" options={regionOptions} />",
      "radio": "<SamsungOneUIRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<SamsungOneUICheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<SamsungOneUISwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SamsungOneUITextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<SamsungOneUITabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SamsungOneUIModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<SamsungOneUITooltip content=\"SOC2 Verified\"><Button>Status</Button></SamsungOneUITooltip>"
    }
  },
  {
    "id": "morningstar",
    "name": "Morningstar Design System",
    "organization": "Morningstar",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://designsystem.morningstar.com",
    "officialUrl": "https://designsystem.morningstar.com",
    "description": "Financial investment research, market asset data, and portfolio analytics design system.",
    "aestheticNotes": "Institutional Navy (#003262), 2px slight radii, Wall Street financial density, and structured numeric tables.",
    "tokens": {
      "primaryColor": "#003262",
      "borderRadius": "2px",
      "controlHeight": "32px",
      "fontFamily": "'Morningstar', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 2px #003262"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<MorningstarDesignSystemButton variant=\"primary\">Get Started</MorningstarDesignSystemButton>",
      "input": "<MorningstarDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<MorningstarDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<MorningstarDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<MorningstarDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<MorningstarDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<MorningstarDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<MorningstarDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<MorningstarDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<MorningstarDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></MorningstarDesignSystemTooltip>"
    }
  },
  {
    "id": "mixpanel",
    "name": "Mixpanel Design System",
    "organization": "Mixpanel",
    "status": "active",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://mixpanel.com",
    "officialUrl": "https://mixpanel.com",
    "description": "Product analytics, user funnel metrics, and retention cohort visualization design system.",
    "aestheticNotes": "Mixpanel Violet (#7856ff), 6px rounded corners, query builder input aesthetics, and cohort breakdown cards.",
    "tokens": {
      "primaryColor": "#7856ff",
      "borderRadius": "6px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #7856ff"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<MixpanelDesignSystemButton variant=\"primary\">Get Started</MixpanelDesignSystemButton>",
      "input": "<MixpanelDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<MixpanelDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<MixpanelDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<MixpanelDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<MixpanelDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<MixpanelDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<MixpanelDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<MixpanelDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<MixpanelDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></MixpanelDesignSystemTooltip>"
    }
  },
  {
    "id": "nachos",
    "name": "Grubhub Nachos",
    "organization": "Grubhub",
    "status": "legacy",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://grubhub.github.io/nachos",
    "officialUrl": "https://grubhub.github.io/nachos",
    "repoUrl": "https://github.com/grubhub/nachos",
    "description": "Food delivery, consumer takeout menus, and merchant restaurant order management system.",
    "aestheticNotes": "Diner Red (#f63440), 4px border radius, appetizing card photography borders, and quick-add checkout buttons.",
    "tokens": {
      "primaryColor": "#f63440",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #f63440"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<GrubhubNachosButton variant=\"primary\">Get Started</GrubhubNachosButton>",
      "input": "<GrubhubNachosInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<GrubhubNachosSelect label=\"Region\" options={regionOptions} />",
      "radio": "<GrubhubNachosRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<GrubhubNachosCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<GrubhubNachosSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<GrubhubNachosTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<GrubhubNachosTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<GrubhubNachosModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<GrubhubNachosTooltip content=\"SOC2 Verified\"><Button>Status</Button></GrubhubNachosTooltip>"
    }
  },
  {
    "id": "liquid",
    "name": "LRN Liquid Design System",
    "organization": "LRN",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://liquid.lrn.com",
    "officialUrl": "https://liquid.lrn.com",
    "description": "Corporate ethics and compliance training portal design language.",
    "aestheticNotes": "Corporate Blue (#1b75bb), 4px radii, approachable corporate learning workflows, and quiz interaction elements.",
    "tokens": {
      "primaryColor": "#1b75bb",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #1b75bb"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<LRNLiquidDesignSystemButton variant=\"primary\">Get Started</LRNLiquidDesignSystemButton>",
      "input": "<LRNLiquidDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<LRNLiquidDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<LRNLiquidDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<LRNLiquidDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<LRNLiquidDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<LRNLiquidDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<LRNLiquidDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<LRNLiquidDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<LRNLiquidDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></LRNLiquidDesignSystemTooltip>"
    }
  },
  {
    "id": "feelix",
    "name": "MYOB Feelix",
    "organization": "MYOB",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://feelix.myob.com",
    "officialUrl": "https://feelix.myob.com",
    "repoUrl": "https://github.com/myob-technology/feelix",
    "description": "Australian and New Zealand accounting, tax, and small business payroll software system.",
    "aestheticNotes": "MYOB Royal Purple (#6100a5), 4px rounded buttons, invoice reconciliation inputs, and accounting tax tags.",
    "tokens": {
      "primaryColor": "#6100a5",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #6100a5"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<MYOBFeelixButton variant=\"primary\">Get Started</MYOBFeelixButton>",
      "input": "<MYOBFeelixInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<MYOBFeelixSelect label=\"Region\" options={regionOptions} />",
      "radio": "<MYOBFeelixRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<MYOBFeelixCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<MYOBFeelixSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<MYOBFeelixTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<MYOBFeelixTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<MYOBFeelixModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<MYOBFeelixTooltip content=\"SOC2 Verified\"><Button>Status</Button></MYOBFeelixTooltip>"
    }
  },
  {
    "id": "elementary",
    "name": "elementary OS HIG",
    "organization": "elementary LLC",
    "status": "active",
    "type": "platform-guidelines",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://docs.elementary.io/hig/",
    "officialUrl": "https://docs.elementary.io/hig/",
    "description": "Human interface guidelines for open-source Linux desktop operating system emphasizing typography and soft roundness.",
    "aestheticNotes": "Pantheon desktop Blue (#3689e6), 4px border radius, subtle GTK-style gradients, and centered app dialogs.",
    "tokens": {
      "primaryColor": "#3689e6",
      "borderRadius": "4px",
      "controlHeight": "34px",
      "fontFamily": "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      "focusStyle": "0 0 0 2px #3689e6"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<elementaryOSHIGButton variant=\"primary\">Get Started</elementaryOSHIGButton>",
      "input": "<elementaryOSHIGInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<elementaryOSHIGSelect label=\"Region\" options={regionOptions} />",
      "radio": "<elementaryOSHIGRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<elementaryOSHIGCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<elementaryOSHIGSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<elementaryOSHIGTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<elementaryOSHIGTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<elementaryOSHIGModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<elementaryOSHIGTooltip content=\"SOC2 Verified\"><Button>Status</Button></elementaryOSHIGTooltip>"
    }
  },
  {
    "id": "bbc-gel",
    "name": "BBC Global Experience Language",
    "organization": "BBC",
    "status": "active",
    "type": "design-system",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://www.bbc.co.uk/gel",
    "officialUrl": "https://www.bbc.co.uk/gel",
    "description": "Global public broadcaster design language powering BBC News, iPlayer, and BBC Sport digital services.",
    "aestheticNotes": "BBC Heritage Crimson (#bb1919), strictly 0px sharp rectangular corners, BBC Reith typography, and bold focus yellow (#ffdd00).",
    "tokens": {
      "primaryColor": "#bb1919",
      "borderRadius": "0px",
      "controlHeight": "40px",
      "fontFamily": "'BBC Reith Sans', -apple-system, BlinkMacSystemFont, Arial, sans-serif",
      "focusStyle": "0 0 0 3px #ffdd00"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<BBCGlobalExperienceLanguageButton variant=\"primary\">Get Started</BBCGlobalExperienceLanguageButton>",
      "input": "<BBCGlobalExperienceLanguageInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<BBCGlobalExperienceLanguageSelect label=\"Region\" options={regionOptions} />",
      "radio": "<BBCGlobalExperienceLanguageRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<BBCGlobalExperienceLanguageCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<BBCGlobalExperienceLanguageTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<BBCGlobalExperienceLanguageTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<BBCGlobalExperienceLanguageModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<BBCGlobalExperienceLanguageTooltip content=\"SOC2 Verified\"><Button>Status</Button></BBCGlobalExperienceLanguageTooltip>"
    }
  },
  {
    "id": "seeds",
    "name": "Sprout Social Seeds",
    "organization": "Sprout Social",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://seeds.sproutsocial.com",
    "officialUrl": "https://seeds.sproutsocial.com",
    "repoUrl": "https://github.com/sproutsocial/seeds",
    "description": "Social media publishing, customer care inbox, and engagement listening console system.",
    "aestheticNotes": "Sprout Spruce Blue (#2b6cb0), 4px radius, message compose textarea enhancements, and social feed metadata.",
    "tokens": {
      "primaryColor": "#2b6cb0",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #2b6cb0"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<SproutSocialSeedsButton variant=\"primary\">Get Started</SproutSocialSeedsButton>",
      "input": "<SproutSocialSeedsInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<SproutSocialSeedsSelect label=\"Region\" options={regionOptions} />",
      "radio": "<SproutSocialSeedsRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<SproutSocialSeedsCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<SproutSocialSeedsSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SproutSocialSeedsTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<SproutSocialSeedsTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SproutSocialSeedsModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<SproutSocialSeedsTooltip content=\"SOC2 Verified\"><Button>Status</Button></SproutSocialSeedsTooltip>"
    }
  },
  {
    "id": "stacks",
    "name": "Stack Overflow Stacks",
    "organization": "Stack Overflow",
    "status": "active",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://stackoverflow.design",
    "officialUrl": "https://stackoverflow.design",
    "repoUrl": "https://github.com/StackExchange/Stacks",
    "description": "The iconic developer Q&A community design system built with utility classes and orange accents.",
    "aestheticNotes": "Stack Overflow Orange (#f48024), 3px corner radii, code snippet integration, and community badge reputation styling.",
    "tokens": {
      "primaryColor": "#f48024",
      "borderRadius": "3px",
      "controlHeight": "34px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(244, 128, 36, 0.3)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<StackOverflowStacksButton variant=\"primary\">Get Started</StackOverflowStacksButton>",
      "input": "<StackOverflowStacksInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<StackOverflowStacksSelect label=\"Region\" options={regionOptions} />",
      "radio": "<StackOverflowStacksRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<StackOverflowStacksCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<StackOverflowStacksSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<StackOverflowStacksTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<StackOverflowStacksTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<StackOverflowStacksModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<StackOverflowStacksTooltip content=\"SOC2 Verified\"><Button>Status</Button></StackOverflowStacksTooltip>"
    }
  },
  {
    "id": "uniform",
    "name": "Hudl Uniform",
    "organization": "Hudl",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://uniform.hudl.com",
    "officialUrl": "https://uniform.hudl.com",
    "repoUrl": "https://github.com/hudl/uniform",
    "description": "Athletic video analysis, sports breakdowns, and team recruitment platform design system.",
    "aestheticNotes": "Hudl High-Performance Orange (#ff5100), 4px radius, high-contrast video overlay compatibility, and player stats cards.",
    "tokens": {
      "primaryColor": "#ff5100",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #ff5100"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<HudlUniformButton variant=\"primary\">Get Started</HudlUniformButton>",
      "input": "<HudlUniformInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<HudlUniformSelect label=\"Region\" options={regionOptions} />",
      "radio": "<HudlUniformRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<HudlUniformCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<HudlUniformSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<HudlUniformTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<HudlUniformTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<HudlUniformModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<HudlUniformTooltip content=\"SOC2 Verified\"><Button>Status</Button></HudlUniformTooltip>"
    }
  },
  {
    "id": "vtex",
    "name": "VTEX Styleguide",
    "organization": "VTEX",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://styleguide.vtex.com",
    "officialUrl": "https://styleguide.vtex.com",
    "repoUrl": "https://github.com/vtex/styleguide",
    "description": "Enterprise e-commerce platform powering commerce engines across Latin America and globally.",
    "aestheticNotes": "VTEX Hot Pink (#f71963), 4px rounded geometry, merchant catalog stock selectors, and checkout currency inputs.",
    "tokens": {
      "primaryColor": "#f71963",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #f71963"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<VTEXStyleguideButton variant=\"primary\">Get Started</VTEXStyleguideButton>",
      "input": "<VTEXStyleguideInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<VTEXStyleguideSelect label=\"Region\" options={regionOptions} />",
      "radio": "<VTEXStyleguideRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<VTEXStyleguideCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<VTEXStyleguideSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<VTEXStyleguideTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<VTEXStyleguideTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<VTEXStyleguideModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<VTEXStyleguideTooltip content=\"SOC2 Verified\"><Button>Status</Button></VTEXStyleguideTooltip>"
    }
  },
  {
    "id": "yoga",
    "name": "Wellhub Yoga",
    "organization": "Wellhub (Gympass)",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://gympass.github.io/yoga",
    "officialUrl": "https://gympass.github.io/yoga",
    "repoUrl": "https://github.com/gympass/yoga",
    "description": "Corporate wellness, gym access, and fitness app design system built with React Native and Web.",
    "aestheticNotes": "Energy Red (#e63946), rounded 8px card surfaces, workout metric badges, and active lifestyle typography.",
    "tokens": {
      "primaryColor": "#e63946",
      "borderRadius": "8px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #e63946"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<WellhubYogaButton variant=\"primary\">Get Started</WellhubYogaButton>",
      "input": "<WellhubYogaInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<WellhubYogaSelect label=\"Region\" options={regionOptions} />",
      "radio": "<WellhubYogaRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<WellhubYogaCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<WellhubYogaSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<WellhubYogaTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<WellhubYogaTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<WellhubYogaModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<WellhubYogaTooltip content=\"SOC2 Verified\"><Button>Status</Button></WellhubYogaTooltip>"
    }
  },
  {
    "id": "rivet",
    "name": "Indiana University Rivet",
    "organization": "Indiana University",
    "status": "active",
    "type": "design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://rivet.iu.edu",
    "officialUrl": "https://rivet.iu.edu",
    "repoUrl": "https://github.com/indiana-university/rivet-source",
    "description": "Public university web design system featuring crimson branding, accessible markup, and clear hierarchy.",
    "aestheticNotes": "Indiana Crimson (#990000), 4px border radius, academic institutional clarity, and accessible student portals.",
    "tokens": {
      "primaryColor": "#990000",
      "borderRadius": "4px",
      "controlHeight": "38px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #990000"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<IndianaUniversityRivetButton variant=\"primary\">Get Started</IndianaUniversityRivetButton>",
      "input": "<IndianaUniversityRivetInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<IndianaUniversityRivetSelect label=\"Region\" options={regionOptions} />",
      "radio": "<IndianaUniversityRivetRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<IndianaUniversityRivetCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<IndianaUniversityRivetSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<IndianaUniversityRivetTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<IndianaUniversityRivetTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<IndianaUniversityRivetModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<IndianaUniversityRivetTooltip content=\"SOC2 Verified\"><Button>Status</Button></IndianaUniversityRivetTooltip>"
    }
  },
  {
    "id": "priceline-one",
    "name": "Priceline One",
    "organization": "Priceline",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://priceline.github.io/design-system",
    "officialUrl": "https://priceline.github.io/design-system",
    "repoUrl": "https://github.com/priceline/design-system",
    "description": "Online travel booking, hotel reservations, and flight checkout design language.",
    "aestheticNotes": "Priceline Blue (#0068ef), 4px border radius, room rate deal tags, and travel itinerary selectors.",
    "tokens": {
      "primaryColor": "#0068ef",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #0068ef"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<PricelineOneButton variant=\"primary\">Get Started</PricelineOneButton>",
      "input": "<PricelineOneInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<PricelineOneSelect label=\"Region\" options={regionOptions} />",
      "radio": "<PricelineOneRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<PricelineOneCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<PricelineOneSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<PricelineOneTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<PricelineOneTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<PricelineOneModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<PricelineOneTooltip content=\"SOC2 Verified\"><Button>Status</Button></PricelineOneTooltip>"
    }
  },
  {
    "id": "seek",
    "name": "SEEK Style Guide (Braid)",
    "organization": "SEEK",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://seek-oss.github.io/braid-design-system",
    "officialUrl": "https://seek-oss.github.io/braid-design-system",
    "repoUrl": "https://github.com/seek-oss/braid-design-system",
    "description": "Australasia's leading job marketplace and employment portal design system.",
    "aestheticNotes": "SEEK Navy Blue (#0d3880), 4px border radius, salary range filters, and structured job candidate forms.",
    "tokens": {
      "primaryColor": "#0d3880",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #0d3880"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<SEEKStyleGuideBraidButton variant=\"primary\">Get Started</SEEKStyleGuideBraidButton>",
      "input": "<SEEKStyleGuideBraidInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<SEEKStyleGuideBraidSelect label=\"Region\" options={regionOptions} />",
      "radio": "<SEEKStyleGuideBraidRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<SEEKStyleGuideBraidCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<SEEKStyleGuideBraidSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SEEKStyleGuideBraidTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<SEEKStyleGuideBraidTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SEEKStyleGuideBraidModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<SEEKStyleGuideBraidTooltip content=\"SOC2 Verified\"><Button>Status</Button></SEEKStyleGuideBraidTooltip>"
    }
  },
  {
    "id": "nhs",
    "name": "NHS digital service manual",
    "organization": "UK National Health Service",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://service-manual.nhs.uk/design-system",
    "officialUrl": "https://service-manual.nhs.uk/design-system",
    "repoUrl": "https://github.com/nhsuk/nhsuk-frontend",
    "description": "UK public healthcare design system engineered for patient accessibility, high contrast, and low digital literacy.",
    "aestheticNotes": "NHS Blue (#005eb8), 4px border radius, large 44px touch targets, Frutiger/Arial typography, and yellow high-visibility focus (#ffeb3b).",
    "tokens": {
      "primaryColor": "#005eb8",
      "borderRadius": "4px",
      "controlHeight": "44px",
      "fontFamily": "'Frutiger', Arial, sans-serif",
      "focusStyle": "0 0 0 3px #ffeb3b"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": false
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Not Documented / Omitted in Official Spec"
      ]
    },
    "canonicalCode": {
      "button": "<NHSdigitalservicemanualButton variant=\"primary\">Get Started</NHSdigitalservicemanualButton>",
      "input": "<NHSdigitalservicemanualInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<NHSdigitalservicemanualSelect label=\"Region\" options={regionOptions} />",
      "radio": "<NHSdigitalservicemanualRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<NHSdigitalservicemanualCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<NHSdigitalservicemanualTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<NHSdigitalservicemanualTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<NHSdigitalservicemanualModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "/* Tooltip omitted in official design system: use visible helper text */"
    }
  },
  {
    "id": "singapore-gov",
    "name": "Singapore Design System",
    "organization": "GovTech Singapore",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://designsystem.tech.gov.sg",
    "officialUrl": "https://designsystem.tech.gov.sg",
    "repoUrl": "https://github.com/GovTechSG/design-system",
    "description": "Official digital design standard for all Singapore government digital services (Singpass, Citizen portals).",
    "aestheticNotes": "Singapore Purple (#5925dc), 6px rounded corners, official Singpass citizen authentication styling, and accessible multilingual text.",
    "tokens": {
      "primaryColor": "#5925dc",
      "borderRadius": "6px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(89, 37, 220, 0.3)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": false
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Not Documented / Omitted in Official Spec"
      ]
    },
    "canonicalCode": {
      "button": "<SingaporeDesignSystemButton variant=\"primary\">Get Started</SingaporeDesignSystemButton>",
      "input": "<SingaporeDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<SingaporeDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<SingaporeDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<SingaporeDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<SingaporeDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SingaporeDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<SingaporeDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SingaporeDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "/* Tooltip omitted in official design system: use visible helper text */"
    }
  },
  {
    "id": "ontario",
    "name": "Ontario Design System",
    "organization": "Government of Ontario",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://designsystem.ontario.ca",
    "officialUrl": "https://designsystem.ontario.ca",
    "repoUrl": "https://github.com/ongov/ontario-design-system",
    "description": "Civic design system for the Canadian province of Ontario, meeting AODA accessibility requirements.",
    "aestheticNotes": "Ontario Civic Blue (#006699), 4px border radius, 44px minimum touch targets, and high-visibility gold focus indicator (#ffbf47).",
    "tokens": {
      "primaryColor": "#006699",
      "borderRadius": "4px",
      "controlHeight": "44px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px #ffbf47"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<OntarioDesignSystemButton variant=\"primary\">Get Started</OntarioDesignSystemButton>",
      "input": "<OntarioDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<OntarioDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<OntarioDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<OntarioDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<OntarioDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<OntarioDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<OntarioDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<OntarioDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></OntarioDesignSystemTooltip>"
    }
  },
  {
    "id": "nys",
    "name": "New York State Design System",
    "organization": "New York State ITS",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://designsystem.ny.gov",
    "officialUrl": "https://designsystem.ny.gov",
    "description": "Official digital component framework for state government agencies across New York State.",
    "aestheticNotes": "Empire State Blue (#154973), 4px radii, Proxima Nova typography, and citizen benefit application forms.",
    "tokens": {
      "primaryColor": "#154973",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "'Proxima Nova', -apple-system, BlinkMacSystemFont, sans-serif",
      "focusStyle": "0 0 0 3px #ffcb05"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<NewYorkStateDesignSystemButton variant=\"primary\">Get Started</NewYorkStateDesignSystemButton>",
      "input": "<NewYorkStateDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<NewYorkStateDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<NewYorkStateDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<NewYorkStateDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<NewYorkStateDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<NewYorkStateDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<NewYorkStateDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<NewYorkStateDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></NewYorkStateDesignSystemTooltip>"
    }
  },
  {
    "id": "uae",
    "name": "UAE Design System",
    "organization": "United Arab Emirates Government",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://designsystem.gov.ae",
    "officialUrl": "https://designsystem.gov.ae",
    "description": "Unified federal digital design standard for UAE government online services and citizen portals.",
    "aestheticNotes": "National Falcon Green (#00732f), 6px border radius, bilingual Arabic/English responsive alignment, and modern civic cards.",
    "tokens": {
      "primaryColor": "#00732f",
      "borderRadius": "6px",
      "controlHeight": "42px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(0, 115, 47, 0.3)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<UAEDesignSystemButton variant=\"primary\">Get Started</UAEDesignSystemButton>",
      "input": "<UAEDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<UAEDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<UAEDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<UAEDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<UAEDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<UAEDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<UAEDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<UAEDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<UAEDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></UAEDesignSystemTooltip>"
    }
  },
  {
    "id": "helsinki",
    "name": "Helsinki Design System (HDS)",
    "organization": "City of Helsinki",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://hds.hel.fi",
    "officialUrl": "https://hds.hel.fi",
    "repoUrl": "https://github.com/City-of-Helsinki/helsinki-design-system",
    "description": "Award-winning open-source design system for Helsinki city municipal digital public services.",
    "aestheticNotes": "Nordic Ultramarine (#0000bf), 0px architectural sharp corners, Helsinki Grotesk typography, and robust accessible civic inputs.",
    "tokens": {
      "primaryColor": "#0000bf",
      "borderRadius": "0px",
      "controlHeight": "44px",
      "fontFamily": "'Helsinki Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
      "focusStyle": "0 0 0 3px #0000bf"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<HelsinkiDesignSystemHDSButton variant=\"primary\">Get Started</HelsinkiDesignSystemHDSButton>",
      "input": "<HelsinkiDesignSystemHDSInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<HelsinkiDesignSystemHDSSelect label=\"Region\" options={regionOptions} />",
      "radio": "<HelsinkiDesignSystemHDSRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<HelsinkiDesignSystemHDSCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<HelsinkiDesignSystemHDSSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<HelsinkiDesignSystemHDSTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<HelsinkiDesignSystemHDSTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<HelsinkiDesignSystemHDSModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<HelsinkiDesignSystemHDSTooltip content=\"SOC2 Verified\"><Button>Status</Button></HelsinkiDesignSystemHDSTooltip>"
    }
  },
  {
    "id": "nsw",
    "name": "NSW Design System",
    "organization": "NSW Government",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://digital.nsw.gov.au/design-system",
    "officialUrl": "https://digital.nsw.gov.au/design-system",
    "repoUrl": "https://github.com/digitalnsw/nsw-design-system",
    "description": "New South Wales state government digital design standard for Australian public services.",
    "aestheticNotes": "Waratah Deep Navy (#002664), 4px border radius, Public Sans typography, and accessible license and registration forms.",
    "tokens": {
      "primaryColor": "#002664",
      "borderRadius": "4px",
      "controlHeight": "42px",
      "fontFamily": "'Public Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      "focusStyle": "0 0 0 3px #ffbf47"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<NSWDesignSystemButton variant=\"primary\">Get Started</NSWDesignSystemButton>",
      "input": "<NSWDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<NSWDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<NSWDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<NSWDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<NSWDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<NSWDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<NSWDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<NSWDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<NSWDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></NSWDesignSystemTooltip>"
    }
  },
  {
    "id": "australian-gov",
    "name": "Australian Government Design System (GOLD)",
    "organization": "Commonwealth of Australia (DTA)",
    "status": "legacy",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://gold.designsystemau.org",
    "officialUrl": "https://gold.designsystemau.org",
    "repoUrl": "https://github.com/designsystemau/gold-design-system",
    "description": "Canonical Australian federal web component design system established by the Digital Transformation Agency.",
    "aestheticNotes": "Canberra Federal Charcoal (#313131), 4px border radius, high-legibility government guidelines, and Section 508 WCAG 2.1 AAA compliance.",
    "tokens": {
      "primaryColor": "#313131",
      "borderRadius": "4px",
      "controlHeight": "44px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px #0072b2"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": false
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Not Documented / Omitted in Official Spec"
      ]
    },
    "canonicalCode": {
      "button": "<AustralianGovernmentDesignSystemGOLDButton variant=\"primary\">Get Started</AustralianGovernmentDesignSystemGOLDButton>",
      "input": "<AustralianGovernmentDesignSystemGOLDInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<AustralianGovernmentDesignSystemGOLDSelect label=\"Region\" options={regionOptions} />",
      "radio": "<AustralianGovernmentDesignSystemGOLDRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<AustralianGovernmentDesignSystemGOLDCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<AustralianGovernmentDesignSystemGOLDTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<AustralianGovernmentDesignSystemGOLDTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<AustralianGovernmentDesignSystemGOLDModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "/* Tooltip omitted in official design system: use visible helper text */"
    }
  },
  {
    "id": "italia",
    "name": "Designers Italia",
    "organization": "Team per la Trasformazione Digitale (Italy)",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://designers.italia.it",
    "officialUrl": "https://designers.italia.it",
    "repoUrl": "https://github.com/italia/design-react-kit",
    "description": "Italian Republic digital public administration design system compliant with AgID guidelines.",
    "aestheticNotes": "Azzurro Italia (#0066cc), 4px border radius, Titillium Web typography, and SPID digital identity citizen form conventions.",
    "tokens": {
      "primaryColor": "#0066cc",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "'Titillium Web', -apple-system, BlinkMacSystemFont, sans-serif",
      "focusStyle": "0 0 0 3px #ff9900"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<DesignersItaliaButton variant=\"primary\">Get Started</DesignersItaliaButton>",
      "input": "<DesignersItaliaInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<DesignersItaliaSelect label=\"Region\" options={regionOptions} />",
      "radio": "<DesignersItaliaRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<DesignersItaliaCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<DesignersItaliaTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<DesignersItaliaTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<DesignersItaliaModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<DesignersItaliaTooltip content=\"SOC2 Verified\"><Button>Status</Button></DesignersItaliaTooltip>"
    }
  },
  {
    "id": "det-faelles",
    "name": "Det Fælles Designsystem",
    "organization": "Digitaliseringsstyrelsen (Denmark)",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://designsystem.dk",
    "officialUrl": "https://designsystem.dk",
    "repoUrl": "https://github.com/detfaellesdesignsystem/dkfds",
    "description": "Common Danish public sector design system for citizen self-service digital applications (Borger.dk).",
    "aestheticNotes": "Danish Teal (#005f73), 2px slight radii, MitID citizen authentication forms, and Danish accessibility standards.",
    "tokens": {
      "primaryColor": "#005f73",
      "borderRadius": "2px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px #ffb703"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<DetFllesDesignsystemButton variant=\"primary\">Get Started</DetFllesDesignsystemButton>",
      "input": "<DetFllesDesignsystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<DetFllesDesignsystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<DetFllesDesignsystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<DetFllesDesignsystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<DetFllesDesignsystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<DetFllesDesignsystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<DetFllesDesignsystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<DetFllesDesignsystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></DetFllesDesignsystemTooltip>"
    }
  },
  {
    "id": "dsfr",
    "name": "Système de Design de l'État (DSFR)",
    "organization": "République Française (DINUM)",
    "status": "active",
    "type": "government-design-system",
    "category": "government",
    "categoryLabel": "Government & Civic",
    "docsUrl": "https://www.systeme-de-design.gouv.fr",
    "officialUrl": "https://www.systeme-de-design.gouv.fr",
    "repoUrl": "https://github.com/GouvernementFR/dsfr",
    "description": "Official French national government design system powering Service-Public.fr and ministries.",
    "aestheticNotes": "Bleu France (#000091), strictly 0px crisp rectangular corners, Marianne typography, and RGAA French accessibility compliance.",
    "tokens": {
      "primaryColor": "#000091",
      "borderRadius": "0px",
      "controlHeight": "40px",
      "fontFamily": "'Marianne', -apple-system, BlinkMacSystemFont, Arial, sans-serif",
      "focusStyle": "0 0 0 3px #000091"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": false,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": false
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Not Documented / Omitted in Official Spec"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Not Documented / Omitted in Official Spec"
      ]
    },
    "canonicalCode": {
      "button": "<SystmedeDesigndeltatDSFRButton variant=\"primary\">Get Started</SystmedeDesigndeltatDSFRButton>",
      "input": "<SystmedeDesigndeltatDSFRInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<SystmedeDesigndeltatDSFRSelect label=\"Region\" options={regionOptions} />",
      "radio": "<SystmedeDesigndeltatDSFRRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<SystmedeDesigndeltatDSFRCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "/* Switch omitted in official design system: use Radio buttons */",
      "textarea": "<SystmedeDesigndeltatDSFRTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<SystmedeDesigndeltatDSFRTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SystmedeDesigndeltatDSFRModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "/* Tooltip omitted in official design system: use visible helper text */"
    }
  },
  {
    "id": "ahoy",
    "name": "trivago Ahoy",
    "organization": "trivago",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://trivago.github.io/ahoy",
    "officialUrl": "https://trivago.github.io/ahoy",
    "repoUrl": "https://github.com/trivago/ahoy",
    "description": "Hotel search and accommodation comparison design system with playful red, blue, and yellow elements.",
    "aestheticNotes": "trivago Marine Blue (#007fad), 4px border radius, hotel star rating indicators, and price comparison datepickers.",
    "tokens": {
      "primaryColor": "#007fad",
      "borderRadius": "4px",
      "controlHeight": "38px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #007fad"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<trivagoAhoyButton variant=\"primary\">Get Started</trivagoAhoyButton>",
      "input": "<trivagoAhoyInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<trivagoAhoySelect label=\"Region\" options={regionOptions} />",
      "radio": "<trivagoAhoyRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<trivagoAhoyCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<trivagoAhoySwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<trivagoAhoyTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<trivagoAhoyTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<trivagoAhoyModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<trivagoAhoyTooltip content=\"SOC2 Verified\"><Button>Status</Button></trivagoAhoyTooltip>"
    }
  },
  {
    "id": "tractie",
    "name": "Tractor Supply Tractie",
    "organization": "Tractor Supply Company",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://tractie.tractorsupply.com",
    "officialUrl": "https://tractie.tractorsupply.com",
    "description": "Rural lifestyle and agricultural retail e-commerce design system.",
    "aestheticNotes": "Tractor Barn Red (#cc0000), 4px border radius, rugged outdoor merchandise cards, and rural store pickup buttons.",
    "tokens": {
      "primaryColor": "#cc0000",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #cc0000"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<TractorSupplyTractieButton variant=\"primary\">Get Started</TractorSupplyTractieButton>",
      "input": "<TractorSupplyTractieInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<TractorSupplyTractieSelect label=\"Region\" options={regionOptions} />",
      "radio": "<TractorSupplyTractieRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<TractorSupplyTractieCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<TractorSupplyTractieSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<TractorSupplyTractieTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<TractorSupplyTractieTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<TractorSupplyTractieModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<TractorSupplyTractieTooltip content=\"SOC2 Verified\"><Button>Status</Button></TractorSupplyTractieTooltip>"
    }
  },
  {
    "id": "axa",
    "name": "AXA Design System",
    "organization": "AXA",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://axafr.github.io/design-system",
    "officialUrl": "https://axafr.github.io/design-system",
    "repoUrl": "https://github.com/AxaFrance/design-system",
    "description": "Global insurance and asset management design language built for financial clarity and trustworthiness.",
    "aestheticNotes": "AXA Blue (#00008f), 0px sharp rectangular corners, Source Sans Pro typography, and policy quote calculation cards.",
    "tokens": {
      "primaryColor": "#00008f",
      "borderRadius": "0px",
      "controlHeight": "42px",
      "fontFamily": "'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif",
      "focusStyle": "0 0 0 2px #00008f"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<AXADesignSystemButton variant=\"primary\">Get Started</AXADesignSystemButton>",
      "input": "<AXADesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<AXADesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<AXADesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<AXADesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<AXADesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<AXADesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<AXADesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<AXADesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<AXADesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></AXADesignSystemTooltip>"
    }
  },
  {
    "id": "arui-feather",
    "name": "Alfa Bank ARUI Feather",
    "organization": "Alfa Bank",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://alfa-laboratory.github.io/arui-feather",
    "officialUrl": "https://alfa-laboratory.github.io/arui-feather",
    "repoUrl": "https://github.com/alfa-laboratory/arui-feather",
    "description": "Commercial banking and retail fintech design library for high-speed online financial transactions.",
    "aestheticNotes": "Alfa Red (#ef3124), 4px border radius, financial wire transfer forms, and currency account selectors.",
    "tokens": {
      "primaryColor": "#ef3124",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #ef3124"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<AlfaBankARUIFeatherButton variant=\"primary\">Get Started</AlfaBankARUIFeatherButton>",
      "input": "<AlfaBankARUIFeatherInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<AlfaBankARUIFeatherSelect label=\"Region\" options={regionOptions} />",
      "radio": "<AlfaBankARUIFeatherRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<AlfaBankARUIFeatherCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<AlfaBankARUIFeatherSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<AlfaBankARUIFeatherTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<AlfaBankARUIFeatherTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<AlfaBankARUIFeatherModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<AlfaBankARUIFeatherTooltip content=\"SOC2 Verified\"><Button>Status</Button></AlfaBankARUIFeatherTooltip>"
    }
  },
  {
    "id": "beeline",
    "name": "Beeline Design System",
    "organization": "VEON / Beeline",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://beeline.design",
    "officialUrl": "https://beeline.design",
    "description": "Telecommunications operator design language featuring black and yellow identity and subscriber services.",
    "aestheticNotes": "Beeline Honey Yellow (#ffbe00) and Jet Black (#000000), 8px corner radii, telecom data quota meters, and balance refill buttons.",
    "tokens": {
      "primaryColor": "#ffbe00",
      "borderRadius": "8px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #000000"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<BeelineDesignSystemButton variant=\"primary\">Get Started</BeelineDesignSystemButton>",
      "input": "<BeelineDesignSystemInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<BeelineDesignSystemSelect label=\"Region\" options={regionOptions} />",
      "radio": "<BeelineDesignSystemRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<BeelineDesignSystemCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<BeelineDesignSystemSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<BeelineDesignSystemTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<BeelineDesignSystemTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<BeelineDesignSystemModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<BeelineDesignSystemTooltip content=\"SOC2 Verified\"><Button>Status</Button></BeelineDesignSystemTooltip>"
    }
  },
  {
    "id": "marvel",
    "name": "Marvel Styleguide",
    "organization": "Marvel App",
    "status": "legacy",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://marvelapp.com/styleguide",
    "officialUrl": "https://marvelapp.com/styleguide",
    "description": "Prototyping and design collaboration platform styleguide.",
    "aestheticNotes": "Marvel Cerulean Blue (#1070ca), 6px rounded cards, prototyping canvas inspectors, and team project sharing dialogs.",
    "tokens": {
      "primaryColor": "#1070ca",
      "borderRadius": "6px",
      "controlHeight": "38px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #1070ca"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<MarvelStyleguideButton variant=\"primary\">Get Started</MarvelStyleguideButton>",
      "input": "<MarvelStyleguideInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<MarvelStyleguideSelect label=\"Region\" options={regionOptions} />",
      "radio": "<MarvelStyleguideRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<MarvelStyleguideCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<MarvelStyleguideSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<MarvelStyleguideTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<MarvelStyleguideTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<MarvelStyleguideModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<MarvelStyleguideTooltip content=\"SOC2 Verified\"><Button>Status</Button></MarvelStyleguideTooltip>"
    }
  },
  {
    "id": "office-fabric",
    "name": "Microsoft Office UI Fabric",
    "organization": "Microsoft",
    "status": "legacy",
    "type": "design-system",
    "category": "tech-giant",
    "categoryLabel": "Tech Giants",
    "docsUrl": "https://developer.microsoft.com/fluentui",
    "officialUrl": "https://developer.microsoft.com/fluentui",
    "repoUrl": "https://github.com/microsoft/fluentui",
    "description": "The classic Office 365 design system that predated Fluent 2, defining SharePoint, Outlook Web, and Word Online.",
    "aestheticNotes": "Office 365 Blue (#0078d4), 2px crisp corners, Segoe UI typography, command bar buttons, and high-density ribbon styling.",
    "tokens": {
      "primaryColor": "#0078d4",
      "borderRadius": "2px",
      "controlHeight": "32px",
      "fontFamily": "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      "focusStyle": "0 0 0 2px #0078d4"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<MicrosoftOfficeUIFabricButton variant=\"primary\">Get Started</MicrosoftOfficeUIFabricButton>",
      "input": "<MicrosoftOfficeUIFabricInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<MicrosoftOfficeUIFabricSelect label=\"Region\" options={regionOptions} />",
      "radio": "<MicrosoftOfficeUIFabricRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<MicrosoftOfficeUIFabricCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<MicrosoftOfficeUIFabricSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<MicrosoftOfficeUIFabricTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<MicrosoftOfficeUIFabricTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<MicrosoftOfficeUIFabricModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<MicrosoftOfficeUIFabricTooltip content=\"SOC2 Verified\"><Button>Status</Button></MicrosoftOfficeUIFabricTooltip>"
    }
  },
  {
    "id": "gestalt",
    "name": "Pinterest Gestalt",
    "organization": "Pinterest",
    "status": "active",
    "type": "design-system",
    "category": "tech-giant",
    "categoryLabel": "Tech Giants",
    "docsUrl": "https://gestalt.pinterest.systems",
    "officialUrl": "https://gestalt.pinterest.systems",
    "repoUrl": "https://github.com/pinterest/gestalt",
    "description": "Visual discovery engine design system engineered for accessibility, high-contrast imagery, and pins.",
    "aestheticNotes": "Pinterest Crimson (#e60023), 9999px full-pill action buttons, high-legibility bold titles, and image pin save interactions.",
    "tokens": {
      "primaryColor": "#e60023",
      "borderRadius": "9999px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(230, 0, 35, 0.3)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<PinterestGestaltButton variant=\"primary\">Get Started</PinterestGestaltButton>",
      "input": "<PinterestGestaltInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<PinterestGestaltSelect label=\"Region\" options={regionOptions} />",
      "radio": "<PinterestGestaltRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<PinterestGestaltCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<PinterestGestaltSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<PinterestGestaltTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<PinterestGestaltTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<PinterestGestaltModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<PinterestGestaltTooltip content=\"SOC2 Verified\"><Button>Status</Button></PinterestGestaltTooltip>"
    }
  },
  {
    "id": "forma-36",
    "name": "Contentful Forma 36",
    "organization": "Contentful",
    "status": "active",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://f36.contentful.com",
    "officialUrl": "https://f36.contentful.com",
    "repoUrl": "https://github.com/contentful/forma-36",
    "description": "Headless CMS and composable content platform UI system for content editors and developers.",
    "aestheticNotes": "Contentful Electric Blue (#0059c8), 6px radii, field editor form density, and publish state status badges.",
    "tokens": {
      "primaryColor": "#0059c8",
      "borderRadius": "6px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #0059c8"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<ContentfulForma36Button variant=\"primary\">Get Started</ContentfulForma36Button>",
      "input": "<ContentfulForma36Input label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<ContentfulForma36Select label=\"Region\" options={regionOptions} />",
      "radio": "<ContentfulForma36RadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<ContentfulForma36Checkbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<ContentfulForma36Switch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<ContentfulForma36Textarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<ContentfulForma36Tabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<ContentfulForma36Modal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<ContentfulForma36Tooltip content=\"SOC2 Verified\"><Button>Status</Button></ContentfulForma36Tooltip>"
    }
  },
  {
    "id": "kaizen",
    "name": "Culture Amp Kaizen",
    "organization": "Culture Amp",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://cultureamp.design",
    "officialUrl": "https://cultureamp.design",
    "repoUrl": "https://github.com/cultureamp/kaizen-design-system",
    "description": "Employee engagement, performance review, and workplace analytics design system.",
    "aestheticNotes": "Culture Amp Indigo (#2b3990), 6px rounded corners, employee survey likert scales, and inclusive performance review cards.",
    "tokens": {
      "primaryColor": "#2b3990",
      "borderRadius": "6px",
      "controlHeight": "38px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #2b3990"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<CultureAmpKaizenButton variant=\"primary\">Get Started</CultureAmpKaizenButton>",
      "input": "<CultureAmpKaizenInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<CultureAmpKaizenSelect label=\"Region\" options={regionOptions} />",
      "radio": "<CultureAmpKaizenRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<CultureAmpKaizenCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<CultureAmpKaizenSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<CultureAmpKaizenTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<CultureAmpKaizenTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<CultureAmpKaizenModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<CultureAmpKaizenTooltip content=\"SOC2 Verified\"><Button>Status</Button></CultureAmpKaizenTooltip>"
    }
  },
  {
    "id": "vibe",
    "name": "Monday.com Vibe",
    "organization": "monday.com",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://style.monday.com",
    "officialUrl": "https://style.monday.com",
    "repoUrl": "https://github.com/mondaycom/vibe",
    "description": "Work management OS and project collaboration UI system with playful multi-color tags and status pills.",
    "aestheticNotes": "monday.com Electric Blue (#0073ea), 4px border radius, Poppins typography, multi-color task column tags, and board cells.",
    "tokens": {
      "primaryColor": "#0073ea",
      "borderRadius": "4px",
      "controlHeight": "34px",
      "fontFamily": "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
      "focusStyle": "0 0 0 2px #0073ea"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<MondaycomVibeButton variant=\"primary\">Get Started</MondaycomVibeButton>",
      "input": "<MondaycomVibeInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<MondaycomVibeSelect label=\"Region\" options={regionOptions} />",
      "radio": "<MondaycomVibeRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<MondaycomVibeCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<MondaycomVibeSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<MondaycomVibeTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<MondaycomVibeTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<MondaycomVibeModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<MondaycomVibeTooltip content=\"SOC2 Verified\"><Button>Status</Button></MondaycomVibeTooltip>"
    }
  },
  {
    "id": "intergalactic",
    "name": "Semrush Intergalactic",
    "organization": "Semrush",
    "status": "active",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://developer.semrush.com/intergalactic",
    "officialUrl": "https://developer.semrush.com/intergalactic",
    "repoUrl": "https://github.com/semrush/intergalactic",
    "description": "Search engine optimization, competitive intelligence, and digital marketing data console system.",
    "aestheticNotes": "Semrush Orange (#ff642d), 6px border radii, high-density SEO ranking keyword tables, and traffic metric cards.",
    "tokens": {
      "primaryColor": "#ff642d",
      "borderRadius": "6px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #ff642d"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<SemrushIntergalacticButton variant=\"primary\">Get Started</SemrushIntergalacticButton>",
      "input": "<SemrushIntergalacticInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<SemrushIntergalacticSelect label=\"Region\" options={regionOptions} />",
      "radio": "<SemrushIntergalacticRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<SemrushIntergalacticCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<SemrushIntergalacticSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SemrushIntergalacticTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<SemrushIntergalacticTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SemrushIntergalacticModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<SemrushIntergalacticTooltip content=\"SOC2 Verified\"><Button>Status</Button></SemrushIntergalacticTooltip>"
    }
  },
  {
    "id": "crayons",
    "name": "Freshworks Crayons",
    "organization": "Freshworks",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://crayons.freshworks.com",
    "officialUrl": "https://crayons.freshworks.com",
    "repoUrl": "https://github.com/freshworks/crayons",
    "description": "Customer support desk, CRM, and omnichannel messaging application web component system.",
    "aestheticNotes": "Freshworks Midnight Slate (#12344d), 4px border radius, customer support ticket priority pills, and response draft inputs.",
    "tokens": {
      "primaryColor": "#12344d",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #12344d"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<FreshworksCrayonsButton variant=\"primary\">Get Started</FreshworksCrayonsButton>",
      "input": "<FreshworksCrayonsInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<FreshworksCrayonsSelect label=\"Region\" options={regionOptions} />",
      "radio": "<FreshworksCrayonsRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<FreshworksCrayonsCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<FreshworksCrayonsSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<FreshworksCrayonsTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<FreshworksCrayonsTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<FreshworksCrayonsModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<FreshworksCrayonsTooltip content=\"SOC2 Verified\"><Button>Status</Button></FreshworksCrayonsTooltip>"
    }
  },
  {
    "id": "auro",
    "name": "Alaska Airlines Auro",
    "organization": "Alaska Airlines",
    "status": "active",
    "type": "design-system",
    "category": "e-commerce",
    "categoryLabel": "E-Commerce",
    "docsUrl": "https://auro.alaskaair.com",
    "officialUrl": "https://auro.alaskaair.com",
    "repoUrl": "https://github.com/alaskaairlines/auro-components",
    "description": "Commercial airline digital passenger booking and boarding pass design system.",
    "aestheticNotes": "Alaska Deep Navy (#01426a), 4px radii, flight seat map selectors, boarding pass barcode cards, and airport gate pills.",
    "tokens": {
      "primaryColor": "#01426a",
      "borderRadius": "4px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #01426a"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<AlaskaAirlinesAuroButton variant=\"primary\">Get Started</AlaskaAirlinesAuroButton>",
      "input": "<AlaskaAirlinesAuroInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<AlaskaAirlinesAuroSelect label=\"Region\" options={regionOptions} />",
      "radio": "<AlaskaAirlinesAuroRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<AlaskaAirlinesAuroCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<AlaskaAirlinesAuroSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<AlaskaAirlinesAuroTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<AlaskaAirlinesAuroTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<AlaskaAirlinesAuroModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<AlaskaAirlinesAuroTooltip content=\"SOC2 Verified\"><Button>Status</Button></AlaskaAirlinesAuroTooltip>"
    }
  },
  {
    "id": "siemens-ix",
    "name": "Siemens Industrial Experience (IX)",
    "organization": "Siemens",
    "status": "active",
    "type": "design-system",
    "category": "enterprise",
    "categoryLabel": "Enterprise & Cloud",
    "docsUrl": "https://ix.siemens.io",
    "officialUrl": "https://ix.siemens.io",
    "repoUrl": "https://github.com/siemens/ix",
    "description": "Industrial automation, factory IoT, and energy management digital human-machine interface system.",
    "aestheticNotes": "Siemens Petroleum Teal (#00646e), 4px corner radius, SCADA factory sensor indicators, and industrial telemetry panels.",
    "tokens": {
      "primaryColor": "#00646e",
      "borderRadius": "4px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #00646e"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<SiemensIndustrialExperienceIXButton variant=\"primary\">Get Started</SiemensIndustrialExperienceIXButton>",
      "input": "<SiemensIndustrialExperienceIXInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<SiemensIndustrialExperienceIXSelect label=\"Region\" options={regionOptions} />",
      "radio": "<SiemensIndustrialExperienceIXRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<SiemensIndustrialExperienceIXCheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<SiemensIndustrialExperienceIXSwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<SiemensIndustrialExperienceIXTextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<SiemensIndustrialExperienceIXTabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<SiemensIndustrialExperienceIXModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<SiemensIndustrialExperienceIXTooltip content=\"SOC2 Verified\"><Button>Status</Button></SiemensIndustrialExperienceIXTooltip>"
    }
  },
  {
    "id": "nasa-jpl",
    "name": "NASA JPL Explorer 1",
    "organization": "NASA Jet Propulsion Laboratory",
    "status": "active",
    "type": "design-system",
    "category": "developer-tools",
    "categoryLabel": "Developer Tools",
    "docsUrl": "https://github.com/nasa-jpl/explorer-1",
    "officialUrl": "https://github.com/nasa-jpl/explorer-1",
    "repoUrl": "https://github.com/nasa-jpl/explorer-1",
    "description": "Deep space exploration, interplanetary robotics missions, and science public outreach design system.",
    "aestheticNotes": "NASA JPL Rocket Red (#fc3d21), 2px crisp corners, deep space black telemetry themes, and satellite telemetry grids.",
    "tokens": {
      "primaryColor": "#fc3d21",
      "borderRadius": "2px",
      "controlHeight": "36px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #fc3d21"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<NASAJPLExplorer1Button variant=\"primary\">Get Started</NASAJPLExplorer1Button>",
      "input": "<NASAJPLExplorer1Input label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<NASAJPLExplorer1Select label=\"Region\" options={regionOptions} />",
      "radio": "<NASAJPLExplorer1RadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<NASAJPLExplorer1Checkbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<NASAJPLExplorer1Switch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<NASAJPLExplorer1Textarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<NASAJPLExplorer1Tabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<NASAJPLExplorer1Modal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<NASAJPLExplorer1Tooltip content=\"SOC2 Verified\"><Button>Status</Button></NASAJPLExplorer1Tooltip>"
    }
  },
  {
    "id": "daisyui",
    "name": "daisyUI",
    "organization": "daisyUI Open Source",
    "status": "active",
    "type": "ui-library",
    "category": "modern-react",
    "categoryLabel": "Modern React",
    "docsUrl": "https://daisyui.com",
    "officialUrl": "https://daisyui.com",
    "repoUrl": "https://github.com/saadeghi/daisyui",
    "description": "Most popular semantic Tailwind CSS component library with clean rounded aesthetics and semantic color tokens.",
    "aestheticNotes": "daisyUI Royal Purple (#491eb8), 8px border radii, semantic color tokens (primary, secondary, accent, neutral), and modern rounded badges.",
    "tokens": {
      "primaryColor": "#491eb8",
      "borderRadius": "8px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #491eb8"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<daisyUIButton variant=\"primary\">Get Started</daisyUIButton>",
      "input": "<daisyUIInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<daisyUISelect label=\"Region\" options={regionOptions} />",
      "radio": "<daisyUIRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<daisyUICheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<daisyUISwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<daisyUITextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<daisyUITabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<daisyUIModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<daisyUITooltip content=\"SOC2 Verified\"><Button>Status</Button></daisyUITooltip>"
    }
  },
  {
    "id": "heroui",
    "name": "HeroUI",
    "organization": "HeroUI (formerly NextUI)",
    "status": "active",
    "type": "ui-library",
    "category": "modern-react",
    "categoryLabel": "Modern React",
    "docsUrl": "https://heroui.com",
    "officialUrl": "https://heroui.com",
    "repoUrl": "https://github.com/heroui-inc/heroui",
    "description": "Beautiful, fast, and modern React UI library built on Tailwind CSS with smooth spring animations.",
    "aestheticNotes": "HeroUI Radiant Blue (#006fee), generous 12px smooth corners, modern blur backdrop modals, and fluid scale interaction feedback.",
    "tokens": {
      "primaryColor": "#006fee",
      "borderRadius": "12px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 2px #006fee"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Destructive",
        "Disabled"
      ],
      "inputs": [
        "Default",
        "With Label & Helper",
        "Placeholder",
        "Filled",
        "Error",
        "Disabled"
      ],
      "selects": [
        "Default",
        "Pre-selected",
        "Error",
        "Disabled"
      ],
      "radios": [
        "Unselected",
        "Selected",
        "Disabled Unselected",
        "Disabled Selected",
        "Interactive Group"
      ],
      "checkboxes": [
        "Unchecked",
        "Checked",
        "Indeterminate",
        "Disabled Unchecked",
        "Disabled Checked",
        "Interactive Group"
      ],
      "switches": [
        "Off",
        "On",
        "Disabled Off",
        "Disabled On"
      ],
      "textareas": [
        "Default with Counter",
        "Placeholder",
        "Error",
        "Disabled"
      ],
      "tabs": [
        "Overview",
        "Settings",
        "Activity (Accessible with arrow navigation)"
      ],
      "dialogs": [
        "Standard Modal with Backdrop, Close Action & Keyboard Dismissal"
      ],
      "tooltips": [
        "Hover & Keyboard Focus Bubble with Pointer Arrow"
      ]
    },
    "canonicalCode": {
      "button": "<HeroUIButton variant=\"primary\">Get Started</HeroUIButton>",
      "input": "<HeroUIInput label=\"Email address\" placeholder=\"alex@company.com\" />",
      "select": "<HeroUISelect label=\"Region\" options={regionOptions} />",
      "radio": "<HeroUIRadioGroup name=\"plan\" options={planOptions} />",
      "checkbox": "<HeroUICheckbox label=\"Consent\" checked={checked} onChange={setChecked} />",
      "switch": "<HeroUISwitch checked={enabled} onChange={setEnabled} label=\"Automated Backups\" />",
      "textarea": "<HeroUITextarea label=\"Notes\" rows={4} placeholder=\"Service notes...\" />",
      "tabs": "<HeroUITabs items={['Overview', 'Settings', 'Activity']} />",
      "dialog": "<HeroUIModal open={isOpen} onClose={closeModal} title=\"Delete Environment?\" />",
      "tooltip": "<HeroUITooltip content=\"SOC2 Verified\"><Button>Status</Button></HeroUITooltip>"
    }
  },
  {
    "id": "paper-css",
    "name": "PaperCSS",
    "organization": "PaperCSS Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://www.getpapercss.com",
    "repoUrl": "https://github.com/papercss/papercss",
    "description": "The less-formal, hand-drawn sketch CSS framework that makes web applications look like pencil-drawn notebook sketches with uneven borders and whimsical charm.",
    "aestheticNotes": "Hand-drawn notebook sketch with wobbly pencil borders (255px 15px 225px 15px), off-white paper backgrounds, and playful indie zine charm.",
    "tokens": {
      "primaryColor": "#41403e",
      "borderRadius": "255px 15px 225px 15px / 15px 225px 15px 255px",
      "controlHeight": "38px",
      "fontFamily": "'Neucha', 'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
      "focusStyle": "0 0 0 2px #41403e"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-paper-css ds-btn-paper-css-primary\">Action</button>",
      "input": "<input className=\"ds-input-paper-css\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-paper-css\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-paper-css\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-paper-css\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-paper-css\" />",
      "textarea": "<textarea className=\"ds-textarea-paper-css\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-paper-css\"><button className=\"ds-tab-paper-css active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-paper-css\"><h3 className=\"ds-dialog-header-paper-css\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-paper-css\">Tooltip info</div>"
    }
  },
  {
    "id": "nes-css",
    "name": "NES.css",
    "organization": "nostalgic-css Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://nostalgic-css.github.io/NES.css/",
    "repoUrl": "https://github.com/nostalgic-css/NES.css",
    "description": "An 8-bit NES console-style pure CSS framework with pixelated borders, retro gaming dialog balloons, pixel art buttons, and classic Nintendo charm.",
    "aestheticNotes": "8-bit retro gaming NES nostalgia: pixelated borders, speech balloons, chunky pixel buttons, and Press Start 2P font.",
    "tokens": {
      "primaryColor": "#209cee",
      "borderRadius": "0px",
      "controlHeight": "44px",
      "fontFamily": "'Press Start 2P', monospace, cursive",
      "focusStyle": "0 0 0 2px #000000"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-nes-css ds-btn-nes-css-primary\">Action</button>",
      "input": "<input className=\"ds-input-nes-css\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-nes-css\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-nes-css\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-nes-css\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-nes-css\" />",
      "textarea": "<textarea className=\"ds-textarea-nes-css\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-nes-css\"><button className=\"ds-tab-nes-css active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-nes-css\"><h3 className=\"ds-dialog-header-nes-css\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-nes-css\">Tooltip info</div>"
    }
  },
  {
    "id": "rpgui",
    "name": "RPGUI",
    "organization": "Ronen Ness / RPGUI Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://ronenness.github.io/rpgui/",
    "repoUrl": "https://github.com/RonenNess/RPGUI",
    "description": "Classic 16-bit RPG video game interface CSS framework with wooden and stone containers, golden borders, health/mana bars, and parchment panels.",
    "aestheticNotes": "16-bit SNES / RPG Maker game aesthetic: stone and wooden border containers, red Health / blue Mana progress indicators, and golden dialogue boxes.",
    "tokens": {
      "primaryColor": "#c3a177",
      "borderRadius": "0px",
      "controlHeight": "40px",
      "fontFamily": "'Press Start 2P', monospace",
      "focusStyle": "0 0 0 2px #ffd700"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-rpgui ds-btn-rpgui-primary\">Action</button>",
      "input": "<input className=\"ds-input-rpgui\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-rpgui\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-rpgui\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-rpgui\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-rpgui\" />",
      "textarea": "<textarea className=\"ds-textarea-rpgui\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-rpgui\"><button className=\"ds-tab-rpgui active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-rpgui\"><h3 className=\"ds-dialog-header-rpgui\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-rpgui\">Tooltip info</div>"
    }
  },
  {
    "id": "terminal-css",
    "name": "Terminal.css",
    "organization": "Terminal.css Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://terminalcss.xyz/",
    "repoUrl": "https://github.com/gbl/terminal.css",
    "description": "Modern, lightweight CSS framework inspired by retro CRT terminal command lines, featuring monospace typography, green phosphor glow, and ASCII boxes.",
    "aestheticNotes": "Retro CRT terminal: pitch black background (#000000), bright phosphor green text (#00ff00), monospace typography, and ASCII box-drawn border frames.",
    "tokens": {
      "primaryColor": "#00ff00",
      "borderRadius": "0px",
      "controlHeight": "36px",
      "fontFamily": "'Courier New', 'Fira Code', monospace",
      "focusStyle": "0 0 0 1px #00ff00"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-terminal-css ds-btn-terminal-css-primary\">Action</button>",
      "input": "<input className=\"ds-input-terminal-css\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-terminal-css\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-terminal-css\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-terminal-css\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-terminal-css\" />",
      "textarea": "<textarea className=\"ds-textarea-terminal-css\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-terminal-css\"><button className=\"ds-tab-terminal-css active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-terminal-css\"><h3 className=\"ds-dialog-header-terminal-css\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-terminal-css\">Tooltip info</div>"
    }
  },
  {
    "id": "webtui",
    "name": "WebTUI",
    "organization": "WebTUI Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://github.com/webtui/webtui",
    "repoUrl": "https://github.com/webtui/webtui",
    "description": "Terminal User Interface for web with authentic ASCII box-drawing characters, curses menus, and VT100 command-line mechanics.",
    "aestheticNotes": "ANSI/VT100 Terminal UI aesthetic: ASCII box-drawing characters, monospace fonts, CRT phosphor cyan accents, and curses window borders.",
    "tokens": {
      "primaryColor": "#58a6ff",
      "borderRadius": "0px",
      "controlHeight": "34px",
      "fontFamily": "monospace",
      "focusStyle": "0 0 0 1px #58a6ff"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-webtui ds-btn-webtui-primary\">Action</button>",
      "input": "<input className=\"ds-input-webtui\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-webtui\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-webtui\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-webtui\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-webtui\" />",
      "textarea": "<textarea className=\"ds-textarea-webtui\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-webtui\"><button className=\"ds-tab-webtui active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-webtui\"><h3 className=\"ds-dialog-header-webtui\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-webtui\">Tooltip info</div>"
    }
  },
  {
    "id": "xp-css",
    "name": "XP.css",
    "organization": "botoxparty / XP.css Community",
    "status": "legacy",
    "type": "legacy-ui",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://botoxparty.github.io/XP.css/",
    "repoUrl": "https://github.com/botoxparty/XP.css",
    "description": "Windows XP Luna theme UI framework replicating royal blue window bars, glossy gradient buttons, green Start button accents, and 2000s desktop UI.",
    "aestheticNotes": "Windows XP Luna blue: glossy buttons with linear gradient reflections, royal blue title bars (#0055ea), and early-2000s OS nostalgia.",
    "tokens": {
      "primaryColor": "#0055ea",
      "borderRadius": "3px",
      "controlHeight": "26px",
      "fontFamily": "'Tahoma', 'MS Sans Serif', sans-serif",
      "focusStyle": "0 0 0 1px #0055ea"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-xp-css ds-btn-xp-css-primary\">Action</button>",
      "input": "<input className=\"ds-input-xp-css\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-xp-css\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-xp-css\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-xp-css\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-xp-css\" />",
      "textarea": "<textarea className=\"ds-textarea-xp-css\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-xp-css\"><button className=\"ds-tab-xp-css active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-xp-css\"><h3 className=\"ds-dialog-header-xp-css\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-xp-css\">Tooltip info</div>"
    }
  },
  {
    "id": "7-css",
    "name": "7.css",
    "organization": "Khaled Hosseini / 7.css Community",
    "status": "legacy",
    "type": "legacy-ui",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://khang-nd.github.io/7.css/",
    "repoUrl": "https://github.com/khang-nd/7.css",
    "description": "Windows 7 Aero Glass CSS framework with translucent frosted glass frames, reflective skeuomorphic gloss buttons, and Frutiger Aero aesthetic.",
    "aestheticNotes": "Authentic 2009 Windows 7 Aero Glass: translucent blurred glass window title bars, glossy blue reflective highlights, and skeuomorphic tracks.",
    "tokens": {
      "primaryColor": "#2a8dd4",
      "borderRadius": "3px",
      "controlHeight": "26px",
      "fontFamily": "'Segoe UI', Tahoma, sans-serif",
      "focusStyle": "0 0 0 2px #2a8dd4"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-7-css ds-btn-7-css-primary\">Action</button>",
      "input": "<input className=\"ds-input-7-css\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-7-css\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-7-css\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-7-css\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-7-css\" />",
      "textarea": "<textarea className=\"ds-textarea-7-css\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-7-css\"><button className=\"ds-tab-7-css active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-7-css\"><h3 className=\"ds-dialog-header-7-css\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-7-css\">Tooltip info</div>"
    }
  },
  {
    "id": "arwes",
    "name": "Arwes",
    "organization": "Arwes Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://arwes.dev",
    "repoUrl": "https://github.com/arwes/arwes",
    "description": "Futuristic cyberpunk sci-fi UI framework with glowing neon vectors, 45-degree angled corner cuts, holographic card frames, and sci-fi HUD monitors.",
    "aestheticNotes": "High-tech cyberpunk and sci-fi HUD: glowing cyan (#00f8f8) vector frames, 45-degree angled corner clips, and holographic scanlines.",
    "tokens": {
      "primaryColor": "#00f8f8",
      "borderRadius": "0px",
      "controlHeight": "38px",
      "fontFamily": "'Titillium Web', 'Orbitron', monospace, sans-serif",
      "focusStyle": "0 0 8px #00f8f8"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-arwes ds-btn-arwes-primary\">Action</button>",
      "input": "<input className=\"ds-input-arwes\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-arwes\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-arwes\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-arwes\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-arwes\" />",
      "textarea": "<textarea className=\"ds-textarea-arwes\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-arwes\"><button className=\"ds-tab-arwes active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-arwes\"><h3 className=\"ds-dialog-header-arwes\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-arwes\">Tooltip info</div>"
    }
  },
  {
    "id": "warcraftcn-ui",
    "name": "warcraftcn/ui",
    "organization": "warcraftcn Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://warcraftcn.com",
    "repoUrl": "https://github.com/warcraftcn/ui",
    "description": "Component library bringing the iconic World of Warcraft fantasy gaming aesthetic with parchment paper dialogs, stone and gold beveled frames.",
    "aestheticNotes": "Epic fantasy video game: Warcraft gold-trimmed beveled borders, parchment quest scroll dialogs, spell action buttons, and dark stone surfaces.",
    "tokens": {
      "primaryColor": "#ffd100",
      "borderRadius": "2px",
      "controlHeight": "36px",
      "fontFamily": "'Cinzel', 'Trajan Pro', Georgia, serif",
      "focusStyle": "0 0 0 2px #ffd100"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-warcraftcn-ui ds-btn-warcraftcn-ui-primary\">Action</button>",
      "input": "<input className=\"ds-input-warcraftcn-ui\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-warcraftcn-ui\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-warcraftcn-ui\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-warcraftcn-ui\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-warcraftcn-ui\" />",
      "textarea": "<textarea className=\"ds-textarea-warcraftcn-ui\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-warcraftcn-ui\"><button className=\"ds-tab-warcraftcn-ui active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-warcraftcn-ui\"><h3 className=\"ds-dialog-header-warcraftcn-ui\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-warcraftcn-ui\">Tooltip info</div>"
    }
  },
  {
    "id": "metro-ui",
    "name": "Metro UI",
    "organization": "Metro UI Community",
    "status": "legacy",
    "type": "legacy-ui",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://metroui.org.ua",
    "repoUrl": "https://github.com/olton/Metro-UI-CSS",
    "description": "Microsoft Windows 8 Modern / Metro design language framework with flat saturated color live tiles, ribbon bars, and Segoe UI typography.",
    "aestheticNotes": "Iconic Microsoft Windows 8/10 Modern Metro: bold flat color tiles, sharp 0px corners, high contrast typography, and Windows live tile grids.",
    "tokens": {
      "primaryColor": "#0072c6",
      "borderRadius": "0px",
      "controlHeight": "36px",
      "fontFamily": "'Segoe UI', sans-serif",
      "focusStyle": "0 0 0 2px #0072c6"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-metro-ui ds-btn-metro-ui-primary\">Action</button>",
      "input": "<input className=\"ds-input-metro-ui\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-metro-ui\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-metro-ui\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-metro-ui\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-metro-ui\" />",
      "textarea": "<textarea className=\"ds-textarea-metro-ui\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-metro-ui\"><button className=\"ds-tab-metro-ui active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-metro-ui\"><h3 className=\"ds-dialog-header-metro-ui\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-metro-ui\">Tooltip info</div>"
    }
  },
  {
    "id": "react95",
    "name": "React95",
    "organization": "React95 Community",
    "status": "legacy",
    "type": "legacy-ui",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://react95.io",
    "repoUrl": "https://github.com/react95/react95",
    "description": "Nostalgic Windows 95 UI component library crafted with styled-components, pixel-perfect beveled borders, retro window title bars, and desktop icons.",
    "aestheticNotes": "Windows 95 operating system: iconic desktop teal (#008080), classic grey relief (#c0c0c0), raised/recessed beveled borders, and start menu buttons.",
    "tokens": {
      "primaryColor": "#008080",
      "borderRadius": "0px",
      "controlHeight": "28px",
      "fontFamily": "'MS Sans Serif', Tahoma, sans-serif",
      "focusStyle": "1px dotted #000000"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-react95 ds-btn-react95-primary\">Action</button>",
      "input": "<input className=\"ds-input-react95\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-react95\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-react95\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-react95\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-react95\" />",
      "textarea": "<textarea className=\"ds-textarea-react95\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-react95\"><button className=\"ds-tab-react95 active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-react95\"><h3 className=\"ds-dialog-header-react95\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-react95\">Tooltip info</div>"
    }
  },
  {
    "id": "neobrutalism",
    "name": "Neobrutalism UI",
    "organization": "Neobrutalism Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://neobrutalism.dev",
    "repoUrl": "https://github.com/ekmas/neobrutalism-components",
    "description": "Edgy neo-brutalist component design system with thick 3px solid black borders, hard unblurred drop shadows, and hyper-saturated candy pop colors.",
    "aestheticNotes": "Neo-brutalist pop style: 3px solid black outlines, hard unblurred offset drop shadows (4px 4px 0 #000), bold sans-serif type, and electric candy yellow (#fee140).",
    "tokens": {
      "primaryColor": "#fee140",
      "borderRadius": "0px",
      "controlHeight": "42px",
      "fontFamily": "'Space Grotesk', 'Public Sans', system-ui, sans-serif",
      "focusStyle": "0 0 0 3px #000000"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-neobrutalism ds-btn-neobrutalism-primary\">Action</button>",
      "input": "<input className=\"ds-input-neobrutalism\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-neobrutalism\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-neobrutalism\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-neobrutalism\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-neobrutalism\" />",
      "textarea": "<textarea className=\"ds-textarea-neobrutalism\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-neobrutalism\"><button className=\"ds-tab-neobrutalism active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-neobrutalism\"><h3 className=\"ds-dialog-header-neobrutalism\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-neobrutalism\">Tooltip info</div>"
    }
  },
  {
    "id": "hana-ui",
    "name": "Hana UI",
    "organization": "Hana UI Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://hana-ui.github.io",
    "repoUrl": "https://github.com/hana-ui/hana-ui",
    "description": "Anime & pastel expressive React component library designed with sakura pink and lavender accents, pill-shaped glowing buttons, and playful micro-interactions.",
    "aestheticNotes": "Playful pastel & anime aesthetic: Sakura Pink (#ffb6c1) / Lavender Purple accents, pill-shaped glowing buttons, and soft floating card overlays.",
    "tokens": {
      "primaryColor": "#ffb6c1",
      "borderRadius": "9999px",
      "controlHeight": "40px",
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "focusStyle": "0 0 0 3px rgba(255, 182, 193, 0.6)"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-hana-ui ds-btn-hana-ui-primary\">Action</button>",
      "input": "<input className=\"ds-input-hana-ui\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-hana-ui\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-hana-ui\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-hana-ui\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-hana-ui\" />",
      "textarea": "<textarea className=\"ds-textarea-hana-ui\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-hana-ui\"><button className=\"ds-tab-hana-ui active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-hana-ui\"><h3 className=\"ds-dialog-header-hana-ui\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-hana-ui\">Tooltip info</div>"
    }
  },
  {
    "id": "vengeance-ui",
    "name": "VengeanceUI",
    "organization": "VengeanceUI Community",
    "status": "active",
    "type": "ui-library",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://vengeanceui.com",
    "repoUrl": "https://github.com/vengeance-ui/vengeance-ui",
    "description": "Component library inspired by dark brutalism, high-contrast cyberpunk accents, sharp 0px corners, and aggressive neon typography.",
    "aestheticNotes": "Dark brutalist cyberpunk aesthetic: high-contrast neon crimson (#ff003c) / electric lime (#00ff66) accents, sharp 0px border-radii, and technical badges.",
    "tokens": {
      "primaryColor": "#ff003c",
      "borderRadius": "0px",
      "controlHeight": "38px",
      "fontFamily": "'Share Tech Mono', 'Courier New', monospace",
      "focusStyle": "0 0 10px #ff003c"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-vengeance-ui ds-btn-vengeance-ui-primary\">Action</button>",
      "input": "<input className=\"ds-input-vengeance-ui\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-vengeance-ui\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-vengeance-ui\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-vengeance-ui\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-vengeance-ui\" />",
      "textarea": "<textarea className=\"ds-textarea-vengeance-ui\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-vengeance-ui\"><button className=\"ds-tab-vengeance-ui active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-vengeance-ui\"><h3 className=\"ds-dialog-header-vengeance-ui\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-vengeance-ui\">Tooltip info</div>"
    }
  },
  {
    "id": "psone-css",
    "name": "PSone.css",
    "organization": "AisVisual / PSone Community",
    "status": "legacy",
    "type": "legacy-ui",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://github.com/AisVisual/PSone.css",
    "repoUrl": "https://github.com/AisVisual/PSone.css",
    "description": "PlayStation 1 retro 32-bit console UI framework with grey memory card blocks, classic PS1 start menu buttons, and DualShock symbol accents.",
    "aestheticNotes": "Authentic 1994 PS1 console BIOS: matte grey chassis tones (#2a2a2e), beveled memory card relief borders, and pixelated action prompts.",
    "tokens": {
      "primaryColor": "#003791",
      "borderRadius": "0px",
      "controlHeight": "36px",
      "fontFamily": "'Press Start 2P', monospace",
      "focusStyle": "0 0 0 2px #003791"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-psone-css ds-btn-psone-css-primary\">Action</button>",
      "input": "<input className=\"ds-input-psone-css\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-psone-css\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-psone-css\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-psone-css\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-psone-css\" />",
      "textarea": "<textarea className=\"ds-textarea-psone-css\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-psone-css\"><button className=\"ds-tab-psone-css active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-psone-css\"><h3 className=\"ds-dialog-header-psone-css\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-psone-css\">Tooltip info</div>"
    }
  },
  {
    "id": "c64-css",
    "name": "Commodore 64 CSS",
    "organization": "C64 Web Community",
    "status": "legacy",
    "type": "legacy-ui",
    "category": "specialty-retro",
    "categoryLabel": "Specialty & Retro",
    "docsUrl": "https://github.com/c64-css/c64-css",
    "repoUrl": "https://github.com/c64-css/c64-css",
    "description": "Commodore 64 8-bit home computer UI framework replicating the iconic 1982 C64 BASIC screen with deep blue background and light blue uppercase typography.",
    "aestheticNotes": "Classic 1982 Commodore 64 PETSCII: deep blue background (#4040e0), thick light blue outer border (#a0a0ff), and blocky 8-bit uppercase text.",
    "tokens": {
      "primaryColor": "#a0a0ff",
      "borderRadius": "0px",
      "controlHeight": "36px",
      "fontFamily": "'Courier New', monospace",
      "focusStyle": "0 0 0 2px #a0a0ff"
    },
    "componentSupport": {
      "button": true,
      "input": true,
      "select": true,
      "radio": true,
      "checkbox": true,
      "switch": true,
      "textarea": true,
      "tabs": true,
      "dialog": true,
      "tooltip": true
    },
    "variants": {
      "buttons": [
        "primary",
        "secondary",
        "tertiary",
        "danger"
      ],
      "inputs": [
        "default",
        "filled",
        "error",
        "disabled"
      ],
      "selects": [
        "default",
        "disabled"
      ],
      "radios": [
        "default",
        "disabled"
      ],
      "checkboxes": [
        "default",
        "indeterminate",
        "disabled"
      ],
      "switches": [
        "default",
        "disabled"
      ],
      "textareas": [
        "default",
        "error",
        "disabled"
      ],
      "tabs": [
        "default"
      ],
      "dialogs": [
        "default"
      ],
      "tooltips": [
        "default"
      ]
    },
    "canonicalCode": {
      "button": "<button className=\"ds-btn-c64-css ds-btn-c64-css-primary\">Action</button>",
      "input": "<input className=\"ds-input-c64-css\" placeholder=\"Enter text...\" />",
      "select": "<select className=\"ds-select-c64-css\"><option>Option 1</option></select>",
      "radio": "<input type=\"radio\" className=\"ds-radio-c64-css\" name=\"group\" />",
      "checkbox": "<input type=\"checkbox\" className=\"ds-checkbox-c64-css\" />",
      "switch": "<button role=\"switch\" aria-checked={checked} className=\"ds-switch-track-c64-css\" />",
      "textarea": "<textarea className=\"ds-textarea-c64-css\" rows={4} />",
      "tabs": "<div className=\"ds-tablist-c64-css\"><button className=\"ds-tab-c64-css active\">Overview</button></div>",
      "dialog": "<div className=\"ds-dialog-box-c64-css\"><h3 className=\"ds-dialog-header-c64-css\">Dialog</h3></div>",
      "tooltip": "<div className=\"ds-tooltip-bubble-c64-css\">Tooltip info</div>"
    }
  }
];
