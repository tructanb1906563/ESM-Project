module.exports = {
    extends: ['plugin:vue/vue3-essential', 'prettier'],
    rules: {
        // override/add cài đặt quy tắc tại đây, chẳng hạn như:
        'vue/no-unused-vars': 'error',
        'vue/script-setup-uses-vars': 'off',
    },
}