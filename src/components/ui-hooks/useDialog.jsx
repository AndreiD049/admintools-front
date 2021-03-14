/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useEffect, useState } from 'react';
import {
  Dialog, DialogFooter, DialogType,
} from '@fluentui/react';
import constants from '../../utils/constants';

const DialogContext = createContext({
  isDialog: false,
  isVisible: false,
  setVisible: null,
  show: null,
  accept: null,
  cancel: null,
  resolve: null,
  setResolve: null,
  dialogFooter: null,
  setDialogFooter: null,
});

/**
 * @param {Object} Component
 * @param {Object} options
 * @param {Function} options.onDismiss
 * @param {Boolean} options.isBlocking
 * @param {Number} options.type
 * @param {String} options.title
 * @param {String} options.subText
 * @param {Function} options.dialogFooter
 * @param {Object} componentProps
 */
const useDialog = (Component, options = {}, componentProps = {}) => {
  const [visible, setVisible] = useState(false);
  const [resolve, setResolve] = useState(null);
  const [dialogFooter, setDialogFooter] = useState(() => options.dialogFooter);

  useEffect(() => {
    if (resolve && !visible) {
      resolve(constants.dialogAnswers.No);
    }
  }, [resolve]);

  const show = async () => {
    setVisible(true);
    return new Promise((res) => {
      setResolve(() => (res));
    });
  };

  const accept = () => {
    if (resolve !== null) resolve(constants.dialogAnswers.Yes);
    setVisible(false);
  };

  const cancel = () => {
    if (resolve !== null) resolve(constants.dialogAnswers.No);
    setVisible(false);
  };

  const [ctx] = useState({
    isDialog: true,
    isVisible: visible,
    setVisible,
    show,
    accept,
    cancel,
    resolve,
    setResolve,
    dialogFooter,
    setDialogFooter,
  });

  const render = (
    visible
      ? (
        <DialogContext.Provider value={ctx}>
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
            <Component accept={accept} cancel={cancel} {...componentProps} />
            {
              dialogFooter
                ? (
                  <DialogFooter>
                    { dialogFooter(accept, cancel) }
                  </DialogFooter>
                )
                : null
            }
          </Dialog>
        </DialogContext.Provider>
      )
      : null
  );

  return {
    visible, setVisible, render, show,
  };
};

export default useDialog;

export {
  DialogContext,
};
