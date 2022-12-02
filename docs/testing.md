# Testing

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#static">Static Code</a></li>
    <li><a href="#snapshot">Snapshot</a></li>
    <li><a href="#unit">Unit</a></li>
    <li><a href="#integration">Integration</a></li>
    <li><a href="#end-to-end">End-to-End</a></li>
  </ol>
</details>

## Static Code [TODO]

Using Typescript and linting

## Snapshot [TODO]

Using storybook (write stories) + @storybook/addon-storyshots (to generate jest snapshot from stories).

**Note:**

> For `__snapshots__` folder to reside in the same folder as `.stories` files, `storybook.test.ts` MUST be located within `src` folder. To relocate `storybook.test.ts`, additional configuration is required.

## Unit [TODO]

Using Jest and React Testing Library

- Component

  stateless<br/>
  user event to simulate user actions<br/>
  react-hooks-testing-library "render" a component that uses custom react hook<br/>
  shallow rendering?

- Redux

  - Slice

    test reducer function <br/>
    controlled input state => dispatch reducer -> check expected output state

  - Selector

    test selector function, prefixed with select<br/>
    execute selector function with controlled input state, check expected output return value

- Redux-Saga

  test generator function<br/>
  execute generator function with controlled input, check expected output

- React Hooks

  test custom hook function, prefixed with use<br/>
  execute custom hook function with controlled input, check expected return

- Self-define Utils

  test custom utils function<br/>
  execute utils function with controlled input, check expected return

- Server State <-> Client State

  test if field mapping is correct

## Integration [TODO]

Using Jest and React Testing Library<br/>
Stateful component<br/>
User Event to simulate user actions<br/>
Mock service worker to mock API<br/>

## End-to-End [TODO]

Using Cypress.<br/>
Test E2E Business flow
