import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Siren';


const colors = {
  black: '#111111',
  gray: '#BBBBBB',
  white: '#FFFFFF',
  amethyst: '#9B63C6',
  crimson: '#DC143C',
  burntSienna: '#E85F4A',
  red: '#FF5555',
  green: '#4F9D67',
  daisy: '#FFFB77',
  siren: '#730034',
  mid: '#C11061',
  light: '#F48DBC',
  lightest: '#DEDEDE',
  darkest: '#480021'
}

const crimson30 = colors.crimson + '30'
const green40 = colors.green + '40'

const light20 = colors.light + '20'
const light40 = colors.light + '40'
const daisyB0 = colors.daisy + 'B0'
const mid20 = colors.mid + '20'
const mid40 = colors.mid + '40'
const midB0 = colors.mid + 'B0'

const editorWidgets = {
  background: colors.darkest,
  foreground: colors.lightest,
  border: colors.siren
}

const colorSet: IColorSet = {
  base: {
    background: colors.darkest,
    foreground: colors.lightest,
    color1: colors.amethyst,
    color2: colors.red,
    color3: colors.green,
    color4: colors.daisy
  },
  overrides: {
    'activityBarBadge.background': colors.mid,
    'activityBarBadge.foreground': colors.white,
    'badge.background': colors.mid,
    'badge.foreground': colors.white,

    'descriptionForeground': colors.lightest,

    'editorWidget.background': colors.siren,
    'editorWidget.border': colors.mid,

    'editorHoverWidget.background': editorWidgets.background,
    'editorHoverWidget.border': editorWidgets.border,

    'editorGutter.background': colors.darkest,
    'editorGutter.addedBackground': colors.green,
    'editorGutter.deletedBackground': colors.crimson,
    'editorGutter.modifiedBackground': colors.light,

    'editorSuggestWidget.background': editorWidgets.background,
    'editorSuggestWidget.border': editorWidgets.border,
    'editorSuggestWidget.foreground': editorWidgets.foreground,
    'editorSuggestWidget.selectedBackground': colors.siren,

    'editorCursor.background': colors.darkest,
    'editorCursor.foreground': colors.light,

    'editor.selectionBackground': light40,
    'editor.inactiveSelectionBackground': light20,
    'editor.selectionHighlightBackground': light20,
    'editor.selectionHighlightBorder': light40,

    'editor.findMatchBackground': light40,
    'editor.findMatchBorder': colors.light,
    'editor.findMatchHighlightBackground': midB0,

    'editor.findRangeHighlightBackground': mid20,
    'editor.rangeHighlightBackground': mid20,

    'editorLink.activeForeground': colors.light,
    "editorLineNumber.foreground": colors.mid,
    "editorLineNumber.activeForeground": colors.lightest,
    "editor.lineHighlightBorder": colors.mid,
    'editorRuler.foreground': colors.siren,
    'editorIndentGuide.background': colors.siren,
    'editorWhitespace.foreground': light40,
    'editorBracketMatch.background': colors.black,
    'editorBracketMatch.border': colors.amethyst,
    'editorCodeLens.foreground': colors.mid,
    'editorGroup.background': colors.siren,
    'editorGroup.border': colors.siren,
    'editorGroup.dropBackground': light20,
    'editorGroupHeader.tabsBackground': colors.siren,
    'editorGroupHeader.noTabsBackground': colors.siren,
    'editorGroupHeader.tabsBorder': colors.darkest,
    'editorOverviewRuler.border': colors.siren,

    'editorError.foreground': colors.daisy,
    'editorWarning.foreground': daisyB0,
    'editorInfo.foreground': colors.light,
    'editorHint.foreground': colors.mid,

    'diffEditor.insertedTextBackground': green40,
    'diffEditor.removedTextBackground': crimson30,

    'button.background': colors.mid,
    'button.foreground': colors.lightest,
    'button.hoverBackground': colors.light,

    'selection.background': colors.light,
    'input.background': colors.darkest,
    'input.border': colors.mid,
    'input.foreground': colors.lightest,
    'input.placeholderForeground': colors.light,
    'inputOption.activeBorder': colors.light,

    'inputValidation.errorBackground': colors.siren,
    'inputValidation.errorBorder': colors.crimson,

    'inputValidation.infoBackground': colors.siren,
    'inputValidation.infoBorder': colors.mid,

    'inputValidation.warningBackground': colors.siren,
    'inputValidation.warningBorder': colors.light,

    'list.activeSelectionBackground': colors.mid,
    'list.inactiveSelectionBackground': midB0,
    'list.focusBackground': mid40,
    'list.hoverBackground': mid40,
    'list.highlightForeground': colors.white,

    'panelTitle.activeBorder': colors.light,
    focusBorder: colors.light,
    'tab.activeBackground': colors.darkest,
    'tab.activeBorder': colors.darkest,
    'tab.unfocusedActiveBorder': colors.darkest,
    'sideBar.background': colors.siren,
    'sideBar.border': colors.siren,
    'sideBar.foreground': colors.lightest,
    'sideBar.dropBackground': light20,
    'statusBar.background': colors.siren,
    'statusBar.border': colors.siren,
    'statusBar.foreground': colors.lightest,
    'panel.background': colors.darkest,
    'panel.border': colors.siren,
    'widget.shadow': colors.darkest,
    'scrollbar.shadow': colors.darkest,

    'gitDecoration.conflictingResourceForeground': colors.lightest,
    'gitDecoration.deletedResourceForeground': colors.crimson,
    'gitDecoration.modifiedResourceForeground': colors.green,
    'gitDecoration.untrackedResourceForeground': colors.gray,
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
