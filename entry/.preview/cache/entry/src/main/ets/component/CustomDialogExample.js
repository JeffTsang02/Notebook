export default class CustomDialogExample extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__textValue = new SynchedPropertySimpleTwoWayPU(params.textValue, this, "textValue");
        this.__inputValue = new SynchedPropertySimpleTwoWayPU(params.inputValue, this, "inputValue");
        this.controller = undefined;
        this.cancel = () => {
        } //onClose
        ;
        this.confirm = () => {
        } //onCreate
        ;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.cancel !== undefined) {
            this.cancel = params.cancel;
        }
        if (params.confirm !== undefined) {
            this.confirm = params.confirm;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__textValue.purgeDependencyOnElmtId(rmElmtId);
        this.__inputValue.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__textValue.aboutToBeDeleted();
        this.__inputValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
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
    setController(ctr) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("component/CustomDialogExample.ets(14:5)");
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Rect.create();
            Rect.debugLine("component/CustomDialogExample.ets(15:7)");
            Rect.height('110%');
            Rect.width('100%');
            Rect.fill('rgba(0,0,0,0.8)');
            if (!isInitialRender) {
                Rect.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("component/CustomDialogExample.ets(20:7)");
            Column.margin({ bottom: 10 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('');
            Text.debugLine("component/CustomDialogExample.ets(21:9)");
            Text.height('50%');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("component/CustomDialogExample.ets(23:9)");
            Column.borderRadius(10);
            Column.backgroundColor('#000000');
            Column.margin({ bottom: 0, left: 10, right: 10 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextArea.create({ placeholder: '开始输入你的笔记吧！', text: this.textValue });
            TextArea.debugLine("component/CustomDialogExample.ets(24:11)");
            TextArea.height('40%');
            TextArea.width('95%');
            TextArea.margin({ top: 10, bottom: 10 });
            TextArea.fontColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextArea.backgroundColor('#000000');
            TextArea.placeholderColor({ "id": 16777369, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextArea.onChange((value) => {
                this.textValue = value;
            });
            if (!isInitialRender) {
                TextArea.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.SpaceAround });
            Flex.debugLine("component/CustomDialogExample.ets(35:11)");
            Flex.margin({ bottom: 10 });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('cancel');
            Button.debugLine("component/CustomDialogExample.ets(36:13)");
            Button.onClick(() => {
                // this.controller.close()
                this.cancel();
            });
            Button.backgroundColor({ "id": 16777374, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontColor(Color.White);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('confirm');
            Button.debugLine("component/CustomDialogExample.ets(44:13)");
            Button.onClick(() => {
                //if (this.controller != undefined) {
                this.inputValue = this.textValue;
                // this.controller.close()
                this.confirm();
                //}
            });
            Button.backgroundColor(0xffffff);
            Button.fontColor(Color.Red);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Flex.pop();
        Column.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=CustomDialogExample.js.map