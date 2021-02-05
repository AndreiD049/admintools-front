import React, { useState } from 'react';
import {
  Panel, PanelType,
} from '@fluentui/react';

const usePanel = (onRenderComponent, options = {}) => {
  const [isOpen, setOpen] = useState(false);

  const render = (
    <Panel
      isOpen={isOpen}
      onDismiss={(options?.onDismiss && options.onDismiss(isOpen, setOpen))
        ?? (() => setOpen(false))}
      type={options.type ?? PanelType.smallFixedFar}
      headerText={options.headerText ?? 'Panel'}
      isLightDismiss={options.isLightDismiss ?? false}
      onRenderFooterContent={options.onRenderFooterContent ?? (() => null)}
      isFooterAtBottom={options.isFooterAtBottom ?? false}
    >
      {
        isOpen
          ? onRenderComponent(setOpen)
          : null
      }
    </Panel>
  );

  return {
    isOpen, setOpen, render,
  };
};

export default usePanel;
