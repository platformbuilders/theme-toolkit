import { LevelShadow } from '../theme_types/BoxShadows';
import { THEME_TYPE } from '../enums';
import { ThemeType } from '../theme_types/Theme';

const getShadow = (shadow: LevelShadow) => {
  if (!!shadow.color) {
    const colorValues = shadow.color
      .replace('rgba(', '')
      .replace(')', '')
      .split(',');
    return `elevation: ${shadow.blur}; box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}); shadow-opacity: ${colorValues[3]};`;
  } else return '';
};

const getShadowWeb = (shadow: LevelShadow) => {
  if (!!shadow.color) {
    return `box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.color};`;
  } else return '';
};

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
        else if (
          item.type === THEME_TYPE.BOX_SHADOW &&
          typeof item.value === 'object'
        ) {
          itemMap[itemKey] = getShadow(item.value);
          itemMap['web'] = {
            ...itemMap['web'],
            [itemKey]: getShadowWeb(item.value),
          };
        } else itemMap[itemKey] = item.value;
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
