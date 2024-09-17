import MemoModel from '@bundle:com.example.component/entry/ets/Model/MemoModel';
function __Text__timeStyle() {
    Text.fontSize("10");
    Text.fontColor({ "id": 16777260, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
}
function getFormatTime(timeStamp) {
    const today = new Date();
    const date = new Date(timeStamp);
    // 计算日期差值
    const diffTime = today.getTime() - date.getTime();
    // 向下取整
    const diffDays = Math.floor(diffTime / (24 * 60 * 60 * 1000));
    let range = '';
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    let formatDate = `${month}月${day}日`;
    const formatTime = `${hours}:${minute}`;
    if (diffDays === 0) {
        range = '今天';
        formatDate = '';
    }
    else if (diffDays === 1) {
        range = '昨天';
        formatDate = '';
    }
    else if (diffDays === 2) {
        range = '前天';
        formatDate = '';
    }
    else {
        range = '';
    }
    return { range, formatDate, formatTime };
}
export default class MemoItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__memo = new SynchedPropertyNesedObjectPU(params.memo, this, "memo");
        this.onMemoClick = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        this.__memo.set(params.memo);
        if (params.onMemoClick !== undefined) {
            this.onMemoClick = params.onMemoClick;
        }
    }
    updateStateVars(params) {
        this.__memo.set(params.memo);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__memo.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__memo.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get memo() {
        return this.__memo.get();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.width('100%');
            Stack.backgroundColor({ "id": 16777248, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Stack.onClick(() => {
                this.onMemoClick(ObservedObject.GetRawObject(this.memo));
            });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height(90);
            Column.width('90%');
            Column.borderRadius(20);
            Column.backgroundColor('rgba(36,36,36,0.8)');
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //row横向
            Text.create(this.memo.content);
            //row横向
            Text.fontColor({ "id": 16777266, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            //row横向
            Text.margin({ left: 15, right: 10, top: 15 });
            //row横向
            Text.fontSize(18);
            //row横向
            Text.maxLines(2);
            if (!isInitialRender) {
                //row横向
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //row横向
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.margin({ left: 15, bottom: 15 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(getFormatTime(this.memo.updateTime).range);
            __Text__timeStyle();
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(getFormatTime(this.memo.updateTime).formatDate);
            __Text__timeStyle();
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(getFormatTime(this.memo.updateTime).formatTime);
            __Text__timeStyle();
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class MemoItemPreview extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__memo = new ObservedPropertyObjectPU(new MemoModel(1, 1718132252000, '记得使用毫秒级时间戳'), this, "memo");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.memo !== undefined) {
            this.memo = params.memo;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__memo.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__memo.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get memo() {
        return this.__memo.get();
    }
    set memo(newValue) {
        this.__memo.set(newValue);
    }
    initialRender() {
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MemoItem(this, { memo: this.memo }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        memo: this.memo
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=MemoItem.js.map