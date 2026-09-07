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

export interface RetroWeirdSystemConfig {
  id: string;
  name: string;
  organization: string;
  status: 'active' | 'legacy' | 'deprecated';
  type: 'design-system' | 'ui-library' | 'platform-guidelines' | 'government-design-system' | 'legacy-ui';
  category: 'specialty-retro';
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
  css: {
    font: string;
    btn_radius: string;
    input_radius: string;
    dlg_radius: string;
    btn_primary_bg: string;
    btn_primary_fg: string;
    btn_primary_border: string;
    btn_primary_shadow: string;
    btn_primary_hover: string;
    btn_primary_active: string;
    btn_secondary_bg: string;
    btn_secondary_fg: string;
    btn_secondary_border: string;
    btn_secondary_shadow: string;
    input_bg: string;
    input_border: string;
    input_shadow: string;
    card_bg: string;
    card_border: string;
    card_shadow: string;
  };
}

export const RETRO_WEIRD_SYSTEMS: RetroWeirdSystemConfig[] = [
  {
    id: 'paper-css',
    name: 'PaperCSS',
    organization: 'PaperCSS Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://www.getpapercss.com',
    repoUrl: 'https://github.com/papercss/papercss',
    description: 'The less-formal, hand-drawn sketch CSS framework that makes web applications look like pencil-drawn notebook sketches with uneven borders and whimsical charm.',
    aestheticNotes: 'Hand-drawn notebook sketch with wobbly pencil borders (255px 15px 225px 15px), off-white paper backgrounds, and playful indie zine charm.',
    tokens: {
      primaryColor: '#41403e',
      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
      controlHeight: '38px',
      fontFamily: "'Neucha', 'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
      focusStyle: '0 0 0 2px #41403e',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Neucha', 'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
      btn_radius: '255px 15px 225px 15px / 15px 225px 15px 255px',
      input_radius: '255px 15px 225px 15px / 15px 225px 15px 255px',
      dlg_radius: '255px 15px 225px 15px / 15px 225px 15px 255px',
      btn_primary_bg: '#41403e',
      btn_primary_fg: '#ffffff',
      btn_primary_border: '2px solid #41403e',
      btn_primary_shadow: '2px 3px 0 rgba(0,0,0,0.15)',
      btn_primary_hover: 'filter: brightness(1.1); transform: translateY(-1px);',
      btn_primary_active: 'transform: translateY(1px);',
      btn_secondary_bg: '#ffffff',
      btn_secondary_fg: '#41403e',
      btn_secondary_border: '2px solid #41403e',
      btn_secondary_shadow: '2px 3px 0 rgba(0,0,0,0.1)',
      input_bg: '#ffffff',
      input_border: '2px solid #41403e',
      input_shadow: 'inset 1px 2px 3px rgba(0,0,0,0.05)',
      card_bg: '#fdfbf7',
      card_border: '2px solid #41403e',
      card_shadow: '15px 28px 25px -18px rgba(0,0,0,0.2)',
    },
  },
  {
    id: 'nes-css',
    name: 'NES.css',
    organization: 'nostalgic-css Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://nostalgic-css.github.io/NES.css/',
    repoUrl: 'https://github.com/nostalgic-css/NES.css',
    description: 'An 8-bit NES console-style pure CSS framework with pixelated borders, retro gaming dialog balloons, pixel art buttons, and classic Nintendo charm.',
    aestheticNotes: '8-bit retro gaming NES nostalgia: pixelated borders, speech balloons, chunky pixel buttons, and Press Start 2P font.',
    tokens: {
      primaryColor: '#209cee',
      borderRadius: '0px',
      controlHeight: '44px',
      fontFamily: "'Press Start 2P', monospace, cursive",
      focusStyle: '0 0 0 2px #000000',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Press Start 2P', monospace, cursive",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#209cee',
      btn_primary_fg: '#ffffff',
      btn_primary_border: '4px solid #000000',
      btn_primary_shadow: 'inset -4px -4px #006bb3',
      btn_primary_hover: 'filter: brightness(1.1);',
      btn_primary_active: 'box-shadow: inset 4px 4px #006bb3;',
      btn_secondary_bg: '#e7e7e7',
      btn_secondary_fg: '#212529',
      btn_secondary_border: '4px solid #000000',
      btn_secondary_shadow: 'inset -4px -4px #adafae',
      input_bg: '#ffffff',
      input_border: '4px solid #000000',
      input_shadow: 'none',
      card_bg: '#ffffff',
      card_border: '4px solid #000000',
      card_shadow: '0 4px 0 #000000',
    },
  },
  {
    id: 'rpgui',
    name: 'RPGUI',
    organization: 'Ronen Ness / RPGUI Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://ronenness.github.io/rpgui/',
    repoUrl: 'https://github.com/RonenNess/RPGUI',
    description: 'Classic 16-bit RPG video game interface CSS framework with wooden and stone containers, golden borders, health/mana bars, and parchment panels.',
    aestheticNotes: '16-bit SNES / RPG Maker game aesthetic: stone and wooden border containers, red Health / blue Mana progress indicators, and golden dialogue boxes.',
    tokens: {
      primaryColor: '#c3a177',
      borderRadius: '0px',
      controlHeight: '40px',
      fontFamily: "'Press Start 2P', monospace",
      focusStyle: '0 0 0 2px #ffd700',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Press Start 2P', monospace",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#b8860b',
      btn_primary_fg: '#ffffff',
      btn_primary_border: '3px solid #4e3825',
      btn_primary_shadow: 'inset 2px 2px 0 #ffd700, inset -2px -2px 0 #3b281c',
      btn_primary_hover: 'filter: brightness(1.15);',
      btn_primary_active: 'box-shadow: inset -2px -2px 0 #ffd700, inset 2px 2px 0 #3b281c;',
      btn_secondary_bg: '#4e3825',
      btn_secondary_fg: '#e6c8a2',
      btn_secondary_border: '3px solid #281d13',
      btn_secondary_shadow: 'inset 2px 2px 0 #7a583a, inset -2px -2px 0 #1b130c',
      input_bg: '#281d13',
      input_border: '3px solid #7a583a',
      input_shadow: 'inset 2px 2px 0 #1b130c',
      card_bg: '#3d2c1e',
      card_border: '4px solid #7a583a',
      card_shadow: 'inset 2px 2px 0 #281d13, 0 6px 12px rgba(0,0,0,0.5)',
    },
  },
  {
    id: 'terminal-css',
    name: 'Terminal.css',
    organization: 'Terminal.css Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://terminalcss.xyz/',
    repoUrl: 'https://github.com/gbl/terminal.css',
    description: 'Modern, lightweight CSS framework inspired by retro CRT terminal command lines, featuring monospace typography, green phosphor glow, and ASCII boxes.',
    aestheticNotes: 'Retro CRT terminal: pitch black background (#000000), bright phosphor green text (#00ff00), monospace typography, and ASCII box-drawn border frames.',
    tokens: {
      primaryColor: '#00ff00',
      borderRadius: '0px',
      controlHeight: '36px',
      fontFamily: "'Courier New', 'Fira Code', monospace",
      focusStyle: '0 0 0 1px #00ff00',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Courier New', 'Fira Code', monospace",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#000000',
      btn_primary_fg: '#00ff00',
      btn_primary_border: '1px solid #00ff00',
      btn_primary_shadow: '0 0 6px rgba(0, 255, 0, 0.4)',
      btn_primary_hover: 'background: #00ff00; color: #000000;',
      btn_primary_active: 'transform: scale(0.98);',
      btn_secondary_bg: '#000000',
      btn_secondary_fg: '#888888',
      btn_secondary_border: '1px solid #555555',
      btn_secondary_shadow: 'none',
      input_bg: '#000000',
      input_border: '1px solid #00ff00',
      input_shadow: '0 0 4px rgba(0, 255, 0, 0.2)',
      card_bg: '#050505',
      card_border: '1px solid #00ff00',
      card_shadow: '0 0 10px rgba(0, 255, 0, 0.25)',
    },
  },
  {
    id: 'webtui',
    name: 'WebTUI',
    organization: 'WebTUI Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://github.com/webtui/webtui',
    repoUrl: 'https://github.com/webtui/webtui',
    description: 'Terminal User Interface for web with authentic ASCII box-drawing characters, curses menus, and VT100 command-line mechanics.',
    aestheticNotes: 'ANSI/VT100 Terminal UI aesthetic: ASCII box-drawing characters, monospace fonts, CRT phosphor cyan accents, and curses window borders.',
    tokens: {
      primaryColor: '#58a6ff',
      borderRadius: '0px',
      controlHeight: '34px',
      fontFamily: "monospace",
      focusStyle: '0 0 0 1px #58a6ff',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "monospace",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#0d1117',
      btn_primary_fg: '#58a6ff',
      btn_primary_border: '1px solid #58a6ff',
      btn_primary_shadow: 'none',
      btn_primary_hover: 'background: #58a6ff; color: #0d1117;',
      btn_primary_active: 'opacity: 0.85;',
      btn_secondary_bg: '#161b22',
      btn_secondary_fg: '#c9d1d9',
      btn_secondary_border: '1px solid #30363d',
      btn_secondary_shadow: 'none',
      input_bg: '#0d1117',
      input_border: '1px solid #30363d',
      input_shadow: 'none',
      card_bg: '#0d1117',
      card_border: '2px dashed #30363d',
      card_shadow: '0 8px 16px rgba(0,0,0,0.5)',
    },
  },
  {
    id: 'xp-css',
    name: 'XP.css',
    organization: 'botoxparty / XP.css Community',
    status: 'legacy',
    type: 'legacy-ui',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://botoxparty.github.io/XP.css/',
    repoUrl: 'https://github.com/botoxparty/XP.css',
    description: 'Windows XP Luna theme UI framework replicating royal blue window bars, glossy gradient buttons, green Start button accents, and 2000s desktop UI.',
    aestheticNotes: 'Windows XP Luna blue: glossy buttons with linear gradient reflections, royal blue title bars (#0055ea), and early-2000s OS nostalgia.',
    tokens: {
      primaryColor: '#0055ea',
      borderRadius: '3px',
      controlHeight: '26px',
      fontFamily: "'Tahoma', 'MS Sans Serif', sans-serif",
      focusStyle: '0 0 0 1px #0055ea',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Tahoma', 'MS Sans Serif', sans-serif",
      btn_radius: '3px',
      input_radius: '2px',
      dlg_radius: '6px 6px 0 0',
      btn_primary_bg: 'linear-gradient(180deg, #fbfbfb 0%, #ece9d8 100%)',
      btn_primary_fg: '#000000',
      btn_primary_border: '1px solid #003c74',
      btn_primary_shadow: 'inset 0 1px 0 #ffffff, inset 0 -1px 0 #d8d4c0',
      btn_primary_hover: 'background: linear-gradient(180deg, #fff 0%, #ffe8ad 100%); border-color: #f69c00;',
      btn_primary_active: 'background: linear-gradient(180deg, #d8d4c0 0%, #ece9d8 100%);',
      btn_secondary_bg: 'linear-gradient(180deg, #ffffff 0%, #ece9d8 100%)',
      btn_secondary_fg: '#000000',
      btn_secondary_border: '1px solid #7f9db9',
      btn_secondary_shadow: 'none',
      input_bg: '#ffffff',
      input_border: '1px solid #7f9db9',
      input_shadow: 'inset 1px 1px 1px rgba(0,0,0,0.1)',
      card_bg: '#ece9d8',
      card_border: '1px solid #0055ea',
      card_shadow: '0 6px 12px rgba(0,0,0,0.3)',
    },
  },
  {
    id: '7-css',
    name: '7.css',
    organization: 'Khaled Hosseini / 7.css Community',
    status: 'legacy',
    type: 'legacy-ui',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://khang-nd.github.io/7.css/',
    repoUrl: 'https://github.com/khang-nd/7.css',
    description: 'Windows 7 Aero Glass CSS framework with translucent frosted glass frames, reflective skeuomorphic gloss buttons, and Frutiger Aero aesthetic.',
    aestheticNotes: 'Authentic 2009 Windows 7 Aero Glass: translucent blurred glass window title bars, glossy blue reflective highlights, and skeuomorphic tracks.',
    tokens: {
      primaryColor: '#2a8dd4',
      borderRadius: '3px',
      controlHeight: '26px',
      fontFamily: "'Segoe UI', Tahoma, sans-serif",
      focusStyle: '0 0 0 2px #2a8dd4',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Segoe UI', Tahoma, sans-serif",
      btn_radius: '3px',
      input_radius: '2px',
      dlg_radius: '6px',
      btn_primary_bg: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(220,235,250,0.6) 50%, rgba(185,215,245,0.9) 100%)',
      btn_primary_fg: '#000000',
      btn_primary_border: '1px solid #707070',
      btn_primary_shadow: '0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
      btn_primary_hover: 'background: linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(235,245,255,0.8) 50%, rgba(185,225,255,0.95) 100%); border-color: #3c7fb1;',
      btn_primary_active: 'background: linear-gradient(180deg, rgba(200,225,245,0.9) 0%, rgba(180,210,235,0.8) 100%);',
      btn_secondary_bg: 'linear-gradient(180deg, #f2f2f2 0%, #ebebeb 50%, #cfcfcf 100%)',
      btn_secondary_fg: '#000000',
      btn_secondary_border: '1px solid #707070',
      btn_secondary_shadow: '0 1px 2px rgba(0,0,0,0.15)',
      input_bg: '#ffffff',
      input_border: '1px solid #707070',
      input_shadow: 'inset 0 1px 1px rgba(0,0,0,0.1)',
      card_bg: '#f0f0f0',
      card_border: '1px solid #707070',
      card_shadow: '0 8px 20px rgba(0,0,0,0.25)',
    },
  },
  {
    id: 'arwes',
    name: 'Arwes',
    organization: 'Arwes Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://arwes.dev',
    repoUrl: 'https://github.com/arwes/arwes',
    description: 'Futuristic cyberpunk sci-fi UI framework with glowing neon vectors, 45-degree angled corner cuts, holographic card frames, and sci-fi HUD monitors.',
    aestheticNotes: 'High-tech cyberpunk and sci-fi HUD: glowing cyan (#00f8f8) vector frames, 45-degree angled corner clips, and holographic scanlines.',
    tokens: {
      primaryColor: '#00f8f8',
      borderRadius: '0px',
      controlHeight: '38px',
      fontFamily: "'Titillium Web', 'Orbitron', monospace, sans-serif",
      focusStyle: '0 0 8px #00f8f8',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Titillium Web', 'Orbitron', monospace, sans-serif",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: 'rgba(0, 248, 248, 0.1)',
      btn_primary_fg: '#00f8f8',
      btn_primary_border: '1px solid #00f8f8',
      btn_primary_shadow: '0 0 8px rgba(0, 248, 248, 0.3)',
      btn_primary_hover: 'background: rgba(0, 248, 248, 0.25); box-shadow: 0 0 14px #00f8f8;',
      btn_primary_active: 'background: rgba(0, 248, 248, 0.4);',
      btn_secondary_bg: 'rgba(255, 255, 255, 0.05)',
      btn_secondary_fg: '#c0ffff',
      btn_secondary_border: '1px solid #00a0a0',
      btn_secondary_shadow: 'none',
      input_bg: 'rgba(0, 20, 30, 0.8)',
      input_border: '1px solid #00f8f8',
      input_shadow: '0 0 6px rgba(0, 248, 248, 0.2)',
      card_bg: '#041018',
      card_border: '1px solid #00f8f8',
      card_shadow: '0 0 16px rgba(0, 248, 248, 0.25)',
    },
  },
  {
    id: 'warcraftcn-ui',
    name: 'warcraftcn/ui',
    organization: 'warcraftcn Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://warcraftcn.com',
    repoUrl: 'https://github.com/warcraftcn/ui',
    description: 'Component library bringing the iconic World of Warcraft fantasy gaming aesthetic with parchment paper dialogs, stone and gold beveled frames.',
    aestheticNotes: 'Epic fantasy video game: Warcraft gold-trimmed beveled borders, parchment quest scroll dialogs, spell action buttons, and dark stone surfaces.',
    tokens: {
      primaryColor: '#ffd100',
      borderRadius: '2px',
      controlHeight: '36px',
      fontFamily: "'Cinzel', 'Trajan Pro', Georgia, serif",
      focusStyle: '0 0 0 2px #ffd100',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Cinzel', 'Trajan Pro', Georgia, serif",
      btn_radius: '2px',
      input_radius: '2px',
      dlg_radius: '4px',
      btn_primary_bg: '#2e261f',
      btn_primary_fg: '#ffd100',
      btn_primary_border: '2px solid #b38e44',
      btn_primary_shadow: 'inset 0 0 4px #000000, 0 2px 4px rgba(0,0,0,0.5)',
      btn_primary_hover: 'background: #3e332a; border-color: #ffd100; box-shadow: 0 0 8px rgba(255,209,0,0.4);',
      btn_primary_active: 'transform: translateY(1px);',
      btn_secondary_bg: '#1c1815',
      btn_secondary_fg: '#c9b99a',
      btn_secondary_border: '2px solid #5a4933',
      btn_secondary_shadow: 'none',
      input_bg: '#141210',
      input_border: '2px solid #735e40',
      input_shadow: 'inset 0 1px 3px #000000',
      card_bg: '#1c1815',
      card_border: '3px solid #b38e44',
      card_shadow: '0 8px 24px rgba(0,0,0,0.7)',
    },
  },
  {
    id: 'metro-ui',
    name: 'Metro UI',
    organization: 'Metro UI Community',
    status: 'legacy',
    type: 'legacy-ui',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://metroui.org.ua',
    repoUrl: 'https://github.com/olton/Metro-UI-CSS',
    description: 'Microsoft Windows 8 Modern / Metro design language framework with flat saturated color live tiles, ribbon bars, and Segoe UI typography.',
    aestheticNotes: 'Iconic Microsoft Windows 8/10 Modern Metro: bold flat color tiles, sharp 0px corners, high contrast typography, and Windows live tile grids.',
    tokens: {
      primaryColor: '#0072c6',
      borderRadius: '0px',
      controlHeight: '36px',
      fontFamily: "'Segoe UI', sans-serif",
      focusStyle: '0 0 0 2px #0072c6',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Segoe UI', sans-serif",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#0072c6',
      btn_primary_fg: '#ffffff',
      btn_primary_border: 'none',
      btn_primary_shadow: 'none',
      btn_primary_hover: 'background: #005a9e;',
      btn_primary_active: 'background: #004578;',
      btn_secondary_bg: '#cccccc',
      btn_secondary_fg: '#000000',
      btn_secondary_border: 'none',
      btn_secondary_shadow: 'none',
      input_bg: '#ffffff',
      input_border: '2px solid #cccccc',
      input_shadow: 'none',
      card_bg: '#ffffff',
      card_border: '2px solid #0072c6',
      card_shadow: 'none',
    },
  },
  {
    id: 'react95',
    name: 'React95',
    organization: 'React95 Community',
    status: 'legacy',
    type: 'legacy-ui',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://react95.io',
    repoUrl: 'https://github.com/react95/react95',
    description: 'Nostalgic Windows 95 UI component library crafted with styled-components, pixel-perfect beveled borders, retro window title bars, and desktop icons.',
    aestheticNotes: 'Windows 95 operating system: iconic desktop teal (#008080), classic grey relief (#c0c0c0), raised/recessed beveled borders, and start menu buttons.',
    tokens: {
      primaryColor: '#008080',
      borderRadius: '0px',
      controlHeight: '28px',
      fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
      focusStyle: '1px dotted #000000',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'MS Sans Serif', Tahoma, sans-serif",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#c0c0c0',
      btn_primary_fg: '#000000',
      btn_primary_border: '2px outset #ffffff',
      btn_primary_shadow: 'inset 1px 1px #dfdfdf, inset -1px -1px #808080',
      btn_primary_hover: 'filter: brightness(0.95);',
      btn_primary_active: 'border-style: inset; box-shadow: inset 1px 1px #808080;',
      btn_secondary_bg: '#c0c0c0',
      btn_secondary_fg: '#000000',
      btn_secondary_border: '2px outset #ffffff',
      btn_secondary_shadow: 'none',
      input_bg: '#ffffff',
      input_border: '2px inset #808080',
      input_shadow: 'none',
      card_bg: '#c0c0c0',
      card_border: '2px outset #ffffff',
      card_shadow: '2px 2px 0 #000000',
    },
  },
  {
    id: 'neobrutalism',
    name: 'Neobrutalism UI',
    organization: 'Neobrutalism Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://neobrutalism.dev',
    repoUrl: 'https://github.com/ekmas/neobrutalism-components',
    description: 'Edgy neo-brutalist component design system with thick 3px solid black borders, hard unblurred drop shadows, and hyper-saturated candy pop colors.',
    aestheticNotes: 'Neo-brutalist pop style: 3px solid black outlines, hard unblurred offset drop shadows (4px 4px 0 #000), bold sans-serif type, and electric candy yellow (#fee140).',
    tokens: {
      primaryColor: '#fee140',
      borderRadius: '0px',
      controlHeight: '42px',
      fontFamily: "'Space Grotesk', 'Public Sans', system-ui, sans-serif",
      focusStyle: '0 0 0 3px #000000',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Space Grotesk', 'Public Sans', system-ui, sans-serif",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#fee140',
      btn_primary_fg: '#000000',
      btn_primary_border: '3px solid #000000',
      btn_primary_shadow: '4px 4px 0 #000000',
      btn_primary_hover: 'transform: translate(-1px, -1px); box-shadow: 5px 5px 0 #000000;',
      btn_primary_active: 'transform: translate(2px, 2px); box-shadow: 2px 2px 0 #000000;',
      btn_secondary_bg: '#ffffff',
      btn_secondary_fg: '#000000',
      btn_secondary_border: '3px solid #000000',
      btn_secondary_shadow: '4px 4px 0 #000000',
      input_bg: '#ffffff',
      input_border: '3px solid #000000',
      input_shadow: '3px 3px 0 #000000',
      card_bg: '#ffffff',
      card_border: '3px solid #000000',
      card_shadow: '6px 6px 0 #000000',
    },
  },
  {
    id: 'hana-ui',
    name: 'Hana UI',
    organization: 'Hana UI Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://hana-ui.github.io',
    repoUrl: 'https://github.com/hana-ui/hana-ui',
    description: 'Anime & pastel expressive React component library designed with sakura pink and lavender accents, pill-shaped glowing buttons, and playful micro-interactions.',
    aestheticNotes: 'Playful pastel & anime aesthetic: Sakura Pink (#ffb6c1) / Lavender Purple accents, pill-shaped glowing buttons, and soft floating card overlays.',
    tokens: {
      primaryColor: '#ffb6c1',
      borderRadius: '9999px',
      controlHeight: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      focusStyle: '0 0 0 3px rgba(255, 182, 193, 0.6)',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      btn_radius: '9999px',
      input_radius: '9999px',
      dlg_radius: '20px',
      btn_primary_bg: '#ffb6c1',
      btn_primary_fg: '#ffffff',
      btn_primary_border: '2px solid #ff99b3',
      btn_primary_shadow: '0 4px 14px rgba(255, 182, 193, 0.5)',
      btn_primary_hover: 'filter: brightness(1.05); transform: translateY(-1px);',
      btn_primary_active: 'transform: translateY(1px);',
      btn_secondary_bg: '#fff0f5',
      btn_secondary_fg: '#d63384',
      btn_secondary_border: '2px solid #ffb6c1',
      btn_secondary_shadow: 'none',
      input_bg: '#fffafd',
      input_border: '2px solid #ffd1dc',
      input_shadow: 'inset 0 1px 3px rgba(255,182,193,0.2)',
      card_bg: '#ffffff',
      card_border: '2px solid #ffd1dc',
      card_shadow: '0 10px 25px rgba(255, 182, 193, 0.3)',
    },
  },
  {
    id: 'vengeance-ui',
    name: 'VengeanceUI',
    organization: 'VengeanceUI Community',
    status: 'active',
    type: 'ui-library',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://vengeanceui.com',
    repoUrl: 'https://github.com/vengeance-ui/vengeance-ui',
    description: 'Component library inspired by dark brutalism, high-contrast cyberpunk accents, sharp 0px corners, and aggressive neon typography.',
    aestheticNotes: 'Dark brutalist cyberpunk aesthetic: high-contrast neon crimson (#ff003c) / electric lime (#00ff66) accents, sharp 0px border-radii, and technical badges.',
    tokens: {
      primaryColor: '#ff003c',
      borderRadius: '0px',
      controlHeight: '38px',
      fontFamily: "'Share Tech Mono', 'Courier New', monospace",
      focusStyle: '0 0 10px #ff003c',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Share Tech Mono', 'Courier New', monospace",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#ff003c',
      btn_primary_fg: '#000000',
      btn_primary_border: '2px solid #ff003c',
      btn_primary_shadow: '0 0 10px rgba(255, 0, 60, 0.4)',
      btn_primary_hover: 'background: #000000; color: #ff003c; box-shadow: 0 0 16px #ff003c;',
      btn_primary_active: 'opacity: 0.9;',
      btn_secondary_bg: '#0a0a0c',
      btn_secondary_fg: '#00ff66',
      btn_secondary_border: '2px solid #00ff66',
      btn_secondary_shadow: '0 0 8px rgba(0, 255, 102, 0.3)',
      input_bg: '#0a0a0c',
      input_border: '2px solid #333338',
      input_shadow: 'none',
      card_bg: '#0a0a0c',
      card_border: '2px solid #ff003c',
      card_shadow: '0 0 20px rgba(255, 0, 60, 0.3)',
    },
  },
  {
    id: 'psone-css',
    name: 'PSone.css',
    organization: 'AisVisual / PSone Community',
    status: 'legacy',
    type: 'legacy-ui',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://github.com/AisVisual/PSone.css',
    repoUrl: 'https://github.com/AisVisual/PSone.css',
    description: 'PlayStation 1 retro 32-bit console UI framework with grey memory card blocks, classic PS1 start menu buttons, and DualShock symbol accents.',
    aestheticNotes: 'Authentic 1994 PS1 console BIOS: matte grey chassis tones (#2a2a2e), beveled memory card relief borders, and pixelated action prompts.',
    tokens: {
      primaryColor: '#003791',
      borderRadius: '0px',
      controlHeight: '36px',
      fontFamily: "'Press Start 2P', monospace",
      focusStyle: '0 0 0 2px #003791',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Press Start 2P', monospace",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#3c3c44',
      btn_primary_fg: '#00ffff',
      btn_primary_border: '3px solid #8e8e93',
      btn_primary_shadow: 'inset 2px 2px 0 #c7c7cc, inset -2px -2px 0 #000000',
      btn_primary_hover: 'filter: brightness(1.2);',
      btn_primary_active: 'box-shadow: inset -2px -2px 0 #c7c7cc, inset 2px 2px 0 #000000;',
      btn_secondary_bg: '#232328',
      btn_secondary_fg: '#ffffff',
      btn_secondary_border: '3px solid #55555c',
      btn_secondary_shadow: 'inset 2px 2px 0 #777780, inset -2px -2px 0 #111114',
      input_bg: '#18181c',
      input_border: '3px solid #55555c',
      input_shadow: 'inset 2px 2px 0 #000000',
      card_bg: '#2a2a2e',
      card_border: '4px solid #8e8e93',
      card_shadow: 'inset 2px 2px 0 #c7c7cc, 0 8px 16px rgba(0,0,0,0.6)',
    },
  },
  {
    id: 'c64-css',
    name: 'Commodore 64 CSS',
    organization: 'C64 Web Community',
    status: 'legacy',
    type: 'legacy-ui',
    category: 'specialty-retro',
    categoryLabel: 'Specialty & Retro',
    docsUrl: 'https://github.com/c64-css/c64-css',
    repoUrl: 'https://github.com/c64-css/c64-css',
    description: 'Commodore 64 8-bit home computer UI framework replicating the iconic 1982 C64 BASIC screen with deep blue background and light blue uppercase typography.',
    aestheticNotes: 'Classic 1982 Commodore 64 PETSCII: deep blue background (#4040e0), thick light blue outer border (#a0a0ff), and blocky 8-bit uppercase text.',
    tokens: {
      primaryColor: '#a0a0ff',
      borderRadius: '0px',
      controlHeight: '36px',
      fontFamily: "'Courier New', monospace",
      focusStyle: '0 0 0 2px #a0a0ff',
    },
    componentSupport: { button: true, input: true, select: true, radio: true, checkbox: true, switch: true, textarea: true, tabs: true, dialog: true, tooltip: true },
    css: {
      font: "'Courier New', monospace",
      btn_radius: '0px',
      input_radius: '0px',
      dlg_radius: '0px',
      btn_primary_bg: '#4040e0',
      btn_primary_fg: '#a0a0ff',
      btn_primary_border: '3px solid #a0a0ff',
      btn_primary_shadow: 'none',
      btn_primary_hover: 'background: #a0a0ff; color: #4040e0;',
      btn_primary_active: 'opacity: 0.9;',
      btn_secondary_bg: '#4040e0',
      btn_secondary_fg: '#ffffff',
      btn_secondary_border: '2px solid #7070c0',
      btn_secondary_shadow: 'none',
      input_bg: '#4040e0',
      input_border: '3px solid #a0a0ff',
      input_shadow: 'none',
      card_bg: '#4040e0',
      card_border: '4px solid #a0a0ff',
      card_shadow: '0 0 12px rgba(160, 160, 255, 0.4)',
    },
  },
];

