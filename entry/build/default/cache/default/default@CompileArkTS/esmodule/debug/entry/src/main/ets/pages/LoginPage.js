import prompt from '@ohos:promptAction';
import router from '@ohos:router';
import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
import data_preferences from '@ohos:data.preferences';
// async function query(account:string,password:string) {
//   data_preferences.getPreferences(getContext(this),'login')
//     .then((preferences) =>{
//     preferences.get(account,'',(err,val) =>{
//       if(err){
//         console.error(`无法读取'user'的值。Code:${err.code},message:${err.message}`);
//         return;
//       }
//       console.info(`获得user对应的值：password:${val}`);
//       this.checkPass = val.toString();
//     })
//   });
// }
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777259, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.height({ "id": 16777293, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777267, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.fontColor({ "id": 16777266, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.backgroundColor({ "id": 16777264, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.width(CommonConstants.FULL_PARENT);
    TextInput.padding({ left: CommonConstants.INPUT_PADDING_LEFT });
    TextInput.margin({ top: { "id": 16777287, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
}
function __Line__lineStyle() {
    Line.width(CommonConstants.FULL_PARENT);
    Line.height({ "id": 16777288, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Line.backgroundColor({ "id": 16777250, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
}
function __Text__blueTextStyle() {
    Text.fontColor({ "id": 16777252, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Text.fontSize({ "id": 16777337, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Medium);
}
class LoginPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__account = new ObservedPropertySimplePU('', this, "account");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__checkPass = new ObservedPropertySimplePU('', this, "checkPass");
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
        if (params.checkPass !== undefined) {
            this.checkPass = params.checkPass;
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
        this.__checkPass.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowProgress.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__account.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__checkPass.aboutToBeDeleted();
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
    get checkPass() {
        return this.__checkPass.get();
    }
    set checkPass(newValue) {
        this.__checkPass.set(newValue);
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
            Button.height({ "id": 16777311, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.width({ "id": 16777311, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777248, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(src);
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
                message: { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
        }
        else {
            data_preferences.getPreferences(getContext(this), 'login')
                .then((preferences) => {
                preferences.get(this.account, '', (err, val) => {
                    if (err) {
                        console.error(`无法读取'user'的值。Code:${err.code},message:${err.message}`);
                        return;
                    }
                    console.info(`获得user对应的值：password:${val}`);
                    this.checkPass = val.toString();
                    if (this.checkPass === this.password) {
                        this.isShowProgress = true;
                        if (this.timeOutId === -1) {
                            this.timeOutId = setTimeout(() => {
                                this.isShowProgress = false;
                                this.timeOutId = -1;
                                router.pushUrl({ url: 'pages/NoteMain' });
                            }, CommonConstants.LOGIN_DELAY_TIME);
                        }
                    }
                    else {
                        console.log("账号或密码错误");
                        prompt.showToast({
                            message: ('账户或密码错误')
                        });
                    }
                });
            });
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
            Column.backgroundColor({ "id": 16777248, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.height(CommonConstants.FULL_PARENT);
            Column.width(CommonConstants.FULL_PARENT);
            Column.padding({
                left: { "id": 16777314, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777314, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                bottom: { "id": 16777296, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777360, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width({ "id": 16777299, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777299, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.margin({ top: { "id": 16777301, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottom: { "id": 16777300, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777216, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontSize({ "id": 16777315, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor({ "id": 16777266, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontSize({ "id": 16777310, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontColor("#7e7e7e");
            Text.margin({ bottom: { "id": 16777294, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, top: { "id": 16777295, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.margin({ top: 20, left: 30, right: 30 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
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
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(CommonConstants.FULL_PARENT);
            Row.margin({ top: { "id": 16777268, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("");
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
            Button.createWithLabel({ "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { type: ButtonType.Capsule });
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height({ "id": 16777290, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontSize({ "id": 16777310, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.backgroundColor({ "id": 16777253, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.margin({ top: { "id": 16777292, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottom: { "id": 16777291, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
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
            Text.create({ "id": 16777241, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontColor({ "id": 16777266, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontSize({ "id": 16777310, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.onClick(() => {
                router.pushUrl({ url: 'pages/Register' });
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
                        LoadingProgress.color({ "id": 16777251, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        LoadingProgress.width({ "id": 16777298, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        LoadingProgress.height({ "id": 16777298, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        LoadingProgress.margin({ top: { "id": 16777297, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
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
//# sourceMappingURL=LoginPage.js.map