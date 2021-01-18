import { ChoiceGroup, Stack, Text } from '@fluentui/react';
import React, { useContext, useState } from 'react';
import GlobalContext from '../../../services/GlobalContext';
import { selectTheme } from '../../../themes';
import darkImg from './theme_dark_icon.png';
import lightImg from './theme_light_icon.png';
import solarizedImg from './theme_solarized_icon.png';
import blackWhiteImg from './theme_blackwhite_icon.png';

const SelectTheme = () => {
  const global = useContext(GlobalContext);
  const [theme, setTheme] = useState(global.userPreferences.theme.type);
  const [items] = useState([
    {
      key: 'light',
      text: 'Light',
      imageSrc: lightImg,
      selectedImageSrc: lightImg,
      imageSize: { width: 64, height: 64 },
    },
    {
      key: 'warm',
      text: 'Warm',
      imageSrc: solarizedImg,
      selectedImageSrc: solarizedImg,
      imageSize: { width: 64, height: 64 },
    },
    {
      key: 'dark',
      text: 'Dark',
      imageSrc: darkImg,
      selectedImageSrc: darkImg,
      imageSize: { width: 64, height: 64 },
    },
    {
      key: 'blackwhite',
      text: 'Dark Black&White',
      imageSrc: blackWhiteImg,
      selectedImageSrc: blackWhiteImg,
      imageSize: { width: 64, height: 64 },
    },
  ]);

  const handleChange = (evt, option) => {
    if (option && option.key) {
      setTheme(option.key);
      localStorage.setItem('theme', option.key);
      global.setContext((prev) => ({
        ...prev,
        userPreferences: {
          ...global.userPreferences,
          theme: selectTheme(option.key),
        },
      }));
    }
  };

  return (
    <Stack verticalAlign="start" tokens={{ childrenGap: 16 }}>
      <Text variant="large">Select color theme:</Text>
      <ChoiceGroup
        options={items}
        selectedKey={theme}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default SelectTheme;