console.log(`Starting generation of ${RETRO_WEIRD_SYSTEMS.length} retro & weird UI systems...`);

// 1. Read existing data.ts to obtain current 114 systems
const currentDataTs = fs.readFileSync(DATA_FILE, 'utf-8');
const match = currentDataTs.match(/export const DESIGN_SYSTEMS: DesignSystemMeta\[\] = (\[[\s\S]*?\]);\n/);
if (!match) {
  throw new Error('Could not parse DESIGN_SYSTEMS from data.ts');
}

const existingSystems = JSON.parse(match[1]);
console.log(`Loaded ${existingSystems.length} existing systems from data.ts.`);

// Build new 16 system metadata objects
const newSystemMetas = RETRO_WEIRD_SYSTEMS.map(s => ({
  id: s.id,
  name: s.name,
  organization: s.organization,
  status: s.status,
  type: s.type,
  category: s.category,
  categoryLabel: s.categoryLabel,
  docsUrl: s.docsUrl,
  repoUrl: s.repoUrl,
  description: s.description,
  aestheticNotes: s.aestheticNotes,
  tokens: s.tokens,
  componentSupport: s.componentSupport,
  variants: {
    buttons: ['primary', 'secondary', 'tertiary', 'danger'],
    inputs: ['default', 'filled', 'error', 'disabled'],
    selects: ['default', 'disabled'],
    radios: ['default', 'disabled'],
    checkboxes: ['default', 'indeterminate', 'disabled'],
    switches: ['default', 'disabled'],
    textareas: ['default', 'error', 'disabled'],
    tabs: ['default'],
    dialogs: ['default'],
    tooltips: ['default'],
  },
  canonicalCode: {
    button: `<button className="ds-btn-${s.id} ds-btn-${s.id}-primary">Action</button>`,
    input: `<input className="ds-input-${s.id}" placeholder="Enter text..." />`,
    select: `<select className="ds-select-${s.id}"><option>Option 1</option></select>`,
    radio: `<input type="radio" className="ds-radio-${s.id}" name="group" />`,
    checkbox: `<input type="checkbox" className="ds-checkbox-${s.id}" />`,
    switch: `<button role="switch" aria-checked={checked} className="ds-switch-track-${s.id}" />`,
    textarea: `<textarea className="ds-textarea-${s.id}" rows={4} />`,
    tabs: `<div className="ds-tablist-${s.id}"><button className="ds-tab-${s.id} active">Overview</button></div>`,
    dialog: `<div className="ds-dialog-box-${s.id}"><h3 className="ds-dialog-header-${s.id}">Dialog</h3></div>`,
    tooltip: `<div className="ds-tooltip-bubble-${s.id}">Tooltip info</div>`,
  },
}));

