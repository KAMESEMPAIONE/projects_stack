import {FC} from "react";
import { Spoiler } from "../../component/Spoiler/Spoiler";
import './SpoilerPage.scss';

export const SpoilerPage: FC = () => {
    return (
        <section className="SpoilerPage">
        <h2 className="Projects__title">Spoiler</h2>

        <Spoiler title='Declarative'>
            React makes it painless to create interactive  UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
        </Spoiler>

        <Spoiler title='Component-Based'>
            Build encapsulated components that manage their own state, then compose them to make complex UIs.
            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
        </Spoiler>

        <Spoiler title='Learn Once, Write Anywhere'>
            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
        </Spoiler>
    </section>
    )
}