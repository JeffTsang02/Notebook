import prompt from '@ohos:promptAction';
import router from '@ohos:router';
import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777231, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.height({ "id": 16777354, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777328, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.backgroundColor({ "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.width(CommonConstants.FULL_PARENT);
    TextInput.padding({ left: CommonConstants.INPUT_PADDING_LEFT });
    TextInput.margin({ top: { "id": 16777348, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
}
function __Line__lineStyle() {
    Line.width(CommonConstants.FULL_PARENT);
    Line.height({ "id": 16777349, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Line.backgroundColor({ "id": 16777222, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
}
function __Text__blueTextStyle() {
    Text.fontColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Text.fontSize({ "id": 16777398, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Medium);
}
class LoginPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__account = new ObservedPropertySimplePU('', this, "account");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__isShowProgress = new ObservedPropertySimplePU(false, this, "isShowProgress");
        this.timeOutId = -1;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.account !== undefined) {
            this.account = params.account;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.isShowProgress !== undefined) {
            this.isShowProgress = params.isShowProgress;
        }
        if (params.timeOutId !== undefined) {
            this.timeOutId = params.timeOutId;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__account.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowProgress.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__account.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__isShowProgress.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get account() {
        return this.__account.get();
    }
    set account(newValue) {
        this.__account.set(newValue);
    }
    get password() {
        return this.__password.get();
    }
    set password(newValue) {
        this.__password.set(newValue);
    }
    get isShowProgress() {
        return this.__isShowProgress.get();
    }
    set isShowProgress(newValue) {
        this.__isShowProgress.set(newValue);
    }
    imageButton(src, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
            Button.debugLine("pages/RegisterPage.ets(45:5)");
            Button.height({ "id": 16777372, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.width({ "id": 16777372, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777220, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(src);
            Image.debugLine("pages/RegisterPage.ets(46:7)");
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
    }
    login() {
        if (this.account === '' || this.password === '') {
            prompt.showToast({
                message: { "id": 16777258, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
        }
        else {
            this.isShowProgress = true;
            if (this.timeOutId === -1) {
                this.timeOutId = setTimeout(() => {
                    this.isShowProgress = false;
                    this.timeOutId = -1;
                    router.replaceUrl({ url: 'pages/MainPage' });
                }, CommonConstants.LOGIN_DELAY_TIME);
            }
        }
    }
    aboutToDisappear() {
        clearTimeout(this.timeOutId);
        this.timeOutId = -1;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/RegisterPage.ets(76:5)");
            Column.backgroundColor({ "id": 16777220, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.height(CommonConstants.FULL_PARENT);
            Column.width(CommonConstants.FULL_PARENT);
            Column.padding({
                left: { "id": 16777375, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777375, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                bottom: { "id": 16777357, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777309, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.debugLine("pages/RegisterPage.ets(77:7)");
            Image.width({ "id": 16777360, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777360, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.margin({ top: { "id": 16777362, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottom: { "id": 16777361, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777217, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("pages/RegisterPage.ets(81:7)");
            Text.fontSize({ "id": 16777376, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor({ "id": 16777236, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("pages/RegisterPage.ets(85:7)");
            Text.fontSize({ "id": 16777371, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontColor({ "id": 16777226, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.margin({ bottom: { "id": 16777355, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, top: { "id": 16777356, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/RegisterPage.ets(89:7)");
            Column.margin({ top: 20, left: 30, right: 30 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777248, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(90:11)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Number);
            __TextInput__inputStyle();
            TextInput.onChange((value) => {
                this.account = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777282, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(97:11)");
            TextInput.maxLength(CommonConstants.INPUT_PASSWORD_LENGTH);
            TextInput.type(InputType.Password);
            __TextInput__inputStyle();
            TextInput.onChange((value) => {
                this.password = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/RegisterPage.ets(106:7)");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(CommonConstants.FULL_PARENT);
            Row.margin({ top: { "id": 16777329, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("pages/RegisterPage.ets(107:9)");
            __Text__blueTextStyle();
            Text.padding({
                left: 30,
                top: 20
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777259, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { type: ButtonType.Capsule });
            Button.debugLine("pages/RegisterPage.ets(117:7)");
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height({ "id": 16777351, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontSize({ "id": 16777371, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.backgroundColor({ "id": 16777225, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.margin({ top: { "id": 16777353, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottom: { "id": 16777352, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Button.onClick(() => {
                this.login();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777286, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("pages/RegisterPage.ets(127:7)");
            Text.fontColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontSize({ "id": 16777371, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isShowProgress) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        LoadingProgress.create();
                        LoadingProgress.debugLine("pages/RegisterPage.ets(133:9)");
                        LoadingProgress.color({ "id": 16777223, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        LoadingProgress.width({ "id": 16777359, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        LoadingProgress.height({ "id": 16777359, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        LoadingProgress.margin({ top: { "id": 16777358, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                        if (!isInitialRender) {
                            LoadingProgress.pop();
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
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("pages/RegisterPage.ets(139:7)");
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new LoginPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=RegisterPage.js.map