// Filter out any that might already exist
const finalSystems = [...existingSystems];
for (const ns of newSystemMetas) {
  if (!finalSystems.find(x => x.id === ns.id)) {
    finalSystems.push(ns);
  }
}

console.log(`Total systems after adding retro/weird systems: ${finalSystems.length}`);

// Write updated data.ts
const updatedDataTs = `import { DesignSystemMeta } from '../types.ts';\n\nexport const DESIGN_SYSTEMS: DesignSystemMeta[] = ${JSON.stringify(finalSystems, null, 2)};\n`;
fs.writeFileSync(DATA_FILE, updatedDataTs);
console.log('Updated gallery/src/registry/data.ts.');

// 2. Component Templates
const BTN_TMPL = `import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Interactive Counter &amp; Variants
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            className="ds-btn-SID ds-btn-SID-primary"
            onClick={() => setCount(c => c + 1)}
          >
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-primary">
            Primary Action
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-secondary">
            Secondary Action
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-tertiary">
            Ghost / Outline
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-danger">
            Destructive
          </button>
          <button type="button" className="ds-btn-SID ds-btn-SID-primary" disabled>
            Disabled
          </button>
        </div>
      </div>
    </div>
  );
};
`;

const INP_TMPL = `import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-SID" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-SID">Standard Field</label>
        <input
          type="text"
          className="ds-input-SID"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-SID">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-SID">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-SID"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-SID">Validation Error</label>
        <input
          type="text"
          className="ds-input-SID error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-SID">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-SID">Disabled State</label>
        <input
          type="text"
          className="ds-input-SID"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
`;

