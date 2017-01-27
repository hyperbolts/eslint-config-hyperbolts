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
    env:     {
        browser: true,
        es6:     true,
        node:    true
    },

    // Rules
    rules: {
        'brace-style':                 ['error', 'stroustrup'],
        'dot-location':                ['error', 'property'],
        'init-declarations':           'off',
        'newline-before-return':       'off',
        'no-magic-numbers':            'off',
        'no-sync':                     'off',
        'no-undefined':                'off',
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
