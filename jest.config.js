// jest.config.js   与vue.config.js同级
module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
        '^.+.vue$': 'vue-jest',
        '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',

        // 为 Jest 配置 Babel
        '^.+.js$': '<rootDir>/node_modules/babel-jest'
    },

    transformIgnorePatterns: ['/node_modules/'],

    // 别名
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },

    snapshotSerializers: ['jest-serializer-vue'],

    testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],

    testURL: 'http://localhost/',

    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],

    // 覆盖率报告的目录
    coverageDirectory: '<rootDir>/tests/unit/coverage',

    // 代码覆盖率的指标
    // collectCoverage: true,

    collectCoverageFrom: [
        // 测试报告想要覆盖那些文件，目录，前面加！是避开这些文件
        // 'src/components/**/*.(js|vue)',

        'src/components/*.(vue)',
        '!src/main.js',
        '!src/router/index.js',
        '!**/node_modules/**'
    ],

    // 配合 setup.js
    setupFiles: ['<rootDir>/tests/setup']
}
