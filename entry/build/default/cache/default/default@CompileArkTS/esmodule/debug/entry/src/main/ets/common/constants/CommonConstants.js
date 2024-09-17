import relationalStore from '@ohos:data.relationalStore';
/**
 * Common constants for all features.
 */
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
/**
 * Input length of the account.
 */
CommonConstants.INPUT_ACCOUNT_LENGTH = 11;
/**
 *  Input length of the password.
 */
CommonConstants.INPUT_PASSWORD_LENGTH = 8;
/**
 *  Left padding of the input box
 */
CommonConstants.INPUT_PADDING_LEFT = 20;
/**
 * Delay time of simulated login
 */
CommonConstants.LOGIN_DELAY_TIME = 300;
/**
 * Common Spacing of Components
 */
CommonConstants.COMMON_SPACE = 12;
/**
 * Title text of the home page
 */
CommonConstants.HOME_TITLE = '首页';
/**
 * Title text of the setting page
 */
CommonConstants.MINE_TITLE = '我的';
/**
 * Spacing of other login methods
 */
CommonConstants.LOGIN_METHODS_SPACE = 44;
/**
 * The width or height of the component is spread across the parent component.
 */
CommonConstants.FULL_PARENT = '100%';
/**
 * The width of button
 */
CommonConstants.BUTTON_WIDTH = '90%';
/**
 * The width of setting list
 */
CommonConstants.SET_LIST_WIDTH = '42%';
/**
 * Home tab index
 */
CommonConstants.HOME_TAB_INDEX = 0;
/**
 * Mine tab index
 */
CommonConstants.MINE_TAB_INDEX = 1;
//# sourceMappingURL=CommonConstants.js.map