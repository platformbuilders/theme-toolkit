import { THEME_TYPE } from '../enums';
import { ThemeType } from '../theme_types/Theme';

const extractValue = (itemValue: any, parentKey: any): any => {
  const itemMap = {} as any;
  if ('value' in itemValue) {
    itemMap[parentKey] = itemValue.value;
  } else {
    const itemObjMap = new Map(Object.entries(itemValue));
    itemObjMap.forEach((item: any, itemKey) => {
      if ('value' in item) {
        if (item.type === THEME_TYPE.OPACITY && typeof item.value === 'string')
          itemMap[itemKey] = parseFloat(item.value) / 100.0;
        else itemMap[itemKey] = item.value;
      } else {
        itemMap[itemKey] = extractValue(item, itemKey);
      }
    });
  }
  return itemMap;
};

export const themeFormatter = (rawTheme: any): ThemeType => {
  const objMap = new Map(Object.entries(rawTheme));
  const themeMap = {} as any;
  objMap.forEach((item: any, parentKey) => {
    const itemMap = extractValue(item, parentKey);
    themeMap[parentKey] = itemMap;
  });
  return themeMap as ThemeType;
};
