<template>
    <div>
        <nav>
            <a href="http://www.typescriptlang.org/docs/handbook">Typescript Handbook</a>
        </nav>
        <h1>Let's Access</h1>

        <div style="border: solid 1px;">
            <label>Model:</label> <br/>
            <label>Name:</label> <input v-model="dataAccessModel.name"> <br/>
            <label>Parameter(Full Path):</label> <input v-model="dataAccessModel.parameter"> <br/>
            <label>ReturnType(Full Path):</label> <input v-model="dataAccessModel.returnType"> <br/>
            <label>Sql Implementation:</label> <input v-model="dataAccessModel.sqlImplementation"> <br/>
        </div>

        <div style="border: solid 1px;">
            <label>Controller Layer:</label>
            <br/>
            <span>
                @RequestMapping("/{{dataAccessModel.name}}")
                @ResponseBody
                public {{returnPackaged.name}} {{dataAccessModel.name}}({{localParamDeclare}}){
                   return mapper.{{name}}({{paramVarName}})
                }
            </span>
        </div>


        <div style="border: solid 1px;">
            <label>Mapper XML Layer:</label>
            <br/>
            <span>
                &lt;select
                <span v-if="dataAccessModel.parameter">
                    parameterType="{{dataAccessModel.parameter}}"
                </span>
                <span v-if="dataAccessModel.returnType">
                    returnType="{{dataAccessModel.returnType}}"
                </span>
                &gt; <br/>

                {{dataAccessModel.sqlImplementation}}
                <br/>
                &lt;select/&gt;

            </span>
        </div>
    </div>
</template>


<script lang="ts">
    // stuck to this:http://www.typescriptlang.org/docs/handbook

    class DataAccessModel {
        constructor(private _name: string, private _parameter: string, private _returnType: string, private _sqlImplementation: string) {

        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get parameter(): string {
            return this._parameter;
        }

        set parameter(value: string) {
            this._parameter = value;
        }

        get returnType(): string {
            return this._returnType;
        }

        set returnType(value: string) {
            this._returnType = value;
        }

        get sqlImplementation(): string {
            return this._sqlImplementation;
        }

        set sqlImplementation(value: string) {
            this._sqlImplementation = value;
        }
    }

    class PackageName {
        packagePath: string;
        name: string;

        constructor(packagePath: string, name: string) {
            this.packagePath = packagePath;
            this.name = name;
        }
    }

    class JavaUtils {
        static getPackage(full: string): PackageName {
            let idx = full.lastIndexOf(".");
            if (idx == -1) {
                return new PackageName("", full);
            }
            return new PackageName(full.substring(0, idx), full.substring(idx + 1))
        }
    }

    export default {
        name: "App",
        data() {
            return {
                input: "",
                dataAccessModel: new DataAccessModel(null, null, null, null)
            }
        },
        computed: {
            returnPackaged(): PackageName {
                return this.dataAccessModel.returnType != null ? JavaUtils.getPackage(this.dataAccessModel.returnType) : new PackageName(null, null)
            },
            paramPackaged(): PackageName {
                return this.dataAccessModel.parameter != null ? JavaUtils.getPackage(this.dataAccessModel.parameter) : new PackageName(null, null)
            },
            paramShortName(): string {
                return this.dataAccessModel.parameter ? this.paramPackaged.name : "";
            },
            localParamDeclare(): string {
                return this.paramShortName ? this.paramShortName + " " + this.paramVarName : "";
            },
            paramVarName() {
                return this.paramShortName ? this.paramShortName.toLowerCase() : "";
            }
        }
    }
</script>

<style scoped>

</style>
