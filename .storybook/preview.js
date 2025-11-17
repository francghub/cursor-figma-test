import { addParameters } from '@storybook/react';
import '../src/design-tokens/tokens.css';

// Global parameters for all stories
export const parameters = {
  // Actions
  actions: { argTypesRegex: '^on[A-Z].*' },
  
  // Controls
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    sort: 'alpha'
  },
  
  // Docs
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
  
  // Layout
  layout: 'centered',
  
  // Viewport addon
  viewport: {
    viewports: {
      // Custom viewports based on AppBar responsive breakpoints
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      tablet: {
        name: 'Tablet (Logo Collapse)',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1280px',
          height: '800px',
        },
      },
      wide: {
        name: 'Wide (Logo Expand)',
        styles: {
          width: '1920px',
          height: '1080px',
        },
      },
    },
    defaultViewport: 'desktop',
  },
  
  // Backgrounds
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark', 
        value: '#1a1a1a',
      },
      {
        name: 'figma-bg',
        value: '#f5f5f5',
      },
    ],
  },
  
  // A11y addon
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true
  }
};

// Global decorators
export const decorators = [
  (Story) => (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: 0,
      padding: 0
    }}>
      <Story />
    </div>
  ),
];

// Theme for AppBar stories
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'AppBar theme variants',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'default', title: 'Default (Figma)' },
        { value: 'dark', title: 'Dark Mode' },
        { value: 'compact', title: 'Compact' }
      ],
      showName: true,
    },
  },
  
  figmaSync: {
    name: 'Figma Sync',
    description: 'Show Figma synchronization status',
    defaultValue: 'synced',
    toolbar: {
      icon: 'component',
      items: [
        { value: 'synced', title: '✅ Synced with Figma' },
        { value: 'outdated', title: '⚠️ Needs Sync' },
        { value: 'offline', title: '❌ Offline' }
      ],
      showName: true,
    },
  }
};



