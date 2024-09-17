@Component
export default struct MemoSearch{

  @Link keywords:string

  build(){
    Row(){
      Row(){
        Image($r('app.media.search'))
          .width(16)
          .margin({left:10})
        TextInput({
          placeholder:'搜索笔记',
          text: this.keywords
        })
          .onChange((value:string)=>{
            this.keywords = value
          })
          .placeholderColor($r('app.color.placeholder_color'))
          .backgroundColor('rgba(36,36,36,0)')
          .fontColor($r('app.color.white'))
        if (this.keywords){
          Image($r('app.media.cancel'))
            .width(16)
            .margin({right:10})
        }
      }
      .padding({right:52})
      .borderRadius(20)
      .backgroundColor('rgba(36,36,36,0.8)')
      .margin({left:20,right:20})
    }
    .backgroundColor($r('app.color.background'))

  }
}


@Preview
@Component
struct MemoSearchPreview{

  @State keywords :string= '1'
  build(){
    MemoSearch({keywords:$keywords})
  }
}