import { ThemeType } from '../theme_types/Theme';

const extractValue = (itemValue: any, parentKey: any): any => {
  const itemMap = {} as any;
  if ('value' in itemValue) {
    itemMap[parentKey] = itemValue.value;
  } else {
    const itemObjMap = new Map(Object.entries(itemValue));
    itemObjMap.forEach((item: any, itemKey) => {
      if ('value' in item) {
        itemMap[itemKey] = item.value;
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
  console.log('passou1');
  objMap.forEach((item: any, parentKey) => {
    const itemMap = extractValue(item, parentKey);
    themeMap[parentKey] = itemMap;
  });
  return themeMap as ThemeType;
};
