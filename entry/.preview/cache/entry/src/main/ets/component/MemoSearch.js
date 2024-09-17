export default class MemoSearch extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__keywords = new SynchedPropertySimpleTwoWayPU(params.keywords, this, "keywords");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__keywords.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__keywords.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get keywords() {
        return this.__keywords.get();
    }
    set keywords(newValue) {
        this.__keywords.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("component/MemoSearch.ets(7:5)");
            Row.backgroundColor({ "id": 16777358, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("component/MemoSearch.ets(8:7)");
            Row.padding({ right: 52 });
            Row.borderRadius(20);
            Row.backgroundColor('rgba(36,36,36,0.8)');
            Row.margin({ left: 20, right: 20 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777277, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.debugLine("component/MemoSearch.ets(9:9)");
            Image.width(16);
            Image.margin({ left: 10 });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({
                placeholder: '搜索笔记',
                text: this.keywords
            });
            TextInput.debugLine("component/MemoSearch.ets(12:9)");
            TextInput.onChange((value) => {
                this.keywords = value;
            });
            TextInput.placeholderColor({ "id": 16777369, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.backgroundColor('rgba(36,36,36,0)');
            TextInput.fontColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.keywords) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Image.debugLine("component/MemoSearch.ets(23:11)");
                        Image.width(16);
                        Image.margin({ right: 10 });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
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
        Row.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class MemoSearchPreview extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__keywords = new ObservedPropertySimplePU('1', this, "keywords");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.keywords !== undefined) {
            this.keywords = params.keywords;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__keywords.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__keywords.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get keywords() {
        return this.__keywords.get();
    }
    set keywords(newValue) {
        this.__keywords.set(newValue);
    }
    initialRender() {
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
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    previewComponent();
}
else {
    storePreviewComponents(1, "MemoSearchPreview", new MemoSearchPreview(undefined, {}));
}
//# sourceMappingURL=MemoSearch.js.map