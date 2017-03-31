/**
 * HyperBolts ϟ (https://hyperbolts.io)
 *
 * Copyright © 2015-present Pace IT Systems Ltd.
 * All rights reserved.
 *
 * @author  Pace IT Systems Ltd
 * @license MIT
 */

module.exports = {
    plugins: ['react'],
    extends: ['eslint:all', 'plugin:react/all'],

    // Environments
    env: {
        browser: true,
        es6:     true,
        node:    true
    },

    // Rules
    rules: {
        'arrow-parens':                 ['error', 'as-needed'],
        'brace-style':                  ['error', 'stroustrup'],
        'class-methods-use-this':       'off',
        'consistent-return':            'off',
        'default-case':                 'off',
        'dot-location':                 ['error', 'property'],
        'global-require':               'off',
        'guard-for-in':                 'off',
        'init-declarations':            'off',
        'max-lines':                    'off',
        'max-statements':               'off',
        'newline-before-return':        'off',
        'multiline-ternary':            ['error', 'never'],
        'no-continue':                  'off',
        'no-extra-parens':              'off',
        'no-fallthrough':               'off',
        'no-loop-func':                 'off',
        'no-magic-numbers':             'off',
        'no-param-reassign':            'off',
        'no-plusplus':                  'off',
        'no-sync':                      'off',
        'no-ternary':                   'off',
        'no-undefined':                 'off',
        'no-use-before-define':         'off',
        'padded-blocks':                'off',
        'quotes':                       ['error', 'single'],
        'quote-props':                  ['error', 'consistent-as-needed'],
        'react/forbid-component-props': 'off',
        'react/forbid-prop-types':      'off',
        'react/jsx-no-literals':        'off',
        'react/no-array-index-key':     'off',
        'react/no-set-state':           'off',
        'react/require-default-props':  'off',
        'sort-keys':                    'off',
        'space-before-function-paren':  ['error', 'never'],
        'strict':                       ['error', 'never'],

        'capitalized-comments': [
            'error',
            'always',
            {
                ignoreConsecutiveComments: true
            }
        ],
        'id-length': [
            'error',
            {
                min:        2,
                exceptions: [
                    'e',
                    'i',
                    'j',
                    'k',
                    'x',
                    'y'
                ]
            }
        ],
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max:    1,
                maxBOF: 0,
                maxEOF: 1
            }
        ],
        'key-spacing': [
            'error',
            {
                align: 'value'
            }
        ],
        'max-len': [
            'error',
            {
                code: 120
            }
        ],
        'max-params': [
            'error',
            {
                max: 5
            }
        ],
        'no-multi-spaces': [
            'error',
            {
                exceptions: {
                    VariableDeclarator: true
                }
            }
        ],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    minProperties: 1,
                    multiline:     true
                },
                ObjectPattern: {
                    multiline: false
                }
            }
        ],
        'one-var': [
            'error',
            {
                initialized:   'never',
                uninitialized: 'always'
            }
        ],
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 3
            }
        ],
        'react/jsx-no-bind': [
            'error',
            {
                allowBind: true
            }
        ]
    }
};
