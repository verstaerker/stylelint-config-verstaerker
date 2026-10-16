export default {
    'selector-class-pattern': [ // See test examples in the text file.
        /^((\.?[eclsp]-)([a-z][a-z]+(-([a-z]+|[0-9]+))*)(__[a-z][a-z]+(-([a-z0-9]+))*)?(--([a-z][a-z]+|h[1-6]|i)(-[a-z0-9]+)*)?(:{1,2}[a-z][a-z]+(-[a-z0-9]+)*(\(["a-z0-9]+\))?)?)+$/m, // eslint-disable-line @stylistic/max-len
        {
            resolveNestedSelectors: true,
        },
    ],
};

/**
 * BEM pattern
 *
 * fixedValue = **none yet**
 * bemName = Namespace Block (Element)? (MODIFIER)? (Pseudo)? | Fixed-Value
 * Pattern = fixedValue | bemName
 * Namespace = .[cel]-
 * Block = [a-z]char+(-charOrNum+)*
 * Element = __element
 * Modifier = --modifier
 * Pseudo = :Block(\([":a-z0-9]+\))?
 * char = [a-z0-9]
 * charOrNum = ([a-z]+|[0-9]+)
 */

/**
 * Example class names
 * /

# valid

## Storybook styles
s-icon-list
s-color-list

## Vue components
c-block
c-block:hover
c-block-foo
c-block-foo:first-child
c-block--foo
c-block--foo:focus
c-block__element
c-block__element:nth-child(5)
c-block__element--modifier
c-block__element--modifier-foo
c-block__element--modifier-foo-baa
c-block.c-block
c-block__element.c-block
c-block__element.c-block__element
c-block__element--modifier.c-block
c-block__element--modifier.c-block__element
c-block__element--modifier.c-block__element--modifier
c-block-name-foo-baa
c-block__element-name-foo
c-block-name-foo-baa__element-name-foo
c-main-content__content.c-main-content__content--main-navigation-open
c-advertisement-1
c-advertisement__element-1
c-advertisement__element--modifier-1
c-advertisement-1__element
c-advertisement__element-1--modifier
c-advertisement-1__element-1--modifier-1
c-advertisement-1121__element-111--modifier-689
c-heading--h1
c-heading--h6
c-icon--i-icon
e-icon

# invalid
alignment
foo
c-block---foo
c-block--element--foo
c-block__element__element
c-block__element__element.c-block
c-block__element.c-block__element__element
c-block__element--modifier--modifier.c-block
c-block__element--modifier.c-block__element--modifier--modifier
c-advertisement1
c-advertisement__element1
c-advertisement__element--modifier1
c-heading--h9
bc-heading
vg-heading
cc-foo
row
col-6
align--left
align

 */
