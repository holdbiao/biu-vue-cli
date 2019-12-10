const { promisify } = require('util') // 回调转换promise
const download = promisify(require('download-git-repo'))
const ora = require('ora') // 进度条

module.exports.clone = async function (repo, desc) {
    const process = ora(`Git仓库下载模板...${repo}`)
    process.start()
    await download(repo, desc).catch(err => console.log(' Download err:', err.toString()))
    process.succeed()
}