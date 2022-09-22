export default function Greeting(props: { names: string[] }) {

    return <div>{props.names.map((name: string) => <div>Hello, {name}</div>)}</div>;
}