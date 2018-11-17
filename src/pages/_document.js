/**
 * See: https://github.com/zeit/next.js/#custom-document
 */

import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        return ctx.query;
    }

    render() {
        return (
            <html lang="en">
                <title>{this.props.title}</title>
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
