
import QtQuick
import QtQuick.Controls as QQC2
import QtQuick.Layouts
import org.kde.kirigami as Kirigami
import Qt5Compat.GraphicalEffects

import org.kde.plasma.welcome

KCMPage {
    heading: i18nc("@info:window", "Theming")
    description: i18nc("@info:usagetip", "Choose from <strong>VARIOUS</strong> themes on Tridentu 2 (1.5) to fit your needs - from MacOS-like themes to Fluent-style themes and <i><strong>EVEN</strong></i> FairyWren. You can set up your preferred theme in System Settings, and right here too. Don't like what you see? Just press \"Get New\" above, and you can install new ones!")

    topContent: [
        Kirigami.UrlButton {
            Layout.topMargin: Kirigami.Units.largeSpacing
            text: i18nc("@action:button", "Open Theming Guide")
            url: "https://tridentu2.miraheze.org/wiki/KDE_Plasma/Configuration"
        }
    ]

    path: "kcm_lookandfeel"
}
