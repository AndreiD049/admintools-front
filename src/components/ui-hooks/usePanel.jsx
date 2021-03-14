import React, { useState, createContext, useRef } from 'react';
import {
  Panel, PanelType,
} from '@fluentui/react';

const PanelContext = createContext({
  isPanel: false,
  isOpen: null,
  setOpen: null,
  onRenderFooter: null,
  setOnRenderFooter: null,
});

/**
 * @param {Object} onRenderComponent
 * @param {Object} options
 * @param {Function} options.onDismiss
 * @param {Number} options.type
 * @param {String} options.headerText
 * @param {Boolean} options.isLightDismiss
 * @param {Function} options.onRenderFooterContent
 * @param {Boolean} options.isFooterAtBottom
 * @param {String} options.id
 */
const usePanel = (Component, options = {}, componentProps = {}) => {
  const [isOpen, setOpen] = useState(false);
  const [onRenderFooter, setOnRenderFooter] = useState(() => options.onRenderFooterContent);
  const componentRef = useRef(null);
  const [ctx] = useState({
    isPanel: true,
    isOpen,
    setOpen,
    onRenderFooter,
    setOnRenderFooter,
  });

  const render = (
    <PanelContext.Provider value={ctx}>
      <Panel
        id={options.id ?? 'use-panel'}
        componentRef={componentRef}
        isOpen={isOpen}
        onDismiss={(options?.onDismiss && options.onDismiss(isOpen, setOpen))
        ?? (() => setOpen(false))}
        type={options.type ?? PanelType.smallFixedFar}
        headerText={options.headerText ?? 'Panel'}
        isLightDismiss={options.isLightDismiss ?? false}
        onRenderFooterContent={onRenderFooter}
        isFooterAtBottom={options.isFooterAtBottom ?? false}
      >
        {
        isOpen
          // eslint-disable-next-line react/jsx-props-no-spreading
          ? <Component isOpen={isOpen} setOpen={setOpen} {...componentProps} />
          : null
      }
      </Panel>
    </PanelContext.Provider>
  );

  return {
    isOpen, setOpen, render, componentRef,
  };
};

export default usePanel;

export {
  PanelContext,
};
