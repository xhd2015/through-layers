

# Example -- PsiJavaFile StructureOverview
PsiClass
  --> getMethods()
    PsiParameter
    PsiField

#

# Example -- Inovking Annotator


PsiKeyWord:package
PsiWhiteSpace
PsiIdentifier:com
   PsiReferenceParameterList
   PsiCodeReferenceElement
PsiJavaToken:DOT
PsiIdentifier:fulton_shaw
...
PsiJavaToken:SEMICOLON
PsiPackageStatement:com.fulton_shaw..;

PsiWhiteSpace
PsiImportList
   ...

PsiKeyWord:public
PsiModifierList:public
PsiWhiteSpace
PsiKeyWord:interface
PsiWhiteSpace
PsiIdentifier:MyMapper
PsiTypeParameterList
...
PsiJavaToken:LBRACE
...