import hilog from '@ohos:hilog';
class Logger {
    constructor(prefix = 'myTag', domain = 0xFF00) {
        // 格式化
        this.format = '%{public}s, %{public}s';
        this.prefix = prefix;
        this.domain = domain;
    }
    // 输出 debug 日志方法
    debug(...args) {
        hilog.debug(this.domain, this.prefix, this.format, args);
    }
    // 输出 info 日志方法
    info(...args) {
        hilog.info(this.domain, this.prefix, this.format, args);
    }
    // 输出 warn 日志方法
    warn(...args) {
        hilog.warn(this.domain, this.prefix, this.format, args);
    }
    // 输出 error 日志方法
    error(...args) {
        hilog.error(this.domain, this.prefix, this.format, args);
    }
}
export default new Logger('myApp', 0xFF00);
//# sourceMappingURL=Logger.js.map