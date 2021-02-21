import React, { useState } from 'react';
import {
  Dialog, DialogFooter, DialogType,
} from '@fluentui/react';

/**
 * @param {Function} onRenderComponent
 * @param {Object} options
 * @param {Function} options.onDismiss
 * @param {Boolean} options.isBlocking
 * @param {Number} options.type
 * @param {String} options.title
 * @param {String} options.subText
 * @param {Function} options.dialogFooter
 */
const useDialog = (onRenderComponent = null, options = {}) => {
  const [visible, setVisible] = useState(false);
  const [onRender, setOnRender] = useState(() => (onRenderComponent ?? (() => null)));

  const render = (
    <Dialog
      hidden={!visible}
      onDismiss={options.onDismiss ?? (() => setVisible(false))}
      modalProps={{
        isBlocking: options.isBlocking ?? false,
      }}
      dialogContentProps={{
        type: options.type ?? DialogType.normal,
        title: options.title ?? 'Title',
        subText: options.subText ?? '',
      }}
    >
      {
        visible
          ? onRender(setVisible)
          : null
      }
      {
        options.dialogFooter
          ? (
            <DialogFooter>
              { options.dialogFooter(setVisible) }
            </DialogFooter>
          )
          : null
      }
    </Dialog>
  );

  return {
    visible, setVisible, render, setOnRender,
  };
};

export default useDialog;
