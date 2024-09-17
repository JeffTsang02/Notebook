/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import ItemData from '@bundle:com.example.component/entry/ets/viewmodel/ItemData';
/**
 * Binds data to components and provides interfaces.
 */
export class MainViewModel {
    /**
     * Get swiper image data.
     *
     * @return {Array<Resource>} swiperImages.
     */
    getSwiperImages() {
        let swiperImages = [
            { "id": 16777309, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777305, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777329, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777327, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
        ];
        return swiperImages;
    }
    /**
     * Get data of the first grid.
     *
     * @return {Array<PageResource>} firstGridData.
     */
    getFirstGridData() {
        let firstGridData = [
            new ItemData({ "id": 16777281, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777258, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777312, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777276, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777326, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777301, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777319, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777280, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777331, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777257, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777311, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777287, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777315, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return firstGridData;
    }
    /**
     * Get data of the second grid.
     *
     * @return {Array<PageResource>} secondGridData.
     */
    getSecondGridData() {
        let secondGridData = [
            new ItemData({ "id": 16777274, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777316, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777273, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777267, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777324, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777272, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777265, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777219, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777270, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777266, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777307, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777271, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return secondGridData;
    }
    /**
     * Get data of the setting list.
     *
     * @return {Array<PageResource>} settingListData.
     */
    getSettingListData() {
        let settingListData = [
            new ItemData({ "id": 16777297, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777318, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777300, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777295, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777333, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777296, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777332, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777294, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777317, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777299, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777328, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777298, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777242, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map