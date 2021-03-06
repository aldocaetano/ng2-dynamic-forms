import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import includePaths from "rollup-plugin-includepaths";
//import uglify from "rollup-plugin-uglify"

export default {

    entry: "./example/app/main.aot.js",
    dest: "./example/dist/bundle.aot.js",
    format: "iife",
    sourceMap: false,
    sourceMapFile: "./example/dist/bundle.aot.js.map",
    onwarn: function (warning) {
        // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
        if (warning.code === "THIS_IS_UNDEFINED" || warning.code === "MISSING_EXPORT") {
            return;
        }

        console.error(warning);
    },
    plugins: [

        includePaths(
            {
                include: {
                    "@ng2-dynamic-forms/core": "dist/@ng2-dynamic-forms/core/index.js",
                    "@ng2-dynamic-forms/ui-basic": "dist/@ng2-dynamic-forms/ui-basic/index.js",
                    "@ng2-dynamic-forms/ui-bootstrap": "dist/@ng2-dynamic-forms/ui-bootstrap/index.js",
                    "@ng2-dynamic-forms/ui-foundation": "dist/@ng2-dynamic-forms/ui-foundation/index.js",
                    "@ng2-dynamic-forms/ui-ionic": "dist/@ng2-dynamic-forms/ui-ionic/index.js",
                    "@ng2-dynamic-forms/ui-kendo": "dist/@ng2-dynamic-forms/ui-kendo/index.js",
                    "@ng2-dynamic-forms/ui-material": "dist/@ng2-dynamic-forms/ui-material/index.js",
                    "@ng2-dynamic-forms/ui-ng-bootstrap": "dist/@ng2-dynamic-forms/ui-ng-bootstrap/index.js",
                    "@ng2-dynamic-forms/ui-primeng": "dist/@ng2-dynamic-forms/ui-primeng/index.js"
                }
            }
        ),

        nodeResolve(
            {
                jsnext: true,
                module: true
            }
        ),

        commonjs(
            {
                include: [
                    "node_modules/angular2-text-mask/**/*",
                    "node_modules/primeng/**/*",
                    "node_modules/rxjs/**",
                    "node_modules/text-mask-core/**/*"
                ],
                namedExports: {
                    "node_modules/primeng/primeng.js": [
                        "AutoComplete",
                        "AutoCompleteModule",
                        "Calendar",
                        "CalendarModule",
                        "Checkbox",
                        "CheckboxModule",
                        "Chips",
                        "ChipsModule",
                        "Dropdown",
                        "DropdownModule",
                        "Editor",
                        "EditorModule",
                        "InputSwitch",
                        "InputSwitchModule",
                        "InputTextModule",
                        "InputTextareaModule",
                        "MultiSelect",
                        "MultiSelectModule",
                        "RadioButtonModule",
                        "Slider",
                        "SliderModule",
                        "SpinnerModule"
                    ]
                }
            }
        ),

        //uglify()
    ]
}