import React from 'react';
import { Title, Description, Primary, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';

const CustomPage = () => (
  <div style={{ padding: '20px' }}>
    <span style={{ color: 'white', fontSize: '14px', marginBottom: '40px', display: 'block' }}>
      Before creating a story, take time to read the instructions from{' '}
      <a style={{ color: '#1EA7FD' }} href="/?path=/docs/introduction-to-creating-stories--page">
        Introduction to Creating Stories
      </a>{' '}
      for better documentation.
    </span>
    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <div style={{marginBottom: '10px'}}><Title/></div>
      <Description />
    </div>
    <div>
      <h2 style={{ color: 'white' }}>Basic Example</h2>
      <Primary/>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: 'white' }}>Props</h2>
        <ArgsTable story={PRIMARY_STORY} />
      </div>
      <div style={{ borderBottom: '1px solid #ccc', marginBottom: '40px'}}></div>
      <Stories/>
    </div>
  </div>
);

export default CustomPage;