const SEL_TMPL = `import React, { useState } from 'react';

export const Select: React.FC = () => {
  const [selected, setSelected] = useState('us-east');

  return (
    <div className="ds-SID" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-SID">Primary Select</label>
        <select
          className="ds-select-SID"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          <option value="us-east">US East (N. Virginia)</option>
          <option value="us-west">US West (Oregon)</option>
          <option value="eu-central">EU Central (Frankfurt)</option>
          <option value="ap-southeast">AP Southeast (Singapore)</option>
        </select>
        <span className="ds-helper-SID">Select an active compute zone</span>
      </div>

      <div>
        <label className="ds-label-SID">Disabled Select</label>
        <select className="ds-select-SID" disabled defaultValue="locked">
          <option value="locked">Region Locked (Compliance)</option>
        </select>
      </div>
    </div>
  );
};
`;

const RAD_TMPL = `import React, { useState } from 'react';

export const Radio: React.FC = () => {
  const [tier, setTier] = useState('pro');

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <label className="ds-label-SID">Deployment Tier</label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
          <input
            type="radio"
            name="tier-SID"
            className="ds-radio-SID"
            checked={tier === 'starter'}
            onChange={() => setTier('starter')}
          />
          <span>Starter (Single node)</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
          <input
            type="radio"
            name="tier-SID"
            className="ds-radio-SID"
            checked={tier === 'pro'}
            onChange={() => setTier('pro')}
          />
          <span>Professional (High availability cluster)</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'not-allowed', fontSize: '14px', opacity: 0.6 }}>
          <input
            type="radio"
            name="tier-SID"
            className="ds-radio-SID"
            disabled
          />
          <span>Enterprise Dedicated (Requires contact)</span>
        </label>
      </div>
    </div>
  );
};
`;

