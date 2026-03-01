# Plan: Demo6 — Storybook Theme Pipeline

## Context

Демо для лекции: как отдел дизайна поддерживает тему в Storybook, билдит её и доставляет в продуктовый проект. DevOps (Figma sync, npm registry) пропущен — вместо этого тема билдится локально и копируется.

**Pipeline**: Редактируем тему в Storybook → Билдим → Копируем в Demo_project → Тема применена.

---

## Архитектура

```
demo6/
├── package.json                      # Корневые скрипты: build:theme, deliver:theme, pipeline
├── Storybook/                        # Storybook-проект (источник темы)
│   ├── .storybook/
│   │   ├── main.ts                   # framework: @storybook/react-vite
│   │   └── preview.tsx               # Глобальный декоратор: ThemeProvider + CssBaseline
│   ├── src/
│   │   ├── theme/                    # ИСХОДНИКИ ТЕМЫ
│   │   │   ├── palette.ts            # Цвета (primary, secondary, background, text)
│   │   │   ├── typography.ts         # Шрифты, размеры, варианты
│   │   │   ├── components/           # Overrides компонентов (каждый в своём файле)
│   │   │   │   ├── index.ts          # Реэкспорт: собирает все overrides в один объект
│   │   │   │   ├── MuiButton.ts      # Overrides для Button
│   │   │   │   ├── MuiTextField.ts   # Overrides для TextField
│   │   │   │   ├── MuiCard.ts        # Overrides для Card
│   │   │   │   └── MuiAppBar.ts      # Overrides для AppBar
│   │   │   └── index.ts             # createTheme() — собирает всё вместе
│   │   └── stories/
│   │       ├── Button.stories.tsx
│   │       ├── TextField.stories.tsx
│   │       └── Card.stories.tsx
│   ├── tsup.config.ts                # Билд темы → theme-build/
│   ├── package.json
│   └── tsconfig.json
├── Demo_project/                     # React-приложение (потребитель темы)
│   ├── src/
│   │   ├── main.tsx                  # BrowserRouter + ThemeProvider + CssBaseline
│   │   ├── App.tsx                   # AppBar с навигацией + Routes
│   │   ├── theme/                    # СКОПИРОВАННЫЙ БИЛД ТЕМЫ
│   │   │   ├── index.js
│   │   │   └── index.d.ts
│   │   └── pages/
│   │       ├── DashboardPage.tsx     # Card-ы со статистикой
│   │       ├── FormPage.tsx          # TextField + Button форма
│   │       └── ListPage.tsx          # Table с данными
│   ├── package.json
│   ├── vite.config.ts
│   └── index.html
└── docs/                             # Существующая документация
```

---

## Шаги реализации

### Фаза 0: Корневой package.json

Создать `demo6/package.json` с оркестрационными скриптами:
- `build:theme` — `cd Storybook && npm run build:theme`
- `deliver:theme` — `rm -rf Demo_project/src/theme && cp -r Storybook/theme-build Demo_project/src/theme`
- `pipeline` — `npm run build:theme && npm run deliver:theme`
- `storybook` — `cd Storybook && npm run storybook`
- `dev` — `cd Demo_project && npm run dev`

### Фаза 1: Storybook (параллельно с Фазой 2)

#### 1.1 Инициализация проекта
```bash
cd Storybook
npm init -y
npm install react react-dom @mui/material @emotion/react @emotion/styled
npm install -D typescript @types/react @types/react-dom vite @vitejs/plugin-react
npm install -D @storybook/react-vite @storybook/react @storybook/addon-essentials storybook
npm install -D tsup
```

#### 1.2 Конфигурация
- `tsconfig.json` — target ES2020, moduleResolution bundler, jsx react-jsx
- `.storybook/main.ts` — framework `@storybook/react-vite`, stories `../src/**/*.stories.@(ts|tsx)`, addons essentials
- `.storybook/preview.tsx` — глобальный декоратор с ThemeProvider + CssBaseline, импортирует тему из `../src/theme`

#### 1.3 Исходники темы (`src/theme/`)

