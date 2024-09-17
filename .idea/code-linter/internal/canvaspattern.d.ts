/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
/**
 * Describes an opaque object of a template, which is created using the createPattern() method.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Describes an opaque object of a template, which is created using the createPattern() method.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
declare interface CanvasPattern {
    /**
     * Adds the matrix transformation effect to the current template.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param transform transformation matrix
     * @since 8
     */
    /**
     * Adds the matrix transformation effect to the current template.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param transform transformation matrix
     * @form
     * @since 9
     */
    setTransform(transform?: Matrix2D): void;
}
/**
 * 2D transformation matrix, supporting rotation, translation, and scaling of the X-axis and Y-axis
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 2D transformation matrix, supporting rotation, translation, and scaling of the X-axis and Y-axis
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
export class Matrix2D {
    /**
     * Horizontal Zoom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Horizontal Zoom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    scaleX?: number;
    /**
     * Vertical Tilt
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Vertical Tilt
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    rotateY?: number;
    /**
     * Horizontal Tilt
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Horizontal Tilt
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    rotateX?: number;
    /**
     * Vertical Zoom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Vertical Zoom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    scaleY?: number;
    /**
     * Horizontal movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Horizontal movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    translateX?: number;
    /**
     * Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    translateY?: number;
    /**
     * Transforms the current 2D matrix back to the identity matrix (i.e., without any rotational
     * translation scaling effect)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Transforms the current 2D matrix back to the identity matrix (i.e., without any rotational
     * translation scaling effect)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    identity(): Matrix2D;
    /**
     * Transform the current 2D matrix into an inverse matrix (that is, the transformation effect
     * is the opposite effect of the original)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Transform the current 2D matrix into an inverse matrix (that is, the transformation effect
     * is the opposite effect of the original)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    invert(): Matrix2D;
    /**
     * The matrix is superimposed in right multiplication mode. When the input parameter is empty,
     * the matrix is superimposed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param other Matrix to be superimposed
     * @since 8
     */
    /**
     * The matrix is superimposed in right multiplication mode. When the input parameter is empty,
     * the matrix is superimposed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param other Matrix to be superimposed
     * @form
     * @since 9
     */
    multiply(other?: Matrix2D): Matrix2D;
    /**
     * Adds the rotation effect of the X and Y axes to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param rx Rotation effect of the X axis
     * @param ry Rotation effect of the Y-axis
     * @since 8
     */
    /**
     * Adds the rotation effect of the X and Y axes to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param rx Rotation effect of the X axis
     * @param ry Rotation effect of the Y-axis
     * @form
     * @since 9
     */
    rotate(rx?: number, ry?: number): Matrix2D;
    /**
     * Adds the translation effect of the X and Y axes to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param tx X-axis translation effect
     * @param ty Y-axis translation effect
     * @since 8
     */
    /**
     * Adds the translation effect of the X and Y axes to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param tx X-axis translation effect
     * @param ty Y-axis translation effect
     * @form
     * @since 9
     */
    translate(tx?: number, ty?: number): Matrix2D;
    /**
     * Adds the scaling effect of the X and Y axes to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param sx X-axis scaling effect
     * @param sy Y-axis scaling effect
     * @since 8
     */
    /**
     * Adds the scaling effect of the X and Y axes to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param sx X-axis scaling effect
     * @param sy Y-axis scaling effect
     * @form
     * @since 9
     */
    scale(sx?: number, sy?: number): Matrix2D;
    /**
     * Constructs a 2D change matrix object. The default value is the unit matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Constructs a 2D change matrix object. The default value is the unit matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    constructor();
}
