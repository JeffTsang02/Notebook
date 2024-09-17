import prompt from '@ohos:promptAction';
import router from '@ohos:router';
import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
import data_preferences from '@ohos:data.preferences';
async function add(account, password) {
    data_preferences.getPreferences(getContext(this), 'login').then((preferences) => {
        preferences.put(account, password).then(() => {
            console.log("首选项注册成功");
            preferences.flush();
        }).catch((error) => {
            console.log(`error:${error}`);
        });
    });
}
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777369, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.height({ "id": 16777312, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777286, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.fontColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.backgroundColor({ "id": 16777374, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.width(CommonConstants.FULL_PARENT);
    TextInput.padding({ left: CommonConstants.INPUT_PADDING_LEFT });
    TextInput.margin({ top: { "id": 16777306, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
}
function __Line__lineStyle() {
    Line.width(CommonConstants.FULL_PARENT);
    Line.height({ "id": 16777307, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Line.backgroundColor({ "id": 16777360, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
}
function __Text__blueTextStyle() {
    Text.fontColor({ "id": 16777362, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Text.fontSize({ "id": 16777356, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Medium);
}
class Register extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__account = new ObservedPropertySimplePU('', this, "account");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__rpassword = new ObservedPropertySimplePU('', this, "rpassword");
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
        if (params.rpassword !== undefined) {
            this.rpassword = params.rpassword;
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
        this.__rpassword.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowProgress.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__account.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__rpassword.aboutToBeDeleted();
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
    get rpassword() {
        return this.__rpassword.get();
    }
    set rpassword(newValue) {
        this.__rpassword.set(newValue);
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
            Button.debugLine("pages/Register.ets(59:5)");
            Button.height({ "id": 16777330, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.width({ "id": 16777330, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777358, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(src);
            Image.debugLine("pages/Register.ets(60:7)");
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
    }
    register() {
        if (this.account === '' || this.password === '') {
            prompt.showToast({
                message: { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
        }
        else {
            if (this.password === this.rpassword) {
                add(this.account, this.password);
                this.isShowProgress = true;
                if (this.timeOutId === -1) {
                    this.timeOutId = setTimeout(() => {
                        this.isShowProgress = false;
                        this.timeOutId = -1;
                        // router.pushUrl({ url: 'pages/NoteMain' });
                        router.back();
                    }, CommonConstants.LOGIN_DELAY_TIME);
                }
            }
            else {
                this.rpassword = '';
                prompt.showToast({
                    message: ('密码不一致')
                });
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
            Column.debugLine("pages/Register.ets(102:5)");
            Column.backgroundColor({ "id": 16777358, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.height(CommonConstants.FULL_PARENT);
            Column.width(CommonConstants.FULL_PARENT);
            Column.padding({
                left: { "id": 16777333, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777333, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                bottom: { "id": 16777315, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777242, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("pages/Register.ets(103:7)");
            Text.fontSize({ "id": 16777334, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.margin({ top: 130 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Register.ets(108:7)");
            Column.margin({ top: 70, left: 30, right: 30 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/Register.ets(109:9)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
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
            TextInput.create({ placeholder: { "id": 16777238, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/Register.ets(115:9)");
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
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: "确认密码", text: this.rpassword });
            TextInput.debugLine("pages/Register.ets(122:9)");
            TextInput.maxLength(CommonConstants.INPUT_PASSWORD_LENGTH);
            TextInput.type(InputType.Password);
            __TextInput__inputStyle();
            TextInput.onChange((value) => {
                this.rpassword = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777240, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { type: ButtonType.Capsule });
            Button.debugLine("pages/Register.ets(132:7)");
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height({ "id": 16777309, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontSize({ "id": 16777329, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.backgroundColor({ "id": 16777363, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.margin({ top: { "id": 16777311, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottom: { "id": 16777310, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Button.onClick(() => {
                this.register();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("pages/Register.ets(142:7)");
            Text.fontColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontSize({ "id": 16777329, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.onClick(() => {
                router.back();
            });
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
                        LoadingProgress.debugLine("pages/Register.ets(150:9)");
                        LoadingProgress.color({ "id": 16777361, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        LoadingProgress.width({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        LoadingProgress.height({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        LoadingProgress.margin({ top: { "id": 16777316, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
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
            Blank.debugLine("pages/Register.ets(156:7)");
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
loadDocument(new Register(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Register.js.map