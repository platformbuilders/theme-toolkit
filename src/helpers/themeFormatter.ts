import { LevelShadow } from '../theme_types/BoxShadows';
import { THEME_TYPE } from '../enums';
import { FluidTheme } from '../index';
import isWeb from './isWeb';

const getShadow = (shadow: LevelShadow): string => {
  if (!!shadow.color) {
    const colorValues = shadow.color
      .replace('rgba(', '')
      .replace(')', '')
      .split(',');
    return isWeb()
      ? `box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.color};`
      : `elevation: ${shadow.blur}; box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}); shadow-opacity: ${colorValues[3]};`;
  } else return '';
};

const formatItemMap = (itemMap: any) => (item: any, itemKey: any) => {
  if (typeof item !== 'object') return;

  if (item.type === THEME_TYPE.COLOR_BASE) {
    for (const [key, value] of Object.entries(item)) {
      if (key === 'opacity') {
        itemMap[itemKey] = {
          ...itemMap[itemKey],
          [key]: {
            ...extractValue(value, key),
          },
        };
      } else {
        itemMap[itemKey] = {
          ...itemMap[itemKey],
          [key]: value,
        };
      }
    }
    return;
  }

  if ('value' in item) {
    if (item.type === THEME_TYPE.OPACITY && typeof item.value === 'string') {
      itemMap[itemKey] = parseFloat(item.value) / 100.0;
    } else if (item.type === THEME_TYPE.BOX_SHADOW) {
      itemMap[itemKey] = getShadow(item.value);
    } else {
      itemMap[itemKey] = item.value;
    }
  } else {
    itemMap[itemKey] = extractValue(item, itemKey);
  }
};

const extractValue = (itemValue: any, parentKey: any) => {
  const itemMap = {} as any;
  if (typeof itemValue === 'object' && 'value' in itemValue) {
    itemMap[parentKey] = itemValue.value;
  } else {
    const itemObjMap = new Map(Object.entries(itemValue));
    itemObjMap.forEach(formatItemMap(itemMap));
  }
  return itemMap;
};

export const themeFormatter = (rawTheme: any): FluidTheme => {
  const objMap = new Map(Object.entries(rawTheme));
  const themeMap = {} as any;

  objMap.forEach((item: any, parentKey) => {
    const itemMap = extractValue(item, parentKey);
    themeMap[parentKey] = itemMap;
  });

  return themeMap as FluidTheme;
};
