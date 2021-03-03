/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  Dialog, DialogFooter, DialogType,
} from '@fluentui/react';
import constants from '../../utils/constants';

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

  const render = (
    visible
      ? (
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
          options.dialogFooter
            ? (
              <DialogFooter>
                { options.dialogFooter(accept, cancel) }
              </DialogFooter>
            )
            : null
      }
        </Dialog>
      )
      : null
  );

  return {
    visible, setVisible, render, show,
  };
};

export default useDialog;
