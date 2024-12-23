import babelParser from '@babel/eslint-parser'
import globals from 'globals'
import pluginJs from '@eslint/js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {      
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2021, // Usamos la versión más reciente
        sourceType: 'module', // Usamos módulos ECMAScript
      },      
      globals: { ...globals.browser, ...globals.node }
    },
  },
  
  pluginJs.configs.recommended,
]
