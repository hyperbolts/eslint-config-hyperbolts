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
    extends: 'eslint:all',

    // Environments
    env: {
        browser: true,
        es6:     true,
        node:    true
    },

    // Rules
    rules: {
        'arrow-parens':                ['error', 'as-needed'],
        'brace-style':                 ['error', 'stroustrup'],
        'consistent-return':           'off',
        'dot-location':                ['error', 'property'],
        'guard-for-in':                'off',
        'init-declarations':           'off',
        'newline-before-return':       'off',
        'multiline-ternary':           ['error', 'never'],
        'no-continue':                 'off',
        'no-fallthrough':              'off',
        'no-magic-numbers':            'off',
        'no-param-reassign':           'off',
        'no-plusplus':                 'off',
        'no-sync':                     'off',
        'no-ternary':                  'off',
        'no-undefined':                'off',
        'no-use-before-define':        'off',
        'padded-blocks':               'off',
        'quotes':                      ['error', 'single'],
        'quote-props':                 ['error', 'consistent-as-needed'],
        'sort-keys':                   'off',
        'space-before-function-paren': ['error', 'never'],
        'strict':                      ['error', 'never'],

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
                    'i',
                    'j'
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
        'max-statements': [
            'error',
            {
                max: 20
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
        ]
    }
};
