import relationalStore from '@ohos.data.relationalStore'
import { MemoTable } from '../../model/TableInterface'
/**
 * Common constants for all features.
 */
export default class CommonConstants {
  // Rdb 数据库配置
  static readonly STORE_CONFIG:relationalStore.StoreConfig = {
    name:'database.db',
    securityLevel:relationalStore.SecurityLevel.S1
  }

  static readonly MEMO_TABLE:MemoTable = {
    tableName:'memoTable',
    sqlCreate:'CREATE TABLE IF NOT EXISTS memoTable(id INTEGER PRIMARY KEY AUTOINCREMENT, updateTime INTEGER, content TEXT)',
    columns:['id','updateTime','content']
  }

  static readonly RDB_TAG = '[Debug.Rdb]';
  static readonly TABLE_TAG = '[Debug.memoTable]';
  static readonly INDEX_TAG = '[Debug.Index]';
  /**
   * Input length of the account.
   */
  static readonly INPUT_ACCOUNT_LENGTH = 11;

  /**
   *  Input length of the password.
   */
  static readonly INPUT_PASSWORD_LENGTH = 8;

  /**
   *  Left padding of the input box
   */
  static readonly INPUT_PADDING_LEFT = 20;

  /**
   * Delay time of simulated login
   */
  static readonly LOGIN_DELAY_TIME = 300;

  /**
   * Common Spacing of Components
   */
  static readonly COMMON_SPACE = 12;

  /**
   * Title text of the home page
   */
  static readonly HOME_TITLE = '首页';

  /**
   * Title text of the setting page
   */
  static readonly MINE_TITLE = '我的';

  /**
   * Spacing of other login methods
   */
  static readonly LOGIN_METHODS_SPACE = 44;

  /**
   * The width or height of the component is spread across the parent component.
   */
  static readonly FULL_PARENT = '100%';

  /**
   * The width of button
   */
  static readonly BUTTON_WIDTH = '90%';

  /**
   * The width of setting list
   */
  static readonly SET_LIST_WIDTH = '42%';

  /**
   * Home tab index
   */
  static readonly HOME_TAB_INDEX = 0;

  /**
   * Mine tab index
   */
  static readonly MINE_TAB_INDEX = 1;
}

