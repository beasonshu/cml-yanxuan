
// 设置静态资源的线上路径
const publicPath = 'https://chameleon-team.github.io/cml-yanxuan/dist';
// 设置api请求前缀
const apiPrefix = 'https://chameleon-team.github.io';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  buildInfo: {
    wxAppId: '123456'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: true
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix,
      hash: false
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

