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
import * as acornComponents from '../design-systems/acorn/index.ts';
import * as geistComponents from '../design-systems/geist/index.ts';
import * as heliosComponents from '../design-systems/helios/index.ts';
import * as codexComponents from '../design-systems/codex/index.ts';
import * as calciteComponents from '../design-systems/calcite/index.ts';
import * as clarityComponents from '../design-systems/clarity/index.ts';
import * as evergreenComponents from '../design-systems/evergreen/index.ts';
import * as grommetComponents from '../design-systems/grommet/index.ts';
import * as redwoodComponents from '../design-systems/redwood/index.ts';
import * as momentumComponents from '../design-systems/momentum/index.ts';
import * as rhdsComponents from '../design-systems/rhds/index.ts';
import * as quickbooksComponents from '../design-systems/quickbooks/index.ts';
import * as servicenowComponents from '../design-systems/servicenow/index.ts';
import * as hubspotComponents from '../design-systems/hubspot/index.ts';
import * as inforComponents from '../design-systems/infor/index.ts';
import * as instructureComponents from '../design-systems/instructure/index.ts';
import * as lexiconComponents from '../design-systems/lexicon/index.ts';
import * as pega_cosmosComponents from '../design-systems/pega-cosmos/index.ts';
import * as pega_boltComponents from '../design-systems/pega-bolt/index.ts';
import * as pluralsightComponents from '../design-systems/pluralsight/index.ts';
import * as baristaComponents from '../design-systems/barista/index.ts';
import * as anvilComponents from '../design-systems/anvil/index.ts';
import * as wandaComponents from '../design-systems/wanda/index.ts';
import * as circuit_uiComponents from '../design-systems/circuit-ui/index.ts';
import * as lineComponents from '../design-systems/line/index.ts';
import * as one_uiComponents from '../design-systems/one-ui/index.ts';
import * as morningstarComponents from '../design-systems/morningstar/index.ts';
import * as mixpanelComponents from '../design-systems/mixpanel/index.ts';
import * as nachosComponents from '../design-systems/nachos/index.ts';
import * as liquidComponents from '../design-systems/liquid/index.ts';
import * as feelixComponents from '../design-systems/feelix/index.ts';
import * as elementaryComponents from '../design-systems/elementary/index.ts';
import * as bbc_gelComponents from '../design-systems/bbc-gel/index.ts';
import * as seedsComponents from '../design-systems/seeds/index.ts';
import * as stacksComponents from '../design-systems/stacks/index.ts';
import * as uniformComponents from '../design-systems/uniform/index.ts';
import * as vtexComponents from '../design-systems/vtex/index.ts';
import * as yogaComponents from '../design-systems/yoga/index.ts';
import * as rivetComponents from '../design-systems/rivet/index.ts';
import * as priceline_oneComponents from '../design-systems/priceline-one/index.ts';
import * as seekComponents from '../design-systems/seek/index.ts';
import * as nhsComponents from '../design-systems/nhs/index.ts';
import * as singapore_govComponents from '../design-systems/singapore-gov/index.ts';
import * as ontarioComponents from '../design-systems/ontario/index.ts';
import * as nysComponents from '../design-systems/nys/index.ts';
import * as uaeComponents from '../design-systems/uae/index.ts';
import * as helsinkiComponents from '../design-systems/helsinki/index.ts';
import * as nswComponents from '../design-systems/nsw/index.ts';
import * as australian_govComponents from '../design-systems/australian-gov/index.ts';
import * as italiaComponents from '../design-systems/italia/index.ts';
import * as det_faellesComponents from '../design-systems/det-faelles/index.ts';
import * as dsfrComponents from '../design-systems/dsfr/index.ts';
import * as ahoyComponents from '../design-systems/ahoy/index.ts';
import * as tractieComponents from '../design-systems/tractie/index.ts';
import * as axaComponents from '../design-systems/axa/index.ts';
import * as arui_featherComponents from '../design-systems/arui-feather/index.ts';
import * as beelineComponents from '../design-systems/beeline/index.ts';
import * as marvelComponents from '../design-systems/marvel/index.ts';
import * as office_fabricComponents from '../design-systems/office-fabric/index.ts';
import * as gestaltComponents from '../design-systems/gestalt/index.ts';
import * as forma_36Components from '../design-systems/forma-36/index.ts';
import * as kaizenComponents from '../design-systems/kaizen/index.ts';
import * as vibeComponents from '../design-systems/vibe/index.ts';
import * as intergalacticComponents from '../design-systems/intergalactic/index.ts';
import * as crayonsComponents from '../design-systems/crayons/index.ts';
import * as auroComponents from '../design-systems/auro/index.ts';
import * as siemens_ixComponents from '../design-systems/siemens-ix/index.ts';
import * as nasa_jplComponents from '../design-systems/nasa-jpl/index.ts';
import * as daisyuiComponents from '../design-systems/daisyui/index.ts';
import * as herouiComponents from '../design-systems/heroui/index.ts';

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
  'acorn': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'acorn')!,
    components: acornComponents,
  },
  'geist': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'geist')!,
    components: geistComponents,
  },
  'helios': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'helios')!,
    components: heliosComponents,
  },
  'codex': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'codex')!,
    components: codexComponents,
  },
  'calcite': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'calcite')!,
    components: calciteComponents,
  },
  'clarity': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'clarity')!,
    components: clarityComponents,
  },
  'evergreen': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'evergreen')!,
    components: evergreenComponents,
  },
  'grommet': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'grommet')!,
    components: grommetComponents,
  },
  'redwood': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'redwood')!,
    components: redwoodComponents,
  },
  'momentum': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'momentum')!,
    components: momentumComponents,
  },
  'rhds': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'rhds')!,
    components: rhdsComponents,
  },
  'quickbooks': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'quickbooks')!,
    components: quickbooksComponents,
  },
  'servicenow': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'servicenow')!,
    components: servicenowComponents,
  },
  'hubspot': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'hubspot')!,
    components: hubspotComponents,
  },
  'infor': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'infor')!,
    components: inforComponents,
  },
  'instructure': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'instructure')!,
    components: instructureComponents,
  },
  'lexicon': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'lexicon')!,
    components: lexiconComponents,
  },
  'pega-cosmos': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'pega-cosmos')!,
    components: pega_cosmosComponents,
  },
  'pega-bolt': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'pega-bolt')!,
    components: pega_boltComponents,
  },
  'pluralsight': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'pluralsight')!,
    components: pluralsightComponents,
  },
  'barista': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'barista')!,
    components: baristaComponents,
  },
  'anvil': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'anvil')!,
    components: anvilComponents,
  },
  'wanda': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'wanda')!,
    components: wandaComponents,
  },
  'circuit-ui': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'circuit-ui')!,
    components: circuit_uiComponents,
  },
  'line': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'line')!,
    components: lineComponents,
  },
  'one-ui': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'one-ui')!,
    components: one_uiComponents,
  },
  'morningstar': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'morningstar')!,
    components: morningstarComponents,
  },
  'mixpanel': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'mixpanel')!,
    components: mixpanelComponents,
  },
  'nachos': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'nachos')!,
    components: nachosComponents,
  },
  'liquid': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'liquid')!,
    components: liquidComponents,
  },
  'feelix': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'feelix')!,
    components: feelixComponents,
  },
  'elementary': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'elementary')!,
    components: elementaryComponents,
  },
  'bbc-gel': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'bbc-gel')!,
    components: bbc_gelComponents,
  },
  'seeds': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'seeds')!,
    components: seedsComponents,
  },
  'stacks': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'stacks')!,
    components: stacksComponents,
  },
  'uniform': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'uniform')!,
    components: uniformComponents,
  },
  'vtex': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'vtex')!,
    components: vtexComponents,
  },
  'yoga': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'yoga')!,
    components: yogaComponents,
  },
  'rivet': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'rivet')!,
    components: rivetComponents,
  },
  'priceline-one': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'priceline-one')!,
    components: priceline_oneComponents,
  },
  'seek': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'seek')!,
    components: seekComponents,
  },
  'nhs': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'nhs')!,
    components: nhsComponents,
  },
  'singapore-gov': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'singapore-gov')!,
    components: singapore_govComponents,
  },
  'ontario': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'ontario')!,
    components: ontarioComponents,
  },
  'nys': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'nys')!,
    components: nysComponents,
  },
  'uae': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'uae')!,
    components: uaeComponents,
  },
  'helsinki': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'helsinki')!,
    components: helsinkiComponents,
  },
  'nsw': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'nsw')!,
    components: nswComponents,
  },
  'australian-gov': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'australian-gov')!,
    components: australian_govComponents,
  },
  'italia': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'italia')!,
    components: italiaComponents,
  },
  'det-faelles': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'det-faelles')!,
    components: det_faellesComponents,
  },
  'dsfr': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'dsfr')!,
    components: dsfrComponents,
  },
  'ahoy': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'ahoy')!,
    components: ahoyComponents,
  },
  'tractie': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'tractie')!,
    components: tractieComponents,
  },
  'axa': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'axa')!,
    components: axaComponents,
  },
  'arui-feather': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'arui-feather')!,
    components: arui_featherComponents,
  },
  'beeline': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'beeline')!,
    components: beelineComponents,
  },
  'marvel': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'marvel')!,
    components: marvelComponents,
  },
  'office-fabric': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'office-fabric')!,
    components: office_fabricComponents,
  },
  'gestalt': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'gestalt')!,
    components: gestaltComponents,
  },
  'forma-36': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'forma-36')!,
    components: forma_36Components,
  },
  'kaizen': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'kaizen')!,
    components: kaizenComponents,
  },
  'vibe': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'vibe')!,
    components: vibeComponents,
  },
  'intergalactic': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'intergalactic')!,
    components: intergalacticComponents,
  },
  'crayons': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'crayons')!,
    components: crayonsComponents,
  },
  'auro': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'auro')!,
    components: auroComponents,
  },
  'siemens-ix': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'siemens-ix')!,
    components: siemens_ixComponents,
  },
  'nasa-jpl': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'nasa-jpl')!,
    components: nasa_jplComponents,
  },
  'daisyui': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'daisyui')!,
    components: daisyuiComponents,
  },
  'heroui': {
    meta: DESIGN_SYSTEMS.find(m => m.id === 'heroui')!,
    components: herouiComponents,
  },
};

export const SYSTEM_LIST = Object.values(ALL_SYSTEM_ENTRIES);

export { DESIGN_SYSTEMS } from './data.ts';
