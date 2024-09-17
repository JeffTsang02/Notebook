"use strict";
class CustomDialogExample extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__textValue = new SynchedPropertySimpleTwoWayPU(params.textValue, this, "textValue");
        this.controller = undefined;
        this.cancel = () => {
        };
        this.confirm = () => {
        };
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
    }
    aboutToBeDeleted() {
        this.__textValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get textValue() {
        return this.__textValue.get();
    }
    set textValue(newValue) {
        this.__textValue.set(newValue);
    }
    setController(ctr) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/xxx.ets(15:5)");
            Column.borderRadius(10);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('Change text');
            Text.debugLine("pages/xxx.ets(16:7)");
            Text.fontSize(20);
            Text.margin({ top: 10, bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: '', text: this.textValue });
            TextInput.debugLine("pages/xxx.ets(17:7)");
            TextInput.height(60);
            TextInput.width('90%');
            TextInput.onChange((value) => {
                this.textValue = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.SpaceAround });
            Flex.debugLine("pages/xxx.ets(21:7)");
            Flex.margin({ bottom: 10 });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('cancel');
            Button.debugLine("pages/xxx.ets(22:9)");
            Button.onClick(() => {
                this.controller.close();
                this.cancel();
            });
            Button.backgroundColor(0xffffff);
            Button.fontColor(Color.Black);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('confirm');
            Button.debugLine("pages/xxx.ets(28:9)");
            Button.onClick(() => {
                if (this.controller != undefined) {
                    this.controller.close();
                    this.confirm();
                }
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
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class CustomDialogUser extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__textValue = new ObservedPropertySimplePU('', this, "textValue");
        this.__inputValue = new ObservedPropertySimplePU('click me', this, "inputValue");
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new CustomDialogExample(this, {
                    cancel: this.onCancel,
                    confirm: this.onAccept,
                    textValue: this.__textValue,
                });
                jsDialog.setController(this.dialogController);
                ViewPU.create(jsDialog);
            },
            cancel: this.exitApp,
            autoCancel: true,
            alignment: DialogAlignment.Bottom,
            offset: { dx: 0, dy: -20 },
            gridCount: 4,
            customStyle: false
        }, this);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.textValue !== undefined) {
            this.textValue = params.textValue;
        }
        if (params.inputValue !== undefined) {
            this.inputValue = params.inputValue;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
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
    // 在自定义组件即将析构销毁时将dialogControlle置空
    aboutToDisappear() {
        this.dialogController = null; // 将dialogController置空
    }
    onCancel() {
        console.info('Callback when the first button is clicked');
    }
    onAccept() {
        console.info('Callback when the second button is clicked');
    }
    exitApp() {
        console.info('Click the callback in the blank area');
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/xxx.ets(80:5)");
            Column.width('100%');
            Column.margin({ top: 5 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.textValue);
            Text.debugLine("pages/xxx.ets(81:7)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("点击此处修改参数");
            Button.debugLine("pages/xxx.ets(82:7)");
            Button.onClick(() => {
                this.dialogController.open();
            });
            Button.backgroundColor(0x317aff);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new CustomDialogUser(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=xxx.js.map