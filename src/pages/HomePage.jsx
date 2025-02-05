import { BodyHomePage } from "../components/Bodies/BodyHomePage"
import { Layout } from "../components/layout/Layout"

export const HomePage = () => {
    return (
        <div style={{ backgroundColor: "#0A2A2F", color: "#2A7F62" }} >
            <Layout>
                <BodyHomePage />
            </Layout>
        </div>
    )
}
