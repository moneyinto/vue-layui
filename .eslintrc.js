// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        //indent
        'indent': [2, 4],
        //Forced semicolon ending
        "semi": [2, "always"],
        //function space
        'space-before-function-paren': [0, 'always'],
        //Mixed spaces and tabs
        "no-mixed-spaces-and-tabs": [2, true],
        "no-tabs": "off",
        "no-new": "off",
        "no-extend-native": 0,
        "no-useless-escape": 0
    }
}
