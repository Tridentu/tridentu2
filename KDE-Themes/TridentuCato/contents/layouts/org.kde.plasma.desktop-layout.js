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
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/usr/share/wallpapers/CatpuccinGrad/",
                    "SlidePaths": "/usr/share/wallpapers/"
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
                            "popupHeight": "592",
                            "popupWidth": "432"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "app-launcher",
                            "tiles": "[{\"metadata\":{\"name\":\"Dolphin\",\"icon\":\"org.kde.dolphin\",\"useCustomBack\":false,\"useCustomFront\":false,\"frontColor\":\"#232627\",\"actionType\":0,\"action\":\"org.kde.dolphin.desktop\",\"backColor\":\"#f7f7f7\"},\"plugin\":\"icon\",\"tileWidth\":2,\"tileHeight\":2,\"column\":11,\"row\":1},{\"metadata\":{\"name\":\"Discover\",\"icon\":\"plasmadiscover\",\"useCustomBack\":false,\"useCustomFront\":false,\"frontColor\":\"#232627\",\"actionType\":0,\"action\":\"org.kde.discover.desktop\",\"backColor\":\"#f7f7f7\"},\"plugin\":\"icon\",\"tileWidth\":2,\"tileHeight\":2,\"column\":2,\"row\":0},{\"metadata\":{\"name\":\"Gwenview\",\"icon\":\"org.kde.gwenview\",\"useCustomBack\":false,\"useCustomFront\":false,\"frontColor\":\"#232627\",\"actionType\":0,\"action\":\"org.kde.gwenview.desktop\",\"backColor\":\"#f7f7f7\"},\"plugin\":\"icon\",\"tileWidth\":2,\"tileHeight\":2,\"column\":6,\"row\":0},{\"metadata\":{\"name\":\"KWrite\",\"icon\":\"kwrite\",\"useCustomBack\":false,\"useCustomFront\":false,\"frontColor\":\"#232627\",\"actionType\":0,\"action\":\"org.kde.kwrite.desktop\",\"backColor\":\"#f7f7f7\"},\"plugin\":\"icon\",\"tileWidth\":2,\"tileHeight\":2,\"column\":4,\"row\":0},{\"metadata\":{\"name\":\"Restart Plasma Desktop\",\"icon\":\"system-restart\",\"useCustomBack\":true,\"useCustomFront\":true,\"backColor\":\"#0055ff\",\"frontColor\":\"#ffffff\",\"actionType\":0,\"action\":\"restartPlasma.desktop\",\"imageMode\":1,\"backgroundImage\":\"/usr/share/wallpapers/Next/contents/images/1024x768.png\",\"showIcon\":true},\"plugin\":\"icon\",\"tileWidth\":2,\"tileHeight\":2,\"column\":9,\"row\":1},{\"metadata\":{\"name\":\"Essentials\",\"grouping\":true,\"icon\":\"applications-utilities\"},\"plugin\":\"category\",\"tileWidth\":16,\"tileHeight\":1,\"column\":9,\"row\":0},{\"metadata\":{\"name\":\"Kate\",\"icon\":\"kate\",\"useCustomBack\":false,\"useCustomFront\":false,\"backColor\":\"#f7f7f7\",\"frontColor\":\"#232627\",\"actionType\":0,\"action\":\"org.kde.kate.desktop\"},\"plugin\":\"icon\",\"tileWidth\":2,\"tileHeight\":2,\"column\":13,\"row\":1}]"
                        }
                    },
                    "plugin": "com.github.kavinunethsara.tiledscreen"
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
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "opacity": "100",
                            "thicknessSeparator": "2"
                        }
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.trash"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.printmanager"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "55",
                            "popupHeight": "325",
                            "popupWidth": "455"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.vault"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "opacity": "100",
                            "thicknessSeparator": "2"
                        }
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "80",
                            "popupHeight": "418",
                            "popupWidth": "380"
                        },
                        "/Appearance": {
                            "animations": "true",
                            "darkGlobalTheme": "TridentuLight",
                            "layout": "1",
                            "lightGlobalTheme": "TridentuLight",
                            "lightTheme": "Catpuccin",
                            "mainIconName": "xfdashboard",
                            "preferChangeGlobalTheme": "true"
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
            "height": 5.714285714285714,
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
                            "placeHolderIcon": "/usr/share/pixmaps/tridentu.png",
                            "textDefault": "Tridentu Cato",
                            "useActivityIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle.Fork"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "bgFillPanel": "true",
                            "hoverBgRadius": "9",
                            "screenWidth": "1920"
                        }
                    },
                    "plugin": "luisbocanegra.panelspacer.extended"
                },
                {
                    "config": {
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
                            "PreloadWeight": "60",
                            "popupHeight": "432",
                            "popupWidth": "432"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "useSymbolicIcon": "true"
                        }
                    },
                    "plugin": "io.github.vmkspv.kopypast"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60",
                            "popupHeight": "432",
                            "popupWidth": "324"
                        }
                    },
                    "plugin": "org.kde.plasma.notifications"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "55",
                            "popupHeight": "450",
                            "popupWidth": "455"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
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
