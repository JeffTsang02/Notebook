import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
import mainViewModel from '@bundle:com.example.component/entry/ets/viewmodel/MainViewModel';
export default class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.swiperController = new SwiperController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.height(CommonConstants.FULL_PARENT);
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants.COMMON_SPACE });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.FULL_PARENT);
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777240, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize({ "id": 16777343, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777335, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Text.padding({ left: { "id": 16777336, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Swiper.create(this.swiperController);
            Swiper.margin({ top: { "id": 16777313, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Swiper.autoPlay(true);
            if (!isInitialRender) {
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const img = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(img);
                    Image.borderRadius({ "id": 16777312, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSwiperImages(), forEachItemGenFunction, (img) => JSON.stringify(img.id), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Swiper.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Grid.create();
            Grid.columnsTemplate('1fr 1fr 1fr 1fr');
            Grid.rowsTemplate('1fr 1fr');
            Grid.columnsGap({ "id": 16777299, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777303, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.padding({ top: { "id": 16777302, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottom: { "id": 16777302, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Grid.height({ "id": 16777300, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.backgroundColor(Color.White);
            Grid.borderRadius({ "id": 16777298, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Grid.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = true && (Grid.willUseProxy() === true);
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        GridItem.create(deepRenderFunction, isLazyCreate);
                        if (!isInitialRender) {
                            GridItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        GridItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(item.img);
                            Image.width({ "id": 16777306, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Image.height({ "id": 16777306, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.title);
                            Text.fontSize({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.margin({ top: { "id": 16777305, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(item.img);
                            Image.width({ "id": 16777306, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Image.height({ "id": 16777306, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.title);
                            Text.fontSize({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.margin({ top: { "id": 16777305, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getFirstGridData(), forEachItemGenFunction, (item) => JSON.stringify(item), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Grid.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontSize({ "id": 16777338, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.width(CommonConstants.FULL_PARENT);
            Text.margin({ top: { "id": 16777314, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Grid.create();
            Grid.width(CommonConstants.FULL_PARENT);
            Grid.height({ "id": 16777310, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.columnsTemplate('1fr 1fr');
            Grid.rowsTemplate('1fr 1fr');
            Grid.columnsGap({ "id": 16777299, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777303, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.margin({ bottom: { "id": 16777351, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Grid.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const secondItem = _item;
                {
                    const isLazyCreate = true && (Grid.willUseProxy() === true);
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        GridItem.create(deepRenderFunction, isLazyCreate);
                        GridItem.padding({ top: { "id": 16777309, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, left: { "id": 16777309, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                        GridItem.borderRadius({ "id": 16777297, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        GridItem.align(Alignment.TopStart);
                        GridItem.backgroundImage(secondItem.img);
                        GridItem.backgroundImageSize(ImageSize.Cover);
                        GridItem.width(CommonConstants.FULL_PARENT);
                        GridItem.height(CommonConstants.FULL_PARENT);
                        if (!isInitialRender) {
                            GridItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        GridItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.alignItems(HorizontalAlign.Start);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.title);
                            Text.fontSize({ "id": 16777338, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Medium);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.others);
                            Text.margin({ top: { "id": 16777308, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            Text.fontSize({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777277, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.alignItems(HorizontalAlign.Start);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.title);
                            Text.fontSize({ "id": 16777338, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Medium);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.others);
                            Text.margin({ top: { "id": 16777308, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            Text.fontSize({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777277, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSecondGridData(), forEachItemGenFunction, (secondItem) => JSON.stringify(secondItem), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Grid.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=Home.js.map