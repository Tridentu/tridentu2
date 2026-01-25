/*
    SPDX-FileCopyrightText:
    2023 Cequal-Catppuccin <core@Catppuccin.com>
    Based on
    2014 Marco Martin <mart@kde.org>

    SPDX-License-Identifier: MIT
*/

import QtQuick 2.5

Rectangle {
    id: root
    color: "#e6e9ef"

    property int stage

    onStageChanged: {
        if (stage == 2) {
            introAnimation.running = true;
        } else if (stage == 5) {
            introAnimation.target = busyIndicator;
            introAnimation.from = 1;
            introAnimation.to = 0;
            introAnimation.running = true;
        }
    }

    Item {
        id: content
        anchors.fill: parent
        opacity: 0
        TextMetrics {
            id: units
            text: "M"
            property int gridUnit: boundingRect.height
            property int largeSpacing: units.gridUnit
            property int smallSpacing: Math.max(2, gridUnit/4)
        }


        Image {
            id: logo
            //match SDDM/lockscreen avatar positioning
            property real size: units.gridUnit * 8

            anchors.centerIn: parent
            source: "images/Logo.png"

            sourceSize.width: size
            sourceSize.height: size
            smooth: true
            visible: true
        }

        Image {
            id: busyIndicator
            //in the middle of the remaining space
            y: parent.height - (parent.height - logo.y) / 2 - height/2
            anchors.horizontalCenter: parent.horizontalCenter
            source: "images/busywidget.svg"
            sourceSize.height: units.gridUnit * 3.5
            sourceSize.width: units.gridUnit * 3.5
            RotationAnimator on rotation {
                id: rotationAnimator
                from: 0
                to: 360
                duration: 2000
                loops: Animation.Infinite
                running: units.longDuration > 1
            }
        }
    }

    OpacityAnimator {
        id: introAnimation
        running: false
        target: content
        from: 0
        to: 1
        duration: units.veryLongDuration * 2
        easing.type: Easing.InOutQuad
    }
}
