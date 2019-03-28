import FibonacciJS from "./tests/FibonacciJS";
import BarChart from "../components/BarChart";
import React from "react";

const config = {
    tests: [
        {
            name: "fibunacci",
            description: "Some number algo",
            runners: [
                {
                    name: "javascript",
                    type: "js",
                    object: new FibonacciJS(),
                    parameters: {
                        n: 10000
                    },
                    chart: <BarChart/>
                }
            ]
        }
    ]
};

export default config;
