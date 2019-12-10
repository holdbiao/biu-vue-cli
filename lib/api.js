const { clone } = require('./download.js')

module.exports.init = async name => {
    console.log('🚀 创建项目: ' + name)
    // 注意下载路径格式 
    // GitHub - github:owner/name or simply owner/name;
    clone('github:holdbiao/v-alert', name)
}