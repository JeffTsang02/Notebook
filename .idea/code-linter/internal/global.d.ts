/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
/// <reference path="../../../component/common.d.ts" />
// import { TouchObject, KeyEvent, MouseEvent } from 'SpecialEvent';
/**
 * Defines the console info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the console info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
declare class console {
    /**
     * Prints "debug" logs.
     * @param message Text to print.
     * @since 7
     */
    /**
     * Prints "debug" logs.
     * @param message Text to print.
     * @form
     * @since 9
     */
    static debug(message: string, ...arguments: any[]): void;
    /**
     * Prints "log" logs.
     * @param message Text to print.
     * @since 7
     */
    /**
     * Prints "log" logs.
     * @param message Text to print.
     * @form
     * @since 9
     */
    static log(message: string, ...arguments: any[]): void;
    /**
     * Prints "info" logs.
     * @param message Text to print.
     * @since 7
     */
    /**
     * Prints "info" logs.
     * @param message Text to print.
     * @form
     * @since 9
     */
    static info(message: string, ...arguments: any[]): void;
    /**
     * Prints "warn" logs.
     * @param message Text to print.
     * @since 7
     */
    /**
     * Prints "warn" logs.
     * @param message Text to print.
     * @form
     * @since 9
     */
    static warn(message: string, ...arguments: any[]): void;
    /**
     * Prints "error" logs.
     * @param message Text to print.
     * @since 7
     */
    /**
     * Prints "error" logs.
     * @param message Text to print.
     * @form
     * @since 9
     */
    static error(message: string, ...arguments: any[]): void;
}
/**
 * Sets the interval for repeatedly calling a function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @since 7
 */
declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;
/**
 * Sets a timer after which a function will be executed.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the delay (in milliseconds) after which the function will be called. If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @since 7
 */
declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;
/**
 * Cancel the interval set by " setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param intervalID Indicates the timer ID returned by "setInterval()".
 * @since 7
 */
declare function clearInterval(intervalID?: number): void;
/**
 * Cancel the timer set by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param timeoutID Indicates the timer ID returned by "setTimeout()".
 * @since 7
 */
declare function clearTimeout(timeoutID?: number): void;
/**
 * Defining syscap function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
declare function canIUse(syscap: string): boolean;
/**
 * Obtains all attributes of the component with the specified ID.
 * @param id ID of the component whose attributes are to be obtained.
 * @since 9
 * @test
 */
declare function getInspectorByKey(id: string): string;
/**
 * Get components tree.
 * @since 9
 * @test
 */
declare function getInspectorTree(): Object;
/**
 * Sends an event to the component with the specified ID.
 * @param id ID of the component for which the event is to be sent.
 * @param action Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param params Event parameters. If there is no parameter, pass an empty string "".
 * @since 9
 * @test
 */
declare function sendEventByKey(id: string, action: number, params: string): boolean;
/**
 * Send touch event.
 * @param event TouchObject to be sent.
 * @since 9
 * @test
 */
declare function sendTouchEvent(event: TouchObject): boolean;
/**
 * Send key event.
 * @param event KeyEvent to be sent.
 * @since 9
 * @test
 */
declare function sendKeyEvent(event: KeyEvent): boolean;
/**
 * Send mouse event.
 * @param event MouseEvent to be sent.
 * @since 9
 * @test
 */
declare function sendMouseEvent(event: MouseEvent): boolean;
