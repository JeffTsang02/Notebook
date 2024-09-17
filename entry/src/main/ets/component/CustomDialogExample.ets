@CustomDialog
export default struct CustomDialogExample {
  @Link textValue: string
  @Link inputValue: string
  controller: CustomDialogController
  // // 若尝试在CustomDialog中传入多个其他的Controller，以实现在CustomDialog中打开另一个或另一些CustomDialog，那么此处需要将指向自己的controller放在所有controller的后面
  cancel: () => void = () =>{
  }//onClose
  confirm: () => void = () =>{

  }  //onCreate

  build() {
    Stack(){
      Rect()
        .height('110%')
        .width('100%')
        .fill('rgba(0,0,0,0.8)')

      Column(){
        Text('')
          .height('50%')
        Column() {
          TextArea({ placeholder: '开始输入你的笔记吧！', text: this.textValue})
            .height('40%')
            .width('95%')
            .margin({top:10,bottom:10})
            .fontColor($r('app.color.white'))
            .backgroundColor('#000000')
            .placeholderColor($r('app.color.placeholder_color'))

            .onChange((value: string) => {
              this.textValue = value
            })
          Flex({ justifyContent: FlexAlign.SpaceAround }) {
            Button('cancel')
              .onClick(() => {
                // this.controller.close()
                this.cancel()

              })
              .backgroundColor($r('app.color.textbar_background'))
              .fontColor(Color.White)
            Button('confirm')
              .onClick(() => {
                //if (this.controller != undefined) {
                  this.inputValue = this.textValue
                  // this.controller.close()
                  this.confirm()
                //}
              })
              .backgroundColor(0xffffff)
              .fontColor(Color.Red)
          }.margin({ bottom: 10 })


        }

        .borderRadius(10)
        .backgroundColor('#000000')
        .margin({bottom:0,left:10,right:10})
      }
      .margin({bottom:10})
    }
    //.height('100%')

  }
}

// @Preview
// @Component
// struct MemoItemPreview{
//   @State textEditValue: string = ''
//
//   build(){
//     CustomDialogExample({textEditValue:$textEditValue,inputEditValue:$inputEditValue })
//   }
//
//
// }