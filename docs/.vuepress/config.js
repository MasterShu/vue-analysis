module.exports = {
    title: 'Vue Analysis',
    description: 'Vue source code analysis',
    // base: '/php-analysis/',
    locales: {
        '/zh/': {
            lang: 'zh-CN',
            title: 'Vue Analysis',
            description: 'Vue 源码探究'
        },
        '/': {
            lang: 'en-US',
            title: 'Vue Analysis',
            description: 'Vue source code analysis'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ],
    themeConfig: {
        repo: 'https://github.com/MasterShu/vue-analysis',
        editLinks: true,
        locales: {
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                sidebar: {
                    '/prepare/': getSidebar('zh')
                }
            },
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                sidebar: {
                    '/prepare/': getSidebar('en')
                }
            },
        }
    }
};

function getSidebar(lang) {
    const title = {
        prepare: {
            'zh': '开始吧！',
            'en': 'Prepare'
        }
    };
    return [
        {
            title: title.prepare[lang],
            collapsable: false,
            children: [
                '',
                'directories',
                'environment'
            ]
        }
    ]
}