const CHK_TMPL = `import React, { useState } from 'react';

export const Checkbox: React.FC = () => {
  const [agree, setAgree] = useState(true);
  const [telemetry, setTelemetry] = useState(false);

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <label className="ds-label-SID">Permissions &amp; Features</label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
          <input
            type="checkbox"
            className="ds-checkbox-SID"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
          />
          <span>Enable automated rollback on healthcheck failure</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
          <input
            type="checkbox"
            className="ds-checkbox-SID"
            checked={telemetry}
            onChange={e => setTelemetry(e.target.checked)}
          />
          <span>Export real-time audit logs to telemetry lake</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'not-allowed', fontSize: '14px', opacity: 0.5 }}>
          <input
            type="checkbox"
            className="ds-checkbox-SID"
            checked
            disabled
          />
          <span>Mandatory encryption at rest (AES-256)</span>
        </label>
      </div>
    </div>
  );
};
`;

const SW_TMPL = `import React, { useState } from 'react';

export const Switch: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const [maintenance, setMaintenance] = useState(false);

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <label className="ds-label-SID">Service Settings</label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            role="switch"
            aria-checked={enabled}
            className={\`ds-switch-track-SID \${enabled ? 'checked' : ''}\`}
            onClick={() => setEnabled(!enabled)}
          >
            <span className={\`ds-switch-thumb-SID \${enabled ? 'checked' : ''}\`} />
          </button>
          <span style={{ fontSize: '14px' }}>
            Production traffic routing: <strong>{enabled ? 'Active' : 'Paused'}</strong>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            role="switch"
            aria-checked={maintenance}
            className={\`ds-switch-track-SID \${maintenance ? 'checked' : ''}\`}
            onClick={() => setMaintenance(!maintenance)}
          >
            <span className={\`ds-switch-thumb-SID \${maintenance ? 'checked' : ''}\`} />
          </button>
          <span style={{ fontSize: '14px' }}>
            Maintenance mode: <strong>{maintenance ? 'Enabled' : 'Disabled'}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
`;

