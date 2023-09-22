
# Theme Toolkit

## Descrição

Este toolkit foi desenvolvido para auxiliar na gestão de temas e tornar mais fácil a manipulação de temas em aplicações.

## Instalação

Use o gerenciador de pacotes de sua escolha:

```bash
# Usando npm
npm install @platformbuilders/theme-toolkit

# Usando yarn
yarn add @platformbuilders/theme-toolkit
```

### Breakpoints
A toolkit define uma série de pontos de interrupção para responder a diferentes tamanhos de tela.

Exemplo:
```javascript

    import styled from 'styled-components';
    import { breakpoints } from 'theme-toolkit';
    
    const ResponsiveDiv = styled.div`
      width: 100%;
    
      @media ${breakpoints.inMobile} {
        background-color: blue;
      }
    
      @media ${breakpoints.inDesktop} {
        background-color: red;
      }
    `;
```

### Font Size Helper
getFontSize(props): Retorna o tamanho da fonte baseado na propriedade variant fornecida.

Exemplo:

```javascript
import styled from 'styled-components';
import { getFontSize } from 'theme-toolkit';

const Text = styled.span`
  font-size: ${(props) => getFontSize(props)}px;
`;
```

###  Line Height Helper
getLineHeight(props): Calcula e retorna a altura da linha baseado nas propriedades variant e lineHeightVariant.

Exemplo:

```javascript
import styled from 'styled-components';
import { getLineHeight } from 'theme-toolkit';

const Text = styled.span`
  line-height: ${getLineHeight({ variant: 'medium', lineHeightVariant: 'tight' })}px;
`;

```

### Theme Getter
getTheme(themeProp)(props): Retorna o valor de uma propriedade específica do tema.

Exemplo:

```javascript
import styled from 'styled-components';
import { getTheme } from 'theme-toolkit';

const Button = styled.button`
  background-color: ${getTheme('colors.primary')};
`;
```

### Conditional Styler
ifStyle(prop)(truthy, falsy): Retorna estilos condicionalmente baseado na existência de uma propriedade.

Exemplo:

```javascript
import { ifStyle } from 'theme-toolkit';

const Button = styled.button`
  ${ifStyle('primary')('color: blue;', 'color: red;')}
`;
```

### Web Checker
isWeb(): Verifica se o ambiente de execução é web.
Exemplo:

```javascript
import isWeb from 'theme-toolkit';

if (isWeb()) {
  // Lógica específica para a web
}
```

### Pixel to REM converter
pxToRem(pixels, baseline): Converte pixels para a unidade rem.

Exemplo:

```javascript
import styled from 'styled-components';
import { pxToRem } from 'theme-toolkit';

const SpacedDiv = styled.div`
  margin-top: ${pxToRem(20)};
  padding: ${pxToRem(15)} ${pxToRem(30)};
`;
```
### Switch Styler
switchStyle(name)(stylesObj): Retorna estilos com base no valor de uma propriedade específica.

Exemplo:

```javascript
import { switchStyle } from 'theme-toolkit';

const Button = styled.button`
  ${switchStyle('size')({
    small: 'font-size: 12px;',
    medium: 'font-size: 16px;',
    large: 'font-size: 20px;',
  })}
`;
```

### Theme Formatter
themeFormatter(rawTheme): Transforma um tema bruto em um tema fluido.
Exemplo:

```javascript
import { themeFormatter } from 'theme-toolkit';

const fluidTheme = themeFormatter(myRawTheme);
```

## Contribuição
Aceitamos contribuições! Sinta-se à vontade para enviar um Pull Request ou abrir uma Issue.

