var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "a2n.blur"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Wallpaper/a2n.blur/General": {
                    "Image": "/usr/share/wallpapers/CPUCity/",
                    "PreviewImage": "/usr/share/wallpapers/CPUCity/",
                    "SlidePaths": "/usr/share/wallpapers/"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/usr/share/wallpapers/CPUCity/",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "a2n.blur"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "508",
                            "popupWidth": "647"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "applicationsDisplay": "0",
                            "favoritesPortedToKAstats": "true",
                            "icon": "/usr/share/pixmaps/tridentu.png",
                            "paneSwap": "false",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "Concepto.menu.12"
                },
                {
                    "config": {
                        "/General": {
                            "launchers": "applications:org.kde.dolphin.desktop,applications:systemsettings.desktop,applications:org.kde.discover.desktop,applications:org.kde.falkon.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "450",
                            "popupWidth": "810"
                        },
                        "/Appearance": {
                            "autoFontAndSize": "false",
                            "enabledCalendarPlugins": "holidaysevents,astronomicalevents",
                            "fontFamily": "Metrickal",
                            "fontStyleName": "Regular",
                            "fontWeight": "400"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "418",
                            "popupWidth": "420"
                        },
                        "/Appearance": {
                            "animations": "true",
                            "customButtonImage": "xfdashboard",
                            "darkGlobalTheme": "TridentuDark",
                            "lightGlobalTheme": "TridentuLight",
                            "mainIconName": "xfdashboard",
                            "preferChangeGlobalTheme": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "KdeControlStation"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 4.571428571428571,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 137.14285714285714,
            "minimumLength": 136.57142857142858,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "198",
                            "popupWidth": "240"
                        },
                        "/Apperance": {
                            "cmdList": "kinfocenter,separator,systemsettings,plasma-discover,separator,xkill,separator,qdbus org.freedesktop.ScreenSaver /ScreenSaver Lock,qdbus org.kde.LogoutPrompt /LogoutPrompt promptLogout",
                            "icon": "/usr/share/pixmaps/tridentu.png",
                            "iconList": "help-hint,filename-dash-amarok,settings-configure,update-none,filename-dash-amarok,error,filename-dash-amarok,system-lock-screen,system-log-out",
                            "labelList": "About This Computer,separator,System Preferences...,App Store...,separator,Force Quit...,separator,Lock Screen,Log Out",
                            "separatorList": "false,true,false,false,true,false,true,false,false",
                            "showIcons": "true"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.51n7.kMenu"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "lengthMargin": "15",
                            "opacity": "70",
                            "thicknessSeparator": "2"
                        }
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "576",
                            "DialogWidth": "721"
                        },
                        "/General": {
                            "capitalFont": "false",
                            "customText": "true",
                            "iconFillThickness": "false",
                            "placeHolderIcon": "application-menu-symbolic",
                            "spacing": "2",
                            "textDefault": "Tridentu 2K",
                            "useActivityIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle.Fork"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/General": {
                            "screenWidth": "1920"
                        }
                    },
                    "plugin": "luisbocanegra.panelspacer.extended"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "420",
                            "popupWidth": "360"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.mediabar"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "55",
                            "popupHeight": "504",
                            "popupWidth": "360"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "useKbdNavigation": "true",
                            "useSymbolicIcon": "true"
                        }
                    },
                    "plugin": "io.github.vmkspv.kopypast"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "popupHeight": "415",
                            "popupWidth": "288",
                            "wallpaperplugin": ""
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "filterMimeTypes": "application/vnd.appimage,application/x-iso9660-appimage",
                            "filterMode": "1",
                            "icon": "app-launcher",
                            "labelMode": "3",
                            "labelText": "My Apps",
                            "positions": "{\"1920x1080\":[]}",
                            "url": "~/Applications",
                            "useCustomIcon": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.folder"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "buttons": "3|4|5|10|2|9",
                            "containmentType": "Plasma",
                            "selectedPlugin": "org.kde.kwin.aurorae",
                            "selectedTheme": "__aurorae__svg__Utterly-Round-Light",
                            "useCurrentDecoration": "false",
                            "visibility": "ActiveMaximizedWindow"
                        }
                    },
                    "plugin": "org.kde.windowbuttons"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.2857142857142856,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 137.14285714285714,
            "minimumLength": 137.14285714285714,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