const TA_TMPL = `import React, { useState } from 'react';

export const Textarea: React.FC = () => {
  const [notes, setNotes] = useState('');

  return (
    <div className="ds-SID" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <label className="ds-label-SID" style={{ margin: 0 }}>Release Notes</label>
          <span style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>{notes.length} / 500</span>
        </div>
        <textarea
          className="ds-textarea-SID"
          rows={4}
          placeholder="Document service changelog, migration steps, and deployment sign-offs..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
        <span className="ds-helper-SID">Markdown formatting supported</span>
      </div>

      <div>
        <label className="ds-label-SID">Audit Record (Read-Only)</label>
        <textarea
          className="ds-textarea-SID"
          rows={4}
          disabled
          defaultValue="Read-only audit trail: Configuration checksum sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 verified by cluster orchestrator."
        />
      </div>
    </div>
  );
};
`;

const TAB_TMPL = `import React, { useState } from 'react';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'security'>('overview');

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="ds-tablist-SID" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'overview'}
          className={\`ds-tab-SID \${activeTab === 'overview' ? 'active' : ''}\`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'metrics'}
          className={\`ds-tab-SID \${activeTab === 'metrics' ? 'active' : ''}\`}
          onClick={() => setActiveTab('metrics')}
        >
          Metrics &amp; Logs
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'security'}
          className={\`ds-tab-SID \${activeTab === 'security' ? 'active' : ''}\`}
          onClick={() => setActiveTab('security')}
        >
          Security Policies
        </button>
      </div>

      <div className="ds-tabpanel-SID" role="tabpanel">
        {activeTab === 'overview' && (
          <div>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              Cluster status: <strong>Healthy</strong>. 24 container instances actively serving requests across 3 availability zones with 99.99% uptime.
            </p>
          </div>
        )}
        {activeTab === 'metrics' && (
          <div>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              Throughput: <strong>14,280 req/sec</strong>. Mean latency: <strong>18ms</strong>. P99 latency: <strong>42ms</strong>. Zero dropped packets in the last 24 hours.
            </p>
          </div>
        )}
        {activeTab === 'security' && (
          <div>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              mTLS 1.3 enforced. RBAC sync operational. Next credential rotation scheduled in 14 days. Zero vulnerabilities detected.
            </p>
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <div className="ds-SID" style={{ padding: '8px 0' }}>
      <button
        type="button"
        className="ds-btn-SID ds-btn-SID-primary"
        onClick={() => setIsOpen(true)}
      >
        Open Confirmation Dialog
      </button>

      {isOpen && (
        <div className="ds-dialog-overlay-SID" onClick={() => setIsOpen(false)}>
          <div
            className="ds-dialog-box-SID"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="ds-dialog-header-SID">
              <span>Deprovision Resource Cluster</span>
              <button
                type="button"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', color: 'var(--fg-muted)' }}
                onClick={() => setIsOpen(false)}
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

// 3. Write component files for all 16 systems
console.log('Writing components for 16 retro & weird systems...');
for (const s of RETRO_WEIRD_SYSTEMS) {
  const sid = s.id;
  const sdir = path.join(DS_DIR, sid);
  if (!fs.existsSync(sdir)) {
    fs.mkdirSync(sdir, { recursive: true });
  }

  fs.writeFileSync(path.join(sdir, 'Button.tsx'), BTN_TMPL.replaceAll('SID', sid));
  fs.writeFileSync(path.join(sdir, 'Input.tsx'), INP_TMPL.replaceAll('SID', sid));
  fs.writeFileSync(path.join(sdir, 'Select.tsx'), SEL_TMPL.replaceAll('SID', sid));
  fs.writeFileSync(path.join(sdir, 'Radio.tsx'), RAD_TMPL.replaceAll('SID', sid));
  fs.writeFileSync(path.join(sdir, 'Checkbox.tsx'), CHK_TMPL.replaceAll('SID', sid));
  fs.writeFileSync(path.join(sdir, 'Switch.tsx'), SW_TMPL.replaceAll('SID', sid));
  fs.writeFileSync(path.join(sdir, 'Textarea.tsx'), TA_TMPL.replaceAll('SID', sid));
  fs.writeFileSync(path.join(sdir, 'Tabs.tsx'), TAB_TMPL.replaceAll('SID', sid));
  fs.writeFileSync(path.join(sdir, 'Dialog.tsx'), DLG_TMPL.replaceAll('SID', sid));
  fs.writeFileSync(path.join(sdir, 'Tooltip.tsx'), TT_TMPL.replaceAll('SID', sid));

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
console.log('Created components for all 16 retro & weird systems.');

// 4. Append scoped CSS to design-systems.css
const existingCss = fs.readFileSync(STYLES_FILE, 'utf-8');
const cssChunks = [existingCss];

for (const s of RETRO_WEIRD_SYSTEMS) {
  const sid = s.id;
  const c = s.css;
  const primary = s.tokens.primaryColor;
  const focus = s.tokens.focusStyle;

  cssChunks.push(`
