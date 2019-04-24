# Process
spring-bean
---
createWebApplicationContext-->refresh-->getBean-->
内置 org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter 
--> afterPropertiesSet()-->getDefaultArgumentResolvers --> getMessageConverters()-->allSupportedMediaTypes -->  getSupportedMediaTypes()



request --> 
     | -->getProducibleMediaTypes --> canWrite(type,null) -->true?  add that to the types set
           |
           | --> if producibleMediaTypes is null, then throw exception
                    |
                    |--->else,  match 'Accept' and 'Produces', throw exception if none-match
                                |--> sort matched types , choose first 'concrete' type,remove q=0.8
                                     |--> ask  each converter,if canWrite(type, mediaType)? returns true? if true,then it is returned
NOTE: converter stack is in the order that ： user declares > default
   

canWrite?(class,mediaType)
