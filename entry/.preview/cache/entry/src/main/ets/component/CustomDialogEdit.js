export default class CustomDialogEdit extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__textEditValue = new SynchedPropertySimpleTwoWayPU(params.textEditValue, this, "textEditValue");
        this.__inputEditValue = new SynchedPropertySimpleTwoWayPU(params.inputEditValue, this, "inputEditValue");
        this.controller = undefined;
        this.close = () => {
        } //onClose
        ;
        this.delete = () => {
        } //onDelete
        ;
        this.save = () => {
        } //onCreate
        ;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.close !== undefined) {
            this.close = params.close;
        }
        if (params.delete !== undefined) {
            this.delete = params.delete;
        }
        if (params.save !== undefined) {
            this.save = params.save;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__textEditValue.purgeDependencyOnElmtId(rmElmtId);
        this.__inputEditValue.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__textEditValue.aboutToBeDeleted();
        this.__inputEditValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
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
    setController(ctr) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("component/CustomDialogEdit.ets(16:5)");
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Rect.create();
            Rect.debugLine("component/CustomDialogEdit.ets(17:7)");
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
            Column.debugLine("component/CustomDialogEdit.ets(22:7)");
            Column.margin({ bottom: 10 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('');
            Text.debugLine("component/CustomDialogEdit.ets(23:9)");
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
            Column.debugLine("component/CustomDialogEdit.ets(25:9)");
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
            TextArea.create({ placeholder: '开始输入你的笔记吧！', text: this.textEditValue });
            TextArea.debugLine("component/CustomDialogEdit.ets(26:11)");
            TextArea.height('40%');
            TextArea.width('95%');
            TextArea.margin({ top: 10, bottom: 10 });
            TextArea.fontColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextArea.backgroundColor('#000000');
            TextArea.placeholderColor({ "id": 16777369, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextArea.onChange((value) => {
                this.textEditValue = value;
            });
            if (!isInitialRender) {
                TextArea.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.SpaceAround });
            Flex.debugLine("component/CustomDialogEdit.ets(37:11)");
            Flex.margin({ bottom: 10 });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('close');
            Button.debugLine("component/CustomDialogEdit.ets(38:13)");
            Button.onClick(() => {
                // this.controller.close()
                this.close();
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
            // Button('delete')
            //   .onClick(() => {
            //     // this.controller.close()
            //     this.delete()
            //
            //   })
            //   .backgroundColor($r('app.color.textbar_background'))
            //   .fontColor(Color.White)
            Button.createWithLabel('save');
            Button.debugLine("component/CustomDialogEdit.ets(55:13)");
            // Button('delete')
            //   .onClick(() => {
            //     // this.controller.close()
            //     this.delete()
            //
            //   })
            //   .backgroundColor($r('app.color.textbar_background'))
            //   .fontColor(Color.White)
            Button.onClick(() => {
                //if (this.controller != undefined) {
                this.inputEditValue = this.textEditValue;
                // this.controller.close()
                this.save();
                //}
            });
            // Button('delete')
            //   .onClick(() => {
            //     // this.controller.close()
            //     this.delete()
            //
            //   })
            //   .backgroundColor($r('app.color.textbar_background'))
            //   .fontColor(Color.White)
            Button.backgroundColor(0xffffff);
            // Button('delete')
            //   .onClick(() => {
            //     // this.controller.close()
            //     this.delete()
            //
            //   })
            //   .backgroundColor($r('app.color.textbar_background'))
            //   .fontColor(Color.White)
            Button.fontColor(Color.Red);
            if (!isInitialRender) {
                // Button('delete')
                //   .onClick(() => {
                //     // this.controller.close()
                //     this.delete()
                //
                //   })
                //   .backgroundColor($r('app.color.textbar_background'))
                //   .fontColor(Color.White)
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // Button('delete')
        //   .onClick(() => {
        //     // this.controller.close()
        //     this.delete()
        //
        //   })
        //   .backgroundColor($r('app.color.textbar_background'))
        //   .fontColor(Color.White)
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
//# sourceMappingURL=CustomDialogEdit.js.map