<template>
    <div>
        <label>Window Title:</label>
        <input v-model="context"/>{{context.resolve("window.title")}}
    </div>
</template>


<script>
    import Context from "./Context"
    import * as Mapper from "./Mapper"
    import Notifier from "./Notifier"
    import {StringMapper} from "./Mapper";

    let context = new Context()

    context.setValue("app.name", "Fulton The Name")
    context.setValue("app.env.first", "proud")
    context.setValue("app.version", "1.0")

    context.setMapper("menu.name", new Mapper.TemplateMapper(context, "open ${app.name}-${app.version}@${app.env.first}"))


    let grpMapper = new Mapper.PriorityMapperQueue()
    grpMapper.addMapper({
        name: "app.name.app.env.first",
        priority: 2,
        mapper: new Mapper.TemplateMapper(context, "Title:#${app.name} of ${app.env.first}")
    })
    context.setMapper("window.title", grpMapper)


    console.log("window.title is ", context.resolve("window.title"))

    grpMapper.addMapper({
        name: "plain",
        priority: -1,
        mapper: new StringMapper("#Plain I Set Title")
    })
    console.log("now window.title is ", context.resolve("window.title"))

    const PRIORITY_HIGHEST = -1;
    const PRIORITY_LOWEST = 0xFFFFFFFF
    // accept two forms:  string or array of string
    // root is cache, and can be configured
    // settable is complted via cache.*
    // all these keys will be made to deep path keys, assuming they are splitted by dot(.)
    let config = {
        "app.name":"${cache.app.name}",
        "window.title":"${app.name}-${app.version}",
        "form.title":["${cache.form.title}", "Form ${app.name}-${app.version}"]
    }


    export default {
        data() {
            return {
                context
            }
        }
    }

</script>

<style scoped>

</style>
