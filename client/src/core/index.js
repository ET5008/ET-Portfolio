// Core Portfolio System - Version-agnostic infrastructure

// Routing
export { default as VersionRouter } from './routing/VersionRouter';

// Context & State Management
export { VersionProvider, useVersion } from './context/VersionContext';

// Hooks
export { default as useVersionHistory } from './hooks/useVersionHistory';
