import prompt from '@ohos.promptAction';
import router from '@ohos.router';
import CommonConstants from '../common/constants/CommonConstants';
import data_preferences from '@ohos.data.preferences';

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

@Extend(TextInput)
function inputStyle() {
  .placeholderColor($r('app.color.placeholder_color'))
  .height($r('app.float.login_input_height'))
  .fontSize($r('app.float.big_text_size'))
  .fontColor($r('app.color.white'))
  .backgroundColor($r('app.color.textbar_background'))
  .width(CommonConstants.FULL_PARENT)
  .padding({ left: CommonConstants.INPUT_PADDING_LEFT })
  .margin({ top: $r('app.float.input_margin_top') })
}

@Extend(Line)
function lineStyle() {
  .width(CommonConstants.FULL_PARENT)
  .height($r('app.float.line_height'))
  .backgroundColor($r('app.color.line_color'))
}

@Extend(Text)
function blueTextStyle() {
  .fontColor($r('app.color.login_blue_text_color'))
  .fontSize($r('app.float.small_text_size'))
  .fontWeight(FontWeight.Medium)
}

/**
 * Login page
 */
@Entry
@Component
struct LoginPage {
  @State account: string = '';
  @State password: string = '';
  @State checkPass: string = '';
  @State isShowProgress: boolean = false;
  private timeOutId: number = -1;

  @Builder
  imageButton(src: Resource) {
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image(src)
    }
    .height($r('app.float.other_login_image_size'))
    .width($r('app.float.other_login_image_size'))
    .backgroundColor($r('app.color.background'))
  }

  login(): void {
    if (this.account === '' || this.password === '') {
      prompt.showToast({
        message: $r('app.string.input_empty_tips')
      })
    } else {
      data_preferences.getPreferences(getContext(this),'login')
        .then((preferences) =>{
          preferences.get(this.account,'',(err,val) =>{
            if(err){
              console.error(`无法读取'user'的值。Code:${err.code},message:${err.message}`);
              return;
            }
            console.info(`获得user对应的值：password:${val}`);
            this.checkPass = val.toString();
            if(this.checkPass === this.password){
              this.isShowProgress = true;
              if (this.timeOutId === -1) {
                this.timeOutId = setTimeout(() => {
                  this.isShowProgress = false;
                  this.timeOutId = -1;
                  router.pushUrl({ url: 'pages/NoteMain' });
                }, CommonConstants.LOGIN_DELAY_TIME);
              }
            }
            else{
              console.log("账号或密码错误")
              prompt.showToast({
                message: ('账户或密码错误')
              })
            }
          })
        });
    }
  }

  aboutToDisappear() {
    clearTimeout(this.timeOutId);
    this.timeOutId = -1;
  }

  build() {
    Column() {
      Image($r('app.media.logo'))
        .width($r('app.float.logo_image_size'))
        .height($r('app.float.logo_image_size'))
        .margin({ top: $r('app.float.logo_margin_top'), bottom: $r('app.float.logo_margin_bottom') })
      Text($r('app.string.app_name'))
        .fontSize($r('app.float.page_title_text_size'))
        .fontWeight(FontWeight.Medium)
        .fontColor($r('app.color.white'))
      Text($r('app.string.login_more'))
        .fontSize($r('app.float.normal_text_size'))
        .fontColor("#7e7e7e")
        .margin({ bottom: $r('app.float.login_more_margin_bottom'), top: $r('app.float.login_more_margin_top') })
      Column() {
          TextInput({ placeholder: $r('app.string.account') })
            .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
            .inputStyle()
            .onChange((value: string) => {
              this.account = value;
            })
          TextInput({ placeholder: $r('app.string.password') })
            .maxLength(CommonConstants.INPUT_PASSWORD_LENGTH)
            .type(InputType.Password)
            .inputStyle()
            .onChange((value: string) => {
              this.password = value;
            })
      }
      .margin({top:20,left:30,right:30})
      Row() {
        Text("").blueTextStyle()
          .padding({
            left: 30,
            top: 20
          })
      }
      .justifyContent(FlexAlign.SpaceBetween)
      .width(CommonConstants.FULL_PARENT)
      .margin({ top: $r('app.float.forgot_margin_top') })

      Button($r('app.string.login'), { type: ButtonType.Capsule })
        .width(CommonConstants.BUTTON_WIDTH)
        .height($r('app.float.login_button_height'))
        .fontSize($r('app.float.normal_text_size'))
        .fontWeight(FontWeight.Medium)
        .backgroundColor($r('app.color.login_button_color'))
        .margin({ top: $r('app.float.login_button_margin_top'), bottom: $r('app.float.login_button_margin_bottom') })
        .onClick(() => {
          this.login();
        })
      Text($r('app.string.register_account'))
        .fontColor($r('app.color.white'))
        .fontSize($r('app.float.normal_text_size'))
        .fontWeight(FontWeight.Medium)
        .onClick(() => {
          router.pushUrl({ url: 'pages/Register' });
        })
      if (this.isShowProgress) {
        LoadingProgress()
          .color($r('app.color.loading_color'))
          .width($r('app.float.login_progress_size'))
          .height($r('app.float.login_progress_size'))
          .margin({ top: $r('app.float.login_progress_margin_top') })
      }
      Blank()
    }
    .backgroundColor($r('app.color.background'))
    .height(CommonConstants.FULL_PARENT)
    .width(CommonConstants.FULL_PARENT)
    .padding({
      left: $r('app.float.page_padding_hor'),
      right: $r('app.float.page_padding_hor'),
      bottom: $r('app.float.login_page_padding_bottom')
    })
  }
}