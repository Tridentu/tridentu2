var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "85",
                            "popupHeight": "396",
                            "popupWidth": "455"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "AnalogueGrandClock",
                    "title": "Analog Grand Clock"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "Applet-943:832,400,272,272,0;",
                    "ItemGeometriesHorizontal": "Applet-943:832,400,272,272,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/trid/.local/share/wallpapers/Graphite-dark/contents/images/3840x2160.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
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
                            "popupHeight": "483",
                            "popupWidth": "649"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "applicationsDisplay": "0",
                            "favoritesPortedToKAstats": "true",
                            "icon": "application-x-plasma",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
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
                            "PreloadWeight": "55",
                            "popupHeight": "451",
                            "popupWidth": "455"
                        },
                        "/Appearance": {
                            "showDate": "false"
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
                    },
                    "plugin": "org.kde.plasma.showdesktop"
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
            "height": 3.4285714285714284,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 137.14285714285714,
            "minimumLength": 137.14285714285714,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "customText": "true",
                            "italicFont": "true",
                            "textDefault": "Graphite Full"
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
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "dateFormat": "M/d/yyyy",
                            "fontFamily": "Fantasque Sans Mono",
                            "fontItalic": "true",
                            "fontSizeRatio": "8",
                            "orientation": "0"
                        }
                    },
                    "plugin": "DateOnly"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "472",
                            "popupWidth": "320"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "colorsFromAlbumCover": "true",
                            "commandsInPanel": "false",
                            "useAlbumCoverAsPanelIcon": "true"
                        }
                    },
                    "plugin": "plasmusic-toolbar"
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
