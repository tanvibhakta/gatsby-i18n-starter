import React from "react"
import Layout from "../components/Layout";
import { Consumer } from "../context/createContext";
import Counter from "../components/Counter";

export default () => (
    <Layout>
        <p>Some stuff</p>
        <Counter value="12">more stuff</Counter>
    </Layout>
)
