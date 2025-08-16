
export default function ExampleComponent({ name, children }) {
    return (
        <div className="ExampleComponent componentBox">
            <h1>Hello {name}, {children}</h1>
        </div>
    )
}