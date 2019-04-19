# Links
http://www.jetbrains.org/intellij/sdk/docs/basics/architectural_overview/psi.html

http://www.jetbrains.org/intellij/sdk/docs/basics/psi_cookbook.html

# PSI
The parsing files and creating syntactic and semantic code model, it powers most of IDEA features.

A PSI is the root of a structure that represents the contents of a file, as a hierarchy of elements in a particular programming language.

`PsiFile` is common base class for all PSI files.For example,`PsiJavaFile` representss a Java File, `XmlFile` represents an XML file.

Unlike `VirtualFile` and `Document`, which is application level, `PsiFile` is at project level.

# Create File
- In memory, `PsiFileFactory.getInstance(project).createFileFromText()`.


# File View Provider
A `FileViewProvider`, is used to obtain multiple `PsiFile` instances.

method | description
-- | --
getLanguages() | all languages the PSI tree has
getPsi(language) | a specified PSI tree, for example,`fileViewProvider.getPsi(StdLangauge.XML)`
findElementAt(offset,language) | find a element

# PSI Elements
`PsiElement` is common base class for PSI elements.

get PSI element:
- From an action:`e.getData(LangDataKeys.PSI_ELEMENT)`
- From a file by offset:`PsiFile.findElementAt()`, returns a lexer token, this returns the lowest level token,you shold use `PsiTreeUtil.getParentOfType()` to find element you want.
- By iterating, using `PsiRecursiveElementWalkingVisitor`
- By resolving a reference: `PsiReference.resolve()`