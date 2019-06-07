import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

// Option defaults:
addDecorator(
  withOptions({
    name: 'Extendeal UI Toolkit',
    showStoriesPanel: true,
    showAddonPanel: false,
    showSearchBox: false,
    theme: {
      mainBackground: '#FFFFFF',
      mainBorderRadius: 4,
      mainTextColor: '#2C4560',
      BASE_FONT_FAMILY: 'Source Sans Pro'
    }
  }),
);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../stories/", true, /.stories\.js?$/))
}

configure(loadStories, module);