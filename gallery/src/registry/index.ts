import { DesignSystemEntry } from '../types.ts';
import { DESIGN_SYSTEMS } from './data.ts';

import * as materialComponents from '../design-systems/material/index.ts';
import * as appleComponents from '../design-systems/apple/index.ts';
import * as fluentComponents from '../design-systems/fluent/index.ts';
import * as carbonComponents from '../design-systems/carbon/index.ts';
import * as polarisComponents from '../design-systems/polaris/index.ts';
import * as atlassianComponents from '../design-systems/atlassian/index.ts';
import * as primerComponents from '../design-systems/primer/index.ts';
import * as spectrumComponents from '../design-systems/spectrum/index.ts';
import * as salesforceComponents from '../design-systems/salesforce/index.ts';
import * as antComponents from '../design-systems/ant/index.ts';
import * as chakraComponents from '../design-systems/chakra/index.ts';
import * as mantineComponents from '../design-systems/mantine/index.ts';
import * as radixComponents from '../design-systems/radix/index.ts';
import * as shadcnComponents from '../design-systems/shadcn/index.ts';
import * as euiComponents from '../design-systems/eui/index.ts';
import * as fioriComponents from '../design-systems/fiori/index.ts';
import * as govukComponents from '../design-systems/govuk/index.ts';
import * as uswdsComponents from '../design-systems/uswds/index.ts';
import * as mozillaComponents from '../design-systems/mozilla/index.ts';
import * as ubuntuComponents from '../design-systems/ubuntu/index.ts';
import * as patternflyComponents from '../design-systems/patternfly/index.ts';
import * as base_webComponents from '../design-systems/base-web/index.ts';
import * as blueprintComponents from '../design-systems/blueprint/index.ts';
import * as semanticComponents from '../design-systems/semantic/index.ts';
import * as porscheComponents from '../design-systems/porsche/index.ts';
import * as audiComponents from '../design-systems/audi/index.ts';
import * as pajamasComponents from '../design-systems/pajamas/index.ts';
import * as wiseComponents from '../design-systems/wise/index.ts';
import * as mailchimpComponents from '../design-systems/mailchimp/index.ts';
import * as gardenComponents from '../design-systems/garden/index.ts';
import * as orbitComponents from '../design-systems/orbit/index.ts';
import * as workdayComponents from '../design-systems/workday/index.ts';
import * as leafygreenComponents from '../design-systems/leafygreen/index.ts';
import * as cloudscapeComponents from '../design-systems/cloudscape/index.ts';
import * as pasteComponents from '../design-systems/paste/index.ts';
import * as vitaminComponents from '../design-systems/vitamin/index.ts';
import * as backstageComponents from '../design-systems/backstage/index.ts';
import * as cedarComponents from '../design-systems/cedar/index.ts';
import * as thumbprintComponents from '../design-systems/thumbprint/index.ts';
import * as nordComponents from '../design-systems/nord/index.ts';
import * as origamiComponents from '../design-systems/origami/index.ts';
import * as backpackComponents from '../design-systems/backpack/index.ts';
import * as photonComponents from '../design-systems/photon/index.ts';
import * as win98Components from '../design-systems/win98/index.ts';

export const ALL_SYSTEM_ENTRIES: Record<string, DesignSystemEntry> = {
  'material': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'material')!,
    components: materialComponents,
  },
  'apple': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'apple')!,
    components: appleComponents,
  },
  'fluent': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'fluent')!,
    components: fluentComponents,
  },
  'carbon': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'carbon')!,
    components: carbonComponents,
  },
  'polaris': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'polaris')!,
    components: polarisComponents,
  },
  'atlassian': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'atlassian')!,
    components: atlassianComponents,
  },
  'primer': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'primer')!,
    components: primerComponents,
  },
  'spectrum': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'spectrum')!,
    components: spectrumComponents,
  },
  'salesforce': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'salesforce')!,
    components: salesforceComponents,
  },
  'ant': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'ant')!,
    components: antComponents,
  },
  'chakra': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'chakra')!,
    components: chakraComponents,
  },
  'mantine': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'mantine')!,
    components: mantineComponents,
  },
  'radix': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'radix')!,
    components: radixComponents,
  },
  'shadcn': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'shadcn')!,
    components: shadcnComponents,
  },
  'eui': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'eui')!,
    components: euiComponents,
  },
  'fiori': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'fiori')!,
    components: fioriComponents,
  },
  'govuk': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'govuk')!,
    components: govukComponents,
  },
  'uswds': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'uswds')!,
    components: uswdsComponents,
  },
  'mozilla': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'mozilla')!,
    components: mozillaComponents,
  },
  'ubuntu': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'ubuntu')!,
    components: ubuntuComponents,
  },
  'patternfly': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'patternfly')!,
    components: patternflyComponents,
  },
  'base-web': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'base-web')!,
    components: base_webComponents,
  },
  'blueprint': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'blueprint')!,
    components: blueprintComponents,
  },
  'semantic': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'semantic')!,
    components: semanticComponents,
  },
  'porsche': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'porsche')!,
    components: porscheComponents,
  },
  'audi': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'audi')!,
    components: audiComponents,
  },
  'pajamas': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'pajamas')!,
    components: pajamasComponents,
  },
  'wise': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'wise')!,
    components: wiseComponents,
  },
  'mailchimp': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'mailchimp')!,
    components: mailchimpComponents,
  },
  'garden': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'garden')!,
    components: gardenComponents,
  },
  'orbit': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'orbit')!,
    components: orbitComponents,
  },
  'workday': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'workday')!,
    components: workdayComponents,
  },
  'leafygreen': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'leafygreen')!,
    components: leafygreenComponents,
  },
  'cloudscape': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'cloudscape')!,
    components: cloudscapeComponents,
  },
  'paste': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'paste')!,
    components: pasteComponents,
  },
  'vitamin': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'vitamin')!,
    components: vitaminComponents,
  },
  'backstage': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'backstage')!,
    components: backstageComponents,
  },
  'cedar': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'cedar')!,
    components: cedarComponents,
  },
  'thumbprint': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'thumbprint')!,
    components: thumbprintComponents,
  },
  'nord': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'nord')!,
    components: nordComponents,
  },
  'origami': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'origami')!,
    components: origamiComponents,
  },
  'backpack': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'backpack')!,
    components: backpackComponents,
  },
  'photon': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'photon')!,
    components: photonComponents,
  },
  'win98': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'win98')!,
    components: win98Components,
  },
};

export const SYSTEM_LIST = Object.values(ALL_SYSTEM_ENTRIES);

export { DESIGN_SYSTEMS } from './data.ts';
