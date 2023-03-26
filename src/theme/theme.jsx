import { Test } from "./component/Test";
import { Test1 } from "./component/Test1";

const section = [
    {
        "title": "YOUR COMPANY",
        "option": [
            {
                "icon": <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-browser-firefox" viewBox="0 0 16 16">
                    <path d="M13.384 3.408c.535.276 1.22 1.152 1.556 1.963a7.98 7.98 0 0 1 .503 3.897l-.009.077a8.533 8.533 0 0 1-.026.224A7.758 7.758 0 0 1 .006 8.257v-.04c.016-.363.055-.724.114-1.082.01-.074.075-.42.09-.489l.01-.051a6.551 6.551 0 0 1 1.041-2.35c.217-.31.46-.6.725-.87.233-.238.487-.456.758-.65a1.5 1.5 0 0 1 .26-.137c-.018.268-.04 1.553.268 1.943h.003a5.744 5.744 0 0 1 1.868-1.443 3.597 3.597 0 0 0 .021 1.896c.07.047.137.098.2.152.107.09.226.207.454.433l.068.066.009.009a1.933 1.933 0 0 0 .213.18c.383.287.943.563 1.306.741.201.1.342.168.359.193l.004.008c-.012.193-.695.858-.933.858-2.206 0-2.564 1.335-2.564 1.335.087.997.714 1.839 1.517 2.357a3.72 3.72 0 0 0 .439.241c.076.034.152.065.228.094.325.115.665.18 1.01.194 3.043.143 4.155-2.804 3.129-4.745v-.001a3.005 3.005 0 0 0-.731-.9 2.945 2.945 0 0 0-.571-.37l-.003-.002a2.679 2.679 0 0 1 1.87.454 3.915 3.915 0 0 0-3.396-1.983c-.078 0-.153.005-.23.01l-.042.003V4.31h-.002a3.882 3.882 0 0 0-.8.14 6.454 6.454 0 0 0-.333-.314 2.321 2.321 0 0 0-.2-.152 3.594 3.594 0 0 1-.088-.383 4.88 4.88 0 0 1 1.352-.289l.05-.003c.052-.004.125-.01.205-.012C7.996 2.212 8.733.843 10.17.002l-.003.005.003-.001.002-.002h.002l.002-.002a.028.028 0 0 1 .015 0 .02.02 0 0 1 .012.007 2.408 2.408 0 0 0 .206.48c.06.103.122.2.183.297.49.774 1.023 1.379 1.543 1.968.771.874 1.512 1.715 2.036 3.02l-.001-.013a8.06 8.06 0 0 0-.786-2.353Z" />
                </svg>,
                "name": "Dashboad",
                "path": "",
                "component": "",
                "subItem": [
                    {
                        "icon": "",
                        "name": "Dashboard-light",
                        "path": "/light",
                        "component": <Test></Test>
                    },
                    {
                        "icon": "",
                        "name": "Dashboard-dark",
                        "path": "/dark",
                        "component": <Test1></Test1>
                    }
                ]
            },
            {
                "icon": <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>,
                "name": "Employee",
                "path": "/Employee",
                "component": <Test></Test>,
                "subItem": []
            },
            {
                "icon": <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>,
                "name": "Core HR",
                "path": "/core-hr",
                "component": "<Test2 />",
                "subItem": []
            },
            {
                "icon": "",
                "name": "Finance",
                "path": "/Finance",
                "component": "Finance",
                "subItem": []
            },
            {
                "icon": "tasks",
                "name": "tasks",
                "path": "",
                "component": "",
                "subItem": [
                    {
                        "icon": "task",
                        "name": "task",
                        "path": "/tasks",
                        "component": "tasks"
                    },
                    {
                        "icon": "task summary",
                        "name": "task summary",
                        "path": "/task summary",
                        "component": "task summary"
                    }
                ]
            }
        ]
    },
    {
        "title": "OUR FEACTURE",
        "option": [
            {
                "icon": "icon-App",
                "name": "App",
                "path": "",
                "component": "",
                "subItem": [
                    {
                        "icon": "icon-profile",
                        "name": "profile",
                        "path": "/profile",
                        "component": "component-profile"
                    },
                    {
                        "icon": "icon-Edit-profile",
                        "name": "Edit-profile",
                        "path": "/Edit-profile",
                        "component": "component-Edit-profile"
                    },
                    {
                        "icon": "icon-Email",
                        "name": "Email",
                        "path": "/Email",
                        "component": "component-Email"
                    }
                ]
            },
            {
                "icon": "icon-charts",
                "name": "charts",
                "path": "",
                "component": "",
                "subItem": [
                    {
                        "icon": "icon-float",
                        "name": "float",
                        "path": "/float",
                        "component": "component-float"
                    },
                    {
                        "icon": "icon-morris",
                        "name": "morris",
                        "path": "/morris",
                        "component": "component-morris"
                    }
                ]
            },
            {
                "icon": "",
                "name": "name",
                "path": "/",
                "component": "component-name",
                "subItem": [
                    {
                        "icon": "",
                        "name": "name",
                        "path": "/",
                        "component": "component-name"
                    }
                ]
            }
        ]
    }
]

export default section;