import MemoModel from '../Model/MemoModel'

@Extend(Text)
function timeStyle() {
  .fontSize("10")
  .fontColor($r('app.color.remark_color'))
}

interface TimeFormat{
  range : string
  formatDate:string
  formatTime:string
}

function getFormatTime(timeStamp:number):TimeFormat{
  const today = new Date();
  const date = new Date(timeStamp);
  // 计算日期差值
  const diffTime = today.getTime() - date.getTime();
  // 向下取整
  const diffDays = Math.floor(diffTime / (24 * 60 * 60 * 1000));
  let range: string = ''
  const month: string = (date.getMonth() + 1).toString().padStart(2, '0')
  const day: string = date.getDate().toString().padStart(2, '0')
  const hours: string = date.getHours().toString().padStart(2, '0')
  const minute: string = date.getMinutes().toString().padStart(2, '0')
  let formatDate: string = `${month}月${day}日`
  const formatTime: string = `${hours}:${minute}`
  if (diffDays === 0) {
    range = '今天'
    formatDate = ''
  } else if (diffDays === 1) {
    range = '昨天'
    formatDate = ''
  } else if (diffDays === 2) {
    range = '前天'
    formatDate = ''
  } else {
    range = ''
  }
  return { range, formatDate, formatTime }
}



@Component
export default struct MemoItem{

  @ObjectLink memo:MemoModel
  onMemoClick : (memo:MemoModel) =>void
  build(){
    Stack(){
      Column(){//纵向
        //row横向
        Text(this.memo.content).fontColor($r('app.color.white'))
          .margin({left:15,right:10,top:15})
          .fontSize(18)
          .maxLines(2)
        Blank()
        Row(){
          Text(getFormatTime(this.memo.updateTime).range)
            .timeStyle()
          Text(getFormatTime(this.memo.updateTime).formatDate)
            .timeStyle()
          Text(getFormatTime(this.memo.updateTime).formatTime)
            .timeStyle()
        }
        .margin({left:15,bottom:15})
      }
      .height(90)
      .width('90%')
      .borderRadius(20)
      .backgroundColor('rgba(36,36,36,0.8)')
      .alignItems(HorizontalAlign.Start)



    }
    .width('100%')
    //.backgroundColor($r('app.color.textbar_background'))
    .backgroundColor($r('app.color.background'))
    .onClick(()=>{
      this.onMemoClick(this.memo)
    })
  }
}

@Preview
@Component
struct MemoItemPreview{
@State memo: MemoModel = new MemoModel(1,1718132252000,'记得使用毫秒级时间戳')


  build(){
    MemoItem({memo:this.memo})
  }


}