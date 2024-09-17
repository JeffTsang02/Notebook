import CustomDialogEdit from '../component/CustomDialogEdit'
import CustomDialogExample from '../component/CustomDialogExample'
import MemoItem from '../component/MemoItem'
import MemoSearch from '../component/MemoSearch'
import MemoModel from '../Model/MemoModel'
import MemoTable from '../database/MemoTable'
@Entry
@Component
struct NoteMain {
  @Builder itemEnd(id: number) {

      Button("Del")
        .margin({right:10})
        .onClick(()=>{
          this.deleteMemo(id)
          console.log(`${id}`);
        })

  }
  //缓存的原始数组
  @State originalMemoList :MemoModel[] = []
  //ForEach 循环渲染对象数组
  @State memoList : MemoModel[] = []
  //自定义弹窗 暂存内容
  @State textValue: string = ''
  //与CustomDialogExamples中的@link字段连接
  //需要写入的内容
  @State inputValue: string = ''
  // 是否展示新建memo自定义弹窗
  @State isAddDialogShow: boolean = false
  //编辑自定义弹窗 暂存内容
  @State textEditValue: string = ''
  //与CustomDialogExamples中的@link字段连接
  //编辑需要写入的内容
  @State inputEditValue: string = ''
  // 是否展示编辑memo自定义弹窗
  @State isEditDialogShow: boolean = false
  //数据库初始化
  private MemoTable = new MemoTable(() => {
  })
  // dialogController: CustomDialogController = new CustomDialogController({
  //   builder: CustomDialogExample({
  //     close: this.onCancel,
  //     save: this.onAccept,
  //     textEditValue: $textEditValue,
  //     inputEditValue: $inputEditValue
  //   }),
  //   close: this.exitApp,
  //   autoCancel: true,
  //   alignment: DialogAlignment.Bottom,
  //   offset: { dx: 0, dy: -20 },
  //   gridCount: 4,
  //   customStyle: true
  // })
  //新建笔记方法
  createMemo = () => {
    const date : Date = new Date()
    const newMemo: MemoModel = new MemoModel(0, date.getTime(), this.inputValue)
    this.MemoTable.insertData(newMemo, (id: number) => {
      newMemo.id = id
      this.originalMemoList.push(newMemo)
      this.memoList = this.originalMemoList
      this.closeDialog()
    })
  }
  //删除笔记方法
  deleteMemo = (id:number) =>{
    for(let i = 0;i<this.originalMemoList.length;i++){
      if (this.originalMemoList[i].id === id){
        this.editingMemoIndex = i
      }
    }
    if (this.editingMemoIndex !== -1) {
      this.MemoTable.deleteData(this.originalMemoList[this.editingMemoIndex], () => {
        this.originalMemoList.splice(this.editingMemoIndex, 1)
        this.memoList = this.originalMemoList
        this.closeDialog()
      })
    }
  }
  //当前编辑索引值
  editingMemoIndex : number = -1
  //点击笔记时的方法
  clickMemo = (memo:MemoModel) => {
    for(let i = 0;i<this.originalMemoList.length;i++){
      if (this.originalMemoList[i].id === memo.id){
        this.editingMemoIndex = i
        this.isEditDialogShow = true
        this.textEditValue = memo.content
      }
    }
  }

  // 修改笔记方法
  saveMemo = () => {
    const date : Date = new Date()
    this.originalMemoList[this.editingMemoIndex].updateTime = date.getTime()
    this.originalMemoList[this.editingMemoIndex].content = this.inputEditValue
    this.MemoTable.updateData(this.originalMemoList[this.editingMemoIndex], () => {
      this.memoList = this.originalMemoList
      this.closeDialog()
    })
  }
  //关闭弹窗方法
  closeDialog = () => {
    this.isAddDialogShow = false
    this.textValue = ''
    this.isEditDialogShow = false
    this.textEditValue = ''
    this.editingMemoIndex = -1
  }
  //页面初始化前向页面添加数据
  aboutToAppear(){
    this.inputValue = ''
    this.originalMemoList = []
    this.memoList = []

    this.MemoTable.getRdbStore(() => {
      this.MemoTable.query((result: MemoModel[]) => {
        this.originalMemoList = result
        this.memoList = this.originalMemoList

      })
    })

    for(let index = 0; index <= 8;index++){
      const date : Date = new Date()
      const item : MemoModel = new MemoModel(index+1,date.getTime()+index,`${index+1}`)
      this.originalMemoList.push(item)
    }
    this.memoList = this.originalMemoList
  }


  onCancel() {
    console.info('Callback when the cancel button is clicked')
    this.textValue=''
  }

  onAccept() {
    console.info('Callback when the confirm button is clicked')
    console.info(this.inputValue)
  }

  exitApp() {
    console.info('Click the callback in the blank area')
  }
  //搜索关键词
  @State @Watch('onKeywordsChange') keywords :string = ''

  onKeywordsChange(){
    if(this.keywords.length === 0 ){
      this.memoList = this.originalMemoList
    }
    else{
      let resultList : MemoModel[] = []

      for (const memoItem of this.originalMemoList) {
        if(memoItem.content.includes(this.keywords)){
          resultList.push(memoItem)
        }
      }
      this.memoList = resultList
    }
  }

  build() {

    Stack() {

      Column() {
        Row() { //新建笔记
          Text("小N笔记")
            .fontSize("30")
            .fontColor($r('app.color.white'))
            .margin({ left: 30, top: 30 })
          Blank()
          Row() {
            Image($r('app.media.plus'))
              .width(40)
              .height(40)
              .margin({ right: 30, top: 30 })
              .onClick(()=>{
                // this.dialogController.open()
                this.isAddDialogShow = true

              })
          }
          .onClick(()=>{
            // this.dialogController.open()
            this.isAddDialogShow = true
          })



        }
        .width('100%')
        MemoSearch({keywords:$keywords})
        .margin({top:10})
      Scroll(){
        Column(){
          List({space:16}){
            ForEach(
              this.memoList,
              (memo:MemoModel,index:number) => {
                ListItem(){
                  MemoItem({memo: memo,onMemoClick:this.clickMemo})
                }
                .swipeAction({end:this.itemEnd(memo.id)})

              },
              (memo:MemoModel) => {
                return memo.content
              }
            )
          }

        }
        .margin({bottom:20})
      }
        .margin({top:16})
        .scrollBarColor('#8E8E8E')

      }
      .height('100%')
      .width('100%')

    if(this.isAddDialogShow){
      CustomDialogExample({
        cancel: this.closeDialog,
        confirm: this.createMemo,
        textValue: $textValue,
        inputValue: $inputValue
      })
    }

    if (this.isEditDialogShow) {
      CustomDialogEdit({
        textEditValue:$textEditValue,
        inputEditValue:$inputEditValue,
        close: this.closeDialog,
        // delete: this.deleteMemo,
        save: this.saveMemo
      })
    }
    }
    .backgroundColor($r('app.color.background'))
  }
}