import CustomDialogEdit from '@bundle:com.example.component/entry/ets/component/CustomDialogEdit';
import CustomDialogExample from '@bundle:com.example.component/entry/ets/component/CustomDialogExample';
import MemoItem from '@bundle:com.example.component/entry/ets/component/MemoItem';
import MemoSearch from '@bundle:com.example.component/entry/ets/component/MemoSearch';
import MemoModel from '@bundle:com.example.component/entry/ets/Model/MemoModel';
import MemoTable from '@bundle:com.example.component/entry/ets/database/MemoTable';
class NoteMain extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__originalMemoList = new ObservedPropertyObjectPU([]
        //ForEach 循环渲染对象数组
        , this, "originalMemoList");
        this.__memoList = new ObservedPropertyObjectPU([]
        //自定义弹窗 暂存内容
        , this, "memoList");
        this.__textValue = new ObservedPropertySimplePU(''
        //与CustomDialogExamples中的@link字段连接
        //需要写入的内容
        , this, "textValue");
        this.__inputValue = new ObservedPropertySimplePU(''
        // 是否展示新建memo自定义弹窗
        , this, "inputValue");
        this.__isAddDialogShow = new ObservedPropertySimplePU(false
        //编辑自定义弹窗 暂存内容
        , this, "isAddDialogShow");
        this.__textEditValue = new ObservedPropertySimplePU(''
        //与CustomDialogExamples中的@link字段连接
        //编辑需要写入的内容
        , this, "textEditValue");
        this.__inputEditValue = new ObservedPropertySimplePU(''
        // 是否展示编辑memo自定义弹窗
        , this, "inputEditValue");
        this.__isEditDialogShow = new ObservedPropertySimplePU(false
        //数据库初始化
        , this, "isEditDialogShow");
        this.MemoTable = new MemoTable(() => {
        });
        this.createMemo = () => {
            const date = new Date();
            const newMemo = new MemoModel(0, date.getTime(), this.inputValue);
            this.MemoTable.insertData(newMemo, (id) => {
                newMemo.id = id;
                this.originalMemoList.push(newMemo);
                this.memoList = this.originalMemoList;
                this.closeDialog();
            });
        };
        this.deleteMemo = (id) => {
            for (let i = 0; i < this.originalMemoList.length; i++) {
                if (this.originalMemoList[i].id === id) {
                    this.editingMemoIndex = i;
                }
            }
            if (this.editingMemoIndex !== -1) {
                this.MemoTable.deleteData(this.originalMemoList[this.editingMemoIndex], () => {
                    this.originalMemoList.splice(this.editingMemoIndex, 1);
                    this.memoList = this.originalMemoList;
                    this.closeDialog();
                });
            }
        };
        this.editingMemoIndex = -1;
        this.clickMemo = (memo) => {
            for (let i = 0; i < this.originalMemoList.length; i++) {
                if (this.originalMemoList[i].id === memo.id) {
                    this.editingMemoIndex = i;
                    this.isEditDialogShow = true;
                    this.textEditValue = memo.content;
                }
            }
        };
        this.saveMemo = () => {
            const date = new Date();
            this.originalMemoList[this.editingMemoIndex].updateTime = date.getTime();
            this.originalMemoList[this.editingMemoIndex].content = this.inputEditValue;
            this.MemoTable.updateData(this.originalMemoList[this.editingMemoIndex], () => {
                this.memoList = this.originalMemoList;
                this.closeDialog();
            });
        };
        this.closeDialog = () => {
            this.isAddDialogShow = false;
            this.textValue = '';
            this.isEditDialogShow = false;
            this.textEditValue = '';
            this.editingMemoIndex = -1;
        };
        this.__keywords = new ObservedPropertySimplePU('', this, "keywords");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("keywords", this.onKeywordsChange);
    }
    setInitiallyProvidedValue(params) {
        if (params.originalMemoList !== undefined) {
            this.originalMemoList = params.originalMemoList;
        }
        if (params.memoList !== undefined) {
            this.memoList = params.memoList;
        }
        if (params.textValue !== undefined) {
            this.textValue = params.textValue;
        }
        if (params.inputValue !== undefined) {
            this.inputValue = params.inputValue;
        }
        if (params.isAddDialogShow !== undefined) {
            this.isAddDialogShow = params.isAddDialogShow;
        }
        if (params.textEditValue !== undefined) {
            this.textEditValue = params.textEditValue;
        }
        if (params.inputEditValue !== undefined) {
            this.inputEditValue = params.inputEditValue;
        }
        if (params.isEditDialogShow !== undefined) {
            this.isEditDialogShow = params.isEditDialogShow;
        }
        if (params.MemoTable !== undefined) {
            this.MemoTable = params.MemoTable;
        }
        if (params.createMemo !== undefined) {
            this.createMemo = params.createMemo;
        }
        if (params.deleteMemo !== undefined) {
            this.deleteMemo = params.deleteMemo;
        }
        if (params.editingMemoIndex !== undefined) {
            this.editingMemoIndex = params.editingMemoIndex;
        }
        if (params.clickMemo !== undefined) {
            this.clickMemo = params.clickMemo;
        }
        if (params.saveMemo !== undefined) {
            this.saveMemo = params.saveMemo;
        }
        if (params.closeDialog !== undefined) {
            this.closeDialog = params.closeDialog;
        }
        if (params.keywords !== undefined) {
            this.keywords = params.keywords;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__originalMemoList.purgeDependencyOnElmtId(rmElmtId);
        this.__memoList.purgeDependencyOnElmtId(rmElmtId);
        this.__textValue.purgeDependencyOnElmtId(rmElmtId);
        this.__inputValue.purgeDependencyOnElmtId(rmElmtId);
        this.__isAddDialogShow.purgeDependencyOnElmtId(rmElmtId);
        this.__textEditValue.purgeDependencyOnElmtId(rmElmtId);
        this.__inputEditValue.purgeDependencyOnElmtId(rmElmtId);
        this.__isEditDialogShow.purgeDependencyOnElmtId(rmElmtId);
        this.__keywords.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__originalMemoList.aboutToBeDeleted();
        this.__memoList.aboutToBeDeleted();
        this.__textValue.aboutToBeDeleted();
        this.__inputValue.aboutToBeDeleted();
        this.__isAddDialogShow.aboutToBeDeleted();
        this.__textEditValue.aboutToBeDeleted();
        this.__inputEditValue.aboutToBeDeleted();
        this.__isEditDialogShow.aboutToBeDeleted();
        this.__keywords.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    itemEnd(id, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("Del");
            Button.debugLine("pages/NoteMain.ets(12:7)");
            Button.margin({ right: 10 });
            Button.onClick(() => {
                this.deleteMemo(id);
                console.log(`${id}`);
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
    }
    get originalMemoList() {
        return this.__originalMemoList.get();
    }
    set originalMemoList(newValue) {
        this.__originalMemoList.set(newValue);
    }
    get memoList() {
        return this.__memoList.get();
    }
    set memoList(newValue) {
        this.__memoList.set(newValue);
    }
    get textValue() {
        return this.__textValue.get();
    }
    set textValue(newValue) {
        this.__textValue.set(newValue);
    }
    get inputValue() {
        return this.__inputValue.get();
    }
    set inputValue(newValue) {
        this.__inputValue.set(newValue);
    }
    get isAddDialogShow() {
        return this.__isAddDialogShow.get();
    }
    set isAddDialogShow(newValue) {
        this.__isAddDialogShow.set(newValue);
    }
    get textEditValue() {
        return this.__textEditValue.get();
    }
    set textEditValue(newValue) {
        this.__textEditValue.set(newValue);
    }
    get inputEditValue() {
        return this.__inputEditValue.get();
    }
    set inputEditValue(newValue) {
        this.__inputEditValue.set(newValue);
    }
    get isEditDialogShow() {
        return this.__isEditDialogShow.get();
    }
    set isEditDialogShow(newValue) {
        this.__isEditDialogShow.set(newValue);
    }
    //页面初始化前向页面添加数据
    aboutToAppear() {
        this.inputValue = '';
        this.originalMemoList = [];
        this.memoList = [];
        this.MemoTable.getRdbStore(() => {
            this.MemoTable.query((result) => {
                this.originalMemoList = result;
                this.memoList = this.originalMemoList;
            });
        });
        for (let index = 0; index <= 8; index++) {
            const date = new Date();
            const item = new MemoModel(index + 1, date.getTime() + index, `${index + 1}`);
            this.originalMemoList.push(item);
        }
        this.memoList = this.originalMemoList;
    }
    onCancel() {
        console.info('Callback when the cancel button is clicked');
        this.textValue = '';
    }
    onAccept() {
        console.info('Callback when the confirm button is clicked');
        console.info(this.inputValue);
    }
    exitApp() {
        console.info('Click the callback in the blank area');
    }
    get keywords() {
        return this.__keywords.get();
    }
    set keywords(newValue) {
        this.__keywords.set(newValue);
    }
    onKeywordsChange() {
        if (this.keywords.length === 0) {
            this.memoList = this.originalMemoList;
        }
        else {
            let resultList = [];
            for (const memoItem of this.originalMemoList) {
                if (memoItem.content.includes(this.keywords)) {
                    resultList.push(memoItem);
                }
            }
            this.memoList = resultList;
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("pages/NoteMain.ets(169:5)");
            Stack.backgroundColor({ "id": 16777358, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/NoteMain.ets(171:7)");
            Column.height('100%');
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/NoteMain.ets(172:9)");
            Row.width('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("小N笔记");
            Text.debugLine("pages/NoteMain.ets(173:11)");
            Text.fontSize("30");
            Text.fontColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.margin({ left: 30, top: 30 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("pages/NoteMain.ets(177:11)");
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/NoteMain.ets(178:11)");
            Row.onClick(() => {
                // this.dialogController.open()
                this.isAddDialogShow = true;
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777272, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.debugLine("pages/NoteMain.ets(179:13)");
            Image.width(40);
            Image.height(40);
            Image.margin({ right: 30, top: 30 });
            Image.onClick(() => {
                // this.dialogController.open()
                this.isAddDialogShow = true;
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.margin({ top: 10 });
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MemoSearch(this, { keywords: this.__keywords }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.debugLine("pages/NoteMain.ets(200:7)");
            Scroll.margin({ top: 16 });
            Scroll.scrollBarColor('#8E8E8E');
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/NoteMain.ets(201:9)");
            Column.margin({ bottom: 20 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: 16 });
            List.debugLine("pages/NoteMain.ets(202:11)");
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const memo = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.swipeAction({ end: this.itemEnd.bind(this, memo.id) });
                        ListItem.debugLine("pages/NoteMain.ets(206:17)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new MemoItem(this, { memo: memo, onMemoClick: this.clickMemo }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        memo: memo
                                    });
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new MemoItem(this, { memo: memo, onMemoClick: this.clickMemo }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        memo: memo
                                    });
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.memoList, forEachItemGenFunction, (memo) => {
                return memo.content;
            }, true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isAddDialogShow) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new CustomDialogExample(this, {
                                    cancel: this.closeDialog,
                                    confirm: this.createMemo,
                                    textValue: this.__textValue,
                                    inputValue: this.__inputValue
                                }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isEditDialogShow) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new CustomDialogEdit(this, {
                                    textEditValue: this.__textEditValue,
                                    inputEditValue: this.__inputEditValue,
                                    close: this.closeDialog,
                                    // delete: this.deleteMemo,
                                    save: this.saveMemo
                                }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new NoteMain(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=NoteMain.js.map