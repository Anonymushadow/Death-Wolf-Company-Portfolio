import "./ErrorPage.css";
import { ErrorPage as ErrorPageComponent } from "@components/features/ErrorPage/ErrorPage";


export const ErrorPage = ()=> {
    return (
        <section className="error__section">
            <ErrorPageComponent />
        </section>
    );
};