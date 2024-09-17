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
            { "id": 16777377, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777378, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777379, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777380, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
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
            new ItemData({ "id": 16777253, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777389, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777398, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777248, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777391, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777273, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777402, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777404, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777372, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777376, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777259, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777399, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777246, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777405, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777245, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777239, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777394, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777244, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777370, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777242, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777238, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777381, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777243, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777269, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777395, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777272, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777267, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777373, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777268, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777390, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777266, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777367, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777271, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777403, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777270, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777397, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map