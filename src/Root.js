import React from 'react';

const { Suspense } = React;

export default function Root(props) {
    return (
        <div className="root">
            <header className="header">
                BC Onboard
            </header>
            <section className="content">
                {/* Wrap the child in a Suspense boundary to allow rendering the 
        layout even if the main content isn't ready */}
                <Suspense fallback={'Loading...'}>{props.children}</Suspense>
            </section>
        </div>
    );
}