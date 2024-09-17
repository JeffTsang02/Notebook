import relationalStore from '@ohos:data.relationalStore';
export default class CommonConstants {
}
// Rdb 数据库配置
CommonConstants.STORE_CONFIG = {
    name: 'database.db',
    securityLevel: relationalStore.SecurityLevel.S1
};
CommonConstants.MEMO_TABLE = {
    tableName: 'memoTable',
    sqlCreate: 'CREATE TABLE IF NOT EXISTS memoTable(id INTEGER PRIMARY KEY AUTOINCREMENT, updateTime INTEGER, content TEXT)',
    columns: ['id', 'updateTime', 'content']
};
CommonConstants.RDB_TAG = '[Debug.Rdb]';
CommonConstants.TABLE_TAG = '[Debug.memoTable]';
CommonConstants.INDEX_TAG = '[Debug.Index]';
//# sourceMappingURL=CommonConstants.js.map