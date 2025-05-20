// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
// @ts-check

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Project Documentation',
      collapsible: true,
      collapsed: false,
      items: [
        'documentation',
        'overview',
        'installation',
        'usage',
        'faqs',
      ],
    },
    {
      type: 'category',
      label: 'Handoff Documentation',
      collapsible: true,
      collapsed: false,
      items: [
        'handoff/handoff-documentation',
        'handoff/overview',
        'handoff/next-steps',
        'handoff/credits',
        'handoff/acknowledgements',
      ],
    },
  ],
};

export default sidebars;