/* ================= ${s.name.toUpperCase()} (${sid}) ================= */
.ds-${sid} { font-family: ${c.font}; box-sizing: border-box; }
.ds-${sid} * { box-sizing: border-box; }

/* Buttons */
.ds-btn-${sid} {
  font-family: ${c.font};
  font-size: 13px;
  font-weight: 600;
  height: ${s.tokens.controlHeight};
  padding: 0 16px;
  border-radius: ${c.btn_radius};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.15s ease;
  line-height: 1;
  text-decoration: none;
}
.ds-btn-${sid}:focus-visible { box-shadow: ${focus}; outline: none; }
.ds-btn-${sid}:disabled { opacity: 0.45; cursor: not-allowed; }

.ds-btn-${sid}-primary {
  background: ${c.btn_primary_bg};
  color: ${c.btn_primary_fg};
  border: ${c.btn_primary_border};
  box-shadow: ${c.btn_primary_shadow};
}
.ds-btn-${sid}-primary:hover:not(:disabled) {
  ${c.btn_primary_hover}
}
.ds-btn-${sid}-primary:active:not(:disabled) {
  ${c.btn_primary_active}
}

.ds-btn-${sid}-secondary {
  background: ${c.btn_secondary_bg};
  color: ${c.btn_secondary_fg};
  border: ${c.btn_secondary_border};
  box-shadow: ${c.btn_secondary_shadow};
}
.ds-btn-${sid}-secondary:hover:not(:disabled) {
  filter: brightness(0.95);
}

.ds-btn-${sid}-tertiary {
  background: transparent;
  color: ${primary};
  border: 1px dashed ${primary};
}
.ds-btn-${sid}-tertiary:hover:not(:disabled) {
  background: rgba(0,0,0,0.06);
}

.ds-btn-${sid}-danger {
  background: #d32f2f;
  color: #ffffff;
  border: 1px solid #b71c1c;
}
.ds-btn-${sid}-danger:hover:not(:disabled) {
  background: #b71c1c;
}

