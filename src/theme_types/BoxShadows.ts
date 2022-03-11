export interface LevelShadow {
  x: number;
  y: number;
  spread: number;
  color: string; //rgba or hex
  blur: number;
}

export interface BoxShadowsLevels {
  z0: LevelShadow;
  z1: LevelShadow;
  z2: LevelShadow;
  z3: LevelShadow;
  z4: LevelShadow;
  z5: LevelShadow;
}

export interface BoxShadows extends BoxShadowsLevels {
  web: BoxShadowsLevels;
}