**Корневые файлы:**
- **palette.ts** — primary (индиго #6366F1), secondary (розовый #EC4899), background, text
- **typography.ts** — fontFamily Inter/Roboto, h1-h3 размеры/веса, button textTransform: none
- **index.ts** — `createTheme({ palette, typography, components, shape: { borderRadius: 8 } })`, экспорт `theme`

**Папка `components/`** — каждый компонент в отдельном файле для удобства работы:
- **MuiButton.ts** — borderRadius 8, убрать elevation, boxShadow при hover
- **MuiTextField.ts** — borderRadius 8, outlined по умолчанию
- **MuiCard.ts** — borderRadius 12, мягкая тень
- **MuiAppBar.ts** — мягкая тень
- **index.ts** — собирает все overrides: `import { MuiButton } from './MuiButton'` и т.д., экспортирует `components: Components<Theme>`

#### 1.4 Конфигурация tsup (`tsup.config.ts`)
```ts
defineConfig({
  entry: ['src/theme/index.ts'],
  format: ['esm'],
  dts: true,
  outDir: 'theme-build',
  clean: true,
  external: ['@mui/material', '@mui/material/styles', '@emotion/react', '@emotion/styled'],
})
```
Важно: `@mui/material/styles` явно в external, иначе tsup попытается заинлайнить MUI.

#### 1.5 Stories (3 файла в `src/stories/`)
- **Button.stories.tsx** — варианты Contained/Outlined/Text, цвета Primary/Secondary, размеры, story AllVariants
- **TextField.stories.tsx** — Default, WithHelperText, ErrorState, FormExample (стек из нескольких полей)
- **Card.stories.tsx** — Basic (с CardContent + CardActions), Dashboard (грид из 3 карточек)

Все stories используют стандартные MUI-компоненты (не кастомные) — это показывает как тема влияет на готовые компоненты.

#### 1.6 package.json scripts
- `storybook` — `storybook dev -p 6006`
- `build-storybook` — `storybook build`
- `build:theme` — `tsup`

### Фаза 2: Demo_project (параллельно с Фазой 1)

#### 2.1 Scaffold
```bash
cd Demo_project
npm create vite@latest . -- --template react-ts
npm install
npm install @mui/material @emotion/react @emotion/styled react-router-dom
```

#### 2.2 Временная тема
Создать `src/theme/index.ts` с `export const theme = createTheme()` — заглушка, будет перезаписана при `deliver:theme`.

#### 2.3 Entry point (`src/main.tsx`)
BrowserRouter + ThemeProvider(theme) + CssBaseline + App

#### 2.4 Layout (`src/App.tsx`)
- AppBar с навигацией (Dashboard / Form / List)
- Container с Routes
- 3 маршрута: `/`, `/form`, `/list`

#### 2.5 Страницы
- **DashboardPage.tsx** — Grid из 4 Card-ов со статистикой (Revenue, Users, Orders, Conversion)
- **FormPage.tsx** — Card с формой: 5 TextField-ов + Submit/Cancel Button-ы
- **ListPage.tsx** — TableContainer с Table: 5 строк пользователей, Chip для статуса, Button для действий

#### 2.6 Очистка
Удалить дефолтные файлы Vite: App.css, index.css, assets/react.svg.

### Фаза 3: Интеграция (после Фаз 1 и 2)

1. `npm run build:theme` — собрать тему через tsup
2. `npm run deliver:theme` — скопировать в Demo_project/src/theme/
3. Проверить что Storybook запускается: `npm run storybook`
4. Проверить что Demo_project запускается: `npm run dev`
5. Проверить pipeline: поменять цвет в palette.ts → `npm run pipeline` → увидеть изменение в Demo_project

---

## Потенциальные проблемы и решения

| Проблема | Решение |
|----------|---------|
| tsup может выдать `.mjs` вместо `.js` | Добавить `outExtension` в tsup.config для форсирования `.js` |
| Разные версии MUI в двух проектах | Использовать одинаковую версию в обоих package.json |
| `npx storybook init` генерирует мусорные файлы | Используем ручную установку вместо init |
| TypeScript не находит типы в скопированной теме | `skipLibCheck: true` в обоих tsconfig, MUI types из node_modules Demo_project |
| Grid API (v5 vs v6+) | Проверить версию MUI и использовать соответствующий API |

---

## Верификация

1. **Storybook**: `cd Storybook && npm run storybook` → открыть http://localhost:6006 → все 3 компонента отображаются с кастомной темой
2. **Theme build**: `npm run build:theme` → проверить `Storybook/theme-build/index.js` и `index.d.ts` существуют
3. **Theme delivery**: `npm run deliver:theme` → проверить `Demo_project/src/theme/index.js` существует
4. **Demo project**: `cd Demo_project && npm run dev` → открыть http://localhost:5173 → все 3 страницы работают с темой
5. **Pipeline E2E**: изменить primary.main в palette.ts → `npm run pipeline` → перезагрузить Demo_project → цвет изменился

---

## Ключевые файлы (для lecture flow)

1. `Storybook/src/theme/palette.ts` — показать цвета
2. `Storybook/src/theme/index.ts` — показать сборку темы через createTheme
3. `Storybook/.storybook/preview.tsx` — показать как тема применяется к stories
4. `Storybook/tsup.config.ts` — показать как тема билдится
5. `demo6/package.json` — показать pipeline скрипты
6. `Demo_project/src/main.tsx` — показать как тема подключается в проект