/* Inputs & Labels */
.ds-label-${sid} {
  font-family: ${c.font};
  font-size: 13px;
  font-weight: 600;
  color: var(--fg-default, #1f2937);
  margin-bottom: 5px;
  display: block;
}
.ds-helper-${sid} {
  font-family: ${c.font};
  font-size: 11px;
  color: var(--fg-muted, #6b7280);
  margin-top: 4px;
  display: block;
}
.ds-error-text-${sid} {
  font-family: ${c.font};
  font-size: 11px;
  color: #d32f2f;
  margin-top: 4px;
  display: block;
  font-weight: 600;
}

.ds-input-${sid} {
  font-family: ${c.font};
  height: ${s.tokens.controlHeight};
  border-radius: ${c.input_radius};
  border: ${c.input_border};
  background: ${c.input_bg};
  box-shadow: ${c.input_shadow};
  padding: 0 12px;
  font-size: 13px;
  width: 100%;
  color: inherit;
  transition: all 0.15s ease;
}
.ds-input-${sid}:focus { border-color: ${primary}; outline: none; box-shadow: ${focus}; }
.ds-input-${sid}.error { border-color: #d32f2f !important; }
.ds-input-${sid}:disabled { opacity: 0.5; background: #f3f4f6; cursor: not-allowed; }

/* Select */
.ds-select-${sid} {
  font-family: ${c.font};
  height: ${s.tokens.controlHeight};
  border-radius: ${c.input_radius};
  border: ${c.input_border};
  background: ${c.input_bg};
  padding: 0 12px;
  font-size: 13px;
  width: 100%;
  color: inherit;
  cursor: pointer;
  transition: all 0.15s ease;
}
.ds-select-${sid}:focus { border-color: ${primary}; outline: none; box-shadow: ${focus}; }
.ds-select-${sid}:disabled { opacity: 0.5; cursor: not-allowed; }

/* Radio & Checkbox */
.ds-radio-${sid} {
  accent-color: ${primary};
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.ds-checkbox-${sid} {
  accent-color: ${primary};
  width: 16px;
  height: 16px;
  cursor: pointer;
}

/* Switch */
.ds-switch-track-${sid} {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background-color: #d1d5db;
  border: 1px solid #9ca3af;
  position: relative;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.2s ease;
  display: inline-flex;
  align-items: center;
}
.ds-switch-track-${sid}:focus-visible { box-shadow: ${focus}; outline: none; }
.ds-switch-track-${sid}.checked { background-color: ${primary}; border-color: ${primary}; }
.ds-switch-thumb-${sid} {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  position: absolute;
  left: 2px;
  transition: transform 0.2s ease;
}
.ds-switch-thumb-${sid}.checked {
  transform: translateX(20px);
}

/* Textarea */
.ds-textarea-${sid} {
  font-family: ${c.font};
  border-radius: ${c.input_radius};
  border: ${c.input_border};
  background: ${c.input_bg};
  box-shadow: ${c.input_shadow};
  padding: 8px 12px;
  font-size: 13px;
  width: 100%;
  color: inherit;
  resize: vertical;
  line-height: 1.5;
  transition: all 0.15s ease;
}
.ds-textarea-${sid}:focus { border-color: ${primary}; outline: none; box-shadow: ${focus}; }
.ds-textarea-${sid}.error { border-color: #d32f2f !important; }
.ds-textarea-${sid}:disabled { opacity: 0.5; background: #f3f4f6; cursor: not-allowed; }

/* Tabs */
.ds-tablist-${sid} {
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${primary};
  gap: 8px;
}
.ds-tab-${sid} {
  font-family: ${c.font};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--fg-muted, #6b7280);
  padding: 8px 12px;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.15s ease;
}
.ds-tab-${sid}.active {
  color: ${primary};
  border-bottom: 2px solid ${primary};
  font-weight: 700;
}
.ds-tabpanel-${sid} { font-family: ${c.font}; padding: 12px 0; font-size: 13px; color: inherit; }

/* Dialog */
.ds-dialog-overlay-${sid} {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}
.ds-dialog-box-${sid} {
  font-family: ${c.font};
  background: ${c.card_bg};
  border-radius: ${c.dlg_radius};
  box-shadow: ${c.card_shadow};
  border: ${c.card_border};
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  color: inherit;
}
.ds-dialog-header-${sid} {
  padding: 14px 18px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 15px;
}
.ds-dialog-body-${sid} {
  padding: 18px;
  font-size: 13px;
  line-height: 1.5;
}
.ds-dialog-footer-${sid} {
  padding: 12px 18px;
  border-top: 1px solid rgba(0,0,0,0.1);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* Tooltip */
.ds-tooltip-wrapper-${sid} { position: relative; display: inline-block; }
.ds-tooltip-bubble-${sid} {
  font-family: ${c.font};
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
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);
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
console.log('Appended retro/weird styles to gallery/src/styles/design-systems.css.');

// 5. Rewrite gallery/src/registry/index.ts for all final systems
console.log(`Writing gallery/src/registry/index.ts for all ${finalSystems.length} systems...`);
const regLines = [
  "import { DesignSystemEntry } from '../types.ts';",
  "import { DESIGN_SYSTEMS } from './data.ts';\n",
];

const getVarName = (sid: string) => /^[0-9]/.test(sid) ? `ds_${sid.replace(/-/g, '_')}` : sid.replace(/-/g, '_');

for (const s of finalSystems) {
  const sid = s.id;
  const varName = getVarName(sid);
  regLines.push(`import * as ${varName}Components from '../design-systems/${sid}/index.ts';`);
}

regLines.push('\nexport const ALL_SYSTEM_ENTRIES: Record<string, DesignSystemEntry> = {');
for (const s of finalSystems) {
  const sid = s.id;
  const varName = getVarName(sid);
  regLines.push(`  '${sid}': {`);
  regLines.push(`    meta: DESIGN_SYSTEMS.find(m => m.id === '${sid}')!,`);
  regLines.push(`    components: ${varName}Components,`);
  regLines.push('  },');
}
regLines.push('};\n');

regLines.push('export const SYSTEM_LIST = Object.values(ALL_SYSTEM_ENTRIES);\n');
regLines.push("export { DESIGN_SYSTEMS } from './data.ts';\n");

fs.writeFileSync(REGISTRY_INDEX_FILE, regLines.join('\n'));
console.log(`Created gallery/src/registry/index.ts with ${finalSystems.length} systems successfully!`